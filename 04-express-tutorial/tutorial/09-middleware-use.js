const express = require('express');
// Middlewares
const logger = require('./logger');

const app = express();

// req => middleware => res

// USE
app.use(logger); // Use middleware for all endpoints
// app.use('/api', logger); // use middleware for all endpoints stating with '/api'

// Call middleware
app.get('/', (req, res) => {
  res.send('Home');
});

// app.use(logger); // Use middleware for all endpoints after this line of code

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
