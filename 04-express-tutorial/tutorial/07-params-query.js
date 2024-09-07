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

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
