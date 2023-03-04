const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const usersRouter = require('./users');

router.get('/', (req, res) => {
  return res.send('Server running');
})

router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;
