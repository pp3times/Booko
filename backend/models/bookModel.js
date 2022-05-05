// import connection
import db from "../config/db.js";

// Get All Products
export const getBook = (result) => {
  db.query("SELECT * FROM tb_book", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
// Get all Categories
export const getCategories = (result) => {
	db.query("SELECT * FROM tb_category", (err, results) => {
		if (err) {
			console.log(err);
			result(err, null);
		} else {
			result(null, results);
		}
	});
};

// Get Single Product
export const getProductById = (id, result) => {
  db.query("SELECT * FROM tb_book WHERE book_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// Insert Product to Database
export const insertProduct = (data, result) => {
  db.query("INSERT INTO book SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update Product to Database
export const updateProductById = (data, id, result) => {
  db.query(
    "UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?",
    [data.product_name, data.product_price, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete Product to Database
export const deleteProductById = (id, result) => {
  db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Insert Bank Account to Database
export const insertBank = (data, result) => {
  db.query("INSERT INTO tb_bank SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Add new bookCategory to Database
export const insertCategory = (data, result) => {
  db.query("INSERT INTO tb_category SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};


// Get Single Category
export const getCategoryById = (id, result) => {
  db.query("SELECT * FROM tb_category WHERE category_id = ?", [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results[0]);
      }
  });   
}

// Update Category to Database
export const updateCategoryById = (data, id, result) => {
  db.query(
    "UPDATE tb_category SET category_name = ? WHERE category_id = ?",
    [data.category_name, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete Category to Database
export const deleteCategoryById = (id, result) => {
  db.query("DELETE FROM tb_category WHERE category_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// tb_book



// Get Single book
export const getBookById = (id, result) => {
  db.query("SELECT * FROM tb_book WHERE book_id = ?", [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results[0]);
      }
  });   
}

// Update Category to Database
export const updateBookById = (data, id, result) => {
  db.query(
    "UPDATE tb_book SET book_name = ? book_description = ? book_page = ? book_price = ? book_stock = ? book_coversrc = ? book_author = ? book_publisher = ? category_id = ? WHERE book_id = ?",
    [data.book_name, data.book_description, data.book_page, data.book_price, data.book_stock, data.book_coversrc, data.book_author, data.book_publisher, data.category_id, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete Book to the Database
export const deleteBookById = (id, result) => {
  db.query("DELETE FROM tb_book WHERE book_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// search Book From Database
export const getBookByCategory = (id, result) => {
  db.query("SELECT * FROM tb_book WHERE category_id = ?", [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
};

export const insertCustomer = (data, result) => {
  db.query("INSERT INTO tb_customer SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const updateCustomerById = (data, id, res) => {
  bcrypt.hash(data.customer_password, 10, (err, hash) => {
    if (err) {
      return res.status(500).send({
        msg: err,
      });
    } else {
      // has hashed pw => add to database
      db.query(
        `UPDATE tb_customer SET customer_mail = ?, customer_password = ?,customer_firstname = ?,customer_lastname = ?, customer_phone = ?, customer_editAt = CURRENT_TIMESTAMP WHERE customer_id = ?` , [
          data.customer_mail
        , hash, 
          data.customer_firstname
        , data.customer_lastname, 
          data.customer_phone
        , id],
        (err, result) => {
          // if (err) {
          //   throw err;
          //   return res.status(400).send({
          //     msg: err,
          //   });
          // }
          // return res.status(201).send({
          //   msg: "Edit Succesful",
          // });
        }
      );
    }
  })
}

export const deleteCustomerById = (id, result) => {
  db.query("DELETE FROM tb_customer WHERE customer_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getCustomerById = (id, result) => {
  db.query("SELECT * FROM tb_customer WHERE customer_id = ?", [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results[0]);
      }
  });   
}

export const getAdminById = (id, result) => {
  db.query("SELECT * FROM tb_admin WHERE admin_id = ?", [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results[0]);
      }
  });   
}

export const insertAdmin = (data, result) => {
  db.query("INSERT INTO tb_admin SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const deleteAdminById = (id, result) => {
  db.query("DELETE FROM tb_admin WHERE admin_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const updateAdminById = (data, id, res) => {
  bcrypt.hash(data.admin_password, 10, (err, hash) => {
    if (err) {
      return res.status(500).send({
        msg: err,
      });
    } else {
      // has hashed pw => add to database
      db.query(
        `UPDATE tb_customer SET admin_mail = ?, admin_password = ?,admin_firstname = ?,admin_lastname = ?, admin_editAt = CURRENT_TIMESTAMP WHERE admin_id = ?` , [
          data.admin_mail
        , hash, 
          data.admin_firstname
        , data.admin_lastname, 
        , id],
        (err, result) => {
          // if (err) {
          //   throw err;
          //   return res.status(400).send({
          //     msg: err,
          //   });
          // }
          // return res.status(201).send({
          //   msg: "Edit Succesful",
          // });
        }
      );
    }
  })
};

export const getAddressById = (id, result) => {
  db.query("SELECT * FROM tb_address WHERE address_id = ?", [id], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results[0]);
      }
  });   
};

