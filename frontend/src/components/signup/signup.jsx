import React from 'react';
import '../auth/auth.css';

function Signup() {
  return (
    <div className="form">
      <h2>Signup</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Signup</button>
    </div>
  );
}

export default Signup;
