import React from 'react';

function MinMaxSection({ minMaxData }) {
  if (!minMaxData) return null;

  const { min, max } = minMaxData;

  return (
    <section className="minmax-section">
      <div className="minmax-grid">
        <div className="minmax-card glass-card card-min">
          <span className="minmax-badge">❄️ Coldest Spot</span>
          <h4 className="minmax-location">{min.name}</h4>
          <div className="minmax-value">{min.temp}°C</div>
        </div>

        <div className="minmax-card glass-card card-max">
          <span className="minmax-badge">🔥 Warmest Spot</span>
          <h4 className="minmax-location">{max.name}</h4>
          <div className="minmax-value">{max.temp}°C</div>
        </div>
      </div>
    </section>
  );
}

export default MinMaxSection;
