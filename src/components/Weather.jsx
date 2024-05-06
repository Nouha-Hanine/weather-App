import React, { useEffect, useState } from "react";
import axios from "axios";
import moon from "../assets/moon.svg";
import sunny from "../assets/sunny.svg";
import cloudy from "../assets/cloudy.svg";
import lightening from "../assets/lightening.svg";
const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [icon, setIcon] = useState(null);


  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a3d9fc1db3e6de26733e215512444a2b4
        `
      );
      
      setWeatherData(response.data);
      const temp = response.data.main.temp;
      if (temp < 10) {
        setIcon(moon); 
      } else if (temp >= 10 && temp < 20) {
        setIcon(cloudy); 
      } else if (temp >= 20 && temp < 30) {
        setIcon(sunny); 
      } else {
        setIcon(lightening); 
      }
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

 
    fetchData();
  }, []);



  return (
    
    <div>
      {weatherData ? 
      (
        
        <>
          <img src={icon} style={{marginTop: 10, marginBottom: 0, height: '50px', width: '50px', cursor: "auto"}} />
          <h2>{weatherData.name}</h2>
          <p>{weatherData.main.temp}°C</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;