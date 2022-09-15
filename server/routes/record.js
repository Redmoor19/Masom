const express = require('express');
const router = express.Router();
const Product = require('../schemas/ProductSchema.js');
const User = require('../schemas/UserSchema.js');
const Order = require('../schemas/OrederSchema.js');
const {generateToken, authenticateToken} = require('../middleware/auth.js');

router.post('/authUser', async (req, res) => {
    try {
        const isAdmin = await User.findOne({role: req.body.name});
        if (isAdmin && isAdmin.password == req.body.password) {
            const token = generateToken({username: req.body.name});
            res.status(200).json(token);
        } else {
            res.status(401).json('You are not an admin');
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error){
        res.status(404).json({message: error.message});
    }
});

router.post('/createProduct', authenticateToken, async (req, res) => {
    const product = new Product(req.body);

    try {
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete('/deleteProduct', async (req, res) => {
    try {
        await Product.deleteOne({_id: req.body._id});
        res.status(200).json('Item deleted');
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.post('/createOrder', async (req, res) => {
    const order = new Order(req.body);

    try {
        await order.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

module.exports = router;