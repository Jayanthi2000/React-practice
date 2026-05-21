import { useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import WeatherStrip from './components/WeatherStrip';
import ItineraryCard from './components/ItineraryCard';
import BudgetPanel from './components/BudgetPanel';
import PlacesGrid from './components/PlacesGrid';
import { useWeather } from './hooks/useWeather';
import { useLocalStorage } from './hooks/useLocalStorage';
import { generateItinerary } from './utils/itineraryGenerator';
import { estimateBudget } from './utils/budgetEstimator';
import { fetchPlaces } from './services/placesApi';
import { DESTINATIONS } from './data/destinations';
import './styles/globals.css';

const TABS = ['Plan', 'Itinerary', 'Budget', 'Places'];

export default function App() {
  const [dark, setDark]     = useState(true);
  const [tab, setTab]       = useState('Plan');
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [saved, setSaved]   = useState(false);

  const [form, setForm] = useState({
    destination: 'Paris', tripType: 'standard',
    startDate: '', endDate: '', travelers: 2, budget: 2000,
  });

  const [trip, setTrip, clearTrip] = useLocalStorage('wanderlust', null);

  const destInfo = DESTINATIONS.find(d => d.city === form.destination) || DESTINATIONS[0];
  const { weather } = useWeather(trip ? destInfo.lat : null, trip ? destInfo.lon : null);

  function handleChange(e) {
    const val = e.target.type === 'number' ? +e.target.value : e.target.value;
    setForm(f => ({ ...f, [e.target.name]: val }));
  }

  async function handleGenerate() {
    setLoading(true);
    const start = new Date(form.startDate);
    const end   = new Date(form.endDate);
    const days  = (form.startDate && form.endDate)
      ? Math.max(1, Math.round((end - start) / 86400000))
      : 5;

    const itinerary = generateItinerary(form.destination, days, form.tripType);
    const budget    = estimateBudget(form.destination, days, form.travelers, form.tripType);
    const fetched   = await fetchPlaces(form.destination);

    setPlaces(fetched);
    setTrip({ destInfo, days, itinerary, budget, form });
    setLoading(false);
    setTab('Itinerary');
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const tabIcons = { Plan: '🗺', Itinerary: '📅', Budget: '💰', Places: '📍' };

  return (
    <div className={dark ? '' : 'light'} style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="app">

        <Header dark={dark} toggle={() => setDark(d => !d)} />

        {/* Tabs */}
        <div className="tabs">
          {TABS.map(t => (
            <button key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
              {tabIcons[t]} {t}
            </button>
          ))}
        </div>

        {/* ── PLAN TAB ── */}
        {tab === 'Plan' && (
          <SearchForm form={form} onChange={handleChange} onGenerate={handleGenerate} loading={loading} />
        )}

        {/* ── ITINERARY TAB ── */}
        {tab === 'Itinerary' && (
          trip ? (
            <>
              <div className="card">
                <h2 style={{ fontFamily: 'var(--font-h)', fontSize: '1.3rem' }}>
                  {trip.destInfo.emoji} {trip.destInfo.city}
                </h2>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {trip.destInfo.country} · {trip.days} days · {trip.form.travelers} traveler(s) · {trip.form.tripType}
                </p>
                <WeatherStrip weather={weather} />
              </div>
              <div className="card">
                <h2 className="section-title">Daily Itinerary</h2>
                {trip.itinerary.map((day, i) => <ItineraryCard key={i} day={day} />)}
              </div>
            </>
          ) : (
            <div className="card empty">
              <div className="empty-icon">📅</div>
              <p>Go to Plan tab and generate a trip first!</p>
            </div>
          )
        )}

        {/* ── BUDGET TAB ── */}
        {tab === 'Budget' && (
          trip ? (
            <BudgetPanel
              budget={trip.budget}
              userBudget={form.budget}
              days={trip.days}
              travelers={trip.form.travelers}
            />
          ) : (
            <div className="card empty">
              <div className="empty-icon">💰</div>
              <p>Generate a trip to see budget breakdown.</p>
            </div>
          )
        )}

        {/* ── PLACES TAB ── */}
        {tab === 'Places' && (
          <div className="card">
            <h2 className="section-title">
              Top Places {trip ? `in ${trip.destInfo.city}` : ''}
            </h2>
            <PlacesGrid places={places} />
          </div>
        )}

        {/* Save Bar */}
        {trip && (
          <div className="save-bar">
            <button className="btn btn-ghost" style={{ maxWidth: 160 }} onClick={() => { clearTrip(); setPlaces([]); setTab('Plan'); }}>
              🗑 Clear Trip
            </button>
            <button className="btn btn-primary" style={{ maxWidth: 220 }} onClick={handleSave}>
              {saved ? '✅ Saved!' : '💾 Save Trip'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}