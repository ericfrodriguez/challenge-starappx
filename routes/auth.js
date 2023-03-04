const express = require('express');
const router = express.Router();

const {register, login} = require('../controllers/auth.controller');

const {accountExistsLogin, passwordMatch} = require('../middlewares/auth.middleware');


router.post('/register', register);

router.post('/login', accountExistsLogin, passwordMatch, login);

module.exports = router;
