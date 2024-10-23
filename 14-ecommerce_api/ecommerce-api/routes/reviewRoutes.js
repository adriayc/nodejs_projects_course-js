const express = require('express');
// Middlewares
const { authenticateUser } = require('../middleware/authentication');
// Controller
const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');

const router = express.Router();

router.route('/').post(authenticateUser, createReview).get(getAllReviews);
router
  .route('/:id')
  .get(getSingleReview)
  .patch(authenticateUser, updateReview)
  .delete(authenticateUser, deleteReview);

module.exports = router;
