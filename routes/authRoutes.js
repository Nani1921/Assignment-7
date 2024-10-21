const express = require('express');
const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  // Logic for logging in the user
});

// Registration route
router.post('/register', (req, res) => {
  // Logic for registering a new user
});

// Logout route
router.get('/logout', (req, res) => {
  // Logic for logging out the user
  res.redirect('/'); // Redirect to home after logout
});

module.exports = router;
