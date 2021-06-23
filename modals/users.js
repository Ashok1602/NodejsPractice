const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
/**
 * User Schema
 */
 var UserSchema = new Schema({
    fullName: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }, {timestamps: true});

  module.exports = mongoose.model('Users', UserSchema);