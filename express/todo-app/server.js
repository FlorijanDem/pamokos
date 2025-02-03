const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.json());

const port = process.env.PORT;

const data = [
  {
    id: 1,
    description: "Learn Express",
    completed: false,
  },
  {
    id: 2,
    description: "Express",
    completed: true,
  },
  {
    id: 3,
    description: "This is Express",
    completed: true,
  },
];

app.get("/todos", (req, res) => {
  try {
    res.json({
      todos: data,
    });
  } catch (err) {
    console.error(err);
  }
});

app.post("/todos", async (req, res) => {
  const { id, description, completed } = req.body;
  const newTodo = {
    id,
    description,
    completed,
  };
  try {
    const newObject = data.push({ id, description, completed });
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
  }
});

app.put("/todos/:id", (req, res) => {
  const { id, description, completed } = req.body;
  const newTodo = {
    id,
    description,
    completed,
  };

  const foundIndex = data.findIndex((x) => x.id == req.params.id);
  data.splice(foundIndex, 1, newTodo);
  try {
    res.status(200).json({
      todos: data,
    });
  } catch (err) {
    console.error(err);
  }
});

app.delete("/todos/:id", (req, res) => {
  const foundIndex = data.findIndex((x) => x.id == req.params.id);
  data.splice(foundIndex, 1);
  try {
    res.status(202).json({
      todos: data,
    });
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
