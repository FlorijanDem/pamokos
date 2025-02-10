exports.register = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "User registered",
    });
  } catch (err) {
    console.error(err);
  }
};
