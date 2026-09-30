import React from 'react';
import LocationCard from './LocationCard';

function LocationsGrid({ locations }) {
  return (
    <section className="locations-section">
      <h2 className="section-title">Live Sensor Locations</h2>
      <div className="locations-grid">
        {locations.map((loc) => (
          <LocationCard
            key={loc.id}
            name={loc.name}
            temp={loc.temp}
            humidity={loc.humidity}
          />
        ))}
      </div>
    </section>
  );
}

export default LocationsGrid;
