
// import styles from './weatherDetails.module.css'

// // Images imports
// import rainImg from '../../assets/rain.png'
// import sunriseImg from '../../assets/sunrise.png'
// import sunsetImg from '../../assets/sunset.png'
// import uvImg from '../../assets/uv.png'
// import sunnyWeather from '../../assets/sunny.png' // Test data images
// import cloudyWeather from '../../assets/cloudy.png' // Test data images

// export default function WeatherDetails() {

//   const weatherInfo = [
//     {
//       city: 'Atlanta',
//       state: 'GA',
//       temp: 63,
//       weatherDesc: 'Sunny',
//       sunrise: '6:30',
//       sunset: '5:45',
//       uvindex: 6,
//       rain: '3',
//       lowTemp: 58,
//       highTemp: 65,
//       feelsLike: 60,
//       weatherImg: sunnyWeather,
//     },
//     {
//       city: 'Brooklyn',
//       state: 'NY',
//       temp: 54,
//       weatherDesc: 'Cloudy',
//       sunrise: '6:10',
//       sunset: '5:32',
//       uvindex: 4,
//       rain: '10',
//       lowTemp: 48,
//       highTemp: 57,
//       feelsLike: 50,
//       weatherImg: cloudyWeather,
//     },
//   ]

//   return (
//     <div className={styles.weatherDetailsContainer}>
//       <div>
//         <div className={styles.sun}>
//           <div className={styles.sunrise}>
//             <img src={sunriseImg} alt='Sunrise image' />
//             <p>{}</p>
//           </div>
//           <div className={styles.sunrise}>
//             <img src={sunsetImg} alt='Sunset image' />
//           </div>
//         </div>
        
//         <div className={styles.uvIndex}>
//           <img src={uvImg} alt='UV Index image' />
//         </div>
//         <div className={styles.rain}>
//           <img src={rainImg} alt='Rain drop image' />
//         </div>
//         <div className={styles.highLow}>

//         </div>
//       </div>
//     </div>
//   )
// }