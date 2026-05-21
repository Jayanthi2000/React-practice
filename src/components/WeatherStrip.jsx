export default function WeatherStrip({ weather }) {
    if (!weather?.length) return null;
    return (
      <div className="weather-strip">
        {weather.map((w, i) => (
          <div key={i} className="w-card">
            <div className="w-day">{w.day}</div>
            <div className="w-icon">{w.icon}</div>
            <div className="w-temp">{w.high}°/{w.low}°</div>
            <div className="w-cond">{w.condition}</div>
          </div>
        ))}
      </div>
    );
  }
  