// ============================================================
// locationRoutes.js  —  Routes for Location API
// ============================================================

const express = require('express');
const router  = express.Router();
const locationController = require('../controllers/locationController');

// GET /api/locations
router.get('/', locationController.getLocations);

module.exports = router;
