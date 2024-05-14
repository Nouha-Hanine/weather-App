import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PopupAdvice from "./PopupAdvice";
import axios from 'axios';

function AdviceButton({user}) {
  const [advice, setAdvice] = useState("no advice");
  const [popupButton, setPopupButton] = useState(false);
 const [userName, setUserName] = useState('');
  const [alertEnabled, setAlertEnabled] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState(''); 
  const [userPassword, setUserPassword] = useState(''); 
  
  useEffect(() => {
    if (user) {
      setUserId(user._id);
      setUserName(user.name);
      setAlertEnabled(user.alerts === 'enable');
      setSelectedType(user.type);
      setUserEmail(user.email); 
      setUserPassword(user.password); 
    }
  }, [user]);

  
  const fetchRandomAdvice = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/randomAdvice/${selectedType}`);
      if (response.status !== 200) { // Check status directly
        throw new Error('Network response was not ok');
      }
      setAdvice(response.data);
    } catch (error) {
      console.log("type is in here : ", selectedType);
      console.error('Error fetching random advice:', error);
    }
  };
  

  

  return (
    <div>
      <Tooltip
        title="Get an advice" arrow
        style={{
          zIndex: 3,
          textAlign: "center",
          position: "fixed",
          right: 30,
          bottom: 30,
          backgroundColor: "white", 
        }}
      >
        <IconButton
          color="info"
          aria-label="get-advice"
          onClick={() => {
            fetchRandomAdvice();
            setPopupButton(true);
          }}
        >
          <LightbulbIcon />
        </IconButton>
      </Tooltip>
        
      <PopupAdvice trigger={popupButton} setTrigger={setPopupButton}>
        <h3 style={{ color: "black" }}>{selectedType}</h3>
        <p style={{ color: "black" }}>{advice}</p>
      </PopupAdvice>
    </div>
  );
}

export default AdviceButton;
