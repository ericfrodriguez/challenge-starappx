const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        confirmPassword: { type: String, required: true },
        mail: { type: String, required: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
        username: { type: String, required: true }
    },{
        timestamps: true
    }
)

const User = mongoose.model('users',schema);

module.exports = User;