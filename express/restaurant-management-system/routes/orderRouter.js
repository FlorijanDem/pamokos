const express = require("express");
const {
  createOrder,
  getOrdersByUser,
  getOneOrderByUser,
  deleteOneOrderByUser,
} = require("../controllers/orderController");
const checkUsersParams = require("../validators/checkUsersParams");
const validate = require("../validators/validate");

const orderRouter = express.Router();

orderRouter.route("/").post(createOrder);
orderRouter
  .route("/user/:userId")
  .get(checkUsersParams, validate, getOrdersByUser);
orderRouter
  .route("/:orderId/user/:userId")
  .get(checkUsersParams, validate, getOneOrderByUser);
orderRouter
  .route("/:orderId/user/:userId")
  .delete(checkUsersParams, validate, deleteOneOrderByUser);

module.exports = orderRouter;
