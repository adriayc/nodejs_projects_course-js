// Errors
const CustomError = require('../errors');
// Utils
const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
  console.log(req.signedCookies);
  const token = req.signedCookies.token;

  if (!token) {
    console.log('Error, no token present');
  } else {
    console.log('Token present');
  }
  next();
};

module.exports = {
  authenticateUser,
};
