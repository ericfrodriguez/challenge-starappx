const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        confirmPassword: { type: String, require: true },
        mail: { type: String, require: true },
        name: { type: String, require: true },
        password: { type: String, require: true },
        username: { type: String, require: true }
    },{
        timestamps: true
    }
)

const User = mongoose.model('users',schema);

module.exports = User;