import React from 'react';

export const Header: React.FC = () => {
  return (
    <header style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', zIndex: 10 }}>
      <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '10px 24px', borderRadius: '9999px', boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: '#FFFFFF', fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          JÓVENES UNIDOS
        </span>
      </div>
    </header>
  );
};
