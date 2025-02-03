const sql = require('mssql');
const Product = require('../models/productModel');  // Your model file

// Fetch all products
const getAllProducts = async (req, res) => {
  try {
    // Explicitly querying the database here (optional if done in the model)
    const result = await sql.query('SELECT * FROM productDB.dbo.Products');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching products in controller:', err);
    res.status(500).send('Server error');
  }
};

module.exports = { getAllProducts };
