const express = require('express');
let { people } = require('./data');

const app = express();

// Static assets
app.use(express.static('./methods-public'));
// Parse form data (Middleware to parse URL-encoded data)
app.use(express.urlencoded({ extended: false }));
// Parse json
app.use(express.json());

// GET
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST
app.post('/api/people', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide name value' });
  }
  // res.status(201).send('Success');
  res.status(201).json({ success: true, person: name });
});

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide name value' });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

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
