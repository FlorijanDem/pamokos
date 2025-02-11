const { sql } = require("../dbConnection");

exports.addOrder = async (order) => {
  await sql`
      CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      user_id INTEGER,
      meal_id INTEGER,
      status VARCHAR(255)
    );
      `;
  const [newMeal] = await sql`
      INSERT INTO orders   ${sql(order.data, "user_id", "meal_id", "status")}
      RETURNING orders.*
    `;
  return newMeal;
};

exports.getAllOrders = async () => {
  const orders = await sql`
        SELECT *
        FROM orders;
    `;
  return orders;
};

exports.changeOrderStatus = async (data) => {
  const toAdd = data.status;
  const orderId = data.id;
  const order = await sql`
        UPDATE orders
        SET status=${toAdd}
        WHERE id=${orderId};
    `;
  return order;
};
