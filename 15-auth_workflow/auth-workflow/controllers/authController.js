const { StatusCodes } = require('http-status-codes');
const crypto = require('crypto');
// Models
const User = require('../models/User');
const Token = require('../models/Token');
// Errors
const CustomError = require('../errors');
// Utils
const {
  attachCookiesToResponse,
  createTokenUser,
  sendVerificationEmail,
  sendResetPasswordEmail,
  createHash,
} = require('../utils');

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

  // Verification token
  const verificationToken = crypto.randomBytes(40).toString('hex');

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken,
  });

  const origin = 'http://localhost:3000';
  // const newOrigin = 'https://xxxx.netlify.app'; // Prod

  // Back-end
  // const tempOrigin = req.get('origin'); // http://localhost:5000
  // console.log(tempOrigin);
  // const host = req.get('host'); //localhost:5000
  // const protocol = req.protocol; // http
  // console.log(`Host: ${host}`);
  // console.log(`Protocol: ${protocol}`);

  // Front-end
  // const forwardedHost = req.get('x-forwarded-host'); // localhost:5000
  // const forwardedProtocol = req.get('x-forwarded-proto'); // http
  // console.log(`Forwarded Host: ${forwardedHost}`);
  // console.log(`Forwarded Protocol: ${forwardedProtocol}`);

  // Send email
  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });

  // Send verification token back only while testing in postman
  res.status(StatusCodes.CREATED).json({
    msg: 'Success! Please check your email to verify account',
  });
};

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;

  // Validate user
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.UnauthenticatedError('Verification failed');
  }

  // Validate verification token
  if (user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError('Verification failed');
  }

  // Update attributes
  user.isVerified = true;
  user.verified = Date.now();
  user.verificationToken = '';

  await user.save();

  res.status(StatusCodes.OK).json({ msg: 'Email verified' });
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

  // Validate is verify
  if (!user.isVerified) {
    throw new CustomError.UnauthenticatedError('Please verify your email');
  }

  // Custom user
  const tokenUser = createTokenUser(user);

  // Create refresh token
  let refreshToken = '';

  // Check for existing token
  const existingToken = await Token.findOne({ user: user._id });
  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError('Invalid credentials');
    }
    refreshToken = existingToken.refreshToken;

    // Attach cookie and Token
    attachCookiesToResponse({ res, user: tokenUser });

    res.status(StatusCodes.OK).json({ user: tokenUser, refreshToken });
    return;
  }

  refreshToken = crypto.randomBytes(40).toString('hex');
  const ip = req.ip;
  const userAgent = req.headers['user-agent'];
  const userToken = { refreshToken, ip, userAgent, user: user._id };

  await Token.create(userToken);

  // Attach cookie and Token
  attachCookiesToResponse({ res, user: tokenUser, refreshToken });

  res.status(StatusCodes.OK).json({ user: tokenUser, refreshToken });
};

const logout = async (req, res) => {
  // Remove token
  await Token.findOneAndDelete({ user: req.user.userId });

  // Expire tokens (accessToken and refreshToken)
  res.cookie('accessToken', 'logout', {
    // Set the expires to current date (Remove the cookie )
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.cookie('refreshToken', 'logout', {
    // Set the expires to current date (Remove the cookie )
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(StatusCodes.OK).json({ msg: 'User logged out!' });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new CustomError.BadRequestError('Please provide valid email');
  }

  const user = await User.findOne({ email });
  if (user) {
    const passwordToken = crypto.randomBytes(70).toString('hex');

    // Send email
    const origin = 'http://localhost:3000';
    await sendResetPasswordEmail({
      name: user.name,
      email: user.email,
      token: passwordToken,
      origin,
    });

    const tenMinutes = 1000 * 60 * 10; // 10min
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

    user.passwordToken = createHash(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;

    await user.save();
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Please check your email for reset password link' });
};

const resetPassword = async (req, res) => {
  const { email, password, token } = req.body;

  if (!email || !password || !token) {
    throw new CustomError.BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ email });
  if (user) {
    const currentDate = new Date();

    // console.log(user.passwordToken);
    // console.log(createHash(token));

    if (
      user.passwordToken === createHash(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = password;
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;

      await user.save();
    }
  }

  res.send('Reset password');
};

module.exports = {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
