import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherPrediction() {
  const [predictedWeatherData, setPredictedWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=36.3557&lon=6.639&appid=484ae753b5bd4cebdb7022ea91af6f3b`
        );
        setPredictedWeatherData(response.data);
        console.log('here is the prediction :', response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {predictedWeatherData ? (
        <div className='predict-container'>
          <h2>{predictedWeatherData.city.name}</h2>
          {predictedWeatherData.list.map((dt_time, index) => (
          <div key={index}>
                <img
                  src={`http://openweathermap.org/img/w/${dt_time.weather[0].icon}.png`}
                  alt={dt_time.weather[0].description}
                  style={{height: 80, width:80}}
                />
              <p>
                Temperature: {dt_time.main.temp}°C (min: {dt_time.main.temp_max}°C, max:{' '}
                {dt_time.main.temp_min}°C)
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherPrediction;

/** <p>{new Date(day.dt * 1000).toLocaleDateString()}</p> */