const { StatusCodes } = require('http-status-codes');
// Models
const User = require('../models/User');
// Errors
const CustomError = require('../errors');
const checkPermissions = require('../utils/checkPermissions');
const { attachCookiesToResponse, createTokenUser } = require('../utils');

const getAllUsers = async (req, res) => {
  // Select all users without the password field
  const users = await User.find({}).select('-password');

  res.status(StatusCodes.OK).json({ users });
};

const getSingleUser = async (req, res) => {
  const { id: userId } = req.params;

  const user = await User.findOne({ _id: userId }).select('-password');
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${userId}`);
  }

  // Check permissions
  checkPermissions(req.user, user._id);

  res.status(StatusCodes.OK).json({ user });
};

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

// Update user with user.save()
const updateUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    throw new CustomError.BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ _id: req.user.userId });

  // Update attributes
  user.name = name;
  user.email = email;

  await user.save();

  // Custom user
  const tokenUser = createTokenUser(user);
  // Attach cookie and Token
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

// Update user with findOneAndUpdate()
// const updateUser = async (req, res) => {
//   const { id: userId } = req.params;
//   const { name, email } = req.body;

//   if (!email || !password) {
//     throw new CustomError.BadRequestError('Please provide all values');
//   }

//   const user = await User.findOneAndUpdate(
//     { _id: userId },
//     // Data
//     { name, email },
//     // Options
//     {
//       new: true,
//       runValidators: true,
//     }
//   );

//   // Custom user
//   const tokenUser = createTokenUser(user);
//   // Attach cookie and Token
//   attachCookiesToResponse({ res, user: tokenUser });

//   res.status(StatusCodes.OK).json({ user: tokenUser });
// };

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError('Please provide both values');
  }

  const user = await User.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid credentials');
  }

  // Update attribute
  user.password = newPassword;

  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Success! Password updated.' });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
