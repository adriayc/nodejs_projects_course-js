const CustomError = require('../errors');

const checkPermissions = (requestUser, resourceUserId) => {
  //   console.log(requestUser);
  //   console.log(resourceUserId);
  //   console.log(typeof resourceUserId);
  //   if (requestUser.role === 'admin') return;
  if (
    requestUser.role === 'admin' ||
    requestUser.userId === resourceUserId.toString()
  )
    return;
  throw new CustomError.UnAuthorizedError('No authorized to access this route');
};

module.exports = checkPermissions;
