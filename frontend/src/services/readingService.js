// ============================================================
// readingService.js  —  Person 2: Sensor Ingestion API Service
// ============================================================

const API_BASE_URL = 'http://localhost:3000/api';

export async function submitSensorReading(readingData) {
  try {
    const response = await fetch(`${API_BASE_URL}/readings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(readingData),
    });
    return await response.json();
  } catch (error) {
    console.error('readingService error:', error.message);
    return { error: error.message };
  }
}
