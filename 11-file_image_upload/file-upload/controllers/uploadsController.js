const { StatusCodes } = require('http-status-codes');

// Upload image
const uploadProductImage = async (req, res) => {
  console.log(req);
  res.send('Upload product image');
};

module.exports = {
  uploadProductImage,
};
