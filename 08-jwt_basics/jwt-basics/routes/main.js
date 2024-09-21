const express = require('express');
// Controllers
const { login, dashboard } = require('../controllers/main');

const router = express.Router();

router.route('/dashboard').get(dashboard);
router.route('/login').post(login);

module.exports = router;
