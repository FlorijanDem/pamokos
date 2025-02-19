const { sql } = require("../dbConnection");
exports.addTask = async (data) => {
  await sql`
    CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    due_date TIMESTAMP,
    priority VARCHAR(255),
    category VARCHAR(255),
    status VARCHAR(255),
    user_id INTEGER
  );
    `;
  const title = data.data.title;
  const description = data.data.description;
  const due_date = data.data.due_date;
  const priority = data.data.priority;
  const category = data.data.category;
  const status = data.data.status;
  const user_id = data.user_id;
  const newTask = await sql`
    INSERT INTO tasks (title, description, due_date, priority, category, status, user_id)
    VALUES (${title}, ${description}, ${due_date}, ${priority}, ${category}, ${status}, ${user_id})
    RETURNING *
  `;
  return newTask;
};

exports.editTask = async (data) => {
  const id = data.id;
  const user_id = data.user_id;
  const description = data.data.description;
  const due_date = data.data.due_date;
  const priority = data.data.priority;
  const category = data.data.category;
  const status = data.data.status;
  const [newTask] = await sql`
    UPDATE tasks
    SET description=${description}, due_date=${due_date}, priority=${priority}, category=${category}, status=${status}
    WHERE id=${id} AND user_id=${user_id}
    RETURNING tasks.*
  `;
  return newTask;
};

exports.removeTask = async (data) => {
  const [task] = await sql`
    DELETE
    FROM tasks
    WHERE id=${data.id} AND user_id=${data.user_id};
  `;
  console.log(task);
  return task;
};

exports.getAllTasks = async (user_id) => {
  const task = await sql`
    SELECT *
    FROM tasks
    WHERE user_id=${user_id.user_id};
  `;
  return task;
};

exports.getOneTask = async (data) => {
  const task = await sql`
      SELECT *
      FROM tasks
      WHERE id=${data.id} AND user_id=${data.user_id};
    `;
  return task;
};
