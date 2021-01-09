import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastByHour (props) {
  function  hours() {
  let date = new Date(props.data.dt * 1000);
  let hours = date.getHours();
  return `${hours}:00`;
}

  return (
    <div className= "col">
      {hours()}
      <WeatherIcon code = {props.data.weather[0].icon} size = {40} />
      {Math.round(props.data.main.temp)}°C

    </div>
  )
}
