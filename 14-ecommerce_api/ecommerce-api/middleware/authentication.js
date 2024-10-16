// Errors
const CustomError = require('../errors');
// Utils
const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication invalid');
  }

  try {
    // const payload = isTokenValid({ token });
    const { userId, name, role } = isTokenValid({ token });
    req.user = { userId, name, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication invalid');
  }
};

const authorizePermissions = (req, res, next) => {
  if (req.user.role !== 'admin') {
    throw new CustomError.UnAuthorizedError(
      'Unauthorized to access this route'
    );
  }
  next();
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
