const { defaultResponse } = require('../utils/response');

const controller = {
    getProfile: async (req, res, next) => {
        try {
            const {name, mail, username} = req.user;

            req.body.success = true;
            req.body.sc = 201;
            req.body.data = {
                user: {
                    name,
                    mail,
                    username
                }
            };
            
            return defaultResponse(req, res);
        } catch(err) {
            next(err)
        }
    }
}

module.exports = controller;