// ============================================================
// chartHelpers.js  —  Person 3: Chart.js Dataset Formatter
// ============================================================

export function generateChartDatasets(locations = []) {
  const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);
  const colors = ['#38bdf8', '#f43f5e', '#10b981', '#fbbf24', '#a855f7', '#ec4899'];

  const datasets = locations.map((loc, idx) => {
    const baseTemp = Number(loc.temp) || 24;
    const data = hours.map((_, h) => {
      const variation = Math.sin((h - 6) * (Math.PI / 12)) * 3;
      return +(baseTemp + variation + (Math.random() - 0.5)).toFixed(1);
    });

    const color = colors[idx % colors.length];

    return {
      label: loc.name,
      data: data,
      borderColor: color,
      backgroundColor: `${color}22`,
      tension: 0.4,
      pointRadius: 2,
      pointHoverRadius: 5
    };
  });

  return { labels: hours, datasets };
}
