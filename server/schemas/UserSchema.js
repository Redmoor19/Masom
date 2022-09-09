const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    role: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema, "users");