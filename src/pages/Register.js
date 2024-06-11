import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      navigate('/login'); // Navigate to the login page upon successful registration
    } catch (error) {
      console.error('Error registering:', error.message); // Log the error message
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="register-links">
          <span>Already have an account? <button onClick={handleLogin} className="link-button">Sign In</button></span>
        </div>
      </div>
      <div className="register-welcome">
        <h2>Welcome! Join Us Today!</h2>
      </div>
    </div>
  );
}

export default Register;
