import React, { useState, useEffect } from 'react';
import { siteData } from '../../Data/site-data';
import { mpsToKnotsFormatter, tempFormatter } from '../../helpers/unit-conversions';

const LiveWeatherData = ({ lat, long }) => {
    const [weatherData, setWeatherData] = useState({});
    const [weatherStats, setWeatherStats] = useState({});

    const API_KEY = siteData.openWeatherMap['key'];
    const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;
    const timezoneUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${long}&timestamp=${Math.floor(Date.now() / 1000)}&key=YOUR_GOOGLE_MAPS_API_KEY`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [weatherResponse, timezoneResponse] = await Promise.all([
                    fetch(weatherUrl),
                    fetch(timezoneUrl)
                ]);
                if (!weatherResponse.ok || !timezoneResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const [weatherData, timezoneData] = await Promise.all([
                    weatherResponse.json(),
                    timezoneResponse.json()
                ]);
                setWeatherData(weatherData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [weatherUrl, timezoneUrl]);

    useEffect(() => {
        if (weatherData.current) {
            const stats = {
                wind: [
                    {
                        title: 'Live gusts:',
                        value: weatherData.current.wind_gust ? mpsToKnotsFormatter(weatherData.current.wind_gust) : null
                    },
                    {
                        title: 'Average wind speed:',
                        value: weatherData.current.wind_speed ? mpsToKnotsFormatter(weatherData.current.wind_speed) : null
                    },
                ],
                temp: [
                    {
                        title: 'Live temp:',
                        value: weatherData.current.temp ? tempFormatter(weatherData.current.temp) : null
                    },
                    {
                        title: 'Feels Like:',
                        value: weatherData.current.feels_like ? tempFormatter(weatherData.current.feels_like) : null
                    },
                ],
                generalConditions: [
                    {
                        title: 'Sunrise:',
                        value: weatherData.current.sunrise ? weatherData.current.sunrise : null
                    },
                    {
                        title: 'Sunset:',
                        value: weatherData.current.sunset ? weatherData.current.sunset : null
                    },
                    {
                        title: 'Conditions:',
                        value: weatherData.current.weather ? weatherData.current.weather.map(item => item.description).join(', ') : null
                    }
                ]
        };
            setWeatherStats(stats);
        }
    }, [weatherData]);
    
    return (
        <div className='prose prose-headings:text-blue prose-li:text-blue'>
            <h3>Live data</h3>
            <div>
                <h4>
                    Live wind statics
                </h4>
                <ul>
                    {weatherStats.wind && weatherStats.wind.map((windData, index) => {
                        return(
                            <li key={index}>
                                <p>
                                    {windData.title}
                                </p>
                                <p>
                                    {windData.value}
                                </p>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {weatherStats.temp && weatherStats.temp.map((windData, index) => {
                        return(
                            <li key={index}>
                                <p>
                                    {windData.title}
                                </p>
                                <p>
                                    {windData.value}
                                </p>
                            </li>
                        )
                    })}
                </ul>
                {/* Format sunrise and sunset */}
                <ul>
                    {weatherStats.generalConditions && weatherStats.generalConditions.map((windData, index) => {
                        return(
                            <li key={index}>
                                <p>
                                    {windData.title}
                                </p>
                                <p>
                                    {windData.value}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default LiveWeatherData;
