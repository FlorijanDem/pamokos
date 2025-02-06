const { sql } = require("../dbConnection");

exports.createWorkout = async (workout) => {
  await sql`
    CREATE TABLE IF NOT EXISTS workouts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date TIMESTAMP,
    user_id int
  );
    `;
  const [newWorkout] = await sql`
        INSERT INTO workouts ${sql(workout, "name")}
        RETURNING workouts.*
    `;
  return newWorkout;
};
exports.allWorkouts = async () => {
  const all = await sql`
        SELECT *
        FROM workouts;
    `;
  return all;
};

exports.workoutById = async (id) => {
  const [workout] = await sql`
        SELECT *
        FROM workouts
        WHERE id = ${id};
    `;
  return workout;
};

exports.editWorkout = async (id, name) => {
  const [workout] = await sql`
      UPDATE workouts
      SET name= ${name}
      WHERE id=${id};
  `;
  return workout;
};

exports.deleteWorkout = async (id) => {
  const [workout] = await sql`
        DELETE FROM workouts
        WHERE id=${id};
    `;
  return workout;
};
