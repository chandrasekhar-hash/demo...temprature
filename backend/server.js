// ============================================================
// server.js  —  Express Server Entrypoint
// ============================================================

const express = require('express');
const cors    = require('cors');
require('dotenv').config();

const locationRoutes = require('./routes/locationRoutes');
const readingRoutes  = require('./routes/readingRoutes');

const app  = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/locations', locationRoutes);
app.use('/api/readings', readingRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'online', message: '🌡️ Temperature Management Backend is active!' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`\n🚀 Server listening at http://localhost:${PORT}`);
  console.log(`Available Endpoints:`);
  console.log(`  GET  /api/locations`);
  console.log(`  POST /api/readings`);
  console.log(`  GET  /api/readings/history/:espId\n`);
});
