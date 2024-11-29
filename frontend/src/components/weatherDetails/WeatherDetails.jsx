
import styles from './weatherDetails.module.css'

// Images imports
import rainImg from '../../assets/rain.png'
import sunrise from '../../assets/sunsrise.png'
import sunset from '../../assets/sunset.png'
import uv from '../../assets/uv.png'

export default function WeatherDetails() {


  return (
    <div className={styles.weatherDetailsContainer}>
      <div>
        <div className={styles.sun}>
          <div className={styles.sunrise}>
            <img src={sunrise} alt='Sunrise image' />
          </div>
          <div className={styles.sunrise}>
            <img src={sunset} alt='Sunset image' />
          </div>
        </div>
        
        <div className={styles.uvIndex}>

        </div>
        <div className={styles.rain}>

        </div>
        <div className={styles.highLow}>

        </div>
      </div>
    </div>
  )
}