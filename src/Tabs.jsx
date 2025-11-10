import React, { useState } from 'react';

function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={active === idx ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActive(idx)}
            title={tab.label}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[active].content}
      </div>
    </div>
  );
}

export default Tabs;
