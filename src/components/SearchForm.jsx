import { DESTINATIONS } from '../data/destinations';

export default function SearchForm({ form, onChange, onGenerate, loading }) {
  return (
    <div className="card">
      <h2 className="section-title">Plan Your Adventure</h2>

      <div className="form-row col-2">
        <div className="form-group">
          <label>Destination</label>
          <select name="destination" value={form.destination} onChange={onChange}>
            {DESTINATIONS.map(d => (
              <option key={d.city} value={d.city}>{d.emoji} {d.city}, {d.country}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Trip Style</label>
          <select name="tripType" value={form.tripType} onChange={onChange}>
            <option value="budget">🎒 Budget</option>
            <option value="standard">⭐ Standard</option>
            <option value="luxury">💎 Luxury</option>
          </select>
        </div>
      </div>

      <div className="form-row col-3">
        <div className="form-group">
          <label>Start Date</label>
          <input type="date" name="startDate" value={form.startDate} onChange={onChange} />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input type="date" name="endDate" value={form.endDate} onChange={onChange} />
        </div>
        <div className="form-group">
          <label>Travelers</label>
          <select name="travelers" value={form.travelers} onChange={onChange}>
            {[1,2,3,4,5,6].map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Your Total Budget (USD)</label>
        <input type="number" name="budget" value={form.budget} onChange={onChange} min="100" placeholder="e.g. 3000" />
      </div>

      <button className="btn btn-primary" onClick={onGenerate} disabled={loading}>
        {loading ? '✨ Generating...' : '✨ Generate My Trip'}
      </button>

      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <div className="spinner" style={{ marginBottom: '0.75rem' }} />
          Crafting your perfect itinerary...
        </div>
      )}
    </div>
  );
}