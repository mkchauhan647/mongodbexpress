// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/test2', (req, res) => {
//   res.render('index');
res.send("hello i am test2")
});

// Add more routes as needed

module.exports = router;