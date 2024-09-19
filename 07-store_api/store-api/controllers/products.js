const Product = require('../models/product');

// URL: http://localhost:3000/api/v1/products/static?fields=name,price
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).select('name price');
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
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

  // Select
  if (fields) {
    filedList = fields.split(',').join(' ');
    result = result.select(filedList);
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
