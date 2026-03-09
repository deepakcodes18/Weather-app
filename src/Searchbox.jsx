import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);

    const GEO_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "70a24b6b3657fb08b1da840913cc927b";

    let getWeatherInfo = async (city) => {

        try{
            // ✅ Step 1: Geo API
        let res1 = await fetch(`${GEO_URL}?q=${city}&appid=${API_KEY}`);
        let geoData = await res1.json();
        //console.log("Geo Data:", geoData);

        if (geoData.length === 0) {
            throw new Error("City not found!");
            }

        let lat = geoData[0].lat;
        let lon = geoData[0].lon;

        // ✅ Step 2: Weather API
        let res2 = await fetch(
            `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        let weatherData = await res2.json();

        if (!weatherData.main) {
            throw new Error("Weather fetch failed");
        }

        //console.log("Weather Data:", weatherData);

        // 👉 useful data
        let result = {
            city: city,
            temp: weatherData.main.temp,
            tempMin:weatherData.main.temp_min,
            tempMax:weatherData.main.temp_max,
            humidity: weatherData.main.humidity,
            feelslike:weatherData.main.feels_like,
            weather:weatherData.weather[0].main,
        }
        console.log(result)
        return result;
        } catch(err) {
            throw err;
        }

        

    };

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false); 
        try{
            
            let newInfo = await getWeatherInfo(city);
            if(newInfo){
            updateInfo(newInfo);
            setCity("");
            }
        } catch(err){
        setError(true)
        
        
        }
    };

    return(
        <div className='searchbox'>
            
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}