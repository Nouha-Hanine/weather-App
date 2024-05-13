import React, { useState } from 'react';
import './account.css';

function Account({ onClose }) {
  const [userName, setUserName] = useState('username');
  const [alertEnabled, setAlertEnabled] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const [selectedType, setSelectedType] = useState('Type A');
  
  const [isEditingName, setIsEditingName] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAlertToggle = () => {
    setAlertEnabled(!alertEnabled);
  };

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

 
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleUserNameClick = () => {
    setIsEditingName(true); 
  };

  

  const handleUserNameBlur = () => {
    setIsEditingName(false); 
  };

  const handleSave = () => {
   
    console.log('User name updated:', userName);
  };


  return (
    <div className="account-container">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <div className="profile-section">
       
        {/* Nom modifiable */}
        <div className="profile-name" onClick={handleUserNameClick}>
          <label htmlFor="userName">Name:</label>
          {isEditingName ? ( 
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
              onBlur={handleUserNameBlur}
              autoFocus 
            />
          ) : (
            
            <span>{userName}</span>
          )}
        </div>
      </div>
      {/* Section Alertes */}
      <div className="alert-section">
        
        <label>Alerts:</label>
        <button className={alertEnabled ? "enable-button" : "disable-button"} onClick={handleAlertToggle}>
          {alertEnabled ? 'Enable' : 'Disable'}
        </button>
      </div>
      {/* Section Changement de mot de passe */}
      <div className="password-section">
        <label htmlFor="oldPassword">Old Password:</label>
        <input
        placeholder='Enter your password'
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={handleOldPasswordChange}
        />
        <label htmlFor="newPassword">New Password:</label>
        <input
        placeholder='Enter new password'
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
       
      </div>
      {/* Section Choix de type */}
      <div className="type-section">
        <label htmlFor="type">Type:</label>
        <select id="type" value={selectedType} onChange={handleTypeChange}>
          <option value="Type A">student</option>
          <option value="Type B">airline-worker</option>
          <option value="Type C">agriculture-worker</option>
          <option value="Type D">driver</option>
        </select>
      </div>
      {/* Bouton de sauvegarde */}
      <button className="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default Account;


