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

  res.send('Fake Login/Register/Signup Router');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
