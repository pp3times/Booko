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
  getCustomerById
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