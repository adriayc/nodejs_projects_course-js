const express = require('express');
// Middlewares
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
// Controller
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../controllers/productController');

const router = express.Router();

router
  .route('/')
  .post([authenticateUser, authorizePermissions('admin')], createProduct)
  .get(getAllProducts);
router
  .route('/uploadImage')
  .post([authenticateUser, authorizePermissions('admin')], uploadImage);
router
  .route('/:id')
  .get(getSingleProduct)
  .patch([authenticateUser, authorizePermissions('admin')], updateProduct)
  .delete([authenticateUser, authorizePermissions('admin')], deleteProduct);

module.exports = router;
