const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'kalkidan',
  server: 'localhost',  // Make sure this is a valid string
  database: 'productDB',  // Or your database name
  options: {
    encrypt: true,  // Use encryption if necessary
    trustServerCertificate: true // Change this based on your environment
  }
};

sql.connect(config)
  .then(() => {
    // Connection established
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });
