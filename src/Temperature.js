import React, { useState } from "react";
import "./Temperature.css"

export default function Temperature (props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahreneit (event) {
event.preventDefault();
setUnit("fahreneit");
  }

function convertToCelsius (event) {
  event.preventDefault ();
  setUnit("celsius");
}

  if (unit === 'celsius') {
  return (
  <div className = "Temperature">
  <span id="temperature">{Math.round(props.celsius)}</span>
              <span className="units">
                °C
                {" "}
                |{" "}
                <a href="..."  className="active" onClick ={convertToFahreneit}>
                  °F
                </a>
              </span>
  </div>
  );
  } else {
    let fahreneit = (props.celsius * 9/5) + 32;
    return (
  <div className = "Temperature">
  <span id="temperature">{Math.round(fahreneit)}</span>
              <span className="units">
                <a href="..." id="celsius" className="active" onClick={convertToCelsius} >
                  °C
                </a>{" "}
                |{" "}
                °F
               </span>
  </div>
    );
}}