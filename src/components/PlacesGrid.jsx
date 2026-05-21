export default function PlacesGrid({ places, city }) {
    if (!places?.length) return (
      <div className="empty">
        <div className="empty-icon">📍</div>
        <p>No places found. Generate a trip first.</p>
      </div>
    );
  
    return (
      <div>
        {places.map((p, i) => (
          <div key={i} className="place-card">
            <span className="p-icon">{p.icon}</span>
            <div style={{ flex: 1 }}>
              <div className="p-name">{p.name}</div>
              <div className="p-type">{p.type}</div>
              <div className="p-meta">
                <span>★ {p.rating}</span>
                <span>{p.cost === 0 ? 'Free' : `$${p.cost}`}</span>
                <span>⏱ {p.duration}</span>
              </div>
              <div style={{ marginTop: '0.3rem' }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }