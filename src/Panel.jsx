import React from 'react';

function Panel({ title, isActive, onShow, children }) {
  return (
    <div className="panel" style={{ 
      border: isActive ? '2px solid #1976d2' : '1px solid #ddd',
      transition: 'all 0.3s ease'
    }}>
      <h4 style={{ 
        margin: '0 0 8px 0',
        color: isActive ? '#1976d2' : '#333'
      }}>
        {title}
      </h4>
      {isActive ? (
        <div style={{ 
          padding: '8px 0',
          borderTop: '1px solid #ddd',
          marginTop: '8px',
          textAlign: 'left'
        }}>
          {children}
        </div>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </div>
  );
}

export default Panel;
