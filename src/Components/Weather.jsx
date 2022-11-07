import { useEffect, useState } from 'react';
import './weather.css';

const Weather = () => {
    let [city, setCity] = useState("lucknow");
    const [data, setData] = useState(null);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);
    const [nullData, setNullData] = useState(null);

    // useeffect for refresh on change in input tag
    useEffect(() => {

        //for fetch api
        const fetchApi = async () => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b8a5e67601b53b1ce1629b378442e4e8`;
            let dataApi = await fetch(url);
            let jsonData = await dataApi.json();
            let nullValue = await jsonData.name;

            setNullData(nullValue);
            if (nullData) {
                let sunrise = data.sys.sunrise;
                let sunset = data.sys.sunset;
                setSunrise(new Date(sunrise * 1000).toLocaleTimeString());
                setSunset(new Date(sunset * 1000).toLocaleTimeString());
            }
            setData(jsonData);
        }
        fetchApi();
    }, [city,[]]);


    return (<>
        <div className="container py-5">
            <div className="box">
                <input type="text" placeholder='Enter your city name' value={city} onChange={e => setCity(e.target.value)} />
                {!nullData ? (<div className='py-3'>Data not Found</div>) : (

                    <div className='py-3'>
                        <p>{data.name}</p>
                        <p>Temprature: {data.main.temp} <sup>o</sup>C</p>
                        <p>Wind: {data.wind.speed}km/h</p>
                        <p>Sunrise: {sunrise ? sunrise : ""}</p>
                        <p>Sunset: {sunset ? sunset : ""}</p>

                    </div>
                )

                }


            </div>
        </div>
    </>);
}

export default Weather;

