import React, { useState } from 'react';
import Login from '../loginpage/login';
import Signup from '../signup/signup';
import './auth.css'; // Create this CSS

function Auth() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-container">
      <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
        <div className="front">
          <Login />
          <button className="flip-button" onClick={handleFlip}>Go to Signup</button>
        </div>
        <div className="back">
          <Signup />
          <button className="flip-button" onClick={handleFlip}>Go to Login</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
