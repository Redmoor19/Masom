require('dotenv').config();
const express = require('express');
const db = require('./db/conn.js');
const routes = require('./routes/record.js');
const cors = require('cors');

db.on('error', (error) => {
    console.log(error)
});

db.once('connected', () => {
    console.log('Database Connected');
});

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', routes);


app.listen(4000, () => {
    console.log(`Server Started at ${4000}`);
})