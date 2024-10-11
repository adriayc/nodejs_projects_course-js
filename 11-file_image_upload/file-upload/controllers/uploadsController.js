const path = require('path');
const { StatusCodes } = require('http-status-codes');
// Errors
const CustomError = require('../errors');

// Upload image
const uploadProductImage = async (req, res) => {
  //   console.log(req.files);
  // Check if file exists
  if (!req.files) {
    throw new CustomError.BadRequestError('No file Uploaded');
  }
  const productImage = req.files.image;
  // Check format
  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please Upload Image');
  }
  // Check Size (KB)
  // const maxSize = 1000;
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError('Please upload image smaller 1KB');
  }

  // Return the absolute path
  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );
  // Move the file to a part of the server
  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
  uploadProductImage,
};
