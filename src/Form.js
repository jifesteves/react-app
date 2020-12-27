import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div id="search-form">
      <form>
        <div className="row">
          <span>
           <input
              type="search"
              placeholder="Please type city"
              autoFocus="on"
              autoComplete="off"
              id="city-input"
            />
            </span>
             <span>  <input type="submit" value="Search" className="btn btn-primary" /> </span> 
           <span> 
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