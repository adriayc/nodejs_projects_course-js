const express = require('express');
// Middlewares
const logger = require('./logger');
const authorize = require('./authorize');

const app = express();

// req => middleware => res

// USE
// app.use(logger); // Use middleware for all endpoints
// app.use('/api', logger); // use middleware for all endpoints stating with '/api'
app.use([logger, authorize]); // Use multiple middleware
// app.use([authorize, logger]); // Use multiple middleware (Changing the order of middleware)

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
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
