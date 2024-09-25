const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
// Models
const User = require('../models/User');
// Errors
const { BadRequestError } = require('../errors');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  // Generate token
  const token = jwt.sign({ userId: user._id, name: user.name }, 'jwtSecret', {
    expiresIn: '30d',
  });
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send('Register user');
};

module.exports = {
  register,
  login,
};
