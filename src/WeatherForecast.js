
import React, { useState } from "react";
import axios from "axios";
import ForecastByHour from "./ForecastByHour";
import "./WeatherForecast.css";

export default function WeatherForecast (props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

  function handleForecastResponse (response) {
    setForecast(response.data);
    setLoaded(true);
    
  }

if (loaded && props.city === forecast.city.name) {
  return (
    <div className ="WeatherForecast row">
        <ForecastByHour data={forecast.list[0]}/>  
        <ForecastByHour data={forecast.list[1]}/> 
        <ForecastByHour data={forecast.list[2]}/> 
        <ForecastByHour data={forecast.list[3]}/> 
        <ForecastByHour data={forecast.list[4]}/> 
        <ForecastByHour data={forecast.list[5]}/> 
    </div> 
  );

} else {
let apiKey = "04401a5e5263f12ae9fb23f6e2f1ed77"
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(url).then(handleForecastResponse);

return null;
  }
}
