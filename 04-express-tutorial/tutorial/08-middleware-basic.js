const express = require('express');

const app = express();

// req => middleware => res

// Middleware function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // res.send('Testing');
  next(); // Next middleware
};

// Call middleware
app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('About');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
