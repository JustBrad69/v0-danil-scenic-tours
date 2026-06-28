'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Car, Binoculars, Users, ChevronDown } from 'lucide-react'
import { LOCAL_IMAGES } from '@/lib/images'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

export default function LakeNaivashaPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={LOCAL_IMAGES.CROWNED_CRANE}
          alt="Crowned crane bird at Lake Naivasha in Kenya's Great Rift Valley"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)' }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-playfair text-white text-5xl md:text-6xl font-bold mb-4">
            Lake Naivasha Safari
          </h1>
          <p className="font-inter text-white text-lg md:text-xl" style={{ opacity: 0.85 }}>
            2-Day Hell's Gate and Crescent Island Safari from Nairobi
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Lake Naivasha, nestled in the heart of Kenya's Great Rift Valley, is a tranquil freshwater lake famed for its stunning scenery, abundant birdlife, and diverse wildlife. Just two hours from Nairobi, it is an ideal destination for travelers seeking a blend of relaxation, adventure, and nature experiences.
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            This 2 Days, 1 Night safari offers a short but unforgettable escape, combining comfortable accommodation, scenic boat rides, and immersive wildlife experiences. Guests will stay at the Lake Naivasha Sopa Resort, enjoy a walking safari at Crescent Island, and explore the dramatic landscapes of Hell's Gate National Park, creating a truly memorable Kenyan adventure.
          </p>
        </div>
      </section>

      {/* Itinerary */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-10">

            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">1</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Rift Valley, Crescent Island, and Hell's Gate</h3>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="font-montserrat font-bold text-[#D4870A] text-sm flex-shrink-0 mt-1">7:00 AM</span>
                  <p className="font-inter text-[#1C1208] leading-relaxed">Your safari begins with an early morning departure from Nairobi in a 4x4 tour/safari jeep. Travel along the scenic Nairobi-Naivasha Highway, stopping briefly at the Great Rift Valley viewpoint for panoramic photos. Arrive at Lake Naivasha Sopa Resort for check-in.</p>
                </div>
                <p className="font-inter text-[#1C1208] leading-relaxed">After settling in, embark on a boat ride on Lake Naivasha, where you can observe hippos, abundant birdlife, and the serene lake environment, then enjoy a walking safari at Crescent Island Sanctuary, a unique private reserve where giraffes, zebras, impalas, and other wildlife roam freely. This walk allows guests to experience the animals up close in an unfenced, natural setting, providing excellent photographic and educational opportunities. Afterwards, you will be driven back to the resort for lunch.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">In the afternoon, a game drive to Hell's Gate National Park, a landscape of towering cliffs, deep gorges, and geothermal activity. You can explore the park by bike or hike the cliffs. In the evening, you return to the resort for dinner and an overnight stay at Lake Naivasha Sopa Resort.</p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">2</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Return to Nairobi</h3>
              </div>
              <div className="p-8">
                <div className="flex items-start gap-3">
                  <span className="font-montserrat font-bold text-[#D4870A] text-sm flex-shrink-0 mt-1">8:00 AM</span>
                  <p className="font-inter text-[#1C1208] leading-relaxed">After breakfast, check out, then depart for Nairobi, where you will be dropped off at your destination, marking the conclusion of your safari.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            Accommodation
          </h2>
          <div className="bg-white rounded-2xl p-8 border-l-4 border-[#D4870A]">
            <p className="font-inter text-[#1C1208] text-lg leading-relaxed text-center">
              Your 2-day, 1-night stay is at Lake Naivasha Sopa Resort, a well-established lakeside lodge offering comfortable rooms with en-suite bathrooms and views of the freshwater lake. Full-board accommodation includes all meals, breakfast, lunch, and dinner.
            </p>
          </div>
        </div>
      </section>

      {/* What You Will See */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            What You Will See
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
              At Lake Naivasha, you will observe hippos, over 400 recorded bird species, giraffes, zebras, and impalas at Crescent Island. Hell's Gate National Park features giraffes, zebras, antelopes, and hyenas roaming across dramatic landscapes with towering cliffs, deep gorges, and geothermal activity.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">What's Included</h3>
            <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
              {[
                'Full board accommodation',
                'Private transport in a 4x4 tour jeep with pop-up roof',
                'Professional tour guide',
                'Boat ride on Lake Naivasha',
                'Walking safari at Crescent Island Sanctuary',
                'Entrance fee to Hell\'s Gate National Park',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">What's Not Included</h3>
            <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
              {[
                'Hire of bike(s)',
                'Tips and gratuities',
                'Any activity not mentioned in the itinerary',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Best Time to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-[#D4870A]">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-1">June to October</h3>
              <p className="font-montserrat font-semibold text-[#D4870A] text-sm mb-3">Long Dry Season, Best Overall</p>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Clear skies, minimal rainfall, and comfortable temperatures create ideal conditions for boat rides, walking safaris, and wildlife viewing. This is the optimal season for Lake Naivasha visits.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">January to February</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Short Dry Season. Also excellent for safaris with warm, dry weather. Good wildlife viewing and photography opportunities.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">November to December</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Short Rains. The landscape becomes lush and green. Birdlife is exceptional during migratory seasons. Occasional afternoon showers, plan activities for mornings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Danil */}
      <section className="w-full bg-[#1C3028] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#FDF8F0] text-4xl font-bold text-center mb-12">
            Why Choose Danil Scenic Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Expert Local Guides</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">Our guides are experienced in Lake Naivasha and Hell's Gate, providing expert interpretation of wildlife, geology, and ecology.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Diverse Activity Mix</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">Boat safaris, walking safaris, and game drives, appealing to various interests and fitness levels.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Birdwatching Paradise</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">Over 400 bird species recorded. Our guides are experienced birders who can identify species and locate rare sightings.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Transparent Pricing</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">All-inclusive packages with no hidden costs. See detailed pricing on our Kenya Safari Packages page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Pack */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            What to Pack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Clothing and Footwear</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Lightweight, breathable clothing',
                  'Warm layer for early mornings',
                  'Comfortable walking shoes',
                  'Hat and sunglasses',
                  'Light rain jacket',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Sun and Health Protection</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'High SPF sunscreen',
                  'Mosquito repellent',
                  'Any personal medications',
                  'Hand sanitizer',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Gadgets</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Camera and binoculars',
                  'Binoculars for birdwatching',
                  'Extra batteries and memory cards',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#1C3028] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#FDF8F0] text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What wildlife will I see at Lake Naivasha?',
                a: 'You will observe hippos, abundant birdlife (over 400 species recorded), giraffes, zebras, impalas, and other wildlife at Crescent Island and Hell\'s Gate National Park.',
              },
              {
                q: 'Is it safe to be on the boat?',
                a: 'Yes, boat safaris on Lake Naivasha are conducted by experienced operators using well-maintained boats. Your guide will ensure safety protocols are followed at all times.',
              },
              {
                q: 'Can I swim in Lake Naivasha?',
                a: 'Swimming is not recommended due to the presence of hippos and crocodiles. Stick to boat rides and lakeside viewing for safety. Your resort has a pool for swimming.',
              },
              {
                q: 'How difficult is the Crescent Island walking safari?',
                a: 'The walking safari on Crescent Island is easy to moderate, suitable for most fitness levels. The terrain is grassland, and the walk is approximately 1.5 to 2 hours at a leisurely pace.',
              },
              {
                q: 'What about the Hell\'s Gate activities, biking vs hiking?',
                a: 'You can explore Hell\'s Gate by game drive (standard), and can optionally bike or hike the cliffs. Biking and hiking are optional activities with additional costs. Discuss your preferences when booking.',
              },
              {
                q: 'What is the best time of day for boat safaris?',
                a: 'Early morning (7 to 9 AM) and late afternoon (4 to 5 PM) are ideal for wildlife activity and photography. Morning light is particularly excellent.',
              },
              {
                q: 'How many bird species can I see?',
                a: 'Over 400 bird species are recorded at Lake Naivasha. In a 2-day visit, expect to see 50 to 100 plus species depending on season and your guide\'s expertise.',
              },
              {
                q: 'Is this suitable for families with children?',
                a: 'Yes, families are welcome. The boat ride is enjoyable for children. The walking safari on Crescent Island is suitable for children with reasonable mobility. Discuss age-specific considerations when booking.',
              },
            ].map((item, i) => (
              <details key={i} className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#2A4A35] px-6 py-4 font-montserrat font-semibold text-white hover:bg-[#1C1208] transition-colors">
                  <span>{item.q}</span>
                  <ChevronDown size={20} className="transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                </summary>
                <div className="bg-[#2A4A35] rounded-2xl px-6 py-4 mt-1 font-inter text-[#FDF8F0] text-sm leading-relaxed">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

     {/* Explore More */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            Explore More Kenya Safari Experiences
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center mb-12">
            Looking for other safari destinations? Discover our complete safari portfolio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Individual Safari Destinations</h3>
              <ul className="space-y-3 font-inter text-[#1C1208] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/nairobi-national-park-safari-tours" className="text-[#D4870A] hover:underline">Nairobi City Tour</Link>
                  <span>, urban safari and cultural attractions (1 day)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/ol-pejeta-safari-tours" className="text-[#D4870A] hover:underline">Ol Pejeta Conservancy</Link>
                  <span>, Big Five safari (2 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/maasai-mara-safari-tours" className="text-[#D4870A] hover:underline">Maasai Mara Safari Tours</Link>
                  <span>, Great Migration and predators (4 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/amboseli-safari-tours" className="text-[#D4870A] hover:underline">Amboseli Safari</Link>
                  <span>, Kilimanjaro views and elephants (3 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/tsavo-safari-tours" className="text-[#D4870A] hover:underline">Tsavo National Park</Link>
                  <span>, vast wilderness (3 days)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Hub Pages</h3>
              <ul className="space-y-3 font-inter text-[#1C1208] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <span>Kenya Safari Tours, learn about different safari types and destinations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <span>Kenya Safari Packages, view multi-destination combinations and pricing</span>
                </li>
              </ul>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed mt-6">
                For all pricing and package comparisons, visit our Kenya Safari Packages page.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="relative overflow-hidden py-32 px-4 md:py-48">
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src={LOCAL_IMAGES.CROWNED_CRANE}
            alt="Birdlife at Lake Naivasha in Kenya's Great Rift Valley"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)', zIndex: 1 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Book Your Lake Naivasha Safari Today
          </h2>
          <p className="font-inter text-white text-lg mb-12 opacity-85">
            Experience Lake Naivasha's stunning beauty, diverse birdlife, and Hell's Gate's dramatic adventure. Book your 2-day safari now with Danil Scenic Tours.
          </p>
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
            <Link
              href="/book?tour=Lake+Naivasha+Safari"
              className="px-6 md:px-10 py-3 md:py-4 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all text-sm md:text-base"
            >
              Start Planning
            </Link>
            <Link
              href="https://wa.me/254722919249"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-10 py-3 md:py-4 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-[#2A4A35] transition-all text-sm md:text-base"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </div>
  )
}
