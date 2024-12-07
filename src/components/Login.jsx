import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Track whether user is on login or signup form
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with actual authentication logic
    if (email === 'admin@gmail.com' && password === 'password') {
      navigate('/dashboard'); // Redirect to Dashboard
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Replace with actual signup logic (e.g., create a new user in the database)
    alert('Signup successful! You can now log in.');
    setIsSignup(false); // After signup, switch to the login form
  };

  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={isSignup ? handleSignup : handleLogin}
      >
        <h2>{isSignup ? 'Signup' : 'Login'}</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>
      
      <div className="form-footer">
        {isSignup ? (
          <p>
            Already have an account?{' '}
            <span
              className="toggle-link"
              onClick={() => setIsSignup(false)} // Switch to login form
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{' '}
            <span
              className="toggle-link"
              onClick={() => setIsSignup(true)} // Switch to signup form
            >
              Sign up here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
