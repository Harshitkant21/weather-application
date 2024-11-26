// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import '../CSS/WeatherCard.css';

// const WeatherCard = () => {
//   const { city } = useParams();
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/api/weather/${city}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchWeatherData();
//   }, [city]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!weatherData) {
//     return <div className='load'><div className='loader'></div></div>;
//   }

//   return (
//     <div className="weather-card">
//       <h2>Weather in {weatherData.name}</h2>
//       <div className="weather-details">
//         <div className="weather-temp">
//           <h3>Temperature</h3>
//           <p>{weatherData.main.temp}°C</p>
//         </div>
//         <div className="weather-info">
//           <h3>Humidity</h3>
//           <p>{weatherData.main.humidity}%</p>
//           <h3>Conditions</h3>
//           <p>{weatherData.weather[0].description}</p>
//           <h3>Wind</h3>
//           <p>{weatherData.wind.speed}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/WeatherCard.css";
import "weather-icons/css/weather-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faTemperatureThreeQuarters,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const WeatherCard = ({ theme }) => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/weather/${city}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!weatherData) {
    return (
      <div className="load">
        <div className={`loader ${theme}`}></div>
      </div>
    );
  }
  // Determine the icon based on the weather condition
  let weatherIcon;
  switch (weatherData.weather[0].main) {
    case "Clear":
      weatherIcon = <i className="wi wi-day-sunny"></i>; // Sunny weather icon
      break;
    case "Clouds":
      weatherIcon = <i className="wi wi-cloudy"></i>; // Cloudy weather icon
      break;
    case "Rain":
      weatherIcon = <i className="wi wi-rain"></i>; // Rainy weather icon
      break;
    case "Thunderstorm":
      weatherIcon = <i className="wi wi-thunderstorm"></i>; // Thunderstorm weather icon
      break;
    case "Snow":
      weatherIcon = <i className="wi wi-snow"></i>; // Snowy weather icon
      break;
    case "Drizzle":
      weatherIcon = <i className="wi wi-sprinkle"></i>; // Drizzle weather icon
      break;
    case "Wind":
      weatherIcon = <i className="wi wi-windy"></i>; // Windy weather icon
      break;
    default:
      weatherIcon = <i className="wi wi-day-sunny"></i>; // Default weather icon (sunny)
      break;
  }

  return (
    <div className="weather-card-container ">
      <div className={`weather-card ${theme}`}>
        <h2 className={`${theme}`}>{weatherData.name}</h2>
        <div className="weather-card-header">
          <p className={`weather-temp ${theme}`}>
            <FontAwesomeIcon icon={faTemperatureThreeQuarters} />{" "}
            {weatherData.main.temp}°C
          </p>
          <div className={`weather-icon ${theme}`}>
            {weatherIcon}
            <p className="weather-description">
              {weatherData.weather[0].description}
            </p>
          </div>
        </div>
        <div className={`weather-details ${theme}`}>
          <div className={`weather-item ${theme}`}>
            <h3 className={`${theme}`}>Humidity</h3>
            <p className={`${theme}`}>
              <FontAwesomeIcon icon={faDroplet} className={`icon ${theme}`} />{" "}
              {weatherData.main.humidity}%
            </p>
          </div>
          <div className={`weather-item ${theme}`}>
            <h3 className={`${theme}`}>Wind Speed</h3>
            <div className="wind-icon">
              <p className={`${theme}`}>
                <FontAwesomeIcon icon={faWind} className={`icon ${theme}`} />{" "}
                {weatherData.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
