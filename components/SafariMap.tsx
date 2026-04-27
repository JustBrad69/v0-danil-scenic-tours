"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// THE FULL 13 DESTINATIONS - Mapped to your page data
const SAFARI_LOCATIONS = [
  { id: "maasai-mara", name: "Maasai Mara National Reserve", lat: -1.48, lon: 35.14 },
  { id: "amboseli", name: "Amboseli National Park", lat: -2.63, lon: 37.25 },
  { id: "tsavo", name: "Tsavo East & West", lat: -2.99, lon: 38.46 },
  { id: "lake-nakuru", name: "Lake Nakuru National Park", lat: -0.35, lon: 36.08 },
  { id: "lake-bogoria", name: "Lake Bogoria Reserve", lat: 0.25, lon: 36.10 },
  { id: "aberdare", name: "Aberdare National Park", lat: -0.42, lon: 36.73 },
  { id: "mt-kenya", name: "Mt. Kenya", lat: -0.15, lon: 37.31 },
  { id: "meru", name: "Meru National Park", lat: 0.18, lon: 38.20 },
  { id: "samburu", name: "Samburu National Reserve", lat: 0.61, lon: 37.53 },
  { id: "diani-beach", name: "Diani Beach", lat: -4.28, lon: 39.59 },
  { id: "nairobi", name: "Nairobi National Park", lat: -1.37, lon: 36.85 },
  { id: "ol-pejeta", name: "Ol Pejeta Conservancy", lat: 0.02, lon: 36.93 },
  { id: "lake-naivasha", name: "Lake Naivasha (Crescent Island)", lat: -0.77, lon: 36.35 },
];

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Improved Map Controls for Smoother Zoom
function MapControls() {
  const map = useMap();
  
  const handleZoom = (type: 'in' | 'out') => {
    if (type === 'in') {
      map.setZoom(map.getZoom() + 1, { animate: true });
    } else {
      map.setZoom(map.getZoom() - 1, { animate: true });
    }
  };

  return (
    <div className="absolute right-4 top-4 z-[1000] flex flex-col gap-2">
      <div className="bg-white rounded-lg shadow-lg border overflow-hidden flex flex-col">
        <button 
          onClick={() => handleZoom('in')} 
          className="p-3 border-b font-bold text-xl hover:bg-gray-100 transition-colors bg-white w-12 h-12 flex items-center justify-center"
          title="Zoom In"
        >
          +
        </button>
        <button 
          onClick={() => handleZoom('out')} 
          className="p-3 font-bold text-xl hover:bg-gray-100 transition-colors bg-white w-12 h-12 flex items-center justify-center"
          title="Zoom Out"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default function SafariMap() {
  const handleMarkerClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-[#2A4A35] relative shadow-2xl bg-gray-100">
      <MapContainer 
        center={[-0.5, 37.8]} // Slightly adjusted center for all 13 pins
        zoom={6} 
        className="w-full h-full" 
        zoomControl={false}
        scrollWheelZoom={false} // Prevents "shaky" page scrolling while over the map
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          attribution='&copy; OpenStreetMap contributors' 
        />
        <MapControls />
        {SAFARI_LOCATIONS.map((loc) => (
          <Marker 
            key={loc.id} 
            position={[loc.lat, loc.lon]} 
            icon={defaultIcon}
            eventHandlers={{ click: () => handleMarkerClick(loc.id) }}
          >
            <Popup>
              <div className="text-center">
                <p className="font-bold text-[#2A4A35] m-0 text-sm">{loc.name}</p>
                <p className="text-[10px] text-gray-500 m-0">Click to view details</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
