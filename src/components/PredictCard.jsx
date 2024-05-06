import React from "react";
import "./WeatherCard.css";
import "./PredictCard.css";
import WeatherPrediction from "./WeatherPrediction";
import { useState } from "react";
function PredictCard() {
  const [predict, setPredict] = useState(false);

  //add animation TODO
  //TODO gerer le link to predict
  return (
    <div id="predict">
      <div className="glass_card">
      {!predict && (
      <div className="btn-container">   
            <button 
            className="predict-btn"
            onClick={()=> {setPredict(true)}}
            >Click to predict!</button>
             </div>
          )}
          {predict && <WeatherPrediction />}
          
      </div>
    </div>
  );
}

export default PredictCard;
