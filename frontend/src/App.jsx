import React, { useState, useEffect, useMemo } from 'react';

import initialLocations from './data/initialLocations';
import { fetchLocations } from './services/apiService';
import {
  calculateAverages,
  generateMinMaxData,
  getBackgroundState,
  getISTTimeString,
} from './utils/helpers';

import Background    from './components/Background';
import Header        from './components/Header';
import HeroStats     from './components/HeroStats';
import LocationsGrid from './components/LocationsGrid';
import MinMaxSection from './components/MinMaxSection';
import HistoryChart  from './components/HistoryChart';
import Footer        from './components/Footer';

function App() {
  const [locations, setLocations] = useState(initialLocations);
  const [clockTime, setClockTime] = useState('Loading Time...');
  const [bgState, setBgState]     = useState(() => getBackgroundState(new Date()));

  // Stable min-max estimation
  const minMaxData = useMemo(() => generateMinMaxData(locations), [locations]);

  // Live Clock & Dynamic Theme Updates
  useEffect(() => {
    function tick() {
      const now = new Date();
      setClockTime(getISTTimeString(now));
      setBgState(getBackgroundState(now));
    }
    tick();
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, []);

  // Poll backend for real-time sensor data
  useEffect(() => {
    async function loadData() {
      const data = await fetchLocations();
      if (data && data.length > 0) {
        setLocations(data);
      }
    }

    loadData();
    const pollId = setInterval(loadData, 5000);
    return () => clearInterval(pollId);
  }, []);

  // Derived values
  const { avgTemp, avgHumidity } = calculateAverages(locations);

  return (
    <>
      <Background
        bgClass={bgState.bgClass}
        celestialClass={bgState.celestialClass}
        celestialStyle={bgState.celestialStyle}
      />

      <Header clockTime={clockTime} />

      <main>
        <HeroStats avgTemp={avgTemp} avgHumidity={avgHumidity} />

        <div className="container">
          <LocationsGrid locations={locations} />
          <MinMaxSection minMaxData={minMaxData} />
          <HistoryChart locations={locations} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
