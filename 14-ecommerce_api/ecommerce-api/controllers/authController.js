const { StatusCodes } = require('http-status-codes');
// Models
const User = require('../models/User');
// Errors
const CustomAPIError = require('../errors');

const register = async (req, res) => {
  const { email } = req.body;

  const emailAlreadyExist = await User.findOne({ email });
  if (emailAlreadyExist) {
    throw new CustomAPIError.BadRequestError('Email already exists');
  }

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('Login user');
};

const logout = async (req, res) => {
  res.send('Logout user');
};

module.exports = {
  register,
  login,
  logout,
};
