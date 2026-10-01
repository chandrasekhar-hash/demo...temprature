// ============================================================
// locationHelpers.js  —  Person 1: Location Status Helpers
// ============================================================

export function getLocationStatus(temperature) {
  const temp = Number(temperature);
  if (temp <= 22) return { status: 'Optimal', badgeClass: 'badge-optimal' };
  if (temp <= 26) return { status: 'Comfortable', badgeClass: 'badge-optimal' };
  return { status: 'Warm', badgeClass: 'badge-warm' };
}
