const User = require('../models/User');

const controller = {
    register: async (req, res, next) => {

        const user = await User.create(req.body);

        return res.status(200).json({
            user: req.body
        });
    },
    login: (req, res, next) => {
        return res.json({
            user: req.body
        });
    }
}

module.exports = controller;