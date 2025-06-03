const pool = require("../config/db");

exports.placeOrder = async (req, res) => {
  const {
    user_id,
    products,
    name,
    phone_number,
    email,
    address,
    country,
    state,
    city,
    pincode,
    aadhar_number,
    pan_number,
    select_product,
    message,
  } = req.body;

  try {
    const query = `
      INSERT INTO ordersw (
        user_id, products, name, phone_number, email,
        address, country, state, city, pincode,
        aadhar_number, pan_number, select_product, message
      )
      VALUES (
        $1, $2, $3, $4, $5,
        $6, $7, $8, $9, $10,
        $11, $12, $13, $14
      )
      RETURNING *;
    `;

    const values = [
      user_id,
      JSON.stringify(products),
      name,
      phone_number,
      email,
      address,
      country,
      state,
      city,
      pincode,
      aadhar_number,
      pan_number,
      select_product,
      message,
    ];

    const result = await pool.query(query, values);
    console.log("✅ Order placed:", result.rows[0]);
    res.status(201).json({ success: true, order: result.rows[0] });
  } catch (error) {
    console.error("❌ Error placing order:", error);
    res.status(500).json({ success: false, error: "Failed to place order" });
  }
};
