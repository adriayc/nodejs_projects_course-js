const express = require('express');
// Limiter
const rateLimiter = require('express-rate-limit');
// Middlewares
const authenticateUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');
// Controller
const { register, login, updateUser } = require('../controllers/auth');

// Limiter setup
const apiLimiter = rateLimiter({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 10,
  message: {
    msg: 'Too many requests for this IP, please try after 15 minutes',
  },
});

const router = express.Router();

router.post('/register', apiLimiter, register);
router.post('/login', apiLimiter, login);
router.patch('/updateUser', authenticateUser, testUser, updateUser);

module.exports = router;
