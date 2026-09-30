import React from 'react';

function LocationCard({ name, temp, humidity }) {
  const isOptimal = temp <= 25;

  return (
    <div className="location-card glass-card">
      <div className="card-header">
        <h3 className="location-name">{name}</h3>
        <span className={`status-badge ${isOptimal ? 'badge-optimal' : 'badge-warm'}`}>
          {isOptimal ? 'Optimal' : 'Warm'}
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
