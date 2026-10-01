// ============================================================
// analyticsController.js  —  Person 3: Analytics API Logic
// ============================================================
// Handles historical trends and temperature analytics
// ============================================================

const pool = require('../config/db');

// GET /api/analytics/trends — 24h temperature trend data
exports.getTrends = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT r.esp_id, l.name, r.temp, r.humidity, r.recorded_at
       FROM readings r
       JOIN locations l ON r.esp_id = l.id
       ORDER BY r.recorded_at ASC;`
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching analytics trends:', err.message);
    res.status(500).json({ error: 'Failed to retrieve analytics trends' });
  }
};
