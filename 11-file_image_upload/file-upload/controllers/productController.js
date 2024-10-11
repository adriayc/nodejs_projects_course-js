const { StatusCodes } = require('http-status-codes');
// Model
const Product = require('../models/Product');

// Create product
const createProduct = async (req, res) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};
// Get all products
const getAllProducts = async (req, res) => {
  res.send('Get list of products');
};

module.exports = {
  createProduct,
  getAllProducts,
};
