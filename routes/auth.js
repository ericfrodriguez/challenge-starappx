const express = require('express');
const router = express.Router();

const {register, login} = require('../controllers/auth.controller');

const {accountExistsLogin} = require('../middlewares/auth.middleware');


router.post('/register', register);

router.post('/login', accountExistsLogin, login);

module.exports = router;
