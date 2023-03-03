const controller = {
    register: (req, res, next) => {
        return res.json({
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