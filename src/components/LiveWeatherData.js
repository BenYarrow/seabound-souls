import React, { useState, useEffect } from 'react';
import { siteData } from '../Data/site-data';
import BlockWrapper from './BlockWrapper';
import { mpsToKnots } from '../helpers/converstions';

const LiveWeatherData = () => {

    const [weatherData, setWeatherData] = useState({});

    const API_KEY = siteData.openWeatherMap['key'];
    const lat = 33.44;
    const lon = -94.04;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Set weather data
                console.log(data);
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <BlockWrapper>
            <h2>
                Live data
            </h2>
            {weatherData.current && (
                <div>
                    {weatherData.current.wind_gust && (
                        <p>
                            Live gusts: {mpsToKnots(weatherData.current.wind_gust)}
                        </p>
                    )}
                    {weatherData.current.wind_speed && (
                        <p>
                            Average wind speed: {mpsToKnots(weatherData.current.wind_speed)}
                        </p>
                    )}
                    {weatherData.current.temp && (
                        <p>
                            Live temp: {weatherData.current.temp}
                        </p>
                    )}
                </div>
            )}
        </BlockWrapper>
    );
};

export default LiveWeatherData;
