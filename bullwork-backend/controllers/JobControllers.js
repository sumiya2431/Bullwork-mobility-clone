const pool = require("../config/db");

const getAllJobs = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM jobs ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllJobs };
