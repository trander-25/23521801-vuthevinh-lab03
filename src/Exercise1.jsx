import React from 'react';

function Exercise1() {
  return (
    <div style={{ maxWidth: '700px', textAlign: 'left', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#667eea', marginBottom: '24px' }}>
        📝 Exercise 1: The React Paradigm
      </h2>

      <section style={{ marginBottom: '32px' }}>
        <h3 style={{ color: '#667eea', borderBottom: '2px solid #e9ecef', paddingBottom: '8px' }}>
          1. Conceptual Questions:
        </h3>
        
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ color: '#495057' }}>
            ⚡ Difference between Imperative and Declarative:
          </h4>
          
          <div style={{ 
            background: 'linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%)',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '16px',
            border: '2px solid #e9ecef'
          }}>
            <p><strong style={{ color: '#667eea' }}>Imperative (Command-based):</strong></p>
            <p>Involves providing clear, step-by-step instructions to achieve a result. In the context of UI, this means you have to manually find a DOM element and change its properties (e.g., "find the button, change its color to red, then disable it").</p>
          </div>

          <div style={{ 
            background: 'linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%)',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '16px',
            border: '2px solid #e9ecef'
          }}>
            <p><strong style={{ color: '#667eea' }}>Declarative:</strong></p>
            <p>Involves describing the desired final state of the UI without specifying the exact steps to achieve it. You simply tell React what the UI should look like at any given state, and React handles the rest.</p>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '20px',
            border: '2px solid #667eea40'
          }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#495057' }}>☕ Real-life Example (ordering coffee):</h4>
            <p><strong>Imperative:</strong> "Go to the counter, get in line, take out your wallet, order a black coffee with no sugar, pay 20,000 VND, wait for the staff to make it, receive the coffee and bring it to the table for me."</p>
            <p><strong>Declarative:</strong> "I want a black coffee with no sugar."</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h4 style={{ color: '#495057' }}>
          🧩 Three Main Benefits of Component-Based Architecture:
        </h4>
        
        <div style={{ 
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '16px'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <h5 style={{ color: '#667eea', margin: '0 0 8px 0' }}>1️⃣ Reusability</h5>
            <p style={{ margin: 0 }}>Components are designed to be reusable. A component (like a button or user profile card) can be created once and used in multiple places, significantly reducing code duplication and development time.</p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h5 style={{ color: '#667eea', margin: '0 0 8px 0' }}>2️⃣ Maintainability</h5>
            <p style={{ margin: 0 }}>Since components are encapsulated and have a single responsibility, updates and bug fixes are contained. Changing a component's logic doesn't accidentally affect other components.</p>
          </div>

          <div>
            <h5 style={{ color: '#667eea', margin: '0 0 8px 0' }}>3️⃣ Scalability</h5>
            <p style={{ margin: 0 }}>Complex applications can be built by assembling smaller, independent, and reusable components.</p>
          </div>
        </div>
      </section>

      <section>
        <h4 style={{ color: '#495057' }}>
          🚀 Role of Virtual DOM and Reconciliation:
        </h4>
        
        <div style={{ 
          background: 'linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%)',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '16px',
          border: '2px solid #e9ecef'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <h5 style={{ color: '#667eea', margin: '0 0 8px 0' }}>📋 Role of VDOM:</h5>
            <p style={{ margin: 0 }}>The VDOM is a programming concept where a lightweight, in-memory representation of the real DOM is maintained. Directly manipulating the browser's DOM is computationally expensive and can cause performance bottlenecks. The VDOM provides an efficient solution to this problem.</p>
          </div>

          <div>
            <h5 style={{ color: '#667eea', margin: '0 0 12px 0' }}>🔄 The "Reconciliation" Process:</h5>
            <ol style={{ marginLeft: '20px', lineHeight: '1.8' }}>
              <li>When a component's state changes, React creates a new VDOM tree.</li>
              <li>React compares this new VDOM tree with a snapshot of the previous VDOM tree using a high-performance "diffing" algorithm.</li>
              <li>The algorithm identifies the minimal set of changes needed to bring the real DOM in sync with the new VDOM.</li>
              <li>Finally, React only applies these specific, batched changes to the real DOM, avoiding unnecessary and expensive operations.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Exercise1;
