// ============================================================
// seed.js  —  Populates initial database data
// ============================================================
// Run: node database/seed.js
// ============================================================

const pool = require('../backend/config/db');

const initialLocations = [
  { id: 'esp32_1', name: 'Main Library', temp: 23.5, humidity: 52 },
  { id: 'esp32_2', name: 'Science Block Lab 3', temp: 26.1, humidity: 60 },
  { id: 'esp32_3', name: 'Student Cafeteria', temp: 28.4, humidity: 65 },
  { id: 'esp32_4', name: 'IT Center Server Room', temp: 19.8, humidity: 45 },
  { id: 'esp32_5', name: 'Auditorium Hall', temp: 24.0, humidity: 55 }
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Clear existing data
    await pool.query('DELETE FROM readings;');
    await pool.query('DELETE FROM locations;');

    // Insert locations
    for (const loc of initialLocations) {
      await pool.query(
        `INSERT INTO locations (id, name, temp, humidity, last_updated)
         VALUES ($1, $2, $3, $4, NOW())`,
        [loc.id, loc.name, loc.temp, loc.humidity]
      );

      // Insert 5 historical readings for each location
      for (let i = 5; i >= 1; i--) {
        const tempVariation = (Math.random() * 2 - 1).toFixed(1);
        const humidityVariation = Math.floor(Math.random() * 6 - 3);

        await pool.query(
          `INSERT INTO readings (esp_id, temp, humidity, recorded_at)
           VALUES ($1, $2, $3, NOW() - INTERVAL '${i * 30} minutes')`,
          [
            loc.id,
            (loc.temp + parseFloat(tempVariation)).toFixed(1),
            loc.humidity + humidityVariation
          ]
        );
      }
    }

    console.log('✅ Database successfully seeded!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

seedDatabase();
