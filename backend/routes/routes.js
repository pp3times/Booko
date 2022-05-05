// import express
import express from "express";
import db from "../config/db.js";
import userMiddleware from "../middleware/user.js";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
// import function from controller
import {
  showBook,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  showCategories,
  createBank,
  createCategory,
  showCategoryById,
  updateCategory,
  deleteCategory,
  showBookByCategory,
  showBookById,
  updateBook,
  deleteBook,
} from "../controllers/Book.js";

import multer from "multer";
import path from "path";
import axios from "axios";
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/images");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
// init express router
const router = express.Router();

// Get All Product
router.get("/books", showBook);

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

router.post("/categories", createCategory);

// Get All Category
router.get("/categories", showCategories);

// Get Single Category
router.get("/categories/:id", showCategoryById);

// Update Category
router.put("/categories/:id", updateCategory);

// Delete Category
router.delete("/categories/:id", deleteCategory);

// Get Book by Category
router.get("/categories/:id", showBookByCategory);

// create Book
// router.post('/books/create', upload.single('myImage'), async function(req, res, next){
//   console.log(req.body)
//   const bookname = req.body.bookname
//   const description = req.body.description
//   const page = req.body.page
//   const price = req.body.price
//   const stock = req.body.stock
//   const author = req.body.author
//   const publisher = req.body.publisher
//   const selected_category = req.body.selected_category
//   const isbn = req.body.isbn
//   const file = req.file
//   // const file_path = req.file.path

//   // const [rows, columns] = await db.query('INSERT INTO tb_book(book_name, book_description, book_page, book_price, book_stock, book_coversrc, book_author, book_publisher, category_id, book_isbn, book_createAt, book_editAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP', [bookname, description, page, price, stock, file.path, author, publisher, selected_category, isbn])
//   await axios.post("http://localhost:4000/api/books/create", {
//           book_name : bookname,
//           book_description: description,
//           book_page : page,
//           book_price : price,
//           book_stock : stock,
//           book_author : author,
//           book_publisher : publisher,
//           category_id : selected_category ,
//           book_isbn : isbn
//         });
// });

router.post("/books", upload.single("myImage"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
  } else {
    console.log(req.file.filename);
    var imgsrc = "http://localhost:4000/images/" + req.file.filename;
    var insertData =
      "INSERT INTO tb_book(book_name, book_description, book_page, book_price, book_stock, book_coversrc, book_author, book_publisher, category_id, book_isbn, book_createAt, book_editAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";
    db.query(
      insertData,
      [
        req.body.bookname,
        req.body.description,
        req.body.page,
        req.body.price,
        req.body.stock,
        imgsrc,
        req.body.author,
        req.body.publisher,
        req.body.selected_category,
        req.body.isbn,
      ],
      (err, result) => {
        if (err) throw err;
        console.log("file uploaded");
      }
    );
  }
});

// Get All Book
router.get("/books", showBook);

// Get Single Book
router.get("/books/:id", showBookById);

// router.put('/books/:id', upload.single('myImage'), updateBook);
router.put(
  "/books/:id",
  upload.single("myImage"),
  async function (req, res, next) {
    console.log(req.body.book_name);
    if (!req.file) {
      console.log(req.body);
      console.log("No file upload");
    } else {
      console.log(req.file.filename);
      console.log("else");
      var imgsrc = "http://localhost:4000/images/" + req.file.filename;
      db.query(
        "UPDATE tb_book SET book_name = ?, book_description = ?, book_page = ?, book_price = ?, book_stock = ?, book_coversrc = ?, book_author = ?, book_publisher = ?, category_id = ?, book_isbn = ? WHERE book_id = ?",
        [
          req.body.book_name,
          req.body.book_description,
          req.body.book_page,
          req.body.book_price,
          req.body.book_stock,
          imgsrc,
          req.body.book_author,
          req.body.book_publisher,
          req.body.category_id,
          req.body.book_isbn,
          req.params.id,
        ],
        (err, result) => {
          if (err) throw err;
          console.log("file uploaded");
        }
      );
    }
  }
);

// Delete Category
router.delete("/books/:id", deleteBook);

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

router.get("/bank", (req, res, next) => {
  db.query(`SELECT * FROM tb_bank`, (err, result) => {
    if (err) {
      throw err;
      return res.status(400).send({
        msg: err,
      });
    }
    return res.status(200).send({
      msg: "Get Bank Success!",
      result,
    });
  });
});

router.get("/address", (req, res, next) => {
  db.query(`SELECT * FROM tb_address`, (err, result) => {
    if (err) {
      throw err;
      return res.status(400).send({
        msg: err,
      });
    }
    return res.status(200).send({
      msg: "Get Address Success!",
      result,
    });
  });
});

router.post("/address/add", (req, res, next) => {
  db.query(
    `INSERT INTO tb_address (address_title, address_number, address_road, address_district, address_subdistrict, address_zipcode, address_phone, customer_id, address_province, address_createAt, address_editAt) VALUES (${db.escape(
      req.body.address_title
    )},${db.escape(req.body.address_number)},  ${db.escape(
      req.body.address_road
    )}, ${db.escape(req.body.address_district)}, ${db.escape(
      req.body.address_subdistrict
    )}, ${db.escape(req.body.address_zipcode)}, ${db.escape(
      req.body.address_phone
    )}, ${db.escape(req.body.customer_id)}, ${db.escape(
      req.body.address_province
    )}, now(), now());`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      return res.status(200).send({
        msg: "Add Address Success!",
        result,
      });
    }
  );
});

router.post("/checkout", (req, res, next) => {
  db.query(
    `INSERT INTO tb_order (order_customer_id, order_price, order_quantity, order_address_id, order_status, order_createAt) VALUES (${db.escape(
      req.body.order_customer_id
    )}, ${db.escape(req.body.order_price)}, ${db.escape(
      req.body.order_quantity
    )}, ${db.escape(req.body.order_address_id)}, 'pendingpayment', now());`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      db.query(
        `INSERT INTO tb_order_items (order_items_order_id, order_items_book_id, order_items_quantity_per_book, order_items_totalprice_per_book) VALUES (${db.escape(
          result.insertId
        )}, ${db.escape(req.body.order_items_book_id)}, ${db.escape(
          req.body.order_items_quantity_per_book
        )}, ${db.escape(req.body.order_items_totalprice_per_book)});`,
        (err, result) => {
          if (err) {
            throw err;
            return res.status(400).send({
              msg: err,
            });
          }
          db.query(
            `INSERT INTO tb_invoice (invoice_order_id, invoice_customer_id, invoice_status, invoice_firstname, invoice_lastname, invoice_phone, invoice_address, invoice_bank_id) VALUES (
			${db.escape(req.body.invoice_order_id)},
			${db.escape(req.body.invoice_customer_id)},
			'reserved',
			${db.escape(req.body.invoice_firstname)},
			${db.escape(req.body.invoice_lastname)},
			${db.escape(req.body.invoice_phone)},
			${db.escape(req.body.invoice_address)},
			${db.escape(req.body.invoice_bank_id)}
		);`,
            (err, result) => {
              if (err) {
                throw err;
                return res.status(400).send({
                  msg: err,
                });
              }
              return res.status(200).send({
                msg: "Add Invoice Success!",
                result,
              });
            }
          );
        }
      );
    }
  );
});

// create order
router.post("/order/add", (req, res, next) => {
  db.query(
    `INSERT INTO tb_order (order_customer_id, order_price, order_quantity, order_address_id, order_status, order_createAt) VALUES (${db.escape(
      req.body.order_customer_id
    )}, ${db.escape(req.body.order_price)}, ${db.escape(
      req.body.order_quantity
    )}, ${db.escape(req.body.order_address_id)}, 'pendingpayment', now());`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      return res.status(200).send({
        msg: "Add Order Success!",
        result,
      });
    }
  );
});

router.post("/book/update", (req, res, next) => {
  // update quantity
  db.query(
    `UPDATE tb_book SET book_stock = ${db.escape(
      req.body.book_stock
    )}, book_editAt= now() WHERE book_id= ${db.escape(req.body.book_id)};`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      console.log(result);
      return res.status(200).send({
        msg: "Update Book Success!",
        result,
      });
    }
  );
});

// create order item
router.post("/orderitem/add", (req, res, next) => {
  db.query(
    `INSERT INTO tb_order_items (order_items_order_id, order_items_book_id, order_items_quantity_per_book, order_items_totalprice_per_book) VALUES (${db.escape(
      req.body.order_items_order_id
    )}, ${db.escape(req.body.order_items_book_id)}, ${db.escape(
      req.body.order_items_quantity_per_book
    )}, ${db.escape(req.body.order_items_totalprice_per_book)});`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      return res.status(200).send({
        msg: "Add Order Item Success!",
        result,
      });
    }
  );
});

// create invoice
router.post("/invoice/add", (req, res, next) => {
  db.query(
    `INSERT INTO tb_invoice (invoice_order_id, invoice_customer_id, invoice_status, invoice_firstname, invoice_lastname, invoice_phone, invoice_address, invoice_bank_id, invoice_createAt, invoice_lastedit) VALUES (
			${db.escape(req.body.invoice_order_id)},
			${db.escape(req.body.invoice_customer_id)},
			'reserved',
			${db.escape(req.body.invoice_firstname)},
			${db.escape(req.body.invoice_lastname)},
			${db.escape(req.body.invoice_phone)},
			${db.escape(req.body.invoice_address)},
			${db.escape(req.body.invoice_bank_id)},
			now(),
			now()
		);`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      return res.status(200).send({
        msg: "Add Invoice Success!",
        result,
      });
    }
  );
});

// export default router
export default router;
