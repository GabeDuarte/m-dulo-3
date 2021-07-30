const mongoose  = require('mongoose')

const filmeModel = new mongoose.Schema({
    nome: {type: String, required: true},
    imagem_url: {type: String, required: true},
})

module.exports = filmeModel;