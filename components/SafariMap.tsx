"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Plus, Minus } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// These IDs MUST match the 'id' attributes we will add to your Safari cards
const SAFARI_LOCATIONS = [
  { id: "maasai-mara", name: "Maasai Mara", lat: -1.48, lon: 35.14 },
  { id: "amboseli", name: "Amboseli National Park", lat: -2.63, lon: 37.25 },
  { id: "lake-nakuru", name: "Lake Nakuru", lat: -0.35, lon: 36.08 },
  { id: "ol-pejeta", name: "Ol Pejeta Conservancy", lat: 0.02, lon: 36.93 },
  { id: "diani-beach", name: "Diani Beach", lat: -4.27, lon: 39.59 },
  { id: "mt-kenya", name: "Mt. Kenya", lat: -0.15, lon: 37.30 },
];

// Standard fix for Leaflet icons not showing correctly in React
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MapControls() {
  const map = useMap();
  return (
    <div className="absolute right-4 top-4 z-[1000] flex flex-col gap-2">
      <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
        <button 
          onClick={() => map.zoomIn()} 
          className="p-2 border-b hover:bg-gray-100 flex items-center justify-center bg-white transition-colors"
          type="button"
        >
          <Plus size={18} />
        </button>
        <button 
          onClick={() => map.zoomOut()} 
          className="p-2 hover:bg-gray-100 flex items-center justify-center bg-white transition-colors"
          type="button"
        >
          <Minus size={18} />
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
    <div className="w-full h-[450px] rounded-2xl overflow-hidden border-2 border-[#2A4A35] relative shadow-xl">
      <MapContainer 
        center={[-1.28, 36.82]} 
        zoom={6} 
        className="w-full h-full" 
        zoomControl={false}
        scrollWheelZoom={false} // Prevents page-scroll interference
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
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
              <div className="text-center p-1">
                <p className="font-bold text-[#2A4A35] m-0">{loc.name}</p>
                <p className="text-[10px] text-gray-500 m-0">Click to navigate to package</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
