import React, { useState, useEffect } from 'react';
import { siteData } from '../../Data/site-data';

const LiveWeatherMap = () => {
    const [weatherMapUrl, setWeatherMapUrl] = useState('');
    const API_KEY = siteData.openWeatherMap['key'];
    const url = `https://tile.openweathermap.org/map/wind_new/1/1/1.png?appid=${API_KEY}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Instead of parsing JSON, directly set image URL
                setWeatherMapUrl(url);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchData();
    }, [url]);

    return (
        <div>
            {weatherMapUrl ? (
                <img src={weatherMapUrl} alt="Live Weather Map" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default LiveWeatherMap;
