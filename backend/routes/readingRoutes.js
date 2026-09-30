// ============================================================
// readingRoutes.js  —  Routes for Readings API
// ============================================================

const express = require('express');
const router  = express.Router();
const readingController = require('../controllers/readingController');

// POST /api/readings
router.post('/', readingController.addReading);

// GET /api/readings/history/:espId
router.get('/history/:espId', readingController.getHistory);

module.exports = router;
