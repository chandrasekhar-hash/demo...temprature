// ============================================================
// 03_analytics_seed.js  —  Person 3: Analytics & Trend Data Seed
// ============================================================
// Populates historical 24-hour sensor trends for data visualization
// ============================================================

const pool = require('../backend/config/db');

async function seedAnalyticsData() {
  try {
    console.log('📊 Seeding analytics trend data...');

    const locationsResult = await pool.query('SELECT id, temp, humidity FROM locations;');
    const locations = locationsResult.rows;

    for (const loc of locations) {
      for (let i = 24; i >= 1; i--) {
        const variation = (Math.sin((24 - i - 6) * (Math.PI / 12)) * 3).toFixed(1);
        const temp = (parseFloat(loc.temp) + parseFloat(variation)).toFixed(1);
        const humidity = Math.min(100, Math.max(20, loc.humidity + Math.floor(Math.random() * 6 - 3)));

        await pool.query(
          `INSERT INTO readings (esp_id, temp, humidity, recorded_at)
           VALUES ($1, $2, $3, NOW() - INTERVAL '${i} hours')`,
          [loc.id, temp, humidity]
        );
      }
    }

    console.log('✅ Analytics trend data successfully seeded!');
  } catch (err) {
    console.error('❌ Analytics seeding failed:', err.message);
  }
}

module.exports = seedAnalyticsData;
