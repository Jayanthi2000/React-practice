import { useState } from 'react';

export default function ItineraryCard({ day }) {
  const [open, setOpen] = useState(false);
  const total = day.activities.reduce((s, a) => s + a.cost, 0);

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: '12px', marginBottom: '0.75rem', overflow: 'hidden' }}>

      {/* Header */}
      <div onClick={() => setOpen(o => !o)} style={{
        background: 'var(--bg-glass)', padding: '0.9rem 1.2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        cursor: 'pointer', userSelect: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            background: 'linear-gradient(135deg,#4f8ef7,#22d3a0)',
            color: '#fff', padding: '0.2rem 0.7rem',
            borderRadius: '999px', fontSize: '0.73rem', fontWeight: 600,
          }}>Day {day.day}</span>
          <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{day.title}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--green)' }}>~${total}</span>
          <span style={{ color: 'var(--text-muted)' }}>{open ? '▾' : '▸'}</span>
        </div>
      </div>

      {/* Body */}
      {open && (
        <div style={{ padding: '0.75rem 1.2rem' }}>
          {day.activities.map((a, i) => (
            <div key={i} className="activity">
              <span className="act-time">{a.time}</span>
              <div className="act-dot" />
              <div>
                <div className="act-name">{a.name}</div>
                <div className="act-cost">${a.cost} per person</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}