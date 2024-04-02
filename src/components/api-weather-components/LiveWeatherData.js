import React, { useState, useEffect } from 'react';
import { siteData } from '../../Data/site-data';
import { mpsToKnotsFormatter, tempFormatter, formatUnixTimeInTimeZone } from '../../helpers/functions';
import BeatLoader from 'react-spinners/BeatLoader'


const LiveWeatherData = ({ lat, long, timeZone, isOpen }) => {
    
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
                generalConditions: [
                    {
                        title: 'Sunrise:',
                        value: weatherData.current.sunrise ? formatUnixTimeInTimeZone(weatherData.current.sunrise, weatherData.timezone, weatherData.timezone_offse) : null
                    },
                    {
                        title: 'Sunset:',
                        value: weatherData.current.sunset ? formatUnixTimeInTimeZone(weatherData.current.sunset, weatherData.timezone, weatherData.timezone_offset) : null
                    },
                    {
                        title: 'Conditions:',
                        value: weatherData.current.weather ? weatherData.current.weather.map(item => item.description) : null,
                        icon: weatherData.current.weather ? weatherData.current.weather.map(item => item.icon) : null,
                    }
                ]
            };
            setWeatherStats(stats);
        }
    }, [weatherData, timeZone]);
    
    const classes = [
        'prose max-w-none prose-headings:text-white prose-p:text-white prose-headings:my-0 container mx-auto',
        isOpen && 'pb-8'
    ].filter(Boolean).join(' ')
    
    return (
        <div className={classes}>

            <div className=" grid grid-cols 1 md:grid-cols-2 gap-8 md:gap-12">
                <div className='bg-blue/80 shadow-xl p-6'>
                    <h3>
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
                <div className='bg-blue/80 shadow-xl p-6'>
                    <h3>
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
{/*                 
                <div>
                    <h3>
                        General conditions
                    </h3>
                    <div>
                        {weatherStats.generalConditions && weatherStats.generalConditions.map((generalData, index) => {
                            return(
                                <div key={index} className="divst-none">
                                    <p>
                                        {generalData.title} <span>{generalData.value}</span>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div> */}
            </div>   
        </div>
    );
};

export default LiveWeatherData;
