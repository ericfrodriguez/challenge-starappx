const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB)
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))