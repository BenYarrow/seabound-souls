import React, { useState, useEffect } from 'react';
import { siteData } from '../../Data/site-data';
import { mpsToKnotsFormatter, tempFormatter, formatUnixTimeInTimeZone } from '../../helpers/functions';
import BeatLoader from 'react-spinners/BeatLoader'


const LiveWeatherData = ({ lat, long, timeZone, isOpen, title, location }) => {
    
    const [weatherData, setWeatherData] = useState({});
    const [weatherStats, setWeatherStats] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const API_KEY = siteData.openWeatherMap['key'];
    const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(weatherUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok', response.status, response.statusText);
                }
                const data = await response.json()
                setWeatherData(data);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [weatherUrl]);

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
                generalConditions: {
                    sunrise: weatherData.current.sunrise ? formatUnixTimeInTimeZone(weatherData.current.sunrise, weatherData.timezone, weatherData.timezone_offse) : null,
                    sunset: weatherData.current.sunset ? formatUnixTimeInTimeZone(weatherData.current.sunset, weatherData.timezone, weatherData.timezone_offset) : null,
                    conditions: weatherData.current.weather ? weatherData.current.weather.map(item => item.description) : null,
                    icon: weatherData.current.weather ? weatherData.current.weather.map(item => item.icon) : null,
                },
            };
            setWeatherStats(stats);
        }
    }, [weatherData, timeZone]);
    
    const classes = [
        'flex flex-col gap-y-6 container mx-auto',
        isOpen && 'pb-8'
    ].filter(Boolean).join(' ')

    const spotLocation = `${title}, ${location}`
    const introText = weatherStats.generalConditions && weatherStats.generalConditions.conditions ? `Today in ${spotLocation} you can expect ${weatherStats.generalConditions.conditions.toString()}.` : '';

    return (
        <div className={classes}>
            <p className='text-sm'>
                {introText}
            </p>
            <div className="grid grid-cols 1 md:grid-cols-2 gap-8 md:gap-12">
                <div className='bg-blue/80 shadow-xl p-6 flex flex-col gap-y-4'>
                    <h3 class="text-lg font-bold">
                        Wind
                    </h3>
                    {weatherStats.wind && weatherStats.wind.map((windData, index) => {
                        return(
                            <div key={index} className="">
                                <p className='flex items-center gap-x-2'>
                                    {windData.title} <span>
                                        {isLoading ?
                                                <BeatLoader
                                                color="#ffffff"
                                                loading={true}
                                                size={10}
                                                css=""
                                            /> : 
                                            windData.value
                                        }
                                    </span>
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div className='bg-blue/80 shadow-xl p-6 flex flex-col gap-y-4'>
                    <h3 className='text-lg font-bold'>
                        Temperature
                    </h3>
                    {weatherStats.temp && weatherStats.temp.map((windData, index) => {
                        return(
                            <div key={index} className="">
                                <p className='flex items-center gap-x-2'>
                                    {windData.title} <span>
                                        {isLoading ?
                                                <BeatLoader
                                                color="#ffffff"
                                                loading={true}
                                                size={10}
                                                css=""
                                            /> : 
                                            windData.value
                                        }
                                    </span>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>   
                {weatherStats.generalConditions && weatherStats.generalConditions.sunrise && weatherStats.generalConditions.sunset && (
                    <div className='flex justify-between md:grid md:grid-cols-2 md:gap-12'>
                        <p>
                            Sunrise: <span>
                                {weatherStats.generalConditions.sunrise}
                            </span>
                        </p>
                        <p>
                            Sunset: <span>
                                {weatherStats.generalConditions.sunset}
                            </span>
                        </p>
                    </div>
                )}
        </div>
    );
};

export default LiveWeatherData;
