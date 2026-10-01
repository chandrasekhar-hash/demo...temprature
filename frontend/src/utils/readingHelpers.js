// ============================================================
// readingHelpers.js  —  Person 2: Averages & Extreme Stat Calculations
// ============================================================

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
