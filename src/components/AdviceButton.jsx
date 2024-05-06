import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PopupAdvice from "./PopupAdvice";
import {motion} from 'framer-motion';

function AdviceButton() {
  const [popupButton, setPopupButton] = useState(false);
 /**TODO arrange the animation */
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
    onClick={() => setPopupButton(true)}
  >
    <LightbulbIcon />
  </IconButton>
</Tooltip>
    
      <PopupAdvice trigger={popupButton} setTrigger={setPopupButton}>
        <h3 style={{ color: "black" }}>my popup</h3>
        <p style={{ color: "black" }}>this will soon become an advice for user!</p>
      </PopupAdvice>
    </div>
  );
}

export default AdviceButton;