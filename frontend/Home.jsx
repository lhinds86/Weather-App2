import CurrentWeather from './src/components/currentweather/CurrentWeather'
import WeatherDetails from './src/components/weatherDetails/WeatherDetails'


export default function Home() {
    return (
        <>
            <CurrentWeather />
            <WeatherDetails />
        </>
    )
}