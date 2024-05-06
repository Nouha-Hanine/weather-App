import React, { useState } from 'react';
import './account.css';

function Account({ onClose }) {
  const [userName, setUserName] = useState('username');
  const [alertEnabled, setAlertEnabled] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedType, setSelectedType] = useState('Type A');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAlertToggle = () => {
    setAlertEnabled(!alertEnabled);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="account-container">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <div className="profile-section">
        {/* Photo de profil */}
        <div className="profile-image">
          <img src="/path/to/profile-image.jpg" alt="Profile" />
        </div>
        {/* Nom modifiable */}
        <div className="profile-name">
          <label htmlFor="userName">Name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>
      </div>
      {/* Section Alertes */}
      <div className="alert-section">
        <label>Alerte:</label>
        <button onClick={handleAlertToggle}>
          {alertEnabled ? 'Disable' : 'Enable'}
        </button>
      </div>
      {/* Section Changement de mot de passe */}
      <div className="password-section">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {/* Section Choix de type */}
      <div className="type-section">
        <label htmlFor="type">Type:</label>
        <select id="type" value={selectedType} onChange={handleTypeChange}>
        <option value="Type A">student</option>
          <option value="Type B">airline-worker</option>
          <option value="Type C">agriculture-worker</option>
          <option value="Type D">driving</option>
        </select>
      </div>
      {/* Bouton de sauvegarde */}
      <button className="save-btn">Save</button>
    </div>
  );
}

export default Account;

