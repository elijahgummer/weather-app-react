import React from 'react'
import './Weather.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import search_icon from '../Assets/search.png'
import search_icon from '../Assets/search.png'
import search_icon from '../Assets/search.png'


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
