const { sql } = require("../dbConnection");

exports.createOrder = async (data) => {
  await sql`
        CREATE TABLE IF NOT EXISTS order_status (
            id SERIAL PRIMARY KEY,
            status_name VARCHAR(255)
        )
    `;
  await sql`
        CREATE TABLE IF NOT EXISTS orders (
            id SERIAL PRIMARY KEY,
            customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
            total FLOAT,
            status_id INTEGER REFERENCES order_status(id) ON DELETE CASCADE ON UPDATE CASCADE,
            order_time TIMESTAMP DEFAULT NOW()
        )
    `;
  await sql`
        CREATE TABLE IF NOT EXISTS order_items (
            id SERIAL PRIMARY KEY,
            order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE,
            menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE ON UPDATE CASCADE,
            quantity INTEGER,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
        )
    `;
  const status = await sql`
        INSERT INTO order_status (status_name)
        VALUES (${data.data.status_name})
  `;
  const order = await sql`
        INSERT INTO orders ${sql(
          data.data,
          "customer_id",
          "total",
          "status_id"
        )}
        RETURNING orders.*

    `;
  return order;
};

exports.getOrdersByUser = async (id) => {
  const orders = await sql`
        SELECT *
        FROM orders
        WHERE customer_id=${id.id}
    `;
  return orders;
};

exports.getOneOrderByUser = async (data) => {
  const order = await sql`
        SELECT *
        FROM orders
        WHERE id=${data.id} AND customer_id=${data.customer_id}
    `;
  return order;
};

exports.deleteOneOrderByUser = async (data) => {
  const order = await sql`
        DELETE
        FROM orders
        WHERE id=${data.id} AND customer_id=${data.customer_id}

    `;
  return order;
};
