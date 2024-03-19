import React, { useState, useEffect } from 'react';
import { siteData } from '../../Data/site-data';
import { mpsToKnotsFormatter, tempFormatter, formatUnixTimeInTimeZone } from '../../helpers/funcntions';
import BeatLoader from 'react-spinners/BeatLoader'
import BlockWrapper from '../BlockWrapper';


const LiveWeatherData = ({ lat, long, timeZone }) => {
    
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
                        value: weatherData.current.sunrise ? formatUnixTimeInTimeZone(weatherData.current.sunrise, timeZone) : null
                    },
                    {
                        title: 'Sunset:',
                        value: weatherData.current.sunset ? formatUnixTimeInTimeZone(weatherData.current.sunset, timeZone) : null
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
    
    return (
        <div className='prose max-w-none prose-headings:text-blue prose-p:text-blue prose-headings:my-0'>
            {isLoading ? (
                <div class="flex flex-col gap-y-8">
                    <h3>
                        Loading live weather data...
                    </h3>
                    <div className='flex items-center justify-center py-8'>
                        <BeatLoader
                            color="#06637B"
                            loading={isLoading}
                            cssOverride={null}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex gap-2 items-center">
                        <h3>
                            Live weather data
                        </h3>
                        {weatherStats.generalConditions && weatherStats.generalConditions.map((windData) => {
                            return(
                                <>
                                    {windData.icon && (
                                        <div className="flex items-center">
                                            <img
                                                src={`https://openweathermap.org/img/wn/${windData.icon}@2x.png`}
                                                width="50"
                                                height="50"
                                                alt="Weather Icon"
                                                loading="lazy"
                                                crossOrigin="true"
                                            />
                                        </div>
                                        )}
                                </>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        <div>
                            <h3>
                                Live wind statistics
                            </h3>
                            <div>
                                {weatherStats.wind && weatherStats.wind.map((windData, index) => {
                                    return(
                                        <div key={index} className="list-none">
                                            <p>
                                                {windData.title} <span>{windData.value}</span>
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <h3>
                                Live temperature statistics
                            </h3>
                            <div>
                                {weatherStats.temp && weatherStats.temp.map((windData, index) => {
                                    return(
                                        <div key={index} className="list-none">
                                            <p>
                                                {windData.title} <span>{windData.value}</span>
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* Format sunrise and sunset */}
                        <div>
                            <h3>
                                General conditions
                            </h3>
                            <div>
                                {weatherStats.generalConditions && weatherStats.generalConditions.map((windData, index) => {
                                    return(
                                        <div key={index} className="list-none">
                                            <p>
                                                {windData.title} <span>{windData.value}</span>
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LiveWeatherData;
