const express = require('express');
// Controllers
const { getAllTasks } = require('../controllers/tasks');

const router = express.Router();

router.route('/').get(getAllTasks);

module.exports = router;
