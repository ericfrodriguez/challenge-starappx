const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const {defaultResponse} = require('../utils/response');

const controller = {
    register: async (req, res, next) => {
        try {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
            req.body.confirmPassword = bcryptjs.hashSync(req.body.confirmPassword, 10);

            await User.create(req.body);

            req.body.success = true;
            req.body.sc = 201;
            req.body.data = 'User registered';
            
            return defaultResponse(req, res);
        } catch (err) {
            next(err)
        }


    },
    login: (req, res, next) => {

        try {
            console.log(req.user)
            req.body.success = true;
            req.body.sc = 200;
            req.body.data = {
                message: 'User logged',
                user: {
                    mail: req.user.mail,
                    name: req.user.name,
                    username: req.user.username
                }
            };

            return defaultResponse(req, res);
        } catch(err) {
            next(err)
        }

    }
}

module.exports = controller;