const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD routes
router.get('/', productController.getProducts); // Get all products
router.post('/', productController.createProduct); // Create a new product
router.get('/:id', productController.getProductById); // Get a product by ID
router.put('/:id', productController.updateProduct); // Update a product
router.delete('/:id', productController.deleteProduct); // Delete a product

module.exports = router;
