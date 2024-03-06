import React from 'react'
// import { useState, useEffect } from 'react';
// import { siteData } from '../../Data/site-data';
import { MapContainer, TileLayer } from 'react-leaflet';
import BlockWrapper from '../BlockWrapper';

const LiveWeatherMap = ({lat, long}) => {
    // const [weatherMapUrl, setWeatherMapUrl] = useState('');
    // const API_KEY = siteData.openWeatherMap['key'];
    // const url = `https://tile.openweathermap.org/map/wind_new/0/0/0.png?appid=${API_KEY}`;
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             if (!response.ok) {
    //                 throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
    //             } else if (response.ok) {
    //                 setWeatherMapUrl(url);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching weather data:', error);
    //         }
    //     };
    //     fetchData();
    // }, [url]);

    // DEFAULT TILE LAYER URL https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

    return (
           <BlockWrapper>
                <div className='w-full h-80 lg:h-[60vh]'>
                    <MapContainer
                        center={[lat, long]}
                        zoom={15}
                        scrollWheelZoom={true}
                        className="w-full h-full"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </div>
            </BlockWrapper>
    );
};

export default LiveWeatherMap;
