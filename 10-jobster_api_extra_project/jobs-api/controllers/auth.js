const { StatusCodes } = require('http-status-codes');
// Models
const User = require('../models/User');
// Errors
const { BadRequestError, UnAuthenticatedError } = require('../errors');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  // Get token (Instance methods)
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  // Compare password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
      token,
    },
  });
};

const updateUser = async (req, res) => {
  const { name, lastName, email, location } = req.body;
  if (!name || !lastName || !email || !location) {
    throw new BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ _id: req.user.userId });
  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.location = location;

  await user.save();
  // Get token
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
      token,
    },
  });
};

module.exports = {
  register,
  login,
  updateUser,
};
