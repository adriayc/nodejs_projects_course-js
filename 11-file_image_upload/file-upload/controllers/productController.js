const { StatusCodes } = require('http-status-codes');
// Model
const Product = require('../models/Product');

// Create product
const createProduct = async (req, res) => {
  res.send('Create product');
};
// Get all products
const getAllProducts = async (req, res) => {
  res.send('Get list of products');
};

module.exports = {
  createProduct,
  getAllProducts,
};
