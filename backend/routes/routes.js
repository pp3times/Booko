// import express
import express from "express";
import db from "../config/db.js";
import userMiddleware from "../middleware/user.js";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
// import function from controller
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  showCategories,
} from "../controllers/Book.js";

// init express router
const router = express.Router();

// Get All Product
router.get("/products", showProducts);

// Get All Categories
router.get("/categories", showCategories);

// Get Single Product
router.get("/products/:id", showProductById);

// Create New Product
router.post("/products", createProduct);

// Update Product
router.put("/products/:id", updateProduct);

// Delete Product
router.delete("/products/:id", deleteProduct);

router.post("/sign-up", userMiddleware.validateRegister, (req, res, next) => {
  db.query(
    `SELECT * FROM tb_customer WHERE customer_mail = ${db.escape(
      req.body.mail
    )};`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: "This email is already in use!",
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            // has hashed pw => add to database
            db.query(
              `INSERT INTO tb_customer (customer_firstname, customer_lastname, customer_mail, customer_password, customer_phone, customer_createAt, customer_editAt) VALUES (${db.escape(
                req.body.firstname
              )}, ${db.escape(req.body.lastname)}, ${db.escape(
                req.body.mail
              )}, ${db.escape(hash)}, ${db.escape(
                req.body.phone
              )}, now(), now())`,
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err,
                  });
                }
                return res.status(201).send({
                  msg: "Registered!",
                });
              }
            );
          }
        });
      }
    }
  );
});
// routes/router.js

router.post("/login", (req, res, next) => {
  db.query(
    `SELECT * FROM tb_customer WHERE customer_mail = ${db.escape(
      req.body.mail
    )};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }

      if (!result.length) {
        return res.status(401).send({
          msg: "email or password is incorrect!",
        });
      }

      // check password
      bcrypt.compare(
        req.body.password,
        result[0]["customer_password"],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: "Username or password is incorrect!",
            });
          }

          if (bResult) {
            const token = jwt.sign(
              {
                mail: result[0].customer_mail,
                userId: result[0].customer_id,
              },
              "SECRETKEY",
              {
                expiresIn: "7d",
              }
            );

            db.query(
              `UPDATE tb_customer SET customer_editAt = now() WHERE customer_id = '${result[0].customer_id}'`
            );
            return res.status(200).send({
              msg: "Logged in!",
              token,
              user: result[0],
            });
          }
          return res.status(401).send({
            msg: "Username or password is incorrect!",
          });
        }
      );
    }
  );
});

router.get("/secret-route", userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send("This is the secret content. Only logged in users can see that!");
});

// search book by book name
router.get("/search/:bookName", (req, res, next) => {
  db.query(
    `SELECT * FROM tb_book WHERE book_name LIKE '%${req.params.bookName}%'`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      return res.status(200).send({
        msg: "Search Success!",
        result,
      });
    }
  );
});

router.post("/admin", (req, res, next) => {
  db.query(
    `SELECT * FROM tb_admin WHERE admin_email = ${db.escape(req.body.mail)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }

      if (!result.length) {
        return res.status(401).send({
          msg: "email or password is incorrect!",
        });
      }

      // check password
      bcrypt.compare(
        req.body.password,
        result[0]["admin_password"],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: "Username or password is incorrect!",
            });
          }

          if (bResult) {
						console.log(result[0]);
            const token = jwt.sign(
              {
                mail: result[0].admin_email,
                userId: result[0].admin_id,
              },
              "SECRETKEY",
              {
                expiresIn: "7d",
              }
            );

            db.query(
              `UPDATE tb_admin SET admin_editAt = now() WHERE admin_id = '${result[0].admin_id}'`
            );
            return res.status(200).send({
              msg: "Logged in!",
              token,
              user: result[0],
            });
          }
          return res.status(401).send({
            msg: "Username or password is incorrect!",
          });
        }
      );
    }
  );
});
// export default router
export default router;
