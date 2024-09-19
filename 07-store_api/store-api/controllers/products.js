const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  // throw new Error('Testing async errors');
  const products = await Product.find({
    // featured: true,
    name: 'vase table',
  });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'Products router' });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
