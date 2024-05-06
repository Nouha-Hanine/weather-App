import React, { useState } from 'react';
import './Login.css';

function Login({ navigateTo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
   
    setEmail('');
    setPassword('');

   
    navigateTo('mainpage');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      
      <p>
        Not registered yet?{' '}
        <span onClick={() => navigateTo('signup')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          Create an account
        </span>
      </p>
    </div>
  );
}

export default Login;





