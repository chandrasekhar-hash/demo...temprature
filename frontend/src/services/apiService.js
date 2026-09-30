// ============================================================
// apiService.js  —  Centralized API calls to Node.js Backend
// ============================================================

const API_BASE_URL = 'http://localhost:3000/api';

// Fetch all active location readings
export async function fetchLocations() {
  try {
    const response = await fetch(`${API_BASE_URL}/locations`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('API Error (fetchLocations):', error.message);
    return null;
  }
}

// Fetch historical readings for a specific location
export async function fetchLocationHistory(espId) {
  try {
    const response = await fetch(`${API_BASE_URL}/readings/history/${espId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`API Error (fetchLocationHistory for ${espId}):`, error.message);
    return [];
  }
}
