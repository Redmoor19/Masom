const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    title: String,
    price: String
});

module.exports = mongoose.model('Product', ProductSchema, "products");