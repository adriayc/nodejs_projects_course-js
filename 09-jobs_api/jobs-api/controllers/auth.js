const { StatusCodes } = require('http-status-codes');
// Models
const User = require('../models/User');
// Errors
const { BadRequestError, UnAuthenticatedError } = require('../errors');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  // Get token (Instance methods)
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }
  const user = await User.findOne({ email });
  // Compare password
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
