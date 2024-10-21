const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  // Logic to fetch and display all products
  res.render('index'); // Assuming index.pug shows product listings
});

// Get a single product by ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  // Logic to fetch product details by ID
  res.render('product', { productId }); // Render product.pug with product details
});

module.exports = router;
