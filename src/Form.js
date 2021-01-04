import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div id="search-form">
      <form>
        <div className="row">
          <span className = "col">
           <input
              type="search"
              placeholder="Please type city"
              autoFocus="on"
              autoComplete="off"
              id="city-input"
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
  );
}