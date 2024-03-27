import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BlockWrapper from '../BlockWrapper';

const LeafletMap = ({lat, long, markers, zoom = 15}) => {
    
    return (
        <>
            {lat && long && (
                <BlockWrapper>
                    <div className='w-full h-80 lg:h-[60vh]'>
                        <MapContainer
                            center={[lat, long]}
                            zoom={zoom}
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
