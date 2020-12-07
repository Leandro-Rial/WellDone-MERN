const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server working on port: ${PORT}`)
})


// Middelware
app.use(cors());
app.use(express.json());


// Mongoose
const Connected_URI = process.env.CONNECTING_URI;

mongoose.connect(Connected_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database Connected')
})


// Routes
app.use('/api/products', require('./routes/articles'));