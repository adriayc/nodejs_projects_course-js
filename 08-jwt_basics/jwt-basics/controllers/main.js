const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

// Check username, password in post(login) request
// If exists create new JWT
// Send back to front-end

// Setup authentication so only the request with JWT can access the dashboard

const login = async (req, res) => {
  const { username, password } = req.body;

  // Mongo validation
  // Joi
  // Check in the controller

  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  // Just for demo, normally provided by DB!!!
  const id = new Date().getDate();

  // Try to keep payload small, better experience for user
  // Just for demo, in production use long, complex and unguessable string value!!!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({ msg: 'User created', token });
};

const dashboard = async (req, res) => {
  // console.log(req.user);

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
