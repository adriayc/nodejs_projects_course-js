const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

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
    throw new CustomAPIError('Please provide email and password', 400);
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
  // Headers
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 401);
  }

  // Token
  const token = authHeader.split(' ')[1];
  // console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);

    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError('Not authorized to access this route', 401);
  }
};

module.exports = {
  login,
  dashboard,
};
