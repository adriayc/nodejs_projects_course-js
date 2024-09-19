const Product = require('../models/product');

// URL: http://localhost:3000/api/v1/products/static?numericFilters=price>20&sort=price
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 30 } })
    .sort('price')
    .select('name price');
  res.status(200).json({ products, nbHits: products.length });
};

// URL: http://localhost:3000/api/v1/products?numericFilters=price>40,rating>=4
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
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

  if (numericFilters) {
    // console.log(numericFilters);
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    console.log(filters);
  }

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

  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
