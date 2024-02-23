import React, { useState, useEffect } from 'react';
import { siteData } from '../../Data/site-data';
import BlockWrapper from '../BlockWrapper';
import { mpsToKnotsFormatter, tempFormatter } from '../../helpers/unit-conversions';

const LiveWeatherData = ({lat, long}) => {

    const [weatherData, setWeatherData] = useState({});

    const API_KEY = siteData.openWeatherMap['key'];
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchData();
    }, [url]);
    

    return (
        <div className='container mx-auto'>
            <h2>
                Live data
            </h2>
            {weatherData.current && (
                <div>
                    {/* NaN gusts to fix */}
                    {weatherData.current.wind_gust && (
                        <p>
                            Live gusts: {mpsToKnotsFormatter(weatherData.current.wind_gust)}
                        </p>
                    )}
                    {weatherData.current.wind_speed && (
                        <p>
                            Average wind speed: {mpsToKnotsFormatter(weatherData.current.wind_speed)}
                        </p>
                    )}
                    {weatherData.current.temp && (
                        <p>
                            Live temp: {tempFormatter(weatherData.current.temp)}
                        </p>
                    )}
                    
                </div>
            )}
        </div>
    );
};

export default LiveWeatherData;
