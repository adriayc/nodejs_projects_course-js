const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
// Models
const User = require('../models/User');
// Errors
const CustomAPIError = require('../errors');
// Utils
const { createJWT } = require('../utils');

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

  // Token
  const tokenUser = { userId: user._id, name: user.name, role: user.role };
  const token = createJWT({ payload: tokenUser });

  res.status(StatusCodes.CREATED).json({ user: tokenUser });
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
