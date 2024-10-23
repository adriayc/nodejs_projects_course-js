const authorize = (req, res, next) => {
  //   console.log('Authorize');
  const { user } = req.query;
  if (user === 'adrian') {
    req.user = { id: 2, name: 'Adrian' };
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authorize;
