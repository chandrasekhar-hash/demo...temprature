// ============================================================
// locationController.js  —  Handles location API business logic
// ============================================================

const pool = require('../config/db');

// GET /api/locations — Fetch all sensor locations
exports.getLocations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations ORDER BY name ASC;');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching locations:', err.message);
    res.status(500).json({ error: 'Database query failed' });
  }
};
