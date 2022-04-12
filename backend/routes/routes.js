// import express
import express from 'express'

// routes/router.js
// const bcrypt = require('bcryptjs');
// const uuid = require('uuid');
// const jwt = require('jsonwebtoken');
import db from '../config/db.js'
// const userMiddleware = require('../middleware/users.js');
import userMiddleware from '../middleware/user.js'
// import userMiddleware from "../middleware/users.js";
import bcrypt from 'bcryptjs'
import {v4 as uuid} from 'uuid'
import jwt from 'jsonwebtoken'

// import function from controller
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/Book.js'

// import {
// 	createAdmin,
// } from "../controllers/Admin.js"

// init express router
const router = express.Router()

// Get All Product
router.get('/products', showProducts)

// Get Single Product
router.get('/products/:id', showProductById)

// Create New Product
router.post('/products', createProduct)

// Update Product
router.put('/products/:id', updateProduct)

// Delete Product
router.delete('/products/:id', deleteProduct)

router.post('/sign-up', userMiddleware.validateRegister, (req, res, next) => {
  db.query(
    `SELECT * FROM admin WHERE LOWER(username) = LOWER(${db.escape(
      req.body.username
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'This username is already in use!',
        })
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            })
          } else {
            // has hashed pw => add to database
            db.query(
              `INSERT INTO admin (id, firstname, lastname, username, password, last_login) VALUES ('${uuid()}', ${db.escape(
                req.body.firstname
              )}, ${db.escape(req.body.lastname)}, ${db.escape(
                req.body.username
              )}, ${db.escape(hash)}, now())`,
              (err, result) => {
                if (err) {
                  throw err
                  return res.status(400).send({
                    msg: err,
                  })
                }
                return res.status(201).send({
                  msg: 'Registered!',
                })
              }
            )
          }
        })
      }
    }
  )
})
// routes/router.js

router.post('/login', (req, res, next) => {
  db.query(
    `SELECT * FROM admin WHERE username = ${db.escape(req.body.username)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err
        return res.status(400).send({
          msg: err,
        })
      }

      if (!result.length) {
        return res.status(401).send({
          msg: 'Username or password is incorrect!',
        })
      }

      // check password
      bcrypt.compare(
        req.body.password,
        result[0]['password'],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr
            return res.status(401).send({
              msg: 'Username or password is incorrect!',
            })
          }

          if (bResult) {
            const token = jwt.sign(
              {
                username: result[0].username,
                userId: result[0].id,
              },
              'eiei',
              {
                expiresIn: '7d',
              }
            )

            db.query(
              `UPDATE admin SET last_login = now() WHERE id = '${result[0].id}'`
            )
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0],
            })
          }
          return res.status(401).send({
            msg: 'Username or password is incorrect!',
          })
        }
      )
    }
  )
})

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData)
  res.send('This is the secret content. Only logged in users can see that!')
})
// export default router
export default router
