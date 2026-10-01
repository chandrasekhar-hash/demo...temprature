// ============================================================
// locationService.js  —  Person 1: Location API Service
// ============================================================

const API_BASE_URL = 'http://localhost:3000/api';

export async function fetchLocationsFromApi() {
  try {
    const response = await fetch(`${API_BASE_URL}/locations`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('locationService error:', error.message);
    return null;
  }
}
