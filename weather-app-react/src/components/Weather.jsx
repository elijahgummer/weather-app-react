import React, { useEffect } from 'react';
import './Weather.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
// import cloud_icon from '../Assets/cloud.png';
// import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
// import rain_icon from '../Assets/rain.png';
// import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';

const Weather = () => {
    const search = async (city) => {
        try {
            const apiKey = import.meta.env.VITE_APP_ID;
            console.log("API Key:", apiKey); // Add this line for debugging
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("Error fetching weather data: ", error);
        }
    }

    useEffect(() => {
        search("London");
    }, []);

    return (
        <div className='weather'>
            <div className="search-bar">
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="" />
            </div>
            <img src={clear_icon} alt="" className='weather-icon' />
            <p className='temperature'>16°C</p>
            <p className='location'>London</p>
            <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="" />
                    <div>
                        <p>91%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={wind_icon} alt="" />
                    <div>
                        <p>3.6 Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;
