const mongoose = require('mongoose')

const Restaurant = mongoose.model('Restaurant', {
    ville: {
        type: String,
    },
    adresse: {
        type: String,
    },
    nom: {
        type: String,
    },
    filtre: {
        type: String,
    },
    img: {
        type: String,
    }
})

module.exports = { Restaurant }