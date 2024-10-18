const { StatusCodes } = require('http-status-codes');
// Models
const Review = require('../models/Review');
const Product = require('../models/Product');
// Errors
const CustomError = require('../errors');
// Utils
const { checkPermissions } = require('../utils');

const createReview = async (req, res) => {
  const { product: productId } = req.body;

  const isValidProduct = await Product.findOne({ _id: productId });
  if (!isValidProduct) {
    throw new CustomError.NotFoundError(`No product with id: ${productId}`);
  }

  const alreadySubmitted = await Review.findOne({
    product: productId,
    user: req.user.userId,
  });
  if (alreadySubmitted) {
    throw new CustomError.BadRequestError(
      'Already submitted review for this product'
    );
  }

  // Set the user int the req.body
  req.body.user = req.user.userId;

  const review = await Review.create(req.body);

  res.status(StatusCodes.CREATED).json({ review });
};

const getAllReviews = async (req, res) => {
  res.send('Get all reviews');
};

const getSingleReview = async (req, res) => {
  res.send('Get single review');
};

const updateReview = async (req, res) => {
  res.send('Update review');
};

const deleteReview = async (req, res) => {
  res.send('Delete review');
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
