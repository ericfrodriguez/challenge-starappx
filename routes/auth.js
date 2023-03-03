var express = require('express');
var router = express.Router();


router.post('/register', (req, res, next) => {
  return res.json({
    user: req.body
  });
});

router.post('/login', (req, res, next) => {
  return res.json({
    user: req.body
  });
});

module.exports = router;
