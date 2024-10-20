const { StatusCodes } = require('http-status-codes');
// Models
const Order = require('../models/Order');
const Product = require('../models/Product');
// Errors
const CustomError = require('../errors');
// Utils
const { checkPermissions } = require('../utils');

// Fake stripe
const fakeStripeAPI = async ({ amount, currency }) => {
  const client_secret = 'someRandomValue';
  return { client_secret, amount };
};

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
  // console.log(orderItems);
  // console.log(subtotal);

  // Calculate total
  const total = tax + shippingFee + subtotal;

  // Get client secret (Fake Stripe)
  const paymentIntent = await fakeStripeAPI({ amount: total, currency: 'usd' });

  // Create order
  const order = await Order.create({
    tax,
    shippingFee,
    orderItems,
    subtotal,
    total,
    user: req.user.userId,
    clientSecret: paymentIntent.client_secret,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ order, clientSecret: order.clientSecret });
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params;

  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id: ${orderId}`);
  }
  // Check permissions
  checkPermissions(req.user, order.user);

  res.status(StatusCodes.OK).json({ order });
};

const getCurrentUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

const updateOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const { paymentIntentId } = req.body;

  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw new CustomError(`No order with id: ${orderId}`);
  }
  // Check permissions
  checkPermissions(req.user, order.user);

  order.paymentIntentId = paymentIntentId;
  order.status = 'paid';

  await order.save();

  res.status(StatusCodes.OK).json({ order });
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  updateOrder,
};
