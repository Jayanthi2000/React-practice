export default function Header({ dark, toggle }) {
    return (
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: '16px', padding: '1rem 1.5rem', marginBottom: '1.5rem',
      }}>
        <div>
          <h1 style={{
            fontFamily: 'var(--font-h)', fontSize: '1.5rem',
            background: 'linear-gradient(135deg,#4f8ef7,#22d3a0)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>✈️ Wanderlust</h1>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            AI-Powered Travel Planner
          </p>
        </div>
        <button className="btn btn-ghost" onClick={toggle} style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>
    );
  }