const { StatusCodes } = require('http-status-codes');
// Models
const User = require('../models/User');
// Errors
const CustomError = require('../errors');
// Utils
const { attachCookiesToResponse, createTokenUser } = require('../utils');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Verify that a user with the email does not exists
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exits');
  }

  // First registered user is 'admin'
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  // Create user
  const user = await User.create({ name, email, password, role });

  // Custom user
  const tokenUser = createTokenUser(user);
  // Attach cookie and Token
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate user or password
  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password');
  }

  // Validate user
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid credentials');
  }

  // Validate password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid credentials');
  }

  // Custom user
  const tokenUser = createTokenUser(user);
  // Attach cookie and Token
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logout = (req, res) => {
  res.cookie('token', 'logout', {
    // Set the expires to current date (Remove the cookie )
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(StatusCodes.OK).json({ msg: 'User logged out!' });
};

module.exports = {
  register,
  login,
  logout,
};
