const { StatusCodes } = require('http-status-codes');

// Upload image
const uploadProductImage = async (req, res) => {
  res.send('Upload product image');
};

module.exports = {
  uploadProductImage,
};
