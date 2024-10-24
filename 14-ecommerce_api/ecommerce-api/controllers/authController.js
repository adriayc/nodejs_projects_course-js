const { StatusCodes } = require('http-status-codes');
// Models
const User = require('../models/User');
// Errors
const CustomAPIError = require('../errors');
// Utils
const { attachCookiesToResponse, createTokenUser } = require('../utils');

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

  // Custom user object
  const tokenUser = createTokenUser(user);

  // Attach cookie y create JWT
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomAPIError.BadRequestError(
      'Please provide email and password'
    );
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomAPIError.UnauthenticatedError('Invalid credentials');
  }
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new CustomAPIError.UnauthenticatedError('Invalid credentials');
  }

  // Custom user object
  const tokenUser = createTokenUser(user);

  // Attach cookie y create JWT
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    // expire: new Date(Date.now() + 5 * 1000), // 5 * 1000 = 5s
    // Set the expires to current date (Remove the cookie )
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ msg: 'User logged out!' });
};

module.exports = {
  register,
  login,
  logout,
};
