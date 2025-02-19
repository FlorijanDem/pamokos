const { sql } = require("../dbConnection");
exports.addTask = async (data) => {
  console.log(data);
  await sql`
    CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    due_date TIMESTAMP,
    priority VARCHAR(255),
    category VARCHAR(255),
    status VARCHAR(255)
  );
    `;
  const newTask = await sql`
    INSERT INTO tasks   ${sql(
      data.data,
      "title",
      "description",
      "due_date",
      "priority",
      "category",
      "status"
    )}
    RETURNING *
  `;
  return newTask;
};

exports.editTask = async (data) => {
  const id = data.id;

  const description = data.data.description;
  const due_date = data.data.due_date;
  const priority = data.data.priority;
  const category = data.data.category;
  const status = data.data.status;
  const [newTask] = await sql`
    UPDATE tasks
    SET description=${description}, due_date=${due_date}, priority=${priority}, category=${category}, status=${status}
    WHERE id=${id}
    RETURNING tasks.*;
  `;
  return newTask;
};

exports.removeTask = async (id) => {
  const toRemove = id.id;
  const [task] = await sql`
    DELETE
    FROM tasks
    WHERE id=${toRemove};
  `;
  return task;
};

exports.getAllTasks = async () => {
  const task = await sql`
    SELECT *
    FROM tasks;
  `;
  return task;
};

exports.getOneTask = async (id) => {
  const task = await sql`
      SELECT *
      FROM tasks
      WHERE id=${id.id};
    `;
  return task;
};
