const mongoose = require('mongoose');

const Pais    =   mongoose.model('Pais',{

    nome:{
        type: String,
        required: true
    },

    cpf:{
        type: String,
        required: true,
        maxLength:11,
        minLength:11
    },

    end_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Endereco'
    },

    email:{
        type: String,
        required: true
    },

    senha:{
        type: String,
        required: true
    },

    escola_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Escola'
    },

})

module.exports = Pais;