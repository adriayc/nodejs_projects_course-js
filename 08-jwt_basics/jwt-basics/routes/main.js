const express = require('express');
// Middlewares
const authMiddleware = require('../middleware/auth');
// Controllers
const { login, dashboard } = require('../controllers/main');

const router = express.Router();

// Use authMiddleware
router.route('/dashboard').get(authMiddleware, dashboard);
router.route('/login').post(login);

module.exports = router;
