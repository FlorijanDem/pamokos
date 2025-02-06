const express = require("express");
const authRouter = require("./routes/authRouter");
const usersRouter = require("./routes/usersRouter")
const errorHandler = require("./middleware/errorHandler");
const AppError = require("./utils/appError")

const app = express();
app.use(express.json());

app.use("/api/v1", authRouter);
app.use("/api/v1/users", usersRouter);


app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

module.exports = app;