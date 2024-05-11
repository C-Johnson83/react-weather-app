import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Home() {
  const API = "cebdbe1753a5af12101fc266dce79204";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=";

  // State to store the city name
  const [cityName, setCityName] = useState("");

  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);

  function getWeather() {
    const queryUrl = url + cityName + "&appid=" + API + "&units=imperial"; // for the current weather
    fetch(queryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data); // checking the data
        setWeatherData(data);
      });
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
  }

  return (
    <>
      <div className="mainContainer d-flex justify-content-center ms-auto">
        <div className="row">
          <div className="col-12 ">
            <form onSubmit={handleSubmit}>
              <input
              className="search"
                id="SearchCity"
                type="text"
                placeholder="Enter City"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
              <button type="submit">Get Weather</button>
              
            </form>
          </div>

          {weatherData && (
            <div className="col-12 card text-center mt-2">
              <div className="row mt-3">
              <div className="text-light col-3">
              <span> 
  <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}></img> 
  </span>
              </div>
              <div className="text-light col-2">
                <h4>{weatherData.name}</h4>
                <h5 className="text-secondary">City</h5>
              </div>

              <div className="text-light col-3">
                <h4>{weatherData.main.temp}°F</h4>
                <h5 className="text-secondary">Temperature</h5>
              </div>

              <div className="text-light col-2">
                <h4>{weatherData.wind.speed}</h4>
                <h5 className="text-secondary">Wind Speed</h5>
              </div>

              <div className="text-light col-2">
                <h4>{weatherData.main.humidity}%</h4>
                <h5 className="text-secondary">Humidity</h5>
              </div>
              <div className="card-body text-light">
              
              <p>Temperature: {weatherData.main.temp}°F</p>
              <p>Min Temperature: {weatherData.main.temp_min}°F</p>
              <p>Max Temperature: {weatherData.main.temp_max}°F</p>
              <p>Weather: {weatherData.weather[0].description}</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} mph</p>
              <p>Visibility: {weatherData.visibility} meters</p>
              <p>Pressure: {weatherData.main.pressure} hPa</p>
              <p>
                Sunrise:{" "}
                {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
              </p>
              <p>
                Sunset:{" "}
                {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
              </p>
             </div>
             </div>
            </div>
          )}
          
        </div>
      </div>
    </>
  );
}
