const mongoose = require('mongoose');
const { DB } = require('../configs/db');
const User = require('./User');

mongoose.connect(DB)
.catch(err => {
    console.log(`Connect failed ${err.message}`);
});

module.exports = {
    User
}