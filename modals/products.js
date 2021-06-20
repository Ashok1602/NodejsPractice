const mongoose = require('mongoose');
const { Schema } = mongoose;

  const productShema = new Schema({
    name:  String,
    price: Number,
    description: String,
    isnew: {type: Boolean, default: false }
  }, { timestamps: {} });

//   console.log(productShema.path('name').instance); // 'String'

//simple schema without schema object
// const productShema = {name: String, price: Number, description: String}

module.exports = mongoose.model('products', productShema);