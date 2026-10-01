// ============================================================
// server.js  —  Person 4: Core Backend Server Infrastructure
// ============================================================

const express = require('express');
const cors    = require('cors');
require('dotenv').config();

// Route Imports from Teammates
const locationRoutes  = require('./routes/locationRoutes');   // Person 1
const readingRoutes   = require('./routes/readingRoutes');    // Person 2
const analyticsRoutes = require('./routes/analyticsRoutes');  // Person 3

const app  = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Register API Routes
app.use('/api/locations', locationRoutes);
app.use('/api/readings', readingRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'online', message: '🌡️ Temperature Management Backend is active!' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`\n🚀 Express Server listening at http://localhost:${PORT}`);
  console.log(`Available Endpoints:`);
  console.log(`  GET  /api/locations          (Person 1: Location Feature)`);
  console.log(`  POST /api/readings           (Person 2: Sensor Ingestion)`);
  console.log(`  GET  /api/readings/history   (Person 2: Sensor History)`);
  console.log(`  GET  /api/analytics/trends   (Person 3: Trend Analytics)\n`);
});
