import React from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from "react-simple-maps"
import simpleMapData from "../../Data/simple-map-data.json"
import { destinationCoordinates } from "../../Data/destinations-coordinate-data"

const SimpleMap = () => {

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
                {destinationCoordinates.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <circle r={4} fill="#06637B" stroke="#fff"/>
                        <text
                            textAnchor="middle"
                            y={markerOffset ? markerOffset : null}
                            style={{ fontFamily: "system-ui", fill: "#06637B" }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
            </ZoomableGroup>
        </ComposableMap>
  )
}

export default SimpleMap
