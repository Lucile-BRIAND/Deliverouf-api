const mongoose = require('mongoose')

const Commande = mongoose.model('Commande', {
    restaurant: {
        type: String,
    },
    prixCommande: {
        type: Number,
    },
    frais: {
        type: Number,
    },
    prixTot: {
        type: Number,
    },
    produits: {
        type: String,
    },
    numCommande: {
        type: Number,
    }
})

module.exports = { Commande }