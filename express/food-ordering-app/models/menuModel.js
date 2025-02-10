const { sql } = require("../dbConnection");
exports.addMeal = async (meal) => {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    menu_title VARCHAR(255),
    meal_title VARCHAR(255),
    description VARCHAR(255),
    quantity INTEGER
  );
    `;
  const [newMeal] = await sql`
    INSERT INTO users   ${sql(
      meal,
      "menu_title",
      "meal_title",
      "description",
      "quantity"
    )}
    RETURNING users.*
  `;
  return newMeal;
};
