// Import function from Product Model
import {
  getBook,
  getProductById,
  insertProduct,
  updateProductById,
  deleteProductById,
  getCategories,
  insertBank,
  insertCategory,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
  getBookById,
  deleteBookById,
  updateBookById,
  getBookByCategory,
  updateCustomerById,
  getCustomerById,
  getOrder,
  getCustomer,
  updateOrderCheckById,
  getBank,
  getBankById,
  updateBankById,
  deleteBankById,
  getPayment,
  getPaymentById,
  updatePaymentStatusById,
  deletePaymentById,
  updateInvoiceById,
  updateOrderById,
  getBankByInvoice
} from "../models/bookModel.js";

// Get All Products
export const showBook = (req, res) => {
  getBook((err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get All Categories
export const showCategories = (req, res) => {
  getCategories((err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get Single Product
export const showProductById = (req, res) => {
  getProductById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Create New Product
export const createProduct = (req, res) => {
  const data = req.body;
  insertProduct(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Product
export const updateProduct = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateProductById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Product
export const deleteProduct = (req, res) => {
  const id = req.params.id;
  deleteProductById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Create New Bank
export const createBank = (req, res) => {
  const data = req.body;
  insertBank(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Create New Category
export const createCategory = (req, res) => {
  const data = req.body;
  insertCategory(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


// Get CategoryId
export const showCategoryById = (req, res) => {
  getCategoryById(req.params.id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}

// Update Category
export const updateCategory = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateCategoryById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Category
export const deleteCategory = (req, res) => {
  const id = req.params.id;
  deleteCategoryById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// tb_book


// Get BookId
export const showBookById = (req, res) => {
  getBookById(req.params.id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}

// Update Book
export const updateBook = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateBookById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Book
export const deleteBook = (req, res) => {
  const id = req.params.id;
  deleteBookById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get BookbyCategory
export const showBookByCategory = (req, res) => {
  getBookByCategory(req.params.id, (err, results) => {
      if (err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
}

// Update Customer by Id
export const updateCustomer = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateCustomerById(data, id, res,(err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
      location.reload();
    }
  });
};

// Get Single Customer
export const showCustomerById = (req, res) => {
  getCustomerById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get All Order
export const showOrder = (req, res) => {
  getOrder((err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get All Customer
export const showCustomer = (req, res) => {
  getCustomer((err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Order Check
export const updateOrderCheck = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateOrderCheckById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get All Bank
export const showBank = (req, res) => {
  getBank((err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get Single Bank
export const showBankById = (req, res) => {
  getBankById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Bank
export const updateBank = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateBankById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Bank
export const deleteBank = (req, res) => {
  const id = req.params.id;
  deleteBankById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get All Payment
export const showPayment = (req, res) => {
  getPayment((err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get Single Payment
export const showPaymentById = (req, res) => {
  getPaymentById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Payment Status
export const updatePaymentStatus = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updatePaymentStatusById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Payment
export const deletePayment = (req, res) => {
  const id = req.params.id;
  deletePaymentById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Invoice
export const updateInvoice = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateInvoiceById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Order
export const updateOrder = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateOrderById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showBankByInvoice = (req, res) => {
  getBankByInvoice((err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(results);
    }
  });
};