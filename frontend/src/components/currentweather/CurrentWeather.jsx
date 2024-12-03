import { useState } from 'react'

import rainImg from '../../assets/rain.png'
import sunriseImg from '../../assets/sunrise.png'
import sunsetImg from '../../assets/sunset.png'
import uvImg from '../../assets/uv.png'
import sunnyWeather from '../../assets/sunny.png' // Test data images
import cloudyWeather from '../../assets/cloudy.png' // Test data images 
import styles from './currentWeather.module.css'

const weatherInfo = [
  {
    city: 'Atlanta',
    state: 'GA',
    temp: 63,
    weatherDesc: 'Sunny',
    sunrise: '6:30',
    sunset: '5:45',
    uvindex: 6,
    rain: '3',
    lowTemp: 58,
    highTemp: 65,
    feelsLike: 60,
    weatherImg: sunnyWeather,
  },
  {
    city: 'Brooklyn',
    state: 'NY',
    temp: 54,
    weatherDesc: 'Cloudy',
    sunrise: '6:10',
    sunset: '5:32',
    uvindex: 4,
    rain: '10',
    lowTemp: 48,
    highTemp: 57,
    feelsLike: 50,
    weatherImg: cloudyWeather,
  },
]

export default function CurrentWeather() {
  const [searchItem, setSearchItem] = useState('')
  const [currentWeather, setCurrentWeather] = useState(weatherInfo[0]); 

  const handleInputChange = (e) => {
    setSearchItem(e.target.value)
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const matchedWeather =
        weatherInfo.find(
          (weather) =>
            weather.city.toLowerCase() === searchItem.toLowerCase()
        ) || weatherInfo[0]; 
      setCurrentWeather(matchedWeather);
    }
  }

  return (
    <>
      <div className={styles.currentWeatherContainer}>
        {/* Search Input */}
        <div className={styles.searchBar}>
          <input
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            onKeyDown={handleSearch}
            placeholder="Location"
          />
        </div>

        <div className={styles.currentWeather}>
          {/* Current City */}
          <h1>{currentWeather.city}, {currentWeather.state}</h1>
          {/* Current Weather Icon */}
          <img
            src={currentWeather.weatherImg}
            alt={`${currentWeather.weatherDesc} weather icon`}
          />
          {/* Current Temp Display */}
          <h2>{currentWeather.weatherDesc}</h2>
          <div className={styles.tempDisplay}>
            <p className={styles.currentTemp}>{currentWeather.temp}°F</p>
            <p className={styles.feelsLike}>Feels Like: {currentWeather.feelsLike}°F</p>
          </div>
        </div>
      </div>

      {/* CURRENT WEATHER DETAILS */}

      <div className={styles.weatherDetailsContainer}>
            <div>
              {/* Sunrise and Sunset */}
              <div className={styles.sun}>
                <div className={styles.sunrise}>
                  <img src={sunriseImg} alt='Sunrise image' />
                  <p>{currentWeather.sunrise}</p>
                </div>
                <div className={styles.sunrise}>
                  <img src={sunsetImg} alt='Sunset image' />
                  <p>{currentWeather.sunset}</p>
                </div>
              </div>
              {/* UV Index */}
              <div className={styles.uvIndex}>
                <img src={uvImg} alt='UV Index image' />
                <p>{currentWeather.uvindex}</p>
              </div>
              {/* Chance of rain */}
              <div className={styles.rain}>
                <img src={rainImg} alt='Rain drop image' />
                <p>{currentWeather.rain}%</p>
              </div>
              {/* High and Low Temps */}
              <div className={styles.highsLows}>
                <p className={styles.highTemp}>H : {currentWeather.highTemp}</p>
                <p className={styles.lowTemp}>L : {currentWeather.lowTemp}</p>
              </div>
            </div>
          </div>
    </>
  )
}
