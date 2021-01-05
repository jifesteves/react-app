import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props) {
 return (
 <div className="todayWeather">
      <h3 id="today"><FormattedDate date= {props.data.date} /> </h3>
      <div className="today">
        <h1 id="city">{props.data.city}</h1>
        <h2 className="todayInfo" id="today-temp">
          <ul>
            <li>
              <span id="temperature">{Math.round(props.data.temperature)}</span>
              <span className="units">
                <a href="..." id="celsius" className="active">
                  °C
                </a>{" "}
                |{" "}
                <a href="..." id="fahreneit" className="active">
                  °F
                </a>
              </span>
              <WeatherIcon code={props.data.icon}/>
             </li>
            <li>
              <span className= "text-capitalize" id="description">{props.data.description}</span>
            </li>
          </ul>
        </h2>
        ;
        <ul>
          <span className="measures">
            <li>
              <strong> Humidity: </strong>
              <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              <strong>Wind:</strong> <span id="wind">{props.data.wind}</span>km/h
            </li>
          </span>
        </ul>
      </div>
    </div> 
 );
}