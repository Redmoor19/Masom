const mongoose = require('mongoose');

const mongoString = process.env.ATLAS_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

module.exports = database;