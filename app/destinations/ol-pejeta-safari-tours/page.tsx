'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Car, Binoculars, Shield, UtensilsCrossed, ChevronDown } from 'lucide-react'
import { LOCAL_IMAGES } from '@/lib/images'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

export default function OlPejetaPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={LOCAL_IMAGES.ELEPHANT_KILIMANJARO}
          alt="Elephants at Ol Pejeta Conservancy on the Laikipia Plateau in Kenya"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)' }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-playfair text-white text-5xl md:text-6xl font-bold mb-4">
            Ol Pejeta Conservancy Safari
          </h1>
          <p className="font-inter text-white text-lg md:text-xl" style={{ opacity: 0.85 }}>
            2-Day Big Five Wildlife Tour from Nairobi
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold">
            Experience Kenya's Premier Big Five Safari at Ol Pejeta Conservancy
          </h2>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Ol Pejeta Conservancy is one of Kenya's leading wildlife conservation areas and one of Africa's most inspiring conservation success stories. Located on the Laikipia Plateau in central Kenya, north of Nairobi, this 90,000-acre conservation area offers spectacular opportunities to see Kenya's Big Five, lions, rhinos, buffalo, leopards, and elephants.
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            What sets Ol Pejeta apart is its commitment to conservation alongside visitor experiences. Your safari directly supports anti-poaching efforts, community development programs, and wildlife research. This is not just a safari, it is a meaningful wildlife encounter that protects endangered species.
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Your 2-day, 1-night safari at Ol Pejeta combines comfortable accommodation at Maisha Sweetwaters Camp, expert guides, rewarding game drives, and the landscapes of the Laikipia Plateau. You will return to Nairobi refreshed, inspired, and with memories of authentic African wilderness.
          </p>
        </div>
      </section>

      {/* Itinerary */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Your Ol Pejeta Conservancy Safari Itinerary
          </h2>
          <div className="space-y-10">

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">1</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Nairobi to Ol Pejeta Conservancy</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">Your safari begins with an early morning departure from Nairobi at 7:00 AM.</p>
                <div>
                  <p className="font-montserrat font-bold text-[#2A4A35] text-sm mb-2">The Scenic Drive</p>
                  <p className="font-inter text-[#1C1208] leading-relaxed">The 2-hour drive to Ol Pejeta takes you through Kenya's stunning central highlands. You will enjoy views of fertile farmlands and the majestic outline of Mount Kenya, weather permitting, rising 5,199 meters into the sky. The drive itself is part of your safari experience, a visual introduction to the landscapes you will explore.</p>
                </div>
                <p className="font-inter text-[#1C1208] leading-relaxed">Upon arrival in Nanyuki, you will proceed to Maisha Sweetwaters Camp for check-in and lunch. Take time to settle into your comfortable tented accommodation and refresh after your journey.</p>
                <div>
                  <p className="font-montserrat font-bold text-[#2A4A35] text-sm mb-2">Afternoon Game Drive</p>
                  <p className="font-inter text-[#1C1208] leading-relaxed">In the afternoon, you will enter Ol Pejeta Conservancy for your game drive across its diverse landscapes. The afternoon game drive allows ample time to explore the conservancy's open plains and woodland areas.</p>
                </div>
                <p className="font-inter text-[#1C1208] leading-relaxed">You may encounter the Big Five, elephants moving majestically across grasslands, lions resting in the shade, black rhinos grazing on open plains where vegetation is sparse, making them visible, buffalo herds congregating near water sources, and leopards occasionally visible in acacia trees.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Other wildlife includes giraffes, zebras, hartebeest, impala, cheetahs, hyenas, and numerous bird species.</p>
                <div>
                  <p className="font-montserrat font-bold text-[#2A4A35] text-sm mb-2">Evening at Camp</p>
                  <p className="font-inter text-[#1C1208] leading-relaxed">After your game drive, you will exit the conservancy and return to Maisha Sweetwaters Camp. Enjoy dinner at the camp and rest overnight in your comfortable tented accommodation, surrounded by the sounds of the African wilderness.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">2</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Ol Pejeta to Nairobi</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">Your final safari day begins after breakfast.</p>
                <div>
                  <p className="font-montserrat font-bold text-[#2A4A35] text-sm mb-2">Breakfast and Checkout</p>
                  <p className="font-inter text-[#1C1208] leading-relaxed">Enjoy a hearty breakfast at camp, preparing you for the journey back to Nairobi.</p>
                </div>
                <div>
                  <p className="font-montserrat font-bold text-[#2A4A35] text-sm mb-2">Return to Nairobi</p>
                  <p className="font-inter text-[#1C1208] leading-relaxed">You will check out from Maisha Sweetwaters Camp and begin your return journey to Nairobi. Enjoy relaxed views of the countryside as you travel through the central highlands, arriving in Nairobi by early afternoon, approximately 10:30 AM to 12:00 PM, marking the end of your short but fulfilling safari experience.</p>
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
            Where You Will Stay: Maisha Sweetwaters Camp
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
            <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
              Your home for the night is Maisha Sweetwaters Camp, located outside Ol Pejeta Conservancy in the Laikipia region. The camp offers comfortable, well-appointed tented accommodation in a serene wilderness setting.
            </p>
            <div>
              <p className="font-montserrat font-bold text-[#2A4A35] text-sm mb-3">Facilities and Amenities</p>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Comfortable tented rooms with en-suite bathrooms',
                  'Full-board meals, breakfast, lunch, and dinner',
                  'Dining area and lounge for relaxation',
                  'Professional staff and 24-hour support',
                  'Warm hospitality and authentic bush camp atmosphere',
                  'Natural setting surrounded by wildlife',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-inter text-[#1C1208] text-sm leading-relaxed italic">
              Maisha means "life" in Swahili, the camp lives up to its name by providing a life-enriching experience in the heart of Laikipia.
            </p>
          </div>
        </div>
      </section>

      {/* Big Five Section */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            The Big Five and Wildlife at Ol Pejeta
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            Ol Pejeta Conservancy is renowned for excellent opportunities to spot all five members of Africa's iconic Big Five.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-3">Lions</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Ol Pejeta has one of Kenya's most reliable lion populations. These apex predators are frequently spotted, especially during early morning and late afternoon game drives. You may see them resting in shade, patrolling territory, or actively hunting.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-3">Black Rhinos</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">The conservancy is a stronghold for black rhinos. These critically endangered animals, weighing up to 1,400 kg, are surprisingly agile and can run up to 50 km/h. During dry season drives, sparse vegetation makes them easier to spot. Ol Pejeta's anti-poaching efforts have been crucial in protecting this species.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-3">Elephants</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Large herds of African elephants roam across Ol Pejeta's open plains. These intelligent giants are magnificent to observe as they move purposefully across the landscape, often in family groups. You may see them bathing at waterholes or feeding on acacia trees.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-3">Buffalo</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Cape buffalo are powerful, unpredictable animals often encountered in herds. These massive bovines can appear calm one moment and charge the next, they are considered Africa's most dangerous animal to encounter. Watching them at waterholes is a privilege.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm md:col-span-2">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-3">Leopards</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">The most elusive of the Big Five, leopards are nocturnal and solitary. Spot one during daylight hours and you have seen something special. Ol Pejeta's diverse habitat, woodlands and grasslands, provides good leopard habitat.</p>
            </div>
          </div>
          <div className="mt-8 bg-[#D4870A] rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-white text-lg mb-2">Additional Wildlife</p>
            <p className="font-inter text-white text-base">Beyond the Big Five, Ol Pejeta supports giraffes, zebras, hartebeest, impala, cheetahs, hyenas, wild dogs, Grevy's zebras, and numerous bird species. Over 300 bird species have been recorded in the conservancy.</p>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Best Time to Visit Ol Pejeta Conservancy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-[#D4870A]">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-1">June to October</h3>
              <p className="font-montserrat font-semibold text-[#D4870A] text-sm mb-3">Peak Dry Season, Best Overall</p>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">This is the optimal period for wildlife viewing at Ol Pejeta. Vegetation is sparse, making animals easier to locate in open conditions. Animals congregate around reliable water sources, increasing encounter chances. Clear skies provide excellent visibility and photography conditions. The weather is cool and dry, average 18 to 22 degrees Celsius. June to September are particularly excellent. Book well in advance during this peak season.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">December to February</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Secondary Dry Season. Excellent alternative to peak season. Clear skies and golden light ideal for photography. Animals gather at water sources. Weather is warm and dry. December is festive but book early for holiday-season demand. January to February offer a good balance of wildlife viewing and fewer crowds than peak season.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">March and November</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Shoulder Seasons. March experiences green landscapes and good wildlife viewing opportunities. November sees the short rains create beautiful scenery and fewer tourists. These months offer good value and less crowding while maintaining acceptable wildlife viewing conditions.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">April to May, October</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Rainy Season. Not recommended for traditional safari experiences. Heavy rainfall can make roads muddy. Tall grass obscures wildlife viewing. However, the landscape is lush and dramatic. Birding enthusiasts appreciate the green season. Plan only if you have flexibility with wildlife sighting expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Getting to Ol Pejeta from Nairobi
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <Car size={32} className="text-[#D4870A] flex-shrink-0" />
              <div>
                <p className="font-montserrat font-bold text-[#2A4A35] text-lg mb-2">Distance and Duration</p>
                <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Ol Pejeta Conservancy lies 200 km north of Nairobi, approximately 2 hours' drive via the Nairobi-Nanyuki Highway through the scenic central highlands.</p>
              </div>
            </div>
            <div>
              <p className="font-montserrat font-bold text-[#2A4A35] text-lg mb-2">The Route</p>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Your journey begins with early 7:00 AM pickup from your Nairobi hotel. You will travel through the vibrant outskirts of Nairobi, then into the central highlands region. The landscape transitions from urban to rural to highland forest views.</p>
            </div>
            <div>
              <p className="font-montserrat font-bold text-[#2A4A35] text-lg mb-2">Scenic Highlights</p>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Mount Kenya, the second-highest mountain in Africa at 5,199 meters, rises to the east, weather permitting. You will pass through fertile farmlands, local villages, and highland forests. The journey itself provides insight into Kenya's geography and local communities. Upon arriving in the Nanyuki area, you will proceed to Maisha Sweetwaters Camp and then enter the conservancy.</p>
            </div>
            <div>
              <p className="font-montserrat font-bold text-[#2A4A35] text-lg mb-2">Road Conditions</p>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">The roads are generally paved and well-maintained. Your driver-guide is experienced with the route and familiar with road conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            What's Included in Your Ol Pejeta Safari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">What's Included</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Full-board accommodation at Maisha Sweetwaters Camp (breakfast, lunch, dinner)',
                  'Private transport in a 4x4 tour jeep with pop-up roof for optimal wildlife viewing and photography',
                  'Professional, English-speaking guide with wildlife expertise',
                  'Game drive at Ol Pejeta Conservancy',
                  'Park entry fees for Ol Pejeta Conservancy',
                  'Hotel pickup and dropoff from Nairobi',
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
                  'Tips and gratuities',
                  'Any activities not mentioned in the itinerary',
                  'Personal expenses and items',
                  'Travel insurance',
                  'International flights',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Danil */}
      <section className="w-full bg-[#1C3028] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#FDF8F0] text-4xl font-bold text-center mb-12">
            Why Choose Danil Scenic Tours for Your Ol Pejeta Safari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Local Nairobi-Based Expertise</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">We are based in Nairobi and know these routes intimately. We understand seasonal wildlife patterns, road conditions, and can provide local insights that distant operators cannot.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Flexible Departures</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">Start any day that suits your schedule. No waiting for group bookings, both private and group options available.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">All-Inclusive Transparency</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">What you see is what you pay. No hidden costs, no surprise charges. Everything is explained upfront.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Proven Reputation</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">5.0/5 rating from 24+ verified guests. TRA Licensed. Trusted by travelers from around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Pack */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            What to Pack for Ol Pejeta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Clothing and Footwear</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Lightweight, neutral-colored clothing (khaki, olive, tan)',
                  'Warm layer or fleece for cool early mornings',
                  'Comfortable walking shoes',
                  'Hat or baseball cap',
                  'Sunglasses (UV protection)',
                  'Optional, long sleeves and pants for sun and insect protection',
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
                  'High SPF sunscreen (SPF 50+)',
                  'Mosquito repellent (DEET-based)',
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
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Camera and Binoculars</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Camera or smartphone for wildlife photography',
                  'Binoculars for spotting distant animals',
                  'Extra batteries or portable charger',
                  'Memory cards or external storage',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Other Essentials</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Passport or ID',
                  'Light jacket or sweatshirt',
                  'Comfortable clothing for evening at camp',
                  'Toiletries (camp provides basics)',
                  'Notebook for recording sightings',
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
            Frequently Asked Questions About Ol Pejeta Safari
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Will I definitely see the Big Five?',
                a: 'While we cannot guarantee Big Five sightings, Ol Pejeta has excellent populations of all five species. During dry seasons (June to October, December to February), sighting chances are highest due to sparse vegetation and concentrated water sources. Early morning and late afternoon game drives offer optimal viewing. Even if you do not see all five, you will encounter diverse, impressive wildlife.',
              },
              {
                q: 'How far from Nairobi is Ol Pejeta?',
                a: 'Ol Pejeta is located approximately 200 km north of Nairobi, a 2-hour drive via the Nairobi-Nanyuki Highway. Your guide will handle all driving, you relax and enjoy the scenic route.',
              },
              {
                q: 'Is Ol Pejeta safe?',
                a: 'Yes, absolutely. Ol Pejeta is a professional, well-managed conservancy with excellent security and experienced guides. You will experience wildlife safely from your vehicle during game drives. Maisha Sweetwaters Camp has 24-hour staff and security. Follow your guide\'s instructions and maintain normal safety practices.',
              },
              {
                q: 'What is the physical fitness requirement?',
                a: 'This safari is suitable for most fitness levels. You will be in a vehicle during game drives, minimal physical exertion. The only walking is minimal, to meals, your tent, viewpoints. Elderly travelers and families with children participate comfortably. Let us know of any mobility concerns when booking.',
              },
              {
                q: 'Can I customize my itinerary?',
                a: 'Yes. Want to add night drives, additional game drives, or visits to the Sweetwaters Chimpanzee Sanctuary? Danil Scenic Tours can arrange customizations. Additional activities may incur extra fees. Discuss your interests when booking.',
              },
              {
                q: 'Is this good for families?',
                a: 'Absolutely. Families with children enjoy Ol Pejeta safaris. The vehicle experience suits most children, and wildlife encounters fascinate young explorers. Maisha Sweetwaters Camp offers family-friendly accommodation. Lunch and meals are good quality. Discuss any special requirements when booking.',
              },
              {
                q: 'Can I do this solo?',
                a: 'Yes, solo travelers are welcome. You will join other travelers in shared group safaris, or book a private tour for a completely personalized experience. Either way, your guide provides expert interpretation and ensures you have a memorable safari.',
              },
              {
                q: 'What about the Sweetwaters Chimpanzee Sanctuary?',
                a: 'Maisha Sweetwaters Camp is adjacent to Sweetwaters Chimpanzee Sanctuary, Kenya\'s only chimpanzee facility. Visits can be arranged as an add-on activity during your stay. This unique experience sees rescued and orphaned chimpanzees in natural, protected enclosures.',
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

      {/* Explore More Kenya Safari Experiences */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            Explore More Kenya Safari Experiences
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center mb-12">
            Looking for longer safaris or different destinations? Explore our complete safari portfolio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Individual Safari Destinations</h3>
              <ul className="space-y-3 font-inter text-[#1C1208] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/nairobi-national-park-safari-tours" className="text-[#D4870A] hover:underline">Nairobi City Tour</Link>
                  <span>, 1-day urban safari and cultural experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/maasai-mara-safari-tours" className="text-[#D4870A] hover:underline">Maasai Mara Safari Tours</Link>
                  <span>, Kenya's premier wildlife destination (4 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/amboseli-safari-tours" className="text-[#D4870A] hover:underline">Amboseli National Park Safari</Link>
                  <span>, elephants and Mount Kilimanjaro views (3 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/tsavo-safari-tours" className="text-[#D4870A] hover:underline">Tsavo National Park Safari</Link>
                  <span>, vast wilderness and red elephants (3 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/lake-naivasha-safari-tours" className="text-[#D4870A] hover:underline">Lake Naivasha Safari</Link>
                  <span>, freshwater lake and Hell's Gate adventure (2 days)</span>
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
                Combine Ol Pejeta with other destinations for an extended safari experience. Ask about our multi-destination packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32 px-4 md:py-48">
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src={LOCAL_IMAGES.ELEPHANT_KILIMANJARO}
            alt="Elephants roaming the plains at Ol Pejeta Conservancy"
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
            Experience the Ultimate Big Five Safari
          </h2>
          <p className="font-inter text-white text-lg mb-12 opacity-85">
            Ready to witness Kenya's Big Five in one of Africa's most meaningful conservation areas? Ol Pejeta Conservancy awaits with professional guides, excellent wildlife viewing, and the knowledge that your visit directly supports conservation efforts protecting endangered species.
          </p>
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
            <Link
              href="/book?tour=Ol+Pejeta+Conservancy+Safari"
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
