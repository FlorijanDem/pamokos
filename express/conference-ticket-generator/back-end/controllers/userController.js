const AppError = require("../utils/appError");
const { createUser, getUser } = require("../models/userModel");

exports.createUser = async (req, res, next) => {
  const data = req.body;
  console.log(data)
  try {
    const newUser = await createUser({ data });
    res.status(200).json({ newUser });
  } catch (err) {
    console.error(err);
  }
};

exports.getUser = async (req, res, next) => {
  // const data = req.body;
  // console.log(data);
  try {
    const user = await getUser({});
    res.status(200).json({user})
  } catch (err) {
    console.error(err)
  }
}