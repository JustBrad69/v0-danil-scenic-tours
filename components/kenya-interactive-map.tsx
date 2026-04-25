'use client'

import { useState } from 'react'

interface Destination {
  id: string
  name: string
  svgX: number
  svgY: number
  price?: string
}

const destinations: Destination[] = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara',
    svgX: 65,
    svgY: 35,
    price: 'Starting from $2,500',
  },
  {
    id: 'amboseli',
    name: 'Amboseli',
    svgX: 60,
    svgY: 65,
    price: 'Starting from $1,800',
  },
  {
    id: 'lake-nakuru',
    name: 'Lake Nakuru',
    svgX: 50,
    svgY: 45,
    price: 'Starting from $1,500',
  },
  {
    id: 'ol-pejeta',
    name: 'Ol Pejeta',
    svgX: 55,
    svgY: 28,
    price: 'Starting from $2,200',
  },
  {
    id: 'mombasa',
    name: 'Mombasa (Fort Jesus)',
    svgX: 85,
    svgY: 70,
    price: 'Starting from $180',
  },
  {
    id: 'lamu',
    name: 'Lamu',
    svgX: 88,
    svgY: 60,
    price: 'Starting from $200',
  },
]

export default function KenyaInteractiveMap() {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null)

  const handlePinClick = (destId: string) => {
    // Try multiple ID patterns to find the destination card
    let element = document.getElementById(destId)
    if (!element) {
      element = document.getElementById(`${destId}-card`)
    }
    if (!element) {
      element = document.getElementById(`${destId}-national`)
    }
    if (!element) {
      // Special mapping for coastal destinations
      if (destId === 'mombasa') {
        element = document.getElementById('diani-beach') || document.getElementById('diani-beach-card')
      }
      if (destId === 'lamu') {
        element = document.getElementById('lake-naivasha') || document.getElementById('lake-naivasha-card')
      }
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-[#FAF4E8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair text-[#2A4A35] mb-8 text-center">
          Explore Our Destinations
        </h2>

        {/* Interactive Map Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 md:p-8">
          <div className="w-full max-w-3xl mx-auto bg-[#F5EFE5] rounded-lg overflow-hidden">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto"
              style={{ minHeight: '400px', maxHeight: '600px' }}
            >
              {/* Kenya Landmass SVG Path - Simplified outline */}
              <path
                d="M 35,5 L 42,3 L 48,4 L 52,5 L 55,8 L 58,10 L 62,12 L 65,15 L 68,18 L 70,22 L 72,26 L 73,30 L 74,35 L 75,40 L 76,45 L 77,50 L 78,55 L 79,60 L 80,65 L 82,70 L 84,75 L 85,80 L 86,85 L 85,88 L 82,90 L 78,92 L 75,93 L 72,94 L 68,95 L 64,96 L 60,97 L 56,98 L 52,99 L 48,99.5 L 44,99 L 40,98 L 36,97 L 32,95 L 28,93 L 25,90 L 22,88 L 20,85 L 18,80 L 16,75 L 14,70 L 12,65 L 11,60 L 10,55 L 9,50 L 8,45 L 7,40 L 6,35 L 6,30 L 7,25 L 8,20 L 10,15 L 12,12 L 15,10 L 18,8 L 22,6 L 26,5 L 30,4 L 35,5 Z"
                fill="#D4A574"
                stroke="#B8956A"
                strokeWidth="0.5"
                opacity="0.9"
              />

              {/* Interactive Pins */}
              {destinations.map((dest) => (
                <g key={dest.id}>
                  {/* Outer glow on hover */}
                  {hoveredPin === dest.id && (
                    <circle
                      cx={dest.svgX}
                      cy={dest.svgY}
                      r="4"
                      fill="#D4870A"
                      opacity="0.2"
                    />
                  )}

                  {/* Pin circle - larger for touch targets */}
                  <circle
                    cx={dest.svgX}
                    cy={dest.svgY}
                    r="2.5"
                    fill="#D4870A"
                    stroke="white"
                    strokeWidth="0.8"
                    className="cursor-pointer transition-all"
                    onMouseEnter={() => setHoveredPin(dest.id)}
                    onMouseLeave={() => setHoveredPin(null)}
                    onClick={() => handlePinClick(dest.id)}
                    style={{
                      filter: hoveredPin === dest.id ? 'drop-shadow(0 0 4px rgba(212, 135, 10, 0.6))' : 'none',
                    }}
                  />
                </g>
              ))}
            </svg>
          </div>

          {/* Tooltip */}
          {hoveredPin && (
            <div className="mt-4 p-3 bg-[#2A4A35] text-white rounded-lg max-w-xs text-sm">
              <p className="font-montserrat font-semibold">
                {destinations.find((d) => d.id === hoveredPin)?.name}
              </p>
              <p className="text-xs text-[#FDF8F0] mt-1">
                {destinations.find((d) => d.id === hoveredPin)?.price}
              </p>
            </div>
          )}

          {/* Legend */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#1C1208]">
            <div className="w-3 h-3 rounded-full bg-[#D4870A] border border-white" />
            <span>Click a pin to explore destinations</span>
          </div>
        </div>
      </div>
    </section>
  )
}
