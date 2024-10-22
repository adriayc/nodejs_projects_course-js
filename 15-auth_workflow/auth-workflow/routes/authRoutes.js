const express = require('express');
// Middlewares
const { authenticateUser } = require('../middleware/authentication');
// Controller
const {
  register,
  login,
  logout,
  verifyEmail,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/logout', authenticateUser, logout);
router.post('/verify-email', verifyEmail);

module.exports = router;
