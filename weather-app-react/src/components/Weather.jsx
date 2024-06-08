import React from 'react'
import './Weather.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'


const Weather = () => {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search'/>
        <img src={search_icon} alt="" />
      </div>
      <img src="" alt="" />
    </div>
  )
}

export default Weather
