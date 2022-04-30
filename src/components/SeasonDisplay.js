import React from "react";
import "./season.css";
function getSeason(latitude, month) {
  if (latitude > 0) {
    return month > 2 && month < 9 ? "summer" : "winter";
  } else {
    return month > 2 && month < 9 ? "winter" : "summer";
  }
}

function SeasonDisplay(props) {
  let current_season = getSeason(props.latitude, new Date().getMonth());
  // let text = "hey its summer dont go out!";
  // let text = "hey its winter have fun!";
  let text =
    current_season === "summer"
      ? "hey its summer dont go out!"
      : "hey its winter have fun!";
  let iconName = current_season === "summer" ? "sun" : "snowflake";
  return (
    <div className="season-display">
      <i className={`massive ${iconName} icon`}></i>

      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`}></i>
    </div>
  );
}

export default SeasonDisplay;
