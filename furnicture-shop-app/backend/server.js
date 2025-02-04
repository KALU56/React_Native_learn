const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db');
 // Import db.js to establish DB connection
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 5009;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
