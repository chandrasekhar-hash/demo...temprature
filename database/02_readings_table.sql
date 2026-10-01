-- ============================================================
-- 02_readings_table.sql  —  Person 2: Sensor Readings DB Schema
-- ============================================================
-- Schema for historical sensor reading logs
-- ============================================================

DROP TABLE IF EXISTS readings CASCADE;

CREATE TABLE readings (
  id SERIAL PRIMARY KEY,
  esp_id VARCHAR(50) REFERENCES locations(id) ON DELETE CASCADE,
  temp NUMERIC(4, 1) NOT NULL,
  humidity INTEGER NOT NULL,
  recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for fast time-series queries
CREATE INDEX idx_readings_esp_id ON readings(esp_id);
CREATE INDEX idx_readings_recorded_at ON readings(recorded_at);
