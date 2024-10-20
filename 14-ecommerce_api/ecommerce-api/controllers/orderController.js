const { StatusCodes } = require('http-status-codes');
// Models
const Order = require('../models/Order');
const Product = require('../models/Product');
// Errors
const CustomError = require('../errors');
// Utils
const { checkPermissions } = require('../utils');

const createOrder = async (req, res) => {
  const { tax, shippingFee, items: cartItems } = req.body;

  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('No cart items provided');
  }
  if (!tax || !shippingFee) {
    throw new CustomError.BadRequestError(
      'Please provide tax and shipping fee'
    );
  }

  let orderItems = [];
  let subtotal = 0;

  for (const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.product });
    if (!dbProduct) {
      throw new CustomError.NotFoundError(`No product with id ${item.product}`);
    }
    const { _id, name, price, image } = dbProduct;
    // console.log(name, price, image);

    const singleOrderItem = {
      name,
      image,
      price,
      amount: item.amount,
      product: _id,
    };
    // Add item to order
    orderItems = [...orderItems, singleOrderItem];
    // Calculate subtotal
    subtotal += item.amount * price;
  }
  console.log(orderItems);
  console.log(subtotal);

  res.send('Create order');
};

const getAllOrders = async (req, res) => {
  res.send('Get all orders');
};

const getSingleOrder = async (req, res) => {
  res.send('Get single order');
};

const getCurrentUserOrders = async (req, res) => {
  res.send('Get current user orders');
};

const updateOrder = async (req, res) => {
  res.send('Update order');
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  updateOrder,
};
