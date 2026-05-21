import { getTotal } from '../utils/budgetEstimator';

const COLORS = {
  accommodation: '#4f8ef7',
  food:          '#22d3a0',
  transport:     '#f59e0b',
  activities:    '#a78bfa',
  misc:          '#f87171',
};

export default function BudgetPanel({ budget, userBudget, days, travelers }) {
  const total    = getTotal(budget);
  const within   = total <= parseInt(userBudget || 0);
  const diff     = Math.abs(parseInt(userBudget || 0) - total);

  return (
    <div className="card">
      <h2 className="section-title">Budget Breakdown</h2>

      <div className="budget-grid">
        {Object.entries(budget).map(([k, v]) => (
          <div key={k} className="b-item">
            <div className="b-label">{k}</div>
            <div className="b-amount" style={{ color: COLORS[k] }}>${v.toLocaleString()}</div>
          </div>
        ))}
      </div>

      <div className="b-total">
        <div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Total Estimated</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            {days} days · {travelers} traveler(s)
          </div>
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-h)', color: 'var(--accent)' }}>
          ${total.toLocaleString()}
        </div>
      </div>

      {/* Bar chart */}
      <div className="bar-track">
        {Object.entries(budget).map(([k, v]) => (
          <div key={k} className="bar-seg"
            style={{ width: `${(v / total * 100).toFixed(1)}%`, background: COLORS[k], minWidth: 4 }} />
        ))}
      </div>
      <div className="legend">
        {Object.entries(COLORS).map(([k, c]) => (
          <div key={k} className="leg-item">
            <div className="leg-dot" style={{ background: c }} />
            <span style={{ textTransform: 'capitalize' }}>{k} ({((budget[k] || 0) / total * 100).toFixed(0)}%)</span>
          </div>
        ))}
      </div>

      {/* Alert */}
      <div style={{
        marginTop: '1rem', padding: '0.75rem 1rem', borderRadius: '10px', fontSize: '0.85rem',
        background: within ? 'rgba(34,211,160,0.08)' : 'rgba(248,113,113,0.08)',
        border: `1px solid ${within ? 'rgba(34,211,160,0.25)' : 'rgba(248,113,113,0.25)'}`,
        color: within ? 'var(--green)' : 'var(--red)',
      }}>
        {within
          ? `✅ Within budget! You save $${diff.toLocaleString()}`
          : `⚠️ Over budget by $${diff.toLocaleString()} — try Budget style or fewer days`}
      </div>
    </div>
  );
}