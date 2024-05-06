import React, { useState } from 'react';
import './Signup.css';

function Signup({ navigateTo }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const handleSignup = (e) => {
    e.preventDefault();
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Type:', type);
    
    setName('');
    setEmail('');
    setPassword('');
    setType('');
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        
        <div className="form-group">
        <label htmlFor="type">Type:</label>
        <select id="type" value={type} onChange={handleTypeChange} required>
         
          <option value="Type A">student</option>
          <option value="Type B">airline-worker</option>
          <option value="Type C">agriculture-worker</option>
          <option value="Type D">driving</option>
        </select>
      </div>
          <button type="submit">Signup</button>
       
      </form>
      <p>
        Already have an account?{' '}
        <span onClick={() => navigateTo('login')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          Login here
        </span>
      </p>
    </div>
  );
}

export default Signup;



