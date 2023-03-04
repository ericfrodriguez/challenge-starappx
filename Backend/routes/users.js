const express = require('express');
const router = express.Router();
const passport = require('../middlewares/passport');

const { getProfile } = require('../controllers/users.controller');


router.get('/me', passport.authenticate('jwt', { session: false }), getProfile);

module.exports = router;
