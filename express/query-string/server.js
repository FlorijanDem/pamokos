const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: 1951,
  },
];

app.get("/", (req, res) => {
  try {
    res.json({
      books,
    });
  } catch (err) {
    console.error(err);
  }
});

app.get("/:filterby/:value", (req, res) => {
  const type = req.params.filterby;
  const name = req.params.value;
  const filteredBooks = books.filter((b) => b[type] == name);
  try {
    res.status(200).json({
      filteredBooks,
    });
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
