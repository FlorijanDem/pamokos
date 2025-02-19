const express = require("express");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/appError");

const authRouter = require("./routes/authRouter");
const tasksRouter = require("./routes/tasksRouter");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tasks", tasksRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;
