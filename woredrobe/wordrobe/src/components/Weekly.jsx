import React from 'react';

const Weekly = ({ user }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '2rem' }}>Week Planner</h1>
      <div className="week-grid">
        {days.map((day, index) => {
          const plan = user?.weekPlan?.[index];
          return (
            <div key={day} className="day-card">
              <div className="day-header">{day}</div>
              <div className="day-body">
                {plan ? (
                  <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{plan}</span>
                ) : (
                  <span style={{ color: '#ccc', fontSize: '0.75rem' }}>No Plan</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weekly;