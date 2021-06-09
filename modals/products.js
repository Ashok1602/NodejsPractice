const mongoose = require('mongoose');

const productShema = {name: String, price: Number, description: String}

module.exports = mongoose.model('products', productShema);