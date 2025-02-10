const data = [
  {
    id: 1,
    name: "Vasia",
  },
  {
    id: 2,
    name: "Ivan",
  },
  {
    id: 3,
    name: "Dusia",
  },
  {
    id: 4,
    name: "Lioha",
  },
];

exports.user = async (req, res, next) => {
  const id = req.params.id;
  const result = data.filter((user) => user.id == id);
  try {
    res.status(200).json({
      result,
    });
  } catch (err) {
    console.error(err);
  }
};
