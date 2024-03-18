import React, {useState} from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps"
import simpleMapData from "../../Data/simple-map-data.json"
import { destinationCoordinates } from "../../Data/destinations-coordinate-data"
import { Link } from "react-router-dom"


const CustomMarker = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 30 30" height="20" version="1.0"><defs><clipPath id="a"><path d="M4.84 0h20.32v29.031H4.84Zm0 0"/></clipPath></defs><g clip-path="url(#a)"><path fill="#06637B" d="M15 0C9.39 0 4.84 4.55 4.84 10.16 4.84 17.781 15 29.031 15 29.031s10.16-11.25 10.16-18.87C25.16 4.55 20.61 0 15 0m0 13.79a3.63 3.63 0 1 1 0-7.26 3.63 3.63 0 0 1 0 7.26m0 0"/></g></svg>
    );
  };
  
const SimpleMap = () => {

    const [isHovered, setisHovered] = useState(-1)

    return (
        <ComposableMap height={400} width="1000">
            <ZoomableGroup center={[20, 10]} zoom={1}>
                <Geographies 
                    geography={simpleMapData}       
                >
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
                {destinationCoordinates.map(({ name, coordinates, href, index }) => {
                    return (
                    <>
                        <Marker key={name} className="cursor-pointer" coordinates={coordinates} onMouseEnter={() => setisHovered(index)} onMouseLeave={() => setisHovered(-1)}>
                            {/* -translate-x-[1/2 of the svg width], -translate-y-[100% svg height] */}
                            <g className="p-2 -translate-x-[10px] -translate-y-[20px]" >
                                <CustomMarker/>
                            </g>
                            {isHovered === index && (
                                <text>
                                    <Link to={href}>{name}</Link>
                                </text>
                            )}
                        </Marker>
                    </>
                )})}
            </ZoomableGroup>
            
        </ComposableMap>
    )
}


export default SimpleMap
