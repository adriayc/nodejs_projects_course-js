const express = require('express');
const { products } = require('./data');

const app = express();

// Params and Query String
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

// Params - '/products'
// URL: http://localhost:5000/api/products
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  // res.json(products);
  res.json(newProducts);
});

// URL: http://localhost:5000/api/products/1
app.get('/api/products/:productId', (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct) {
    return res.status(404).send('Product does not exists');
  }

  return res.json(singleProduct);
});

// URL: http://localhost:5000/api/products/1/reviews/2
app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
  console.log(req.params);

  res.send('Hello world');
});

// Query string
// URL: http://localhost:5000/api/v1/query?search=a&limit=2
app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send('No products matched your search');
    return res.status(200).json({ success: true, data: [] });
  }

  // res.send('Hello world');
  res.status(200).json(sortedProducts);
  // return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
