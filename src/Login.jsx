import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '300px' }}>
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <button type="submit">Login</button>
      <div style={{ marginTop: '16px', textAlign: 'left' }}>
        <p><strong>Current Values:</strong></p>
        <p>Username: {formData.username || '(empty)'}</p>
        <p>Password: {formData.password || '(empty)'}</p>
      </div>
    </form>
  );
}

export default Login;
