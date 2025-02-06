const { sql } = require("../dbConnection");

exports.createWorkout = async (workout) => {
  await sql`
    CREATE TABLE IF NOT EXISTS workouts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    date TIMESTAMP,
    user_id int
  );
    `;
  const [newWorkout] = await sql`
        INSERT INTO workouts ${sql(workout, "name", "user_id")}
        RETURNING workouts.*
    `;
  return newWorkout;
};
