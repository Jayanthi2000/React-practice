import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/weatherApi';

export function useWeather(lat, lon) {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!lat || !lon) return;
    setLoading(true);
    fetchWeather(lat, lon)
      .then(data => { setWeather(data); setLoading(false); });
  }, [lat, lon]);

  return { weather, loading };
}