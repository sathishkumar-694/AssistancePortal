import React, { useState } from 'react';
import './auth.css'

const FlipAuth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flip-container">
      <div className="tabs">
        <button
          className={isLogin ? 'active' : ''}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? 'active' : ''}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      <div className={`flip-card ${isLogin ? '' : 'flipped'}`}>
        <div className="form login-form">
          
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>

        <div className="form signup-form">
          
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="🔏Password" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default FlipAuth;
