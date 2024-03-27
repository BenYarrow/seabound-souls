import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BlockWrapper from '../BlockWrapper';
import { siteData } from '../../Data/site-data';

const LeafletMap = ({lat, long, markers, zoom = 15}) => {
    
    const username = siteData.mapBox.username
    const styleId = siteData.mapBox.styleId.destinationsPage
    const key = siteData.mapBox.key
    const url = `https://api.mapbox.com/styles/v1/${username}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${key}`

    return (
        <>
            {lat && long && (
                <BlockWrapper padded>
                    <div className='w-full h-80 lg:h-[60vh]'>
                        <MapContainer
                            center={[lat, long]}
                            zoom={zoom}
                            scrollWheelZoom={true}
                            className="w-full h-full"
                        >
                            <TileLayer url={url} attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"/>
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
                                                                <p className='text-blue' >{marker.title}</p>
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
            )}
        </>    
    );
};

export default LeafletMap;
