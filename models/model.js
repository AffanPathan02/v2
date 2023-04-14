const mongoose = require('mongoose');

const ideasSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    socials: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Ideas', ideasSchema)