// Utils
const { isTokenValid } = require('../utils');
// Errors
const CustomError = require('../errors');

const authenticateUser = async (req, res, next) => {
  // Get token (Cookie that have been signed)
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication invalid');
  }

  try {
    const { userId, name, role } = isTokenValid({ token });
    req.user = { userId, name, role };

    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication invalid');
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        'Unauthorized to access this route'
      );
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
