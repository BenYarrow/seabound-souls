import React, { useState, useEffect } from 'react';
import { siteData } from '../../Data/site-data';
import { mpsToKnotsFormatter, mpsToMphFormatter, tempFormatterFromCelciusToRoundedCelcius, tempFormatterFromCelciusToFahrenheit, formatUnixTimeInTimeZone } from '../../helpers/functions';
import BeatLoader from 'react-spinners/BeatLoader'
import { fetchWeatherData } from '../../helpers/functions';


const LiveWeatherData = ({ 
    lat, 
    long, 
    timeZone, 
    isOpen, 
    title, 
    location 
}) => {
    
    const [weatherData, setWeatherData] = useState({});
    const [weatherStats, setWeatherStats] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [currentTemp, setCurrentTemp] = useState(null)
    const [feelsLikeTemp, setFeelsLikeTemp] = useState(null)
    const [currentGusts, setCurrentGusts] = useState(null)
    const [currentAverageWind, setCurrentAverageWind] = useState(null)
    const [tempUnitChecked, setTempUnitChecked] = useState('celcius')
    const [windUnitChecked, setWindUnitChecked] = useState('knots')
    
    const API_KEY = siteData.openWeatherMap['key'];
    const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;

    useEffect(() => {
        fetchWeatherData({weatherUrl, setWeatherData, setIsLoading}) ;
    }, [weatherUrl]);

    useEffect(() => {
        if (weatherData.current) {
            const stats = {
                wind: {
                    gusts: weatherData.current.wind_gust ? weatherData.current.wind_gust : null,
                    averageSpeed: weatherData.current.wind_speed ? weatherData.current.wind_speed : null,
                },
                temp: {
                    current: weatherData.current.temp ? weatherData.current.temp : null,
                    feels_like: weatherData.current.feels_like ? weatherData.current.feels_like : null
                },
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

    const windCheckboxInputs = [
        {
            id: 'knots',
            label: 'kts',
        },
        {
            id: 'mps',
            label: 'mps',
        },
        {
            id: 'mph',
            label: 'mph',
        },
    ]
    const tempCheckboxInputs = [
        {
            id: 'celcius',
            label: '°C',
        },
        {
            id: 'farenheight',
            label: '°F',
        },
    ]
    
    const handleTempCheckboxChange = (e) => {
        setTempUnitChecked(e.target.id)
    }

    const handleWindCheckboxChange = (e) => {
        setWindUnitChecked(e.target.id)
    }

    useEffect(() => {
        if (!isLoading) {
            if(tempUnitChecked === 'celcius') {
                setCurrentTemp(
                    tempFormatterFromCelciusToRoundedCelcius(weatherStats.temp?.current)
                )
                setFeelsLikeTemp(
                    tempFormatterFromCelciusToRoundedCelcius(weatherStats.temp?.feels_like)
                )
            } else if (tempUnitChecked === 'farenheight') {
                setCurrentTemp(
                    tempFormatterFromCelciusToFahrenheit(weatherStats.temp?.current)
                )
                setFeelsLikeTemp(
                    tempFormatterFromCelciusToFahrenheit(weatherStats.temp?.feels_like)
                )
            }
        }
    }, [tempUnitChecked, isLoading])
    
    useEffect(() => {
        if (!isLoading) {
            if(windUnitChecked === 'knots') {
                setCurrentGusts(
                    mpsToKnotsFormatter(weatherStats.wind?.gusts)
                )
                setCurrentAverageWind(
                    mpsToKnotsFormatter(weatherStats.wind?.averageSpeed)
                )
            } else if (windUnitChecked === 'mps') {
                setCurrentGusts(`${Math.round(weatherStats.wind?.gusts)} mps`)
                setCurrentAverageWind(`${Math.round(weatherStats.wind?.averageSpeed)} mps`)
            } else if (windUnitChecked === 'mph') {
                setCurrentGusts(mpsToMphFormatter(weatherStats.wind?.gusts))
                setCurrentAverageWind(mpsToMphFormatter(weatherStats.wind?.averageSpeed))
            }
        }
    }, [windUnitChecked, isLoading])

    return (
        <div className={classes}>
            <p className='text-sm'>
                {introText}
            </p>
            <div className="grid grid-cols 1 md:grid-cols-2 gap-8 md:gap-12">
            <div className='bg-blue/80 shadow-xl p-6 flex flex-col gap-y-4'>
                    <h3 className='text-lg font-bold'>
                        Wind
                    </h3>
                    {isLoading ? (
                        <BeatLoader
                            color="#ffffff"
                            loading={true}
                            size={10}
                            css=""
                        /> 
                    ) : (
                        <>
                            {weatherStats.wind && (
                                <div className="">
                                    {currentGusts && (
                                        <p className='flex items-center gap-x-2'>
                                            Gusts: <span>
                                                {currentGusts}
                                            </span>
                                        </p>
                                    )}
                                    {currentAverageWind && (
                                        <p className='flex items-center gap-x-2'>
                                            Average: <span>
                                                {currentAverageWind}
                                            </span>
                                        </p>
                                    )}
                                </div>
                            )}
                        </>

                     )}
                    <div className='flex justify-between'>
                        {windCheckboxInputs.map(check => {
                            return (
                                <div className='flex items-center gap-x-2'>
                                    <input
                                        type="checkbox"
                                        id={check.id}
                                        name="temperatureUnit"
                                        value={check.id}
                                        checked={windUnitChecked === check.id}
                                        onChange={(e) => handleWindCheckboxChange(e)}
                                    />
                                    <label for={check.id}>{check.label}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='bg-blue/80 shadow-xl p-6 flex flex-col gap-y-4'>
                    <h3 className='text-lg font-bold'>
                        Temperature
                    </h3>
                    {isLoading ? (
                        <BeatLoader
                            color="#ffffff"
                            loading={true}
                            size={10}
                            css=""
                        /> 
                    ) : (
                        <>
                            {weatherStats.temp && (
                                <div className="">
                                    {currentTemp && (
                                        <p className='flex items-center gap-x-2'>
                                            Current: <span>
                                                {currentTemp}
                                            </span>
                                        </p>
                                    )}
                                    {feelsLikeTemp && (
                                        <p className='flex items-center gap-x-2'>
                                            Feels Like: <span>
                                                {feelsLikeTemp}
                                            </span>
                                        </p>
                                    )}
                                </div>
                            )}
                        </>

                     )}
                    <div className='flex justify-between'>
                        {tempCheckboxInputs.map(check => {
                            return (
                                <div className='flex items-center gap-x-2'>
                                    <input
                                        type="checkbox"
                                        id={check.id}
                                        name="temperatureUnit"
                                        value={check.id}
                                        checked={tempUnitChecked === check.id}
                                        onChange={(e) => handleTempCheckboxChange(e)}
                                    />
                                    <label for={check.id}>{check.label}</label>
                                </div>
                            )
                        })}
                    </div>
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
