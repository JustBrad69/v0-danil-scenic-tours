'use client'

import Image from 'next/image'
import Link from 'next/link'
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
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2814%29-PPbHtHwWOiOCF897LhCVKG6lE946GY.webp"
          alt="Maasai Mara safari vehicle on game drive with wildebeest herd near Narok"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)' }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-playfair text-white text-5xl md:text-6xl font-bold mb-4">
            Maasai Mara Safari from Nairobi
          </h1>
          <p className="font-inter text-white text-lg md:text-xl" style={{ opacity: 0.85 }}>
            Experience Kenya's Greatest Wildlife Adventure
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            If you are planning a safari in Kenya, the Maasai Mara is the destination that should sit at the top of your list. This world-famous wildlife haven offers an unmatched safari experience home to the Big Five, the legendary Great Migration, and vast golden savannahs teeming with predators and prey. A Maasai Mara safari from Nairobi brings you directly into the heart of Africa's most spectacular wildlife theatre, and with Danil Scenic Tours, your journey starts the moment you land at Jomo Kenyatta International Airport.
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Whether you are an international traveller discovering Kenya for the first time or a domestic visitor seeking an unforgettable weekend escape, our 4-day Maasai Mara safari package is designed to immerse you in the wild while ensuring comfort, safety, and authentic cultural encounters. This guide will walk you through everything you need to know, from what's included and when to visit, to accommodation options and the full day-by-day itinerary.
          </p>
        </div>
      </section>

      {/* What Makes It Unforgettable */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold">
            What Makes a Maasai Mara Safari from Nairobi Unforgettable
          </h2>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            The Maasai Mara is not just Kenya's most visited national reserve, it is one of the greatest wildlife destinations on the planet. Open grassland, acacia woodlands, and riverine forests, the Mara is home to an extraordinary concentration of wildlife. Lions lounge in the shade of fever trees. Cheetahs scan the plains for prey. Elephants march in single file along ancient migration routes. And during the Great Migration season, over 1.5 million wildebeest flood into the reserve, creating a spectacle that has been called the "greatest show on Earth."
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Why start your safari from Nairobi? Nairobi is Kenya's gateway city, connected to the world through Jomo Kenyatta International Airport. Most international flights land here, making it the logical and convenient starting point for any Kenya safari tour. But Nairobi is more than just a transit hub, it is a vibrant capital city with its own attractions, including Nairobi National Park (the world's only national park within a capital city), the Karen Blixen Museum, and the Giraffe Centre. Starting your safari from Nairobi allows you to experience both urban Kenyan culture and the raw wilderness of the Maasai Mara in one journey.
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            At Danil Scenic Tours, we specialize in Maasai Mara safaris from Nairobi that cater to both private and group travellers. Our packages include airport pickup, a Nairobi city tour on arrival, comfortable transport to the Mara, and a full safari experience with expert guides. We handle the logistics so you can focus entirely on the wildlife, the landscapes, and the memories you will create.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            What's Included in Your Maasai Mara Safari Package
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            When you book a Maasai Mara safari with Danil Scenic Tours, you are booking an all-inclusive experience. There are no hidden costs, no surprise fees, and no uncertainty about what happens next. Here is exactly what you get:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Car size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Transport in 4x4 Safari Land Cruisers</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">All game drives are conducted in custom 4x4 Land Cruiser safari vehicles equipped with pop-up roofs for optimal wildlife viewing and photography. These vehicles are built for the rough terrain of the Maasai Mara and provide a comfortable, secure ride.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Building size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Accommodation: Budget, Mid-Range, or Luxury</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">You choose the accommodation tier that suits your travel style and budget. All options include full-board meals (breakfast, lunch, and dinner), comfortable lodging, and access to the same incredible wildlife experiences. Whether you stay in a budget camp or a luxury tented lodge, you will wake up to the sounds of the African bush and fall asleep under a canopy of stars.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Binoculars size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Game Drives with Experienced Guides</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Our driver-guides are wildlife experts who have spent years in the Maasai Mara. They know where the lions den, where the cheetahs hunt, and where the river crossings happen during migration season. Every game drive is an opportunity to learn, ask questions, and witness behaviour you only seen in documentaries.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Zap size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Hot Air Balloon Safari, Included as Standard</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Unlike many operators who charge extra for this experience, our package includes a hot air balloon safari. You will float silently over the plains, watching herds of wildebeest and zebra moving below, and predators stalking their morning prey.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Footprints size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Walking Safari with a Maasai Guide</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Experience the Mara on foot with a guided walking safari. Led by a Maasai warrior and a professional naturalist, you will learn to read animal tracks, identify medicinal plants, and understand the ecosystem from ground level. This is a perspective you cannot get from a vehicle, and it deepens your connection to the land.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Users size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Maasai Village Cultural Visit</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Visit a traditional Maasai village (known as a boma) to meet the Maasai people and learn about their centuries-old customs. You will witness traditional dances, learn the art of beadwork, and hear stories about how the Maasai have lived alongside wildlife for generations. This cultural encounter is included in the package and adds a rich human dimension to your safari.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <UtensilsCrossed size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">All Meals, Park Fees, and Airport Transfers</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Full-board accommodation means all meals are included: breakfast, lunch, and dinner throughout your stay. All Maasai Mara National Reserve entrance fees are covered. Airport pickup from Jomo Kenyatta International Airport and drop-off at the end of your safari are also included, ensuring a seamless start and finish to your adventure.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <MapPin size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Nairobi City Tour on Arrival</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">On Day 1, after you check into your Nairobi hotel, we take you on a guided tour of Nairobi's top landmarks: the KICC building, Nairobi National Park, city museums, and key historical sites. This is a great introduction to Kenya and helps you recover from your international flight before heading to the Mara the next day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            4-Day Maasai Mara Safari Itinerary from Nairobi
          </h2>
          <div className="space-y-10">

            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">1</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Arrival in Nairobi and City Tour</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">Your Maasai Mara safari begins the moment you land at Jomo Kenyatta International Airport. Our driver will meet you at arrivals and transfer you to your Nairobi hotel. After checking in and settling into your room, you will depart for a guided tour of Nairobi.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">The city tour includes stops at the iconic Kenyatta International Convention Centre (KICC), Nairobi National Park (where you can see lions, rhinos, and giraffes against a backdrop of city skyscrapers), the National Museum, and other key landmarks. This is your introduction to Kenya's capital, a bustling modern city with deep historical roots. After the tour, you return to your hotel for lunch and spend the rest of the afternoon at leisure. Dinner is served at the hotel, and you will have time to rest before the early start tomorrow.</p>
                <div>
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">Accommodation for Day 1:</p>
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

            {/* Day 2 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">2</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Nairobi to Maasai Mara via the Great Rift Valley</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">Wake up early for breakfast and final preparations before departing Nairobi by road. The journey to the Maasai Mara takes approximately 5 to 6 hours, but the drive is far from ordinary. Your first stop is the Great Rift Valley viewpoint, where you will step out of the vehicle and take in one of Africa's most dramatic geological features. The valley stretches for thousands of kilometres across East Africa, and the viewpoint offers sweeping panoramic views of the escarpment, farmlands, and distant mountains.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Continuing toward the Mara, you will pass through Narok, the gateway town to Maasai country. Here, you will stop at the colourful Narok markets where Maasai traders sell handcrafted beadwork, traditional shukas (Maasai wraps), and carved souvenirs. This is a great opportunity to browse and buy authentic Kenyan handicrafts.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">By early afternoon, you arrive at your lodge or tented camp in the Maasai Mara. Check in, enjoy lunch, and spend the rest of the day relaxing at the camp. As the sun begins to set, you may choose to take a short walk around the camp grounds or simply sit on your private veranda and watch the wildlife that often wanders near the lodges. Dinner is served as the African sky fills with stars.</p>
                <div>
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">Accommodation for Days 2-3:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Luxury</p>
                      <p className="font-inter text-[#1C1208] text-sm">Maisha Sweetwaters Camp</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Mid-Range</p>
                      <p className="font-inter text-[#1C1208] text-sm">Pride Inn Mara Camp</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Budget</p>
                      <p className="font-inter text-[#1C1208] text-sm">Mara Chui Lodge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">3</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Full-Day Maasai Mara Game Drive with Hot Air Balloon Safari</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">This is the highlight day of your safari. Wake up before dawn for preparations and an early breakfast. Before setting out for the game drive, you will enjoy a breathtaking hot air balloon safari over the Maasai Mara National Reserve. As the balloon gently rises into the morning sky, you will watch the sunrise cast golden light across the plains while spotting wildlife below from a unique aerial view, herds of elephants moving through the savannah, giraffes standing tall against the horizon, and predators returning from their nightly hunts.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">After landing, you will continue with an early morning game drive through the Maasai Mara National Reserve. The early morning is when the reserve comes alive, predators returning from nocturnal hunts, herbivores grazing in the cool morning air, and the soft golden light perfect for photography. Your guide will take you to key wildlife hotspots, tracking the movements of lion prides, cheetah families, and elephant herds. The Maasai Mara is home to the Big Five (lion, leopard, elephant, buffalo, and rhinoceros) as well as the "Special Five" (cheetah, zebra, giraffe, hippo, and hyena). You will observe these animals in their natural habitat, often just metres away from your vehicle.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Mid-morning, you will head to a Maasai village (boma) for a cultural visit. Meet the Maasai warriors and elders, learn about their semi-nomadic lifestyle, and watch traditional dances and ceremonies. The Maasai will teach you the art of beadwork, how they create the intricate necklaces, bracelets, and earrings that are central to their cultural identity. This visit provides a human context to the landscape you are exploring and highlights the deep connection the Maasai have with the land and its wildlife.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">After the cultural visit, enjoy a bush lunch inside the reserve. Your guide will find a scenic spot where you can eat while surrounded by the sights and sounds of the African wilderness. Bush lunches are a safari tradition and one of the most memorable dining experiences you will have.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">In the afternoon, you will embark on a guided walking safari. You will explore the Mara on foot, learning to identify animal tracks, understanding the role of termite mounds in the ecosystem, and discovering the medicinal plants that the Maasai have used for centuries. Walking in the bush is humbling and exhilarating, and it gives you a profound appreciation for the complexity of the Mara's ecosystem.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">As the day comes to an end, you will return to your lodge or tented camp for a relaxing dinner and overnight stay. Later in the evening, you can unwind under the clear Maasai Mara sky and enjoy a breathtaking stargazing experience, made even more special by the reserve's minimal light pollution.</p>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">4</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Return to Nairobi</h3>
              </div>
              <div className="p-8">
                <p className="font-inter text-[#1C1208] leading-relaxed">Wake up early for a final breakfast at the lodge or tented camp before checking out. Begin your journey back to Nairobi, retracing the scenic route through the Great Rift Valley. You will make stopovers along the way for photos and refreshments. By late afternoon, you will arrive in Nairobi, where you will be dropped off at Jomo Kenyatta International Airport for your onward flight or at your hotel if you are extending your stay in Kenya.</p>
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
            One of the most common questions travellers ask is: "What is the difference between budget, mid-range, and luxury accommodation?" Here is a clear breakdown:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2A4A35]">
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Tier</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Nairobi Hotel (Day 1)</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Maasai Mara Lodge (Days 2-3)</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">What to Expect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-[#FAF4E8] transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Luxury</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Crowne Plaza Nairobi Airport</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Maisha Sweetwaters Camp</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Spacious luxury tents, gourmet dining, spa facilities</td>
                </tr>
                <tr className="bg-[#FAF4E8] hover:bg-white transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Mid-Range</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Sarova Stanley</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Pride Inn Mara Camp</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Comfortable tents, en-suite bathrooms, buffet meals</td>
                </tr>
                <tr className="bg-white hover:bg-[#FAF4E8] transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Budget</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Boma Inn</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Mara Chui Lodge</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Clean comfortable tents, full-board meals, same game drive access</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-6 border-l-4 border-[#D4870A]">
            <p className="font-inter text-[#1C1208] text-sm text-center">
              <span className="font-montserrat font-semibold text-[#2A4A35]">Important:</span> Regardless of which tier you choose, all accommodation options include full-board meals, access to the same wildlife areas, and the same quality of guiding. The difference is in the level of comfort and amenities, not in the safari experience itself.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            Best Time to Visit Maasai Mara from Nairobi
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            The Maasai Mara is a year-round safari destination, but the experience varies depending on when you visit. Here is a month-by-month guide:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">July to October: Great Migration Season</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">This is peak season. Over 1.5 million wildebeest, accompanied by hundreds of thousands of zebras and gazelles, move from Tanzania's Serengeti into the Maasai Mara in search of fresh grazing. The most dramatic moment is the Mara River crossing, where herds plunge into crocodile-infested waters while predators wait on the banks. If you want to witness this spectacle, book your safari for July, August, or September. Note that this is also the busiest and most expensive time to visit.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">November to December: Short Rains and Fewer Crowds</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">The short rains bring brief afternoon showers, but the landscape turns lush and green. Wildlife is still abundant, and the smaller crowds mean a more intimate safari experience. This is a great time for photographers who want dramatic skies and vibrant landscapes.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">January to March: Calving Season and Resident Wildlife</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">The wildebeest herds are in Tanzania's Serengeti for calving season, but the Maasai Mara's resident wildlife (lions, leopards, elephants, buffalo) remain active and easy to spot. This is also the beginning of the dry season, making game viewing excellent. Prices are lower, and availability is high.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">April to June: Long Rains and Lush Landscapes</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">The long rains transform the Mara into a verdant paradise. While some roads may be muddy, this is the best time for birdwatching, and the lack of tourist vehicles means you often have wildlife sightings to yourself. Many lodges offer discounted rates during this period.</p>
            </div>
          </div>
          <div className="bg-[#D4870A] rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-white text-lg mb-2">Pro Tip</p>
            <p className="font-inter text-white text-base">If your primary goal is to witness the Great Migration, plan your safari for late July through September. If you prefer a quieter experience with excellent wildlife viewing, visit between January and March or November and December.</p>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            How to Get from Nairobi to Maasai Mara
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Car size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">By Road (5-6 Hours)</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed mb-4">Most of our clients travel by road, which allows you to experience the journey as part of the adventure. You will drive through the scenic Great Rift Valley, stop at viewpoints, browse Narok markets, and arrive at the Mara with a deeper sense of the landscape and culture. The roads are mostly paved, though the final section into the Mara can be rough, which is why we use 4x4 vehicles.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Plane size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">By Air (45 Minutes)</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed mb-4">For travellers who want to maximize their time in the Mara, we offer fly-in options. You will depart from Wilson Airport in Nairobi and land at one of the airstrips near the reserve (Keekorok, Mara Serena, or Ol Kiombo). From there, a short game drive brings you to your lodge. Flying saves time and offers stunning aerial views of the Rift Valley and the Mara plains.</p>
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
            Why Book Your Maasai Mara Safari with Danil Scenic Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Local Nairobi-Based Operator</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">We are based in Kahawa West, Nairobi, and we know this city and this country inside out. When you book with us, you are booking with people who live here, work here, and care deeply about showcasing the best of Kenya. We are not a faceless international booking platform, we are a family-run business that treats every client like a guest.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">All-Inclusive Pricing, No Hidden Costs</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">When we say "all-inclusive," we mean it. Transport, accommodation, meals, park fees, hot air balloon safari, walking safari, Maasai village visit, Nairobi city tour, and airport transfers are all included. The only thing not included is your international flight and personal expenses like souvenirs or tips.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Flexible Departures, Daily Starting Points</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">We offer daily departures from Nairobi, so you do not need to wait for a group to form. Whether you want to start on a Monday, Friday, or Sunday, we can accommodate you. Private safaris depart whenever you are ready.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Expert Guides Who Make the Difference</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">Our driver-guides are the heart of the experience. They are also storytellers and problem-solvers who ensure your safari runs smoothly from start to finish. We are also committed to responsible tourism, we work with lodges that support local communities and ensure our guides follow ethical wildlife viewing practices.</p>
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
                  'Light, neutral-coloured clothing (khaki, olive, beige)',
                  'Long-sleeved shirts and trousers for sun and insect protection',
                  'Wide-brimmed hat and sunglasses',
                  'Comfortable walking shoes or hiking boots',
                  'Light jacket or fleece for early mornings and evenings',
                  'Swimsuit (some lodges have pools)',
                  'Binoculars and camera with zoom lens',
                  'Sunscreen (SPF 30+) and insect repellent',
                  'Water bottle',
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
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Respect wildlife, do not ask your guide to drive off-road or harass animals for a photo</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Booking Timeline</h3>
                <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Book at least 3-6 months in advance for peak season (July-October)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Book 4-8 weeks in advance for shoulder season (November-June)</span></li>
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
                q: 'How much does a 4-day Maasai Mara safari from Nairobi cost?',
                a: 'The cost depends on the accommodation tier you choose and the size of your group. Contact us for a detailed quote based on your travel dates and preferences.',
              },
              {
                q: 'Is the hot air balloon safari really included in the price?',
                a: 'Yes. Unlike many operators who charge extra for the balloon safari, we include it as standard in our 4-day package. This makes our offering exceptional value.',
              },
              {
                q: 'Can I do a shorter safari, 2 or 3 days instead of 4?',
                a: 'Yes. While we recommend the 4-day package for a full experience (including the Nairobi city tour and hot air balloon), we can customize 2-day or 3-day packages that focus solely on the Maasai Mara. It is highly advisable to consider a minimum of a 3-day package. Contact us to discuss options.',
              },
              {
                q: 'What is the minimum and maximum group size?',
                a: 'The minimum group size is 7. There is no maximum, we have the manpower and tour vehicles to accommodate any group size.',
              },
              {
                q: 'Do you offer private safaris, or only group tours?',
                a: 'We offer both. Private safaris give you a dedicated vehicle and guide, allowing you to set your own pace. Group safaris are more affordable and a great way to meet fellow travellers. Let us know your preference when booking.',
              },
              {
                q: 'What if I cannot see the Great Migration during my visit?',
                a: 'The Great Migration is seasonal and unpredictable. Even outside migration season (July-October), the Maasai Mara offers world-class wildlife viewing. The reserve\'s resident lion prides, leopards, elephants, and buffalo are present year-round, and game drives are spectacular regardless of migration timing.',
              },
              {
                q: 'Is it safe to travel to the Maasai Mara?',
                a: 'Yes. The Maasai Mara is one of Kenya\'s safest safari destinations. Our guides are trained in safety protocols, and our vehicles are equipped with VHF radios for communication. Lodges and camps have security staff, and wildlife encounters are carefully managed.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept Mpesa, bank transfer, and card payments. Cash is accepted but is highly discouraged.',
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
            Looking to extend your Kenya safari adventure? Discover our comprehensive destination pages and package options.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Individual Safari Destinations</h3>
              <ul className="space-y-3 font-inter text-[#1C1208] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/amboseli-safari-tours" className="text-[#D4870A] hover:underline">Amboseli Safari</Link>
                  <span>, iconic Mount Kilimanjaro and elephant encounters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/tsavo-safari-tours" className="text-[#D4870A] hover:underline">Tsavo National Park</Link>
                  <span>, vast landscapes and diverse wildlife</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/ol-pejeta-safari-tours" className="text-[#D4870A] hover:underline">Ol Pejeta Conservancy</Link>
                  <span>, Big Five safari and rhino conservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/lake-naivasha-safari-tours" className="text-[#D4870A] hover:underline">Lake Naivasha Safari</Link>
                  <span>, boat rides, Hell's Gate, and walking safaris</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/nairobi-national-park-safari-tours" className="text-[#D4870A] hover:underline">Nairobi City Tour</Link>
                  <span>, urban safari and cultural attractions (1 day)</span>
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
                All safaris include professional guides, comfortable transport, and authentic Kenyan experiences. Connect with Danil Scenic Tours to craft your perfect Kenya safari itinerary.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="relative overflow-hidden py-32 px-4 md:py-48">
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29-okv68gOhxJpXw4n1wmi6LzVWsS5NI3.webp"
            alt="Hot air balloon safari over Maasai Mara at sunrise with Great Migration visible below"
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
            Ready to Book Your Maasai Mara Adventure?
          </h2>
          <p className="font-inter text-white text-lg mb-12 opacity-85">
            The Maasai Mara is waiting. Whether you are dreaming of witnessing the Great Migration, tracking lions through golden grasslands, or floating silently over the plains in a hot air balloon, your adventure begins with one simple step.
          </p>
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
            <Link
             href="/book?tour=Maasai+Mara+Safari"
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
