import React, { useState } from "react";
import "./TodayTemp.css";
import axios from "axios";

export default function TodayTemp(props) {

  
  let [weatherData, setWeatherData] = useState({ready:false});
  
  function handleResponse (response) {

  setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Thrusday 03:06",
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }


   if (weatherData.ready) {
    return (
    <div className="todayWeather">
      <h3 id="today">{weatherData.date}</h3>
      <div className="today">
        <h1 id="city">{weatherData.city}</h1>
        <h2 className="todayInfo" id="today-temp">
          <ul>
            <li>
              <span id="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="units">
                <a href="..." id="celsius" className="active">
                  °C
                </a>{" "}
                |{" "}
                <a href="..." id="fahreneit" className="active">
                  °F
                </a>
              </span>
              <img
                src=  {weatherData.icon}
                alt= {weatherData.description}
                id="temp-icon"
              />
            </li>
            <li>
              <span className= "text-capitalize" id="description">{weatherData.description}</span>
            </li>
          </ul>
        </h2>
        ;
        <ul>
          <span className="measures">
            <li>
              <strong> Humidity: </strong>
              <span id="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              <strong>Wind:</strong> <span id="wind">{weatherData.wind}</span>km/h
            </li>
          </span>
        </ul>
      </div>
    </div>
  );

  } else {
  
  let apiKey = "04401a5e5263f12ae9fb23f6e2f1ed77";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}
}
