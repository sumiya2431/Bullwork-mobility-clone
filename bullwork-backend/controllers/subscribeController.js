const pool = require("../config/db");

const subscribeUser = async (req, res) => {
  const { email } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    const existing = await pool.query("SELECT * FROM subscribers WHERE email = $1", [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    await pool.query("INSERT INTO subscribers (email) VALUES ($1)", [email]);
    res.status(200).json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { subscribeUser };
