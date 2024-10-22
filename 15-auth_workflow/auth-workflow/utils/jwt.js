const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  // const token = jwt.sign(payload, process.env.JWT_SECRET, {
  //   expiresIn: process.env.JWT_LIFETIME,
  // });
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token;
};

// const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);
const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, user, refreshToken }) => {
  const accessTokenJWT = createJWT({ payload: { user } });
  const refreshTokenJWT = createJWT({ payload: { user, refreshToken } });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('accessToken', accessTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    maxAge: 1000 * 60 * 15, // 15 minutes
  });

  res.cookie('refreshToken', refreshTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });
};

// const attachSingleCookieToResponse = ({ res, user }) => {
//   const token = createJWT({ payload: user });

//   const oneDay = 1000 * 60 * 60 * 24;
//   res.cookie('token', token, {
//     expires: new Date(Date.now() + oneDay),
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     signed: true,
//   });
// };

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
};
