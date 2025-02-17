const { sql } = require("../dbConnection");

exports.registerPet = async (pet) => {
  await sql`
    CREATE TABLE IF NOT EXISTS pets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    user_id INTEGER
  );
  `;
  const [newPet] = await sql`
  INSERT INTO pets 
  ${sql(pet, "name", "user_id")}
  RETURNING *
  `;

  return newPet;
};

exports.getPetById = async (id) => {
  const [pet] = await sql`
  SELECT *
  FROM pets
  WHERE id = ${id}
  `;

  return pet;
};
