import React, { useState } from "react";
import "./WeatherCard.css";
import WeatherIcon from "./WeatherIcon.jsx";
import UnitChanger from "./UnitChanger.jsx";
// TODO have to recieve props from json file?
function WeatherCard({ temperature, humidity, windSpeed, pressure }) {
  const [convertedTemperature, setConvertedTemperature] = useState(temperature);
  const [convertedHumidity, setConvertedHumidity] = useState(humidity);
  const [convertedPressure, setConvertedPressure] = useState(pressure);
  const [convertedWindSpeed, setConvertedWindSpeed] = useState(windSpeed);
  const handleTemperatureChange = (value) => {
    setConvertedTemperature(value);
  };
  const handleHumidityChange = (value) => {
    setConvertedHumidity(value);
  };
  const handlePressureChange = (value) => {
    setConvertedPressure(value);
  };
  const handleWindSpeedchange = (value) => {
    setConvertedWindSpeed(value);
  };

  return (
    <>
      <WeatherIcon />
      <div className="glassCard">
        <p className="temp-name">Temperature:</p>
        <div className="temp-container">
          <p className="temp">
            {convertedTemperature} {UnitChanger.selected}
          </p>
          <UnitChanger
            options={["°C", "°F"]}
            value={temperature}
            onSelect={handleTemperatureChange}
          />
        </div>
        <hr
          style={{ backgroundColor: "white", height: "1px", border: "none" }}
        />
        <p className="humidity-name">Humidity:</p>
        <div className="humidity-container">
          <p className="humidity">{convertedHumidity} </p>
          <UnitChanger
            options={["%", "RH"]}
            value={humidity}
            onSelect={handleHumidityChange}
          />{" "}
        </div>
        <hr
          style={{ backgroundColor: "white", height: "1px", border: "none" }}
        />
        <p className="wind-name">Wind Speed:</p>
        <div className="windspeed-container">
          <p className="windspeed">
            {convertedWindSpeed} {UnitChanger.selected}
          </p>
          <UnitChanger
            options={["m/s", "km/h"]}
            value={windSpeed}
            onSelect={handleWindSpeedchange}
          />
        </div>

        <hr
          style={{ backgroundColor: "white", height: "1px", border: "none" }}
        />
        <p className="pressure-name">Pressure:</p>
        <div className="pressure-container">
          <p className="pressure">{convertedPressure} </p>
          <UnitChanger
            options={["Pa", "ATM"]}
            value={pressure}
            onSelect={handlePressureChange}
          />
        </div>
      </div>
    </>
  );
}

export default WeatherCard;