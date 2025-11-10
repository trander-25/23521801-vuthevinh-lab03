import React from 'react';

function Exercise2() {
  return (
    <div style={{ maxWidth: '700px', textAlign: 'left', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#667eea', marginBottom: '24px' }}>
        🚀 Exercise 2: Setting Up Modern React Development Environment
      </h2>

      <section style={{ marginBottom: '32px' }}>
        <h3 style={{ color: '#667eea', borderBottom: '2px solid #e9ecef', paddingBottom: '8px' }}>
          1. Project Setup:
        </h3>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '20px',
          border: '2px solid #667eea40'
        }}>
          <h4 style={{ margin: '0 0 16px 0', color: '#495057' }}>📦 Installation Commands:</h4>
          <div style={{ 
            background: '#2d3748',
            color: '#e2e8f0',
            padding: '16px',
            borderRadius: '6px',
            fontFamily: 'monospace',
            marginBottom: '12px'
          }}>
            <div>$ npm create vite@latest react-basics-exercise -- --template react</div>
            <div>$ cd react-basics-exercise</div>
            <div>$ npm install</div>
            <div>$ npm run dev</div>
          </div>
          
          <div style={{ 
            background: '#ffffff',
            padding: '16px',
            borderRadius: '8px',
            marginTop: '16px',
            border: '2px solid #667eea'
          }}>
            <p style={{ margin: '0 0 8px 0' }}><strong style={{ color: '#667eea' }}>🌐 Running Application URL:</strong></p>
            <p style={{ 
              margin: 0,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#667eea',
              fontFamily: 'monospace'
            }}>
              http://localhost:5173
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 style={{ color: '#667eea', borderBottom: '2px solid #e9ecef', paddingBottom: '8px' }}>
          2. File/Folder Descriptions:
        </h3>

        <div style={{ marginTop: '20px' }}>
          <div style={{ 
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '16px',
            border: '2px solid #e9ecef',
            transition: 'all 0.3s ease'
          }}>
            <h4 style={{ 
              color: '#667eea',
              margin: '0 0 12px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>📄</span>
              <code style={{ 
                background: '#f8f9fa',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}>
                index.html
              </code>
            </h4>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              This is the main HTML file of the application. It's located in the project root (different from CRA) and serves as the <strong>entry point</strong>. Vite automatically injects script tags into this file.
            </p>
          </div>

          <div style={{ 
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '16px',
            border: '2px solid #e9ecef',
            transition: 'all 0.3s ease'
          }}>
            <h4 style={{ 
              color: '#667eea',
              margin: '0 0 12px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>⚛️</span>
              <code style={{ 
                background: '#f8f9fa',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}>
                src/main.jsx
              </code>
            </h4>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              This is the <strong>main entry point</strong> for the application's source code. This file is responsible for rendering the App component (root component) into the DOM.
            </p>
          </div>

          <div style={{ 
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '16px',
            border: '2px solid #e9ecef',
            transition: 'all 0.3s ease'
          }}>
            <h4 style={{ 
              color: '#667eea',
              margin: '0 0 12px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🎨</span>
              <code style={{ 
                background: '#f8f9fa',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}>
                src/App.jsx
              </code>
            </h4>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              This is the <strong>root React component</strong> of the application. This is where you'll start building your user interface.
            </p>
          </div>
        </div>

        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          marginTop: '24px',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 12px 0' }}>✨ Vite Project Structure</h4>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)',
            padding: '16px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            textAlign: 'left',
            fontSize: '0.9rem',
            lineHeight: '1.8'
          }}>
            <div>📁 react-basics-exercise/</div>
            <div style={{ marginLeft: '20px' }}>├── 📄 index.html</div>
            <div style={{ marginLeft: '20px' }}>├── 📄 package.json</div>
            <div style={{ marginLeft: '20px' }}>├── 📄 vite.config.js</div>
            <div style={{ marginLeft: '20px' }}>└── 📁 src/</div>
            <div style={{ marginLeft: '40px' }}>├── ⚛️ main.jsx</div>
            <div style={{ marginLeft: '40px' }}>├── 🎨 App.jsx</div>
            <div style={{ marginLeft: '40px' }}>└── 💅 App.css</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Exercise2;
