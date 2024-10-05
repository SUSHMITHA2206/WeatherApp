// // src/Weather.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Weather.css'; // Import the CSS file

// const Weather = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//     const [error, setError] = useState('');

//     const fetchWeather = async () => {
//         const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
//         try {
//             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8255f9fec03f2e1eeb4226f4b1ce5125&units=metric`);
//             setWeatherData(response.data);
//             setError('');
//         } catch (err) {
//             setError('City not found. Please try again.');
//             setWeatherData(null);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetchWeather();
//     };

//     return (
//         <div className="App">
//             {/* Cloud elements */}
//             <div className="cloud cloud1"></div>
//             <div className="cloud cloud2"></div>
//             {/* Sun element */}
//             <div className="sun"></div>

//             <h1>Weather App</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     placeholder="Enter city name"
//                     required
//                 />
//                 <button type="submit">Get Weather</button>
//             </form>
//             {error && <p>{error}</p>}
//             {weatherData && (
//                 <div className="weather-info">
//                     <h2>Weather in {weatherData.name}</h2>
//                     <p>Temperature: {weatherData.main.temp}°C</p>
//                     <p>Weather: {weatherData.weather[0].description}</p>
//                     <p>Humidity: {weatherData.main.humidity}%</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Weather;


import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import the CSS file

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null); // New state for forecast
    const [error, setError] = useState('');

    const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8255f9fec03f2e1eeb4226f4b1ce5125&units=metric`
            );
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            setError('City not found. Please try again.');
            setWeatherData(null);
        }
    };

    const fetchForecast = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8255f9fec03f2e1eeb4226f4b1ce5125&units=metric`
            );
            setForecastData(response.data.list.slice(0, 5)); // Get 5-day forecast
            setError('');
        } catch (err) {
            setError('City not found. Please try again.');
            setForecastData(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    const handleForecast = () => {
        fetchForecast(); // Trigger the 5-day forecast API call
    };

    return (
        <div className="App">
            <div className="cloud cloud1"></div>
            <div className="cloud cloud2"></div>
            <div className="sun"></div>

            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    required
                />
                <button type="submit">Get Weather</button>
            </form>

            <button onClick={handleForecast}>Get 5-Day Forecast</button> {/* New Button */}

            {error && <p>{error}</p>}

            {weatherData && (
                <div className="weather-info">
                    <h2>Weather in {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
            )}

            {forecastData && (
                <div className="forecast-container">
                    <h2>5-Day Forecast:</h2>
                    {forecastData.map((day, index) => (
                        <div key={index} className="forecast-item">
                            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                            <p>Temp: {day.main.temp}°C</p>
                            <p>{day.weather[0].description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Weather;
