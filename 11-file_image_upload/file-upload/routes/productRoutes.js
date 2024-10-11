const express = require('express');
// Controllers
const {
  createProduct,
  getAllProducts,
} = require('../controllers/productController');
const { uploadProductImage } = require('../controllers/uploadsController');

const router = express.Router();

router.route('/').post(createProduct).get(getAllProducts);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
