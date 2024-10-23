const express = require('express');
// Morgan
const morgan = require('morgan');
// Middlewares
const logger = require('./logger');
const authorize = require('./authorize');

const app = express();

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// USE
// app.use([logger, authorize]);
// app.use(express.static('./public'));
// Logger (Morgan)
app.use(morgan('tiny'));
// app.use(morgan('dev'));

// Call middleware
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  // app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
