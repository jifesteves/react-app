import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="weather-app">
          <h2 className="header"> Weather around the world</h2>
        <Weather defaultCity ="Lisbon" />
        </div>
      </div>
      <a href= "https://github.com/jifesteves/react-app" target ="_blank" rel="noreferrer"> Open-Source code </a> by <a href="https://www.linkedin.com/in/joana-esteves-63322328/" target="_blank" rel="noreferrer">Joana Esteves</a> 
    </div>
  );
}
