import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {

  let [weatherData, setWeatherData] = useState({ready:false});
  let [city, setCity] = useState (props.defaultCity);

  function handleResponse (response) {

  setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search()  {
  let apiKey = "04401a5e5263f12ae9fb23f6e2f1ed77";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit (event) {
    event.preventDefault()
    search();
  }

function handleCityInput (event) {
setCity(event.target.value);
}

if (weatherData.ready) {
    return (
<div>
      <div id="search-form">
      <form onSubmit = {handleSubmit}>
        <div className="row">
          <span className = "col">
           <input
              type="search"
              placeholder="Please type city"
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              onChange = {handleCityInput}
            />
            </span>
             <span className = "col">  <input type="submit" value="Search" className="btn btn-primary" /> </span> 
           <span className = "col"> 
             <input
              type="submit"
              value="📍"
              className="btn btn-success"
              id="current-loc"
            /> 
            </span>       
        </div>
      </form>
    </div>
    <WeatherInfo data={weatherData} />
   </div> 
)
} else {
    search()
   return "Loading...";
}
}
