const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const { defaultResponse } = require('../utils/response');


const accountExistsLogin = async (req, res, next) => {
    const user = await User.findOne({ mail: req.body.mail });

    if (user) {
        req.user = {
            id: user._id,
            mail: user.mail,
            password: user.password,
            confirmPassword: user.confirmPassword,
            username: user.username,
            name: user.name
        }

        return next();
    }

    req.body.success = false;
    req.body.sc = 400;
    req.body.data = 'User doesn\'t exists';

    return defaultResponse(req, res);
}

const passwordMatch = async (req, res, next) => {
    const dbPassword = req.user.password;
    const inputPassword = req.body.password;

    if(bcryptjs.compareSync(inputPassword, dbPassword)) {
        return next();
    }

    req.body.success = false;
    req.body.sc = 400;
    req.body.data = 'Wrong credentials';

    return defaultResponse(req, res);
}


module.exports = {
    accountExistsLogin,
    passwordMatch
}