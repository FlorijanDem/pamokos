const express = require("express");

const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/appError");
const userRouter = require("./routes/userRouter");
const menuRouter = require("./routes/menuRouter");
const orderRouter = require("./routes/orderRouter");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/menu", menuRouter);
app.use("/orders", orderRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;
