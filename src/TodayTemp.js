import React from "react";
import axios from "axios";
import "./TodayTemp.css";

export default function TodayTemp() {
  return (
    <div className="todayWeather">
      <h3 id="today">Thrusday 03:06</h3>
      <div className="today">
        <h1 id="city">Lisbon </h1>
        <h2 className="todayInfo" id="today-temp">
          <ul>
            <li>
              <span id="temperature">19</span>
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
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="icon"
                id="temp-icon"
              />
            </li>
            <li>
              <span id="description">Description</span>
            </li>
          </ul>
        </h2>
        ;
        <ul>
          <span className="measures">
            <li>
              <strong> Humidity: </strong>
              <span id="humidity">0</span>%
            </li>
            <li>
              <strong>Wind:</strong> <span id="wind">0</span>km/h
            </li>
          </span>
        </ul>
      </div>
    </div>
  );
}
