const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: [true, 'Please provide name'],
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
    required: [true, 'Please provide email'],
  },
  password: {
    type: String,
    minLength: 6,
    required: [true, 'Please provide password'],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

module.exports = mongoose.model('User', UserSchema);
