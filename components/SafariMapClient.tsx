'use client'

import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  useMap,
} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import type {
  SafariMapLocationId,
  SafariMapProps,
} from '@/components/SafariMap'

type SafariLocation = {
  id: SafariMapLocationId
  name: string
  lat: number
  lon: number
  href: string
}

const SAFARI_LOCATIONS: Record<SafariMapLocationId, SafariLocation> = {
  nairobi: {
    id: 'nairobi',
    name: 'Nairobi National Park',
    lat: -1.37,
    lon: 36.85,
    href: '/destinations/nairobi-national-park-safari-tours',
  },

  'maasai-mara': {
    id: 'maasai-mara',
    name: 'Maasai Mara National Reserve',
    lat: -1.48,
    lon: 35.14,
    href: '/destinations/maasai-mara-safari-tours',
  },

  amboseli: {
    id: 'amboseli',
    name: 'Amboseli National Park',
    lat: -2.63,
    lon: 37.25,
    href: '/destinations/amboseli-safari-tours',
  },

  tsavo: {
    id: 'tsavo',
    name: 'Tsavo East & West',
    lat: -2.99,
    lon: 38.46,
    href: '/destinations/tsavo-safari-tours',
  },

  'lake-nakuru': {
    id: 'lake-nakuru',
    name: 'Lake Nakuru National Park',
    lat: -0.35,
    lon: 36.08,
    href: '/destinations/lake-nakuru-safari-tours',
  },

  'lake-naivasha': {
    id: 'lake-naivasha',
    name: 'Lake Naivasha',
    lat: -0.77,
    lon: 36.35,
    href: '/destinations/lake-naivasha-safari-tours',
  },

  'ol-pejeta': {
    id: 'ol-pejeta',
    name: 'Ol Pejeta Conservancy',
    lat: 0.02,
    lon: 36.93,
    href: '/destinations/ol-pejeta-safari-tours',
  },

  'diani-beach': {
    id: 'diani-beach',
    name: 'Diani Beach',
    lat: -4.28,
    lon: 39.59,
    href: '/destinations/diani-beach-safari-tours',
  },
}

function createMarkerIcon(
  index: number,
  showNumber: boolean
) {
  return L.divIcon({
    className: 'safari-map-marker',
    html: `
      <div
        style="
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background: #D4870A;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(28, 18, 8, 0.30);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #1C1208;
          font-size: 13px;
          font-weight: 700;
          font-family: Arial, sans-serif;
        "
      >
        ${showNumber ? index + 1 : ''}
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  })
}

function MapControls() {
  const map = useMap()

  const zoomIn = () => {
    map.setZoom(map.getZoom() + 1, {
      animate: true,
    })
  }

  const zoomOut = () => {
    map.setZoom(map.getZoom() - 1, {
      animate: true,
    })
  }

  return (
    <div className="absolute right-3 top-3 z-[1000] flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-lg sm:right-4 sm:top-4">
      <button
        type="button"
        onClick={zoomIn}
        aria-label="Zoom map in"
        className="flex h-11 w-11 items-center justify-center border-b border-black/10 bg-white text-xl font-bold text-[#2A4A35] transition-colors hover:bg-[#F2E8D5]"
      >
        +
      </button>

      <button
        type="button"
        onClick={zoomOut}
        aria-label="Zoom map out"
        className="flex h-11 w-11 items-center justify-center bg-white text-xl font-bold text-[#2A4A35] transition-colors hover:bg-[#F2E8D5]"
      >
        -
      </button>
    </div>
  )
}

function FitMapToLocations({
  locations,
}: {
  locations: SafariLocation[]
}) {
  const map = useMap()

  useEffect(() => {
    if (locations.length === 0) {
      return
    }

    const timer = window.setTimeout(() => {
      map.invalidateSize()

      if (locations.length === 1) {
        map.setView(
          [locations[0].lat, locations[0].lon],
          8,
          {
            animate: false,
          }
        )

        return
      }

      const bounds = L.latLngBounds(
        locations.map((location) => [
          location.lat,
          location.lon,
        ])
      )

      map.fitBounds(bounds, {
        padding: [45, 45],
        maxZoom: 8,
        animate: false,
      })
    }, 100)

    return () => {
      window.clearTimeout(timer)
    }
  }, [locations, map])

  return null
}

export default function SafariMapClient({
  locations: locationIds,
  showRouteLine = false,
}: SafariMapProps) {
  const router = useRouter()

  const locations = useMemo(
    () =>
      locationIds
        .map((id) => SAFARI_LOCATIONS[id])
        .filter(
          (location): location is SafariLocation =>
            Boolean(location)
        ),
    [locationIds]
  )

  const routePositions = useMemo(
    () =>
      locations.map(
        (location) =>
          [location.lat, location.lon] as [number, number]
      ),
    [locations]
  )

  if (locations.length === 0) {
    return null
  }

  return (
    <div className="w-full">
      <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border-2 border-[#2A4A35] bg-[#FAF4E8] shadow-lg sm:h-[420px] md:h-[500px]">
        <MapContainer
          center={[-0.5, 37.8]}
          zoom={6}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom
          touchZoom
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <FitMapToLocations locations={locations} />

          <MapControls />

          {showRouteLine && routePositions.length > 1 && (
            <Polyline
              positions={routePositions}
              pathOptions={{
                color: '#D4870A',
                weight: 3,
                opacity: 0.8,
                dashArray: '8 8',
              }}
            />
          )}

          {locations.map((location, index) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lon]}
              icon={createMarkerIcon(
                index,
                showRouteLine
              )}
              keyboard
              eventHandlers={{
                click: () => {
                  router.push(location.href)
                },
              }}
            />
          ))}
        </MapContainer>
      </div>

      <p className="mt-3 text-center font-inter text-xs leading-relaxed text-[#1C1208]/65 sm:text-sm">
        Select a destination marker to explore its full safari details.
      </p>

      {showRouteLine && locations.length > 1 && (
        <p className="mt-1 text-center font-inter text-xs leading-relaxed text-[#1C1208]/55">
          Numbered markers follow the safari itinerary. The connecting line
          shows the journey sequence rather than the exact road or flight
          route.
        </p>
      )}
    </div>
  )
}
