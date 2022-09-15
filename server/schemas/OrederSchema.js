const mongoose = require('mongoose');
const {Schema} = mongoose;

const Order = new Schema({
    email: String,
    dishWasher: Number,
    floorCleaner: Number,
    disinfectant: Number,
    glassCleaner: Number
})

module.exports = mongoose.model('Order', Order, 'orders')