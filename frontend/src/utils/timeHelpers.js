// ============================================================
// timeHelpers.js  —  Person 4: Time Formatting & Sky Theme Calculator
// ============================================================

export function getISTTimeString(date = new Date()) {
  return date.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

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
