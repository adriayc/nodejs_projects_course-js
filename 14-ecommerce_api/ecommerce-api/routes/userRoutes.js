const express = require('express');
// Middlewares
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
// Controller
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController');

const router = express.Router();

router.route('/').get(authenticateUser, authorizePermissions, getAllUsers);
router.route('/showMe').get(showCurrentUser);
router.route('/updateUser').patch(updateUser);
router.route('/updateUserPassword').patch(updateUserPassword);
router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;
