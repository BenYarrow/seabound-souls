import React from 'react'
// import { useState, useEffect } from 'react';
// import { siteData } from '../../Data/site-data';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BlockWrapper from '../BlockWrapper';

const LiveWeatherMap = ({lat, long, markers}) => {
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
                        {markers && markers.map((marker, index) => {
                            return (
                                <Marker position={[marker.coordinates.lat, marker.coordinates.long]} key={index}>
                                    {marker.title && (
                                        <Popup>
                                            {marker.title && (   
                                                <>
                                                    {marker.link ? (
                                                            <a href={marker.link} target="_blank" rel="nofollow external noopener noreferrer" className='text-blue hover:underline'>{marker.title}</a>
                                                        ) : (

                                                            <p>{marker.title}</p>
                                                        )}
                                                </>                                             
                                            )}
                                        </Popup>
                                    )}
                                </Marker>
                            )
                        })}
                    </MapContainer>
                </div>
            </BlockWrapper>
    );
};

export default LiveWeatherMap;
