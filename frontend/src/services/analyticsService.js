// ============================================================
// analyticsService.js  —  Person 3: Analytics API Service
// ============================================================

const API_BASE_URL = 'http://localhost:3000/api';

export async function fetchAnalyticsTrends() {
  try {
    const response = await fetch(`${API_BASE_URL}/analytics/trends`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('analyticsService error:', error.message);
    return [];
  }
}
