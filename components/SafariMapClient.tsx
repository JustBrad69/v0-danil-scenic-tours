'use client'

import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  Tooltip,
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

function createMarkerIcon(index: number) {
  return L.divIcon({
    className: '',
    html: `
      <div
        style="
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          background: #D4870A;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(28, 18, 8, 0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1C1208;
          font-size: 13px;
          font-weight: 700;
          font-family: Arial, sans-serif;
        "
      >
        ${index + 1}
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    tooltipAnchor: [0, -20],
  })
}

function MapControls() {
  const map = useMap()

  const handleZoom = (type: 'in' | 'out') => {
    const nextZoom =
      type === 'in' ? map.getZoom() + 1 : map.getZoom() - 1

    map.setZoom(nextZoom, { animate: true })
  }

  return (
    <div className="absolute right-3 top-3 z-[1000] flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-lg sm:right-4 sm:top-4">
      <button
        type="button"
        onClick={() => handleZoom('in')}
        aria-label="Zoom map in"
        className="flex h-11 w-11 items-center justify-center border-b border-black/10 bg-white text-xl font-bold text-[#2A4A35] transition-colors hover:bg-[#F2E8D5]"
      >
        +
      </button>

      <button
        type="button"
        onClick={() => handleZoom('out')}
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
    if (!locations.length) {
      return
    }

    const timer = window.setTimeout(() => {
      map.invalidateSize()

      if (locations.length === 1) {
        map.setView(
          [locations[0].lat, locations[0].lon],
          8,
          { animate: false }
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
        padding: [40, 40],
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
  locationIds,
  showRouteLine = false,
}: SafariMapProps) {
  const router = useRouter()

  const locations = useMemo(
    () =>
      locationIds
        .map((id) => SAFARI_LOCATIONS[id])
        .filter(Boolean),
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

  if (!locations.length) {
    return null
  }

  return (
    <div>
      <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border-2 border-[#2A4A35] bg-[#FAF4E8] shadow-lg sm:h-[420px] md:h-[520px]">
        <MapContainer
          center={[-0.5, 37.8]}
          zoom={6}
          className="h-full w-full"
          zoomControl={false}
          scrollWheelZoom={false}
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
              icon={createMarkerIcon(index)}
              keyboard
              eventHandlers={{
                click: () => router.push(location.href),
              }}
            >
              <Tooltip
                direction="top"
                offset={[0, -14]}
                opacity={1}
                className="custom-safari-tooltip"
              >
                <div className="min-w-[140px] p-1 text-center">
                  <p className="m-0 text-sm font-bold leading-tight text-[#2A4A35]">
                    {location.name}
                  </p>

                  <p className="mb-0 mt-1 border-t pt-1 text-[10px] text-gray-500">
                    Open destination page
                  </p>
                </div>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {showRouteLine && locations.length > 1 && (
        <p className="mt-3 text-center font-inter text-xs leading-relaxed text-[#1C1208]/65">
          Map markers show the itinerary sequence. The connecting line is an
          overview and does not represent the exact road or flight route.
        </p>
      )}
    </div>
  )
}
