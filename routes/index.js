const express = require('express');
const router = express.Router();

const authRouter = require('./auth');

router.get('/', (req, res) => {
  return res.send('Server running');
})

router.use('/auth', authRouter);

module.exports = router;
