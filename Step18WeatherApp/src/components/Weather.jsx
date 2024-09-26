import React, { useState } from 'react';
import "../index.css";
import axios from 'axios';

const API_KEY = "362a606dfb29627fa1f8f6757db2b7dc";

function Weather() {
    const [input, setInput] = useState("");
    const [textareaValue, setTextareaValue] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [country, setCountry] = useState("");
    const [error, setError] = useState(null);

    function handleTextareaChange(event) {
        setTextareaValue(event.target.value);
    }
    
    function handleButtonClick(){
        setInput(textareaValue);
        fetchWeatherData(textareaValue);
    }

    async function fetchWeatherData(city) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = response.data;
            setWeatherData(data);
            console.log(data);
            setTemperature((data.main.temp - 273.15).toFixed(2));  // Convert Kelvin to Celsius
            setHumidity(data.main.humidity);
            setWindSpeed(data.wind.speed);
            setCountry(data.sys.country)
            setError(null);
        } catch (error) {
            setError('Enter a valid city name');
            setWeatherData(null);
            setTemperature(null);
            setHumidity(null);
            setWindSpeed(null);
        }
    }

    return (
        <div>
            <h1 className=' text-center font-bold text-4xl text-sky-700'>Weather App</h1>
            <div className='flex flex-col items-center space-y-10 bg-sky-300 mt-10 p-10'>
                <input type='text' 
                    className='border border-slate-500 text-center rounded-lg w-96 h-10 border-none outline-none'
                    placeholder='Enter any valid city, country name, e.g. Delhi'
                    value={textareaValue} 
                    onChange={handleTextareaChange}
                />
                <button 
                    className='border border-slate-500 rounded-md bg-slate-500 w-28 h-10' 
                    onClick={handleButtonClick}
                >
                    Search
                </button>
                {error ? (
                    <p className='text-red-500 font-bold'>{error}</p>
                ) : weatherData ? (
                    <div>
                        <h2 className='font-bold text-4xl'>{input}</h2>
                        <p className='text-center my-5'>{country}</p>
                        <h3>Temperature: {temperature}°C</h3>
                        <p>Humidity: {humidity}%</p>
                        <p>Wind Speed: {windSpeed} m/s</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Weather;
