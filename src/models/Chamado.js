const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    rotina:{
        type: String,
        required: true
    },
    titulo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    resolvido:{
        type: Boolean,
        default: false
    },
    usuario_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})


module.exports = mongoose.model('Chamado',Schema)