import React from 'react';
import { getLocationStatus } from '../utils/locationHelpers';

function LocationCard({ name, temp, humidity }) {
  const { status, badgeClass } = getLocationStatus(temp);

  return (
    <div className="location-card glass-card">
      <div className="card-header">
        <h3 className="location-name">{name}</h3>
        <span className={`status-badge ${badgeClass}`}>
          {status}
        </span>
      </div>

      <div className="card-metrics">
        <div className="metric-item">
          <span className="metric-label">Temperature</span>
          <div className="metric-value">
            {temp}<span className="unit">°C</span>
          </div>
        </div>

        <div className="metric-item">
          <span className="metric-label">Humidity</span>
          <div className="metric-value">
            {humidity}<span className="unit">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
