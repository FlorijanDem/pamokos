const express = require("express");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/appError");

const authRouter = require("./routes/authRouter");
const menuRouter = require("./routes/menuRouter");
const mealRouter = require("./routes/mealRouter");
const orderRouter = require("./routes/orderRouter");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", authRouter);
app.use("/api/v1/menu", menuRouter);
app.use("/api/v1/meal", mealRouter);
app.use("/api/v1/order", orderRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;
