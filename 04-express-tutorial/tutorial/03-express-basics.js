const express = require('express');
// const app = require('express')();

const app = express();

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// Get
app.get('/', (req, res) => {
  console.log('USer hit the resource');

  res.send('Home page');
});

// Get
app.get('/about', (req, res) => {
  res.send('About page');
});

// All (Not found)
app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

// Listen port
app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
