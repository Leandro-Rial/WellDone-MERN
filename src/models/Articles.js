const { Mongoose } = require("mongoose");

const { Schema, model } = require('mongoose');

const articleShema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    }
});

module.exports = model('Articles', articleShema);