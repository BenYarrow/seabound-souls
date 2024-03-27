import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BlockWrapper from '../BlockWrapper';
import { siteData } from '../../Data/site-data';
import InfoModal from "../InfoModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/styles.css";

const LeafletMap = ({lat, long, markers, zoom = 15, infoModalContent}) => {

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const username = siteData.mapBox.username
    const styleId = siteData.mapBox.styleId.destinationsPage
    const key = siteData.mapBox.key
    const url = `https://api.mapbox.com/styles/v1/${username}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${key}`

    return (
        <>
            {lat && long && (
                <BlockWrapper padded>
                    {infoModalContent && (
                        <p className="flex gap-x-1">
                            Map navigation
                            <button onClick={() => setIsInfoModalOpen(true)} className="flex items-start">
                                <FontAwesomeIcon icon={faCircleInfo}/>
                            </button>
                            <InfoModal
                                isOpen={isInfoModalOpen}
                                setIsOpen={setIsInfoModalOpen}
                            >
                                {infoModalContent}
                            </InfoModal>
                        </p>
                    )}
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
                                                {marker.link ? (
                                                        <a href={marker.link} target="_blank" rel="nofollow external noopener noreferrer" className='text-blue hover:underline'>{marker.title}</a>
                                                    ) : (
                                                        <p className='text-blue' >{marker.title}</p>
                                                )}
                                            </Popup>
                                        )}
                                    </Marker>
                                )
                            })}

                            <FullscreenControl 
                                position={'topright'}
                                title='full screen'
                                
                            />
                        </MapContainer>
                    </div>
                </BlockWrapper>
            )}
        </>    
    );
};

export default LeafletMap;
