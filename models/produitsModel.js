const mongoose = require('mongoose')

const Produits = mongoose.model('Produits', {
    restaurant: {
        type: String,
    },
    prix: {
        type: Number,
    },
    nom: {
        type: String,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
})

module.exports = { Produits }