const { StatusCodes } = require('http-status-codes');
// Models
const User = require('../models/User');
// Errors
const CustomAPIError = require('../errors');

const register = async (req, res) => {
  const { email, name, password } = req.body;

  const emailAlreadyExist = await User.findOne({ email });
  if (emailAlreadyExist) {
    throw new CustomAPIError.BadRequestError('Email already exists');
  }

  // First registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ name, email, password, role });
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
