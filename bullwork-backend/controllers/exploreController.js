
const getExploreProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const query = 'SELECT name, image, description FROM products WHERE id = $1';
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getExploreProduct };
