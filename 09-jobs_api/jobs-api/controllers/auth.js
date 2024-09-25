const { StatusCodes } = require('http-status-codes');
// Models
const User = require('../models/User');
// Errors
const { BadRequestError } = require('../errors');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  // Get token (Instance methods)
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send('Register user');
};

module.exports = {
  register,
  login,
};
