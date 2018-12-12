const mongoose = require('mongoose');
const Schema = mongoose.Schema
const module = require('validator');
const bcrypt = require('bcryptjs')

const User = new Schema({

  password: {
    type: String,
    select: false
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },

  todos: [{
    type: Schema.Types.ObjectId,
    ref: "Todo"
  }]
});

module.exports = {User}
