-- ============================================================
-- setup.sql  —  Database Schema for Temperature Management
-- ============================================================
-- Run this script to create the necessary tables in PostgreSQL
-- Command: psql -U postgres -d temperature_db -f setup.sql
-- ============================================================

-- Drop tables if they already exist to start fresh
DROP TABLE IF EXISTS readings;
DROP TABLE IF EXISTS locations;

-- 1. Create 'locations' table
CREATE TABLE locations (
  id VARCHAR(50) PRIMARY KEY,        -- e.g. 'esp32_1'
  name VARCHAR(100) NOT NULL,        -- e.g. 'Main Library'
  temp NUMERIC(4, 1) NOT NULL,       -- e.g. 24.5
  humidity INTEGER NOT NULL,          -- e.g. 55
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create 'readings' table (Historical sensor logs)
CREATE TABLE readings (
  id SERIAL PRIMARY KEY,
  esp_id VARCHAR(50) REFERENCES locations(id) ON DELETE CASCADE,
  temp NUMERIC(4, 1) NOT NULL,
  humidity INTEGER NOT NULL,
  recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for fast queries by esp_id and time
CREATE INDEX idx_readings_esp_id ON readings(esp_id);
CREATE INDEX idx_readings_recorded_at ON readings(recorded_at);
