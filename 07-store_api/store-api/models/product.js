const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Product name must be provided'],
  },
  price: {
    type: Number,
    require: [true, 'Product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  company: {
    type: String,
    // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Product', productSchema);
