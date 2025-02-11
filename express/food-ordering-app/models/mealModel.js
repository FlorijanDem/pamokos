const { sql } = require("../dbConnection");
exports.addMeal = async (meal) => {
  console.log(meal);
  await sql`
    CREATE TABLE IF NOT EXISTS meals (
    id SERIAL PRIMARY KEY,
    menu_id INTEGER,
    meal_title VARCHAR(255),
    description VARCHAR(255),
    quantity INTEGER
  );
    `;
  const newMeal = await sql`
    INSERT INTO meals   ${sql(
      meal.data,
      "menu_id",
      "meal_title",
      "description",
      "quantity"
    )}
    RETURNING *
  `;
  return newMeal;
};

exports.editMeal = async (meal) => {
  const id = meal.id;
  const menu_id = meal.data.menu_id;
  const meal_title = meal.data.meal_title;
  const description = meal.data.description;
  const quantity = meal.data.quantity;
  const [newMeal] = await sql`
    UPDATE meals
    SET menu_id = ${menu_id}, meal_title =${meal_title}, description=${description}, quantity=${quantity}
    WHERE id=${id};
  `;
  return newMeal;
};

exports.removeMeal = async (id) => {
  const toRemove = id.id;
  const [meals] = await sql`
    DELETE
    FROM meals
    WHERE id=${toRemove};
  `;
  return meals;
};

exports.getAllMeals = async () => {
  const meals = await sql`
    SELECT *
    FROM meals;
  `;
  return meals;
};
