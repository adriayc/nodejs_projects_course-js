const express = require('express');
// Middlewares
const testUser = require('../middleware/testUser');
// Controller
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} = require('../controllers/jobs');

const router = express.Router();

router.route('/').get(getAllJobs).post(testUser, createJob);
// Stats
router.route('/stats').get(showStats);
router
  .route('/:id')
  .get(getJob)
  .patch(testUser, updateJob)
  .delete(testUser, deleteJob);

module.exports = router;
