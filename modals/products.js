const mongoose = require('mongoose');
const { Schema } = mongoose;

  const productShema = new Schema({
    name:  {type: String },
    price: {type: Number },
    description: {type: String },
    isnew: {type: Boolean, default: false },
    productImage: { type: String }
  }, { timestamps: {} });

//   console.log(productShema.path('name').instance); // 'String'

//simple schema without schema object
// const productShema = {name: String, price: Number, description: String}

module.exports = mongoose.model('products', productShema);