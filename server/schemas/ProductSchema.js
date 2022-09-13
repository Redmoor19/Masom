const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    title: String,
    price: String,
    description: String,
    base64: String,
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema, "products");