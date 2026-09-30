// ============================================================
// readingController.js  —  Handles temperature readings & logs
// ============================================================

const pool = require('../config/db');

// POST /api/readings — Record a new temperature/humidity reading
exports.addReading = async (req, res) => {
  const { espId, temp, humidity } = req.body;

  if (!espId || temp === undefined || humidity === undefined) {
    return res.status(400).json({ error: 'Missing required fields: espId, temp, humidity' });
  }

  try {
    // 1. Insert into history table
    await pool.query(
      `INSERT INTO readings (esp_id, temp, humidity) VALUES ($1, $2, $3);`,
      [espId, temp, humidity]
    );

    // 2. Update current values in locations table
    await pool.query(
      `UPDATE locations SET temp = $1, humidity = $2, last_updated = NOW() WHERE id = $3;`,
      [temp, humidity, espId]
    );

    res.status(201).json({ message: 'Reading saved successfully!' });
  } catch (err) {
    console.error('Error inserting reading:', err.message);
    res.status(500).json({ error: 'Failed to record reading' });
  }
};

// GET /api/readings/history/:espId — Fetch reading history for chart
exports.getHistory = async (req, res) => {
  const { espId } = req.params;

  try {
    const result = await pool.query(
      `SELECT temp, humidity, recorded_at FROM readings
       WHERE esp_id = $1 ORDER BY recorded_at DESC LIMIT 20;`,
      [espId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching history:', err.message);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};
