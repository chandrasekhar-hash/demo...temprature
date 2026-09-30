// ============================================================
// helpers.js  —  Utility & Formatting functions
// ============================================================

// Returns formatted IST time string
export function getISTTimeString(date = new Date()) {
  return date.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

// Determines sky background theme based on current hour
export function getBackgroundState(date = new Date()) {
  const hour = date.getHours();
  if (hour >= 5 && hour < 8) {
    return { bgClass: 'dawn', celestialClass: 'sun-rising', celestialStyle: {} };
  } else if (hour >= 8 && hour < 17) {
    return { bgClass: 'day', celestialClass: 'sun-high', celestialStyle: {} };
  } else if (hour >= 17 && hour < 19) {
    return { bgClass: 'dusk', celestialClass: 'sun-setting', celestialStyle: {} };
  } else {
    return { bgClass: 'night', celestialClass: 'moon', celestialStyle: {} };
  }
}

// Calculates average temperature and humidity across all locations
export function calculateAverages(locations = []) {
  if (!locations || locations.length === 0) {
    return { avgTemp: '0.0', avgHumidity: '0' };
  }

  const totalTemp = locations.reduce((acc, loc) => acc + Number(loc.temp || 0), 0);
  const totalHum  = locations.reduce((acc, loc) => acc + Number(loc.humidity || 0), 0);

  return {
    avgTemp: (totalTemp / locations.length).toFixed(1),
    avgHumidity: Math.round(totalHum / locations.length).toString()
  };
}

// Computes min & max temperature records from locations
export function generateMinMaxData(locations = []) {
  if (!locations || locations.length === 0) return null;

  let minLoc = locations[0];
  let maxLoc = locations[0];

  locations.forEach(loc => {
    if (Number(loc.temp) < Number(minLoc.temp)) minLoc = loc;
    if (Number(loc.temp) > Number(maxLoc.temp)) maxLoc = loc;
  });

  return {
    min: { name: minLoc.name, temp: minLoc.temp },
    max: { name: maxLoc.name, temp: maxLoc.temp }
  };
}

// Generates 24h temperature dataset for Chart.js
export function generateChartDatasets(locations = []) {
  const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`);

  const colors = [
    '#38bdf8', '#f43f5e', '#10b981', '#fbbf24', '#a855f7', '#ec4899'
  ];

  const datasets = locations.map((loc, idx) => {
    const baseTemp = Number(loc.temp) || 24;
    const data = hours.map((_, h) => {
      // Simulate diurnal variation (cooler at night, warmer mid-day)
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
