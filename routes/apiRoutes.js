const express = require('express');
const router = express.Router();

// Example API route
router.get('/products', (req, res) => {
  // Logic to return products in JSON format
  res.json({ message: "List of products" });
});

module.exports = router;
