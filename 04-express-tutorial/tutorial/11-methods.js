const express = require('express');
let { people } = require('./data');

const app = express();

// Static assets
app.use(express.static('./methods-public'));

// GET
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
