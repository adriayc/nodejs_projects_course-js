const express = require('express');
const { products } = require('./data');

const app = express();

// Sends a JSON response
app.get('/', (req, res) => {
  // res.json([{ name: 'adrian' }, { name: 'susan' }]);
  res.json(products);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
