-- ============================================================
-- setup.sql  —  Person 4: Master Database Initialization Script
-- ============================================================
-- Executes complete schema initialization for PostgreSQL
-- Command: psql -U postgres -d temperature_db -f database/setup.sql
-- ============================================================

\i database/01_locations_table.sql
\i database/02_readings_table.sql
