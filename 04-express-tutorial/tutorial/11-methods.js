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

// PUT
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name);

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
