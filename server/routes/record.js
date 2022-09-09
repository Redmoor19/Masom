const express = require('express');
const router = express.Router();
const Product = require('../schemas/ProductSchema.js');
const User = require('../schemas/UserSchema.js');
const {generateToken, authenticateToken} = require('../middleware/auth.js');

router.post('/authUser', async (req, res) => {
    const isAdmin = await User.findOne({role: req.body.name});
    if (isAdmin && isAdmin.password == req.body.password) {
        const token = generateToken({username: req.body.name});
        res.status(200).json(token);
    } else {
        res.status(400).json('You are not an admin');
    }
});

module.exports = router;