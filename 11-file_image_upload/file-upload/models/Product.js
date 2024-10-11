const { METHOD_FAILURE } = require('http-status-codes');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
