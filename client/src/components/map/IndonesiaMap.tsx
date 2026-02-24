import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { type Destination } from "@shared/schema";
import { MapPin } from "lucide-react";

// World map TopoJSON
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface IndonesiaMapProps {
  destinations: Destination[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export function IndonesiaMap({ destinations, selectedId, onSelect }: IndonesiaMapProps) {
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

  // Fallback map data if none provided to ensure map works during dev
  const defaultMarkers = destinations.length > 0 ? destinations : [
    { id: 1, name: "Bali", latitude: "-8.409518", longitude: "115.188919" },
    { id: 2, name: "Jakarta", latitude: "-6.2088", longitude: "106.8456" },
    { id: 3, name: "Yogyakarta", latitude: "-7.7956", longitude: "110.3695" },
    { id: 4, name: "Lombok", latitude: "-8.5833", longitude: "116.1167" },
  ] as any[];

  return (
    <div className="w-full h-full bg-accent/20 brutal-border relative overflow-hidden flex items-center justify-center">
      {/* Decorative map elements */}
      <div className="absolute top-4 left-4 font-display font-bold text-2xl tracking-tighter opacity-20 pointer-events-none">
        00°00'N 120°00'E
      </div>
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1600,
          center: [118.0, -2.5] // Centered on Indonesia
        }}
        className="w-full h-full object-cover"
      >
        <ZoomableGroup zoom={1} maxZoom={4} center={[118.0, -2.5]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={geo.properties.name === "Indonesia" ? "#FFF" : "#E5E7EB"}
                  stroke="#000"
                  strokeWidth={geo.properties.name === "Indonesia" ? 1.5 : 0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: geo.properties.name === "Indonesia" ? "#FFD93D" : "#E5E7EB", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {defaultMarkers.map((marker) => {
            const isSelected = selectedId === marker.id;
            const isHovered = hoveredMarker === marker.id;
            
            return (
              <Marker
                key={marker.id}
                coordinates={[parseFloat(marker.longitude), parseFloat(marker.latitude)]}
                onClick={() => onSelect(marker.id)}
                onMouseEnter={() => setHoveredMarker(marker.id)}
                onMouseLeave={() => setHoveredMarker(null)}
                className="cursor-pointer"
              >
                {/* Marker shadow/background */}
                <circle 
                  cx={2} 
                  cy={2} 
                  r={isSelected ? 14 : isHovered ? 12 : 10} 
                  fill="#000" 
                />
                {/* Main marker circle */}
                <circle 
                  cx={0} 
                  cy={0} 
                  r={isSelected ? 14 : isHovered ? 12 : 10} 
                  fill={isSelected ? "#F12D8C" : "#FFD93D"} 
                  stroke="#000" 
                  strokeWidth={3} 
                  className="transition-all duration-200"
                />
                
                {/* Label tooltips */}
                {(isSelected || isHovered) && (
                  <g transform="translate(0, -25)">
                    <rect 
                      x={-40} 
                      y={-15} 
                      width={80} 
                      height={24} 
                      fill="#FFF" 
                      stroke="#000" 
                      strokeWidth={2}
                    />
                    <text
                      textAnchor="middle"
                      y={0}
                      className="font-display font-bold text-xs"
                      fill="#000"
                    >
                      {marker.name}
                    </text>
                  </g>
                )}
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
      
      {/* Map Controls overlay */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <div className="bg-white brutal-border brutal-shadow p-2 text-center font-display font-bold text-xs">
          INTERACTIVE<br/>EXPLORER
        </div>
      </div>
    </div>
  );
}
