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
} = require('../controllers/jobs');

const router = express.Router();

router.route('/').get(getAllJobs).post(testUser, createJob);
router
  .route('/:id')
  .get(getJob)
  .patch(testUser, updateJob)
  .delete(testUser, deleteJob);

module.exports = router;
