const express = require('express');
// Middlewares
const authenticateUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');
// Controller
const { register, login, updateUser } = require('../controllers/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.patch('/updateUser', authenticateUser, testUser, updateUser);

module.exports = router;
