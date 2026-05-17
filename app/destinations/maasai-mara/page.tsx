'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Car, Building, Binoculars, Zap, Footprints, Users, UtensilsCrossed, MapPin } from 'lucide-react'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

export default function MaasaiMaraPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden flex-1">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2814%29-PPbHtHwWOiOCF897LhCVKG6lE946GY.webp"
          alt="Maasai Mara Safari"
          fill
          priority
          className="object-cover"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,18,8,0.72)] to-[rgba(28,18,8,0.2)]" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-playfair text-white text-5xl md:text-6xl font-bold mb-4">
            Maasai Mara Safari from Nairobi
          </h1>
          <p className="font-inter text-white text-lg md:text-xl opacity-85">
            Experience Kenya's Greatest Wildlife Adventure
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
              If you are planning a safari in Kenya, the Maasai Mara is the destination that should sit at the top of your list. This world-famous wildlife haven offers an unmatched safari experience home to the Big Five, the legendary Great Migration, and vast golden savannahs teeming with predators and prey.
            </p>
            <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
              At Danil Scenic Tours, we specialize in Maasai Mara safaris from Nairobi that cater to both private and group travellers. Our packages include airport pickup, a Nairobi city tour on arrival, comfortable transport to the Mara, and a full safari experience with expert guides.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            What's Included in Your Maasai Mara Safari Package
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Transport */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Car size={28} className="text-[#D4870A]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">
                    Transport in 4x4 Safari Land Cruisers
                  </h3>
                </div>
              </div>
              <p className="font-inter text-[#1C1208] text-sm">
                Comfortable and reliable 4x4 vehicles equipped for off-road safari exploration with experienced drivers.
              </p>
            </div>

            {/* Card 2 - Accommodation */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Building size={28} className="text-[#D4870A]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">
                    Accommodation Budget to Luxury
                  </h3>
                </div>
              </div>
              <p className="font-inter text-[#1C1208] text-sm">
                Options ranging from budget-friendly camps to luxury lodges, tailored to your preferences and budget.
              </p>
            </div>

            {/* Card 3 - Game Drives */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Binoculars size={28} className="text-[#D4870A]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">
                    Game Drives with Experienced Guides
                  </h3>
                </div>
              </div>
              <p className="font-inter text-[#1C1208] text-sm">
                Daily game drives led by knowledgeable guides who know the best spots to encounter wildlife.
              </p>
            </div>

            {/* Card 4 - Hot Air Balloon */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Zap size={28} className="text-[#D4870A]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">
                    Hot Air Balloon Safari included as standard
                  </h3>
                </div>
              </div>
              <p className="font-inter text-[#1C1208] text-sm">
                Experience breathtaking aerial views of the Mara landscape and wildlife from above.
              </p>
            </div>

            {/* Card 5 - Walking Safari */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Footprints size={28} className="text-[#D4870A]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">
                    Walking Safari with a Maasai Guide
                  </h3>
                </div>
              </div>
              <p className="font-inter text-[#1C1208] text-sm">
                Immersive guided walks through the savannah with authentic Maasai cultural insights.
              </p>
            </div>

            {/* Card 6 - Cultural Visit */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Users size={28} className="text-[#D4870A]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">
                    Maasai Village Cultural Visit
                  </h3>
                </div>
              </div>
              <p className="font-inter text-[#1C1208] text-sm">
                Authentic interactions with local Maasai communities to learn about their traditions and way of life.
              </p>
            </div>

            {/* Card 7 - Meals and Fees */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <UtensilsCrossed size={28} className="text-[#D4870A]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">
                    All Meals Park Fees and Airport Transfers
                  </h3>
                </div>
              </div>
              <p className="font-inter text-[#1C1208] text-sm">
                Comprehensive package includes all meals, park entrance fees, and convenient airport transfers.
              </p>
            </div>

            {/* Card 8 - City Tour */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <MapPin size={28} className="text-[#D4870A]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">
                    Nairobi City Tour on Arrival
                  </h3>
                </div>
              </div>
              <p className="font-inter text-[#1C1208] text-sm">
                Explore Kenya's vibrant capital city before heading to the Mara for a complete Kenyan experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for additional content */}
      <div className="flex-1 bg-[#FAF4E8] p-8">
        {/* Content sections will be added here */}
      </div>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </div>
  )
}
