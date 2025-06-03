const pool = require("../config/db");

// GET: Fetch all products
const getProducts = async (req, res) => {
  try {
    console.log("🔍 Incoming request to fetch products");
    const result = await pool.query("SELECT * FROM products");

    if (result.rows.length === 0) {
      console.log("⚠️ No products found in the database");
    } else {
      console.log("✅ Products fetched:", result.rows);
    }

    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// POST: Add a new product
const addProduct = async (req, res) => {
  const { name, description, image, link } = req.body;

  if (!name || !image) {
    return res.status(400).json({ message: "Name and image are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO products (name, description, image, link) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, image, link]
    );

    console.log("✅ New product added:", result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("❌ Error adding product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getProducts,
  addProduct,
};
