import React, { useState } from 'react';

export default function Home() {
    const API = 'cebdbe1753a5af12101fc266dce79204';
    const url = "https://api.openweathermap.org/data/2.5/weather?q="

    // State to store the city name
    const [cityName, setCityName] = useState('');

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
    };


      // Function to handle form submission
      function handleSubmit(event) {
        event.preventDefault();
        getWeather();
    }

 return (
        <>
            <div className='mainContainer'>from Home component
            <form onSubmit={handleSubmit}>
                <input
                    id="SearchCity"
                    type="text"
                    placeholder="Enter City"
                    value={cityName}
                    onChange={e => setCityName(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>
            
            {weatherData && (
                <div>
                <h2>{weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp}°F</p>
                <p>Min Temperature: {weatherData.main.temp_min}°F</p>
                <p>Max Temperature: {weatherData.main.temp_max}°F</p>
                <p>Weather: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Wind Speed: {weatherData.wind.speed} mph</p>
                <p>Visibility: {weatherData.visibility} meters</p>
                <p>Pressure: {weatherData.main.pressure} hPa</p>
                <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
            )}
            </div>
         
        </>
        
    );
}

