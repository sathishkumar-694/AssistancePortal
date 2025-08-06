import React from 'react';
import '../auth/auth.css';
// Login.jsx
function Login() {
  return (
    <div className="form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </div>
  );
}

export default Login;
