const express = require('express');
let { people } = require('./data');

const app = express();

// Static assets
app.use(express.static('./methods-public'));
// Parse form data (Middleware to parse URL-encoded data)
app.use(express.urlencoded({ extended: false }));

// GET
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST
app.post('/login', (req, res) => {
  // console.log(req.body);
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send('Please provider credentials');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
