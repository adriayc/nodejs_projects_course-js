const express = require('express');
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
router.get('/logout', logout);
router.post('/verify-email', verifyEmail);

module.exports = router;
