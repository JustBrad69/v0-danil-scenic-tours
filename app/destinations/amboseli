'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Car, Building, Binoculars, Users, Sunset, Star, UtensilsCrossed, MapPin, Plane, ChevronDown } from 'lucide-react'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

export default function AmboseliPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/amboseli-elephants.webp"
          alt="African elephants walking across Amboseli plains with Mount Kilimanjaro in background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)' }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-playfair text-white text-5xl md:text-6xl font-bold mb-4">
            Amboseli Safari Tours from Nairobi
          </h1>
          <p className="font-inter text-white text-lg md:text-xl" style={{ opacity: 0.85 }}>
            Witness Elephants Against the Backdrop of Mount Kilimanjaro
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            If you are seeking Africa's most iconic elephant experience, Amboseli National Park should be at the top of your safari wishlist. Located at the foot of Mount Kilimanjaro, Africa's tallest mountain, Amboseli offers a wildlife spectacle unlike any other — massive elephant herds moving across golden plains with the snow-capped peak of Kilimanjaro towering in the background. An Amboseli safari from Nairobi brings you face-to-face with these gentle giants, alongside lions, cheetahs, zebras, and over 400 bird species. With Danil Scenic Tours, your journey begins the moment you land at Jomo Kenyatta International Airport.
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Whether you are an international traveler discovering Kenya for the first time or a domestic visitor seeking a weekend escape into the wild, our 4-day Amboseli safari package is designed to immerse you in one of East Africa's most photographed landscapes. This guide will walk you through everything you need to know — from what's included and when to visit, to accommodation options and the full day-by-day itinerary.
          </p>
        </div>
      </section>

      {/* What Makes It Unforgettable */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold">
            What Makes an Amboseli Safari Unforgettable
          </h2>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Amboseli National Park is Kenya's second most visited wildlife reserve, and for good reason. Spanning 392 square kilometres at the foot of Mount Kilimanjaro, the park is famous for two things: elephants and views.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">Africa's Best Elephant Viewing</h3>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
                Amboseli is home to over 1,600 elephants, making it one of the best places in Africa to observe these majestic creatures up close. The park's elephant herds are among the most studied in the world, and you will see everything from playful calves to massive tuskers. The open terrain means visibility is excellent — elephants are often just metres away from your vehicle.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">Mount Kilimanjaro — The Ultimate Backdrop</h3>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
                While Kilimanjaro itself is located across the border in Tanzania, Amboseli offers the clearest and most dramatic views of the mountain from Kenyan soil. On clear mornings, the snow-capped summit rises 5,895 metres above sea level, creating a breathtaking backdrop for wildlife photography. Imagine photographing a herd of elephants crossing a dusty plain with Africa's highest peak behind them — this is Amboseli's signature image.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">Why Start Your Safari from Nairobi?</h3>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
                Nairobi is Kenya's gateway city, connected to the world through Jomo Kenyatta International Airport. Most international flights land here, making it the logical and convenient starting point for any Kenya safari tour. But Nairobi is more than just a transit hub — it is a vibrant capital city with its own attractions, including the KICC rooftop, Nairobi National Park, the Karen Blixen Museum, and the Giraffe Centre. Starting your safari from Nairobi allows you to experience both urban Kenyan culture and the wilderness of Amboseli in one seamless journey.
              </p>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed mt-4">
                At Danil Scenic Tours, we specialize in Amboseli safari tours that cater to both private and group travelers. Our packages include airport pickup from JKIA, a Kimana craft stop en route to Amboseli, comfortable transport, a full safari experience with expert guides, Nairobi National Park game drive, and a Carnivore dinner on Day 3. We handle the logistics so you can focus entirely on the wildlife, the landscapes, and the memories you will create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            What's Included in Your Amboseli Safari Package
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            When you book an Amboseli safari with Danil Scenic Tours, you are booking an all-inclusive experience. There are no hidden costs, no surprise fees, and no uncertainty about what happens next. Here is exactly what you get:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Car size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Transport in 4x4 Safari Land Cruisers</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">All game drives are conducted in custom 4x4 Land Cruiser safari vehicles equipped with pop-up roofs for optimal wildlife viewing and photography. These vehicles are built for the rough terrain of Amboseli's dusty plains and provide a comfortable, secure ride.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Building size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Accommodation: Budget, Mid-Range, or Luxury</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">You choose the accommodation tier that suits your travel style and budget. All options include full-board meals (breakfast, lunch, and dinner), comfortable lodging, and access to the same incredible wildlife experiences. Whether you stay in a budget lodge or a luxury tented camp, you will wake up to views of Kilimanjaro and fall asleep to the sounds of the African night.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Binoculars size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Game Drives with Experienced Guides</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Our driver-guides are wildlife experts who have spent years in Amboseli. They know where the elephant herds gather, where the lions hunt, and the best times to photograph Kilimanjaro. Every game drive is an opportunity to learn, ask questions, and witness behavior you have only seen in documentaries.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Users size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Maasai Village Cultural Visit</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Visit a traditional Maasai village to meet the Maasai people and learn about their centuries-old customs. You will witness traditional dances, learn the art of beadwork, and hear stories about how the Maasai have lived alongside wildlife for generations. The Maasai will teach you about their roles as men and women in the community, their relationship with cattle, and their deep connection to the land. This cultural encounter is included in the package and adds a rich human dimension to your safari.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Sunset size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Observation Hill Sunset Experience</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Amboseli's Observation Hill offers panoramic views of the park, the swamps where elephants and hippos gather, and Mount Kilimanjaro in the distance. On Day 2, you will climb to the top for a sunset picnic while watching elephants wade through the marshes below and the sun setting behind Kilimanjaro. This is one of the most photographed moments in Kenya.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Star size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Stargazing Under African Skies</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Amboseli has minimal light pollution, making it a world-class stargazing destination. After dinner on Day 2, you will enjoy a guided stargazing session, learning to identify constellations and planets visible in the Southern Hemisphere.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <UtensilsCrossed size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">All Meals, Park Fees, and Airport Transfers</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Full-board accommodation means all meals are included — breakfast, lunch, and dinner throughout your stay. All Amboseli National Park entrance fees are covered. Airport pickup from Jomo Kenyatta International Airport and drop-off at the end of your safari are also included, ensuring a good start and finish to your adventure.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <MapPin size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Airport Pickup and Kimana Craft Stop on Day 1</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">On Day 1, our driver picks you up from Jomo Kenyatta International Airport (JKIA) and you head straight toward Amboseli. Along the way, you stop at Kimana to browse and purchase handmade crafts and souvenirs from local artisans — a great introduction to Kenyan creativity. You arrive at the lodge in time for lunch, enjoy a short afternoon rest, and then set out on an evening game drive to begin your wildlife adventure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            4-Day Amboseli Safari Itinerary from Nairobi
          </h2>
          <div className="space-y-10">

            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">1</span>
                <h3 className="font-playfair text-white text-2xl font-bold">JKIA Pickup, Kimana Souvenirs, and Journey to Amboseli</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">Your Amboseli adventure begins the moment our driver meets you at arrivals at Jomo Kenyatta International Airport (JKIA). From there, you head directly toward Amboseli, with the excitement of the safari already building as Nairobi's skyline gives way to the open landscapes of southern Kenya.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Kimana Craft Stop: En route to Amboseli, you will make a stop in Kimana to browse a vibrant market of handmade crafts and souvenirs. Local artisans display beadwork, carvings, textiles, and Maasai-inspired keepsakes — perfect for gifts or personal mementos. This is a great opportunity to support local craftspeople and take home a piece of Kenya before you even step foot in the park.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">You arrive at the lodge in time for lunch, giving you a chance to settle in, freshen up, and enjoy a relaxed midday break. As the afternoon heat eases, you will head out on an evening game drive through Amboseli National Park — your first taste of the incredible wildlife that awaits. Watch for elephant herds gathering near the swamps as the sun begins to set over Mount Kilimanjaro. Return to the lodge for dinner as the African night comes alive around you.</p>
                <div>
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">Accommodation for Days 1–2:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Luxury</p>
                      <p className="font-inter text-[#1C1208] text-sm">Ol Tukai Lodge</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Mid-Range</p>
                      <p className="font-inter text-[#1C1208] text-sm">Maasai Simba Camp</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Budget</p>
                      <p className="font-inter text-[#1C1208] text-sm">Amboseli Sopa Lodge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">2</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Full-Day Amboseli Game Drive and Cultural Experience</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">This is the highlight day of your Amboseli safari. Wake up before dawn for an early morning game drive through Amboseli National Park. The early morning is the best time to see wildlife — elephants moving toward the swamps, predators returning from nocturnal hunts, and Mount Kilimanjaro often visible in the clear morning light.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Your guide will take you to key wildlife hotspots, tracking elephant herds, lion prides, and cheetah families. Amboseli is home to over 30 bird species, including flamingos, pelicans, and African fish eagles. You will also see large herds of zebras, wildebeest, and gazelles grazing across the plains.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Mid-morning, you will stop for a bush breakfast — coffee, pastries, and fresh fruit served in the wild, surrounded by the sounds of the African bush.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">After breakfast, visit a Maasai village. Meet the Maasai warriors and elders, learn about their semi-nomadic lifestyle, and watch traditional dances and ceremonies. The Maasai will teach you the art of beadwork — how they create the intricate necklaces, bracelets, and earrings that are central to their cultural identity. You will learn about their roles as men and women in the community, their relationship with cattle, and their deep respect for the land and its wildlife. This visit provides a human context to the landscape you are exploring.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Return to the lodge for lunch and a rest period during the heat of the day. Many lodges have swimming pools where you can cool off while watching wildlife pass by.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">In the afternoon, embark on an afternoon game drive through Amboseli. Your guide will take you to Observation Hill, a volcanic hill that offers panoramic views of the entire park. From the top, you can see elephants and hippos wading through the swamps below, Mount Kilimanjaro towering in the distance, and the endless plains stretching to the horizon. This is one of the most photographed viewpoints in East Africa.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Set up a small sunset picnic on the hill as you watch the sun set over Kilimanjaro. The golden light, the silhouettes of elephants, and the mountain backdrop create an unforgettable moment.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Return to the lodge as darkness falls. After dinner, enjoy a stargazing session. Amboseli's clear skies and minimal light pollution make it one of the best places in Kenya to observe the stars. Your guide will point out constellations, planets, and the Milky Way stretching across the night sky.</p>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">3</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Return to Nairobi, Nairobi National Park, and Carnivore Dinner</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">After breakfast, check out of the lodge and begin the drive back to Nairobi. The journey takes approximately 4 to 5 hours, and you will arrive in the city around lunchtime. Check into your hotel and enjoy a well-earned rest after two exciting days in the bush.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Afternoon Game Drive at Nairobi National Park: In the late afternoon, you will head out for a game drive at Nairobi National Park — the world's only wildlife park located within a capital city. With the Nairobi skyline as a backdrop, spot lions, rhinos, giraffes, zebras, and buffalo roaming freely just minutes from the city centre. It is a remarkable and uniquely Kenyan experience that perfectly rounds off your safari.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Dinner at the Carnivore Restaurant: End your day at the legendary Carnivore Restaurant, one of Nairobi's most iconic dining experiences. Famous for its all-you-can-eat spit-roasted meats served on Maasai swords, the Carnivore is a celebration of bold flavours and great atmosphere. It is the perfect way to toast the memories of your Amboseli safari before your final night in Kenya. After dinner, you will be transferred back to your hotel.</p>
                <div>
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">Accommodation for Day 3:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Luxury</p>
                      <p className="font-inter text-[#1C1208] text-sm">Crowne Plaza Nairobi Airport</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Mid-Range</p>
                      <p className="font-inter text-[#1C1208] text-sm">Sarova Stanley</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Budget</p>
                      <p className="font-inter text-[#1C1208] text-sm">Boma Inn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">4</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Departure from JKIA</h3>
              </div>
              <div className="p-8">
                <p className="font-inter text-[#1C1208] leading-relaxed">After breakfast at your hotel, your Amboseli safari comes to a close. Depending on your flight time, your driver will transfer you to Jomo Kenyatta International Airport (JKIA) at the appropriate time. If your flight is later in the day, there may be an opportunity for a relaxed morning in Nairobi — whether that means a final coffee, a last-minute shopping trip, or simply soaking in the city before heading home. Your driver will advise on timing based on your departure schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Table */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            Accommodation Options for Every Budget
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            One of the most common questions travelers ask is: "What is the difference between budget, mid-range, and luxury accommodation?" Here is a clear breakdown:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2A4A35]">
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Tier</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Amboseli Lodge (Days 1–2)</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Nairobi Hotel (Day 3)</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">What to Expect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-[#FAF4E8] transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Luxury</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Ol Tukai Lodge</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Crowne Plaza Nairobi Airport</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Spacious rooms with Kilimanjaro views, gourmet dining, spa facilities</td>
                </tr>
                <tr className="bg-[#FAF4E8] hover:bg-white transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Mid-Range</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Maasai Simba Camp</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Sarova Stanley</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Comfortable tents, en-suite bathrooms, buffet meals</td>
                </tr>
                <tr className="bg-white hover:bg-[#FAF4E8] transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Budget</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Amboseli Sopa Lodge</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Boma Inn</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Clean comfortable rooms, full-board meals, same game drive access</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-6 border-l-4 border-[#D4870A]">
            <p className="font-inter text-[#1C1208] text-sm text-center">
              <span className="font-montserrat font-semibold text-[#2A4A35]">Important:</span> Regardless of which tier you choose, all accommodation options include full-board meals, access to the same wildlife areas, and the same quality of guiding. The difference is in the level of comfort and amenities — not in the safari experience itself.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            Best Time to Visit Amboseli from Nairobi
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            Amboseli is a year-round safari destination, but the experience varies depending on when you visit. Here is a month-by-month guide:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">June to October: Dry Season — Best for Kilimanjaro Views</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">This is peak season for Amboseli. The dry weather means clearer skies, making Mount Kilimanjaro visible almost every morning. Wildlife congregates around the remaining water sources, making game viewing exceptional. The lack of rain also means easier road access and better photography conditions. Note that this is the busiest and most expensive time to visit.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">January to February: Short Dry Season</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Another excellent window for visiting Amboseli. The weather is warm and dry, Kilimanjaro is often visible, and wildlife is abundant. Prices are slightly lower than the June–October peak season.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">November to December: Short Rains</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Brief afternoon showers transform the landscape into a lush green paradise. Kilimanjaro views can be obscured by clouds, but the dramatic skies and vibrant vegetation create stunning photography opportunities. This is also calving season for many herbivores, attracting predators. Fewer tourists mean a more intimate safari experience.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">March to May: Long Rains</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">The long rains bring heavy afternoon downpours, and Kilimanjaro is often hidden by clouds. However, this is the best time for birdwatching, as migratory species arrive in large numbers. Many lodges offer significant discounts during this period, making it ideal for budget-conscious travelers.</p>
            </div>
          </div>
          <div className="bg-[#D4870A] rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-white text-lg mb-2">Pro Tip</p>
            <p className="font-inter text-white text-base">If your primary goal is to photograph elephants with Mount Kilimanjaro in the background, visit between June and October or January and February. If you prefer lower prices, fewer crowds, and dramatic green landscapes, visit during November–December or March–May.</p>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            How to Get from Nairobi to Amboseli
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            There are two main ways to travel from Nairobi to Amboseli:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Car size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">By Road (4–5 Hours)</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Most of our clients travel by road, which allows you to experience the journey as part of the adventure. You will drive through the scenic landscapes of southern Kenya, stop in Emali for refreshments, and arrive at Amboseli with a deeper sense of the landscape and culture. The roads are mostly paved, though the final section into the park can be dusty — which is why we use 4x4 vehicles.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Plane size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">By Air (30 Minutes)</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">For travelers who want to maximize their time in Amboseli, we offer fly-in options. You will depart from Wilson Airport in Nairobi and land at Amboseli Airstrip. From there, a short game drive brings you to your lodge. Flying saves time and offers stunning aerial views of Mount Kilimanjaro and the Amboseli plains.</p>
            </div>
          </div>
          <div className="mt-8 bg-[#F2E8D5] rounded-2xl p-6 border-l-4 border-[#D4870A]">
            <p className="font-inter text-[#1C1208] text-sm"><span className="font-montserrat font-semibold text-[#2A4A35]">Which option should you choose?</span> If you enjoy road trips, cultural stops, and scenic drives, go by road. If you are short on time or prefer convenience, choose the flight option.</p>
          </div>
        </div>
      </section>

      {/* Why Danil */}
      <section className="w-full bg-[#1C3028] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#FDF8F0] text-4xl font-bold text-center mb-12">
            Why Book Your Amboseli Safari with Danil Scenic Tours
          </h2>
          <p className="font-inter text-[#FDF8F0] text-lg text-center mb-12 opacity-85">
            There are dozens of safari operators in Nairobi, so why choose Danil Scenic Tours?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">We Are a Nairobi-Based Local Operator</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">We are based in Kahawa West, Nairobi, and we know this city and this country inside out. When you book with us, you are booking with people who live here, work here, and care deeply about showcasing the best of Kenya. We are not a faceless international booking platform — we are a family-run business that treats every client like a guest.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">All-Inclusive Pricing with No Hidden Costs</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">When we say "all-inclusive," we mean it. Transport, accommodation, meals, park fees, Maasai village visit, observation hill sunset, stargazing, Nairobi attractions tour, and airport transfers are all included. The only thing not included is your international flight and personal expenses like souvenirs or tips.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Flexible Departures — Daily Starting Points</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">We offer daily departures from Nairobi, so you do not need to wait for a group to form. Whether you want to start on a Monday, Friday, or Sunday, we can accommodate you. Private safaris depart whenever you are ready.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Expert Guides Who Make the Difference</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">Our driver-guides are the heart of the experience. They are also storytellers and problem-solvers who ensure your safari runs smoothly from start to finish. We are committed to responsible tourism — we work with lodges that support local communities and ensure our guides follow ethical wildlife viewing practices (no off-road driving, no harassment of animals).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Checklist */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Practical Safari Planning Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">What to Pack</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Lightweight, neutral-coloured clothing (khaki, olive, beige)',
                  'Long-sleeved shirts and trousers for sun and insect protection',
                  'Wide-brimmed hat and sunglasses',
                  'Comfortable walking shoes or hiking boots',
                  'Light jacket or fleece for early mornings and evenings',
                  'Swimsuit (some lodges have pools)',
                  'Binoculars and camera with zoom lens',
                  'Sunscreen (SPF 30+) and insect repellent',
                  'Reusable water bottle',
                  'Small daypack for game drives',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Health and Safety</h3>
                <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Yellow fever vaccination certificate (required for entry into Kenya)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Malaria prophylaxis recommended (consult your doctor)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Stay hydrated during game drives</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Photography Tips</h3>
                <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Bring extra memory cards and batteries</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Use a zoom lens (200mm or higher) for wildlife photography</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Shoot in early morning or late afternoon for best lighting</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Respect wildlife — do not ask your guide to drive off-road or harass animals for a photo</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Booking Timeline</h3>
                <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Book at least 3–6 months in advance for peak season (June–October)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Book 4–8 weeks in advance for shoulder season (November–May)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Contact us for last-minute availability</span></li>
                </ul>
              </div>
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
                q: 'How much does a 4-day Amboseli safari from Nairobi cost?',
                a: 'The cost depends on the accommodation tier you choose and the size of your group. Contact us for a detailed quote based on your travel dates and preferences.',
              },
              {
                q: 'Can I see Mount Kilimanjaro from Amboseli?',
                a: 'Yes! Amboseli offers the best views of Kilimanjaro from Kenyan soil. The mountain is visible on clear mornings, especially during the dry season (June–October and January–February). Cloud cover can obscure the view during the rainy months (March–May and November–December).',
              },
              {
                q: 'Is Amboseli good for seeing elephants?',
                a: 'Absolutely. Amboseli is famous for having some of Africa\'s largest elephant herds. You will see elephants up close every day, often with Kilimanjaro as the backdrop.',
              },
              {
                q: 'Can I do a shorter safari — 2 days instead of 4?',
                a: 'Yes. While we recommend the 4-day package for the full experience (including the Kimana craft stop, Observation Hill sunset, Nairobi National Park game drive, and Carnivore dinner), we can customize 2 or 3-day packages. Contact us to discuss options.',
              },
              {
                q: 'What is the minimum and maximum group size?',
                a: 'The minimum group size is 7. There is no maximum — for larger groups, we use multiple vehicles.',
              },
              {
                q: 'Do you offer private safaris, or only group tours?',
                a: 'We offer both. Private safaris give you a dedicated vehicle and guide, allowing you to set your own pace. Group safaris are more affordable and a great way to meet fellow travelers. Let us know your preference when booking.',
              },
              {
                q: 'Is it safe to travel to Amboseli?',
                a: 'Yes. Amboseli is one of Kenya\'s safest safari destinations. Our guides are trained in safety protocols, and our vehicles are equipped with VHF radios for communication. Lodges and camps have security staff, and wildlife encounters are carefully managed.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept Mpesa, bank transfer, and card payments. Cash is okay but highly discouraged for security reasons.',
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

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32 px-4 md:py-48">
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="/images/amboseli-elephants.webp"
            alt="Elephant herd at sunset in Amboseli National Park with Mount Kilimanjaro in background"
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
            Ready to Book Your Amboseli Adventure?
          </h2>
          <p className="font-inter text-white text-lg mb-12 opacity-85">
            Amboseli is waiting. Whether you are dreaming of photographing elephants with Kilimanjaro in the background, learning about Maasai culture, or watching the sun set from Observation Hill, your adventure begins with one simple step.
          </p>
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
            <Link
              href="/book"
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
