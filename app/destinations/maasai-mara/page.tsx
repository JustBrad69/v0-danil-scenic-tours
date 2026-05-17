'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Car, Building, Binoculars, Zap, Footprints, Users, UtensilsCrossed, MapPin, Plane, ChevronDown } from 'lucide-react'

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

      {/* Itinerary Section */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            4-Day Maasai Mara Safari Itinerary from Nairobi
          </h2>
          
          <div className="space-y-8">
            {/* Day 1 */}
            <div className="relative bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D4870A]">
              <div className="absolute -left-6 -top-6 w-12 h-12 bg-[#D4870A] rounded-full flex items-center justify-center text-white font-bold text-lg font-montserrat">
                1
              </div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3 ml-6">
                Arrival in Nairobi and City Tour
              </h3>
              <p className="font-inter text-[#1C1208] text-sm mb-4">
                Airport pickup, hotel check-in, guided tour of KICC and Nairobi National Park, dinner at hotel.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FAF4E8] rounded p-3">
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-xs mb-1">Luxury</p>
                  <p className="font-inter text-[#1C1208] text-sm">Crowne Plaza Nairobi Airport</p>
                </div>
                <div className="bg-[#FAF4E8] rounded p-3">
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-xs mb-1">Mid-Range</p>
                  <p className="font-inter text-[#1C1208] text-sm">Sarova Stanley</p>
                </div>
                <div className="bg-[#FAF4E8] rounded p-3">
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-xs mb-1">Budget</p>
                  <p className="font-inter text-[#1C1208] text-sm">Boma Inn</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="relative bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D4870A]">
              <div className="absolute -left-6 -top-6 w-12 h-12 bg-[#D4870A] rounded-full flex items-center justify-center text-white font-bold text-lg font-montserrat">
                2
              </div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3 ml-6">
                Nairobi to Maasai Mara via the Great Rift Valley
              </h3>
              <p className="font-inter text-[#1C1208] text-sm mb-4">
                Early breakfast, drive via Great Rift Valley viewpoint and Narok markets, arrive lodge by early afternoon.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FAF4E8] rounded p-3">
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-xs mb-1">Luxury</p>
                  <p className="font-inter text-[#1C1208] text-sm">Maisha Sweetwaters Camp</p>
                </div>
                <div className="bg-[#FAF4E8] rounded p-3">
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-xs mb-1">Mid-Range</p>
                  <p className="font-inter text-[#1C1208] text-sm">Pride Inn Mara Camp</p>
                </div>
                <div className="bg-[#FAF4E8] rounded p-3">
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-xs mb-1">Budget</p>
                  <p className="font-inter text-[#1C1208] text-sm">Mara Chui Lodge</p>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="relative bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D4870A]">
              <div className="absolute -left-6 -top-6 w-12 h-12 bg-[#D4870A] rounded-full flex items-center justify-center text-white font-bold text-lg font-montserrat">
                3
              </div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3 ml-6">
                Full-Day Game Drive with Hot Air Balloon Safari
              </h3>
              <p className="font-inter text-[#1C1208] text-sm">
                Pre-dawn balloon at sunrise, morning game drive tracking Big Five, Maasai village visit, bush lunch in the reserve, afternoon walking safari, stargazing.
              </p>
            </div>

            {/* Day 4 */}
            <div className="relative bg-white rounded-lg p-8 shadow-sm border-l-4 border-[#D4870A]">
              <div className="absolute -left-6 -top-6 w-12 h-12 bg-[#D4870A] rounded-full flex items-center justify-center text-white font-bold text-lg font-montserrat">
                4
              </div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3 ml-6">
                Return to Nairobi
              </h3>
              <p className="font-inter text-[#1C1208] text-sm">
                Final breakfast, scenic drive back via Great Rift Valley, arrive Nairobi by late afternoon, drop-off at airport or hotel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Accommodation Options for Every Budget
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2A4A35]">
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Tier</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Nairobi Hotel Day 1</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Maasai Mara Lodge Days 2-3</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">What to Expect</th>
                </tr>
              </thead>
              <tbody>
                {/* Luxury Row */}
                <tr className="bg-white hover:bg-[#FAF4E8] transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Luxury</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Crowne Plaza Nairobi Airport</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Maisha Sweetwaters Camp</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Spacious tents, gourmet dining, spa</td>
                </tr>
                {/* Mid-Range Row */}
                <tr className="bg-[#FAF4E8] hover:bg-white transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Mid-Range</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Sarova Stanley</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Pride Inn Mara Camp</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Comfortable tents, en-suite bathrooms, buffet</td>
                </tr>
                {/* Budget Row */}
                <tr className="bg-white hover:bg-[#FAF4E8] transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Budget</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Boma Inn</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Mara Chui Lodge</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Clean comfortable tents, full-board, same game drive access</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-white rounded-lg p-6 border-l-4 border-[#D4870A]">
            <p className="font-inter text-[#1C1208] text-sm text-center">
              <span className="font-montserrat font-semibold text-[#2A4A35]">Note:</span> Regardless of tier, all packages include full-board meals, access to the same wildlife areas, and the same quality of guiding.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time Section */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Best Time to Visit Maasai Mara from Nairobi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Card 1 - July-October */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">
                July–October
              </h3>
              <p className="font-inter text-[#1C1208] text-sm">
                Great Migration peak season. Witness millions of wildebeest and zebras crossing rivers and grasslands in one of nature&apos;s most spectacular events.
              </p>
            </div>

            {/* Card 2 - November-December */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">
                November–December
              </h3>
              <p className="font-inter text-[#1C1208] text-sm">
                Short rains bring lush vegetation and fewer crowds. Perfect for those seeking a more intimate safari experience with excellent wildlife viewing.
              </p>
            </div>

            {/* Card 3 - January-March */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">
                January–March
              </h3>
              <p className="font-inter text-[#1C1208] text-sm">
                Calving season brings resident wildlife and newborns. Enjoy lower prices and fantastic predator-prey interactions with fewer visitors around.
              </p>
            </div>

            {/* Card 4 - April-June */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">
                April–June
              </h3>
              <p className="font-inter text-[#1C1208] text-sm">
                Long rains bring the best birdwatching opportunities with discounted rates. Ideal for bird enthusiasts and travelers on a budget.
              </p>
            </div>
          </div>

          {/* Pro Tip Callout */}
          <div className="bg-[#D4870A] rounded-lg p-8 text-center">
            <p className="font-montserrat font-bold text-white text-lg mb-2">Pro Tip:</p>
            <p className="font-inter text-white text-base">
              For the Great Migration, plan your safari for late July through September.
            </p>
          </div>
        </div>
      </section>

      {/* Getting There Section */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            How to Get from Nairobi to Maasai Mara
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* By Road Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Car size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">
                  By Road
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-lg mb-2">
                    5–6 Hours
                  </p>
                  <p className="font-inter text-[#1C1208] text-sm">
                    Scenic Great Rift Valley drive with stops at viewpoints and Narok markets.
                  </p>
                </div>
                <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold mt-1">•</span>
                    <span>Travel in comfortable 4x4 vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold mt-1">•</span>
                    <span>Stops at scenic viewpoints along the way</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold mt-1">•</span>
                    <span>Visit local markets in Narok</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* By Air Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Plane size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">
                  By Air
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-lg mb-2">
                    45 Minutes
                  </p>
                  <p className="font-inter text-[#1C1208] text-sm">
                    Fly from Wilson Airport to Keekorok or Mara Serena airstrip with a short game drive to lodge.
                  </p>
                </div>
                <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold mt-1">•</span>
                    <span>Depart from Wilson Airport in Nairobi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold mt-1">•</span>
                    <span>Arrive at Keekorok or Mara Serena airstrip</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold mt-1">•</span>
                    <span>Short game drive from airstrip to lodge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#1C3028] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#FDF8F0] text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2A4A35] px-6 py-4 font-montserrat font-semibold text-white hover:bg-[#1C1208] transition-colors">
                <span>How much does a 4-day safari cost?</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="bg-[#2A4A35] rounded-2xl px-6 py-4 mt-1 font-inter text-[#FDF8F0] text-sm">
                <p>The cost depends on your tier (Luxury, Mid-Range, or Budget) and group size. Contact us for a personalized quote based on your preferences and travel dates.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2A4A35] px-6 py-4 font-montserrat font-semibold text-white hover:bg-[#1C1208] transition-colors">
                <span>Is the hot air balloon included?</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="bg-[#2A4A35] rounded-2xl px-6 py-4 mt-1 font-inter text-[#FDF8F0] text-sm">
                <p>Yes, the hot air balloon safari is included as standard in all our packages. Unlike some operators who charge extra, we include this unforgettable experience in every safari.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2A4A35] px-6 py-4 font-montserrat font-semibold text-white hover:bg-[#1C1208] transition-colors">
                <span>Can I do a shorter safari?</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="bg-[#2A4A35] rounded-2xl px-6 py-4 mt-1 font-inter text-[#FDF8F0] text-sm">
                <p>Yes, we offer 2-day and 3-day safari options in addition to our 4-day package. While all durations are fantastic, we recommend a minimum of 3 days to fully experience the Maasai Mara.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2A4A35] px-6 py-4 font-montserrat font-semibold text-white hover:bg-[#1C1208] transition-colors">
                <span>What is the minimum group size?</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="bg-[#2A4A35] rounded-2xl px-6 py-4 mt-1 font-inter text-[#FDF8F0] text-sm">
                <p>The minimum group size is 7 people. There is no maximum, so larger groups are always welcome. We can accommodate any size group with the right planning.</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2A4A35] px-6 py-4 font-montserrat font-semibold text-white hover:bg-[#1C1208] transition-colors">
                <span>Are private safaris available?</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="bg-[#2A4A35] rounded-2xl px-6 py-4 mt-1 font-inter text-[#FDF8F0] text-sm">
                <p>Absolutely! We offer both private safaris for individuals or families and group safaris for larger parties. Choose the option that best suits your travel style.</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2A4A35] px-6 py-4 font-montserrat font-semibold text-white hover:bg-[#1C1208] transition-colors">
                <span>What if I miss the Great Migration?</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="bg-[#2A4A35] rounded-2xl px-6 py-4 mt-1 font-inter text-[#FDF8F0] text-sm">
                <p>No worries! The Maasai Mara is home to resident lions, leopards, elephants, buffalo, and countless other wildlife year-round. You&apos;ll still experience incredible game drives regardless of the season.</p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2A4A35] px-6 py-4 font-montserrat font-semibold text-white hover:bg-[#1C1208] transition-colors">
                <span>Is it safe?</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="bg-[#2A4A35] rounded-2xl px-6 py-4 mt-1 font-inter text-[#FDF8F0] text-sm">
                <p>Yes, safety is our top priority. All our guides are trained in safety protocols, vehicles are equipped with VHF radios for communication, and lodges have professional security teams on site 24/7.</p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2A4A35] px-6 py-4 font-montserrat font-semibold text-white hover:bg-[#1C1208] transition-colors">
                <span>What payment methods do you accept?</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="bg-[#2A4A35] rounded-2xl px-6 py-4 mt-1 font-inter text-[#FDF8F0] text-sm">
                <p>We accept multiple payment methods for your convenience: M-Pesa, bank transfer, and credit/debit cards. Contact us to arrange the payment method that works best for you.</p>
              </div>
            </details>
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
