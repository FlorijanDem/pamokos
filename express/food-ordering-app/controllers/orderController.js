const AppError = require("../utils/appError");

const {
  addOrder,
  getAllOrders,
  changeOrderStatus,
} = require("../models/ordersModel");

exports.addOrder = async (req, res, next) => {
  const data = req.body;
  try {
    const order = await addOrder({
      data,
    });
    res.status(200).json({
      message: "Success",
      order,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await getAllOrders({});
    res.status(200).json({
      message: "Success",
      orders,
    });
  } catch (err) {
    console.error(err);
  }
};

exports.changeOrderStatus = async (req, res, next) => {
  const id = req.params.id;
  const status = req.params.status;
  try {
    const order = await changeOrderStatus({
      id,
      status,
    });
    res.status(200).json({
      message: "Success",
      order,
    });
  } catch (err) {
    console.error(err);
  }
};
