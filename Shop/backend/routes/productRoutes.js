const express = require('express');
const router = express.Router();

// Example route
router.get('/products', (req, res) => {
  res.json({ message: 'List of products' });
});

module.exports = router;