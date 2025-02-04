const express = require("express");
const authRouter = require("./routes/authRouter");
const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/appError")

const app = express();
app.use(express.json());

app.use("/api/v1", authRouter);

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;