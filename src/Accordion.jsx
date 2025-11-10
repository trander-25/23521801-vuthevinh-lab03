import React, { useState } from 'react';
import Panel from './Panel';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Panel
        title="What is React?"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <p>React is a JavaScript library for building user interfaces. It was created by Facebook and is maintained by Meta and a community of developers.</p>
      </Panel>
      <Panel
        title="Why use State Management?"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <p>State management allows components to track and respond to changes in data over time. It's essential for creating interactive user interfaces.</p>
      </Panel>
      <Panel
        title="What is Lifting State Up?"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <p>Lifting state up means moving state from child components to their common parent. This allows sibling components to share and synchronize data.</p>
      </Panel>
    </div>
  );
}

export default Accordion;
