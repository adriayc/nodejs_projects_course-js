const express = require('express');
const authenticateUser = require('../middleware/authentication');
// Controller
const { register, login, updateUser } = require('../controllers/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.patch('/updateUser', authenticateUser, updateUser);

module.exports = router;
