const path = require('path');
const { StatusCodes } = require('http-status-codes');

// Upload image
const uploadProductImage = async (req, res) => {
  const productImage = req.files.image;
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
