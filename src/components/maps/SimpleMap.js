import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps";
import simpleMapData from "../../Data/simple-map-data.json";
import { destinationCoordinates } from "../../Data/destinations-coordinate-data";
import { Link } from "react-router-dom";
import debounce from 'lodash/debounce'; 
import InfoModal from "../InfoModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const CustomMarker = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 30 30" height="20" version="1.0"><defs><clipPath id="a"><path d="M4.84 0h20.32v29.031H4.84Zm0 0"/></clipPath></defs><g clipPath="url(#a)"><path fill="#06637B" d="M15 0C9.39 0 4.84 4.55 4.84 10.16 4.84 17.781 15 29.031 15 29.031s10.16-11.25 10.16-18.87C25.16 4.55 20.61 0 15 0m0 13.79a3.63 3.63 0 1 1 0-7.26 3.63 3.63 0 0 1 0 7.26m0 0"/></g></svg>
    );
};
  
const SimpleMap = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [height, setHeight] = useState(600);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [tooltipContent, setTooltipContent] = useState(null);

    useEffect(() => {
        const windowX = window.innerWidth;
        const handleHeight = () => {
            if (windowX < 1024) {
                setHeight(600);
            } else {
                setHeight(200);
            }
        };

        const debouncedHeight = debounce(handleHeight, 200);

        window.addEventListener('resize', debouncedHeight);

        return () => {
            window.removeEventListener('resize', debouncedHeight);
        };
    }, []);

    const handleMouseEnter = debounce((index, name) => {
        setActiveIndex(index);
        setTooltipContent(name);
    }, 100);

    const handleMouseLeave = debounce(() => {
        setActiveIndex(-1);
        setTooltipContent(null);
    }, 100);

    return (
        <section className="container mx-auto overflow-hidden">
            <div>
                <p className="flex gap-x-1">
                    Map navigation
                    <button onClick={() => setIsInfoModalOpen(true)} className="flex items-start">
                        <FontAwesomeIcon icon={faCircleInfo}/>
                    </button>
                    <InfoModal
                        isOpen={isInfoModalOpen}
                        setIsOpen={setIsInfoModalOpen}
                    >
                        Use our interactive map to navigate the earth to find the location you're looking for. Click on a marker to view the name of the location, from there you can navigate to that specific spot guide.
                    </InfoModal>
                </p>
            </div>
            <ComposableMap height={height} width="1000">
                <ZoomableGroup center={[20, 10]} zoom={1.5}>
                    <Geographies geography={simpleMapData}>
                        {({ geographies }) => geographies.map((geo) => {
                            return (
                                <Geography 
                                    key={geo.rsmKey} 
                                    geography={geo}               
                                    fill="#97C9CE"
                                    stroke="#FEFAF9"
                                />)
                            })
                        }
                    </Geographies>
                    {destinationCoordinates.map(({ name, coordinates, href, index }) => (
                        <Marker key={name} className="cursor-pointer" coordinates={coordinates}>
                            <g className="p-2 -translate-x-[10px] -translate-y-[20px]" 
                                onMouseEnter={() => handleMouseEnter(index, name)} 
                                onMouseLeave={handleMouseLeave}>
                                <CustomMarker/>
                            </g>
                            {tooltipContent && activeIndex === index && (
                                <foreignObject width={120} height={40}>
                                    <div className="bg-white p-2">
                                        <Link to={href}>{tooltipContent}</Link>
                                    </div>
                                </foreignObject>
                            )}
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </section>
    );
};

export default SimpleMap;
