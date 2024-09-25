const jwt = require('jsonwebtoken');
// Errors
const { UnAuthenticatedError } = require('../errors');

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
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    // console.log(error);
    throw new UnAuthenticatedError('Authentication invalid');
  }
};

module.exports = auth;
