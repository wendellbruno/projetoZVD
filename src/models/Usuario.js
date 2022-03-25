const mongoose = require('mongoose')


const Schema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    admin:{
        type: Number,
        default: 0
    }
})


module.exports = mongoose.model('Usuario',Schema)