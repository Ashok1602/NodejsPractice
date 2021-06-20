const mongoose = require('mongoose');
const { Schema } = mongoose;

  const tutorialShema = new Schema({
    title:  String,
    description: String,
    published: Boolean
  }, { timestamps: {} });

module.exports = mongoose.model('tutorial', tutorialShema);