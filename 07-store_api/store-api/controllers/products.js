const Product = require('../models/product');

// URL: http://localhost:3000/api/v1/products/static?sort=-name,price
const getAllProductsStatic = async (req, res) => {
  // Sort Order
  // const products = await Product.find({}).sort('name'); // Asc
  const products = await Product.find({}).sort('-name price'); // Desc
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  // console.log(queryObject);

  let result = Product.find(queryObject);
  // Sort
  if (sort) {
    const sortList = sort.split(',').join(' ');
    // console.log(sortList);
    result = result.sort(sortList);
  } else {
    result = result.sort('createAt');
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
