
import React, { useState } from 'react'
import InfoBox from './infoBox'
import SearchBox from './SearchBox'

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
    feelsLikes: 14.07,
    humidity: 100,
    temp: 14,
    tempMax: 14.05,
    tempMin: 13.95,
    weather: "mist",
    })

    let updateInfo = (information) =>{
        setWeatherInfo(information)
    }

  return (
    <>
    <h2 style={{display:"flex", justifyContent:"center"}}>Weather App By Erfan Aalam</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  )
}

export default WeatherApp
