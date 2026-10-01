// ============================================================
// seed.js  —  Person 4: Master Database Seed Runner
// ============================================================
// Runs full seed suite for initial locations & analytics
// ============================================================

const pool = require('../backend/config/db');
const seedAnalytics = require('./03_analytics_seed');

const initialLocations = [
  { id: 'esp32_1', name: 'Main Library', temp: 23.5, humidity: 52 },
  { id: 'esp32_2', name: 'Science Block Lab 3', temp: 26.1, humidity: 60 },
  { id: 'esp32_3', name: 'Student Cafeteria', temp: 28.4, humidity: 65 },
  { id: 'esp32_4', name: 'IT Center Server Room', temp: 19.8, humidity: 45 },
  { id: 'esp32_5', name: 'Auditorium Hall', temp: 24.0, humidity: 55 }
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting master database seed routine...');

    await pool.query('DELETE FROM readings;');
    await pool.query('DELETE FROM locations;');

    for (const loc of initialLocations) {
      await pool.query(
        `INSERT INTO locations (id, name, temp, humidity, last_updated)
         VALUES ($1, $2, $3, $4, NOW())`,
        [loc.id, loc.name, loc.temp, loc.humidity]
      );
    }

    console.log('✅ Base locations seeded!');
    await seedAnalytics();

    console.log('🎉 Full database seeding finished!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
}

seedDatabase();
