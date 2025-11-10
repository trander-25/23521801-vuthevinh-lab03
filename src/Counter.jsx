import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <p style={{ 
        fontSize: '3rem', 
        fontWeight: 'bold', 
        color: '#333',
        margin: '20px 0'
      }}>
        {count}
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            background: '#4a5568',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.background = '#2d3748'}
          onMouseOut={(e) => e.target.style.background = '#4a5568'}
        >
          ➕ Increment
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            background: '#dc2626',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.background = '#b91c1c'}
          onMouseOut={(e) => e.target.style.background = '#dc2626'}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
