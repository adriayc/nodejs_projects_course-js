const express = require('express');
const people = require('./routes/people');
const auth = require('./routes/auth');

const app = express();

// Static assets
app.use(express.static('./methods-public'));
// Parse form data (Middleware to parse URL-encoded data)
app.use(express.urlencoded({ extended: false }));
// Parse json
app.use(express.json());

// USE for routing
app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
