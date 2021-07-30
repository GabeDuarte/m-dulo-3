const mongoose = require('mongoose');

const Filmes2 = new mongoose.Schema({
    nome:{type: String,
    required: true,
    },
    imagem_url:{type: String,
        required: true,
    },
    created_at:{
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model('filme', Filmes2);