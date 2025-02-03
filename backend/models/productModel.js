const sql = require('mssql');
const config = require('../config/dbConfig'); // Path to your config file

class Product {
  static async getAll() {
    try {
      await sql.connect(config);
      // Explicitly specifying the database and schema in the query
      const result = await sql.query('SELECT * FROM productDB.dbo.Products');
      return result.recordset;
    } catch (err) {
      console.error('Error fetching products from model:', err);
      throw err;
    }
  }
}

module.exports = Product;
