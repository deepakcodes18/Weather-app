import SearchBox from './Searchbox';
import InfoBox from './infoBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "search the city",
        feelslike:24.84,
        temp:25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather:"haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App using API</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox info={weatherInfo}/>
    </div>
    )
}