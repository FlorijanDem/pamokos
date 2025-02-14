const AppError = require("../utils/appError");
const {
  createOrder,
  getOrdersByUser,
  getOneOrderByUser,
  deleteOneOrderByUser,
} = require("../models/orderModel");

exports.createOrder = async (req, res, next) => {
  const data = req.body;
  try {
    const order = await createOrder({ data });
    res.status(200).json({
      order,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getOrdersByUser = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const orders = await getOrdersByUser({ id });
    res.status(200).json({ orders });
  } catch (err) {
    console.error(err);
  }
};

exports.getOneOrderByUser = async (req, res, next) => {
  const id = req.params.orderId;
  const customer_id = req.params.userId;
  try {
    const order = await getOneOrderByUser({ id, customer_id });
    res.status(200).json({ order });
  } catch (err) {
    console.error(err);
  }
};

exports.deleteOneOrderByUser = async (req, res, next) => {
  const id = req.params.orderId;
  const customer_id = req.params.userId;
  try {
    const order = await deleteOneOrderByUser({ id, customer_id });
    res.status(204).json({
      message: "Success",
    });
  } catch (err) {
    console.error(err);
  }
};
