const products = [
  {
    price: 1,
    category: "something",
  },
  {
    price: 2,
    category: "something",
  },
  {
    price: 3,
    category: "something",
  },
  {
    price: 4,
    category: "something",
  },
  {
    price: 5,
    category: "something",
  },
];

exports.products = (req, res, next) => {
  let result = null;
  if (req.query.price != undefined) {
    result = products.filter(
      (product) =>
        product.price == req.query.price &&
        product.category == req.query.category
    );
  } else {
    result = products.filter(
      (product) => product.category == req.query.category
    );
  }
  try {
    res.status(200).json({
      result: result,
    });
  } catch (err) {
    console.error(err);
  }
};
