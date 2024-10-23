const crypto = require('crypto');

// Create hash
const hashString = (string) =>
  crypto.createHash('md5').update(string).digest('hex');

module.exports = hashString;
