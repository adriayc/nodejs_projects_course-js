const jwt = require('jsonwebtoken');
// Errors
const { UnAuthenticatedError } = require('../errors');
// Models
const User = require('../models/User');

const auth = (req, res, next) => {
  // Check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Authentication invalid');
  }
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user to the job routes
    const testUser = payload.userId === '67036172dfb9076f54d866a8';
    // req.user = { userId: payload.userId, name: payload.name };
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    // console.log(error);
    throw new UnAuthenticatedError('Authentication invalid');
  }
};

module.exports = auth;
