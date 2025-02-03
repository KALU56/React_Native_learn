const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/productController');  // Import the controller

// Route to get all products
router.get('/', getAllProducts);

module.exports = router;
