-- ============================================================
-- 01_locations_table.sql  —  Person 1: Location Feature DB Schema
-- ============================================================
-- Schema for temperature monitoring locations/rooms
-- ============================================================

DROP TABLE IF EXISTS locations CASCADE;

CREATE TABLE locations (
  id VARCHAR(50) PRIMARY KEY,        -- Unique ESP32 node identifier (e.g. 'esp32_1')
  name VARCHAR(100) NOT NULL,        -- Room/Location name (e.g. 'Main Library')
  temp NUMERIC(4, 1) NOT NULL,       -- Current temperature in Celsius
  humidity INTEGER NOT NULL,          -- Current humidity percentage
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
