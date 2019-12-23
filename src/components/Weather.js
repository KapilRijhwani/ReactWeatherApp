import React from "react";

const Weather = props => (
  <div>
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.country && <p>Country: {props.country}</p>}
    {props.city && <p>City: {props.city}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Description: {props.description}</p>}
    {props.error && (
      <p>
        {" "}
        <b>
          <u> Error: {props.error} </u>
        </b>
      </p>
    )}
  </div>
);

export default Weather;
