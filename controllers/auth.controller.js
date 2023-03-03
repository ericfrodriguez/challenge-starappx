const User = require('../models/User');
const bcryptjs = require('bcryptjs');

const controller = {
    register: async (req, res, next) => {
        try {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);

            await User.create(req.body);

            return res.status(200).json({
                success: true
            });
        } catch (err) {
            next(err)
        }


    },
    login: (req, res, next) => {
        return res.json({
            user: req.body
        });
    }
}

module.exports = controller;