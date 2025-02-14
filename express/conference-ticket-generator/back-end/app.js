const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/appError");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);
module.exports = app;
