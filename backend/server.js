const express = require('express');
const app = express();
const productRoutes = require('./routes/products');

app.use('/api/products', productRoutes); // Mount the route at /api/products

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const cors = require('cors');
app.use(cors());  // Allow all origins to access your API
