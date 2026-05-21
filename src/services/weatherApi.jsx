import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE    = 'https://api.openweathermap.org/data/2.5';

export async function fetchWeather(lat, lon) {
  try {
    const res = await axios.get(`${BASE}/forecast`, {
      params: { lat, lon, appid: API_KEY, units: 'metric', cnt: 7 },
    });
    return res.data.list.map(item => ({
      day:       new Date(item.dt * 1000).toLocaleDateString('en', { weekday: 'short' }),
      condition: item.weather[0].description,
      icon:      item.weather[0].main === 'Rain'  ? '🌧️'
               : item.weather[0].main === 'Clear' ? '☀️'
               : item.weather[0].main === 'Snow'  ? '❄️'
               : '⛅',
      high: Math.round(item.main.temp_max),
      low:  Math.round(item.main.temp_min),
    }));
  } catch {
    // API key இல்லன்னா mock data return பண்ணு
    return ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day => ({
      day, icon: '⛅', condition: 'Partly Cloudy',
      high: Math.round(20 + Math.random() * 10),
      low:  Math.round(12 + Math.random() * 6),
    }));
  }
}