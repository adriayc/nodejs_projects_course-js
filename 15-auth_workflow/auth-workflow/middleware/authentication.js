// Models
const Token = require('../models/Token');
// Utils
const { isTokenValid, attachCookiesToResponse } = require('../utils');
// Errors
const CustomError = require('../errors');

const authenticateUser = async (req, res, next) => {
  const { accessToken, refreshToken } = req.signedCookies;

  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.user;
      return next();
    }

    const payload = isTokenValid(refreshToken);

    const existingToken = await Token.findOne({
      user: payload.user.userId,
      refreshToken: payload.refreshToken,
    });
    if (!existingToken || !existingToken?.isValid) {
      throw new CustomError.UnauthenticatedError('Authentication invalid');
    }

    // Attach cookie and Token
    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken,
    });

    req.user = payload.user;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication invalid');
  }
};

// const authenticateUserSingleToken = async (req, res, next) => {
//   // Get token (Cookie that have been signed)
//   const token = req.signedCookies.token;

//   if (!token) {
//     throw new CustomError.UnauthenticatedError('Authentication invalid');
//   }

//   try {
//     const { userId, name, role } = isTokenValid({ token });
//     req.user = { userId, name, role };

//     next();
//   } catch (error) {
//     throw new CustomError.UnauthenticatedError('Authentication invalid');
//   }
// };

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
