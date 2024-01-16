// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/test1', (req, res) => {
  res.render('index');
});

// Add more routes as needed

module.exports = router;