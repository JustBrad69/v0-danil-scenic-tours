'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Car, Train, Binoculars, Shield, Flame, Droplets, Fish, UtensilsCrossed, ChevronDown } from 'lucide-react'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

export default function TsavoPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/cheetah-resting.webp"
          alt="Red elephants dusted in volcanic soil at Tsavo National Park Kenya"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)' }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-playfair text-white text-5xl md:text-6xl font-bold mb-4">
            Tsavo National Park Safari from Nairobi
          </h1>
          <p className="font-inter text-white text-lg md:text-xl" style={{ opacity: 0.85 }}>
            Discover Kenya's Wildest Frontier
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            If you are seeking a safari experience beyond the crowds of Maasai Mara, Tsavo National Park is Kenya's wildest and most untamed frontier. Split into Tsavo East and Tsavo West, this is Kenya's largest national park system, larger than Maasai Mara and Amboseli combined. Here, you will encounter the legendary "Red Elephants" dusted in crimson soil, volcanic lava flows frozen in time, underground viewing chambers where you can watch hippos and crocodiles swim above you, and vast open plains where wildlife roams freely with few tourist vehicles in sight. A Tsavo safari from Nairobi brings you face-to-face with raw, unspoiled wilderness.
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Whether you are an international traveler discovering Kenya for the first time or a domestic visitor seeking an authentic bush experience, our 3-day Tsavo safari package is designed to immerse you in both Tsavo East and Tsavo West. This guide will walk you through everything you need to know, from what's included and when to visit, to accommodation options and the full day-by-day itinerary.
          </p>
        </div>
      </section>

      {/* What Makes It Unforgettable */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold">
            What Makes a Tsavo Safari Unforgettable
          </h2>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Tsavo National Park is not one park but two: Tsavo East and Tsavo West, divided by the Nairobi-Mombasa highway. Together, they form one of the world's largest protected wildlife areas, covering over 22,000 square kilometres. This is wild Kenya at its most dramatic.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">Kenya's Largest National Park System</h3>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
                Tsavo is so vast that even during peak season, you will often have wildlife sightings entirely to yourself. Unlike Maasai Mara, where a single lion pride might attract 10 vehicles, in Tsavo you might be the only vehicle watching elephants at a waterhole. This sense of solitude and wildness is what makes Tsavo special, it feels like you have discovered Kenya's secret.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">The Legendary Red Elephants</h3>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
                Tsavo is famous for its "Red Elephants", African elephants that dust-bathe in Tsavo's rich red volcanic soil, giving them a distinctive rusty-red appearance. The iron-rich red soil clings to their skin, turning these giants a striking rusty-red colour that sets them apart from elephants anywhere else in Africa. Watching a herd of these crimson-dusted giants move across the open plains against a backdrop of baobab trees is one of Kenya's most iconic and unforgettable safari images.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">The Man-Eaters of Tsavo</h3>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
                Tsavo also holds one of the most dramatic chapters in African wildlife history. In 1898, during the construction of the Uganda Railway, two large maneless male lions terrorized and killed a significant number of railway workers over a period of nine months, bringing construction to a halt. The lions became known as the "Man-Eaters of Tsavo" and were eventually shot by British Lieutenant Colonel John Henry Patterson. The story captivated the world and was later retold in the 1996 film The Ghost and the Darkness. The two lions' preserved remains are on display at the Field Museum in Chicago to this day.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">Volcanic Landscapes and Natural Springs</h3>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
                Tsavo West is a landscape shaped by volcanic activity. The Shetani Lava Flow, a 50-square-kilometre black lava field, looks like something from another planet. Local Maasai believed evil spirits (Shetani in Swahili) emerged from the ground when the volcano erupted centuries ago. Nearby, the Mzima Springs produces 250 million litres of crystal-clear water daily, fed by underground rivers from the Chyulu Hills. An underwater viewing chamber lets you watch hippos and crocodiles swimming above you, a truly unique safari experience.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">Why Start Your Safari from Nairobi?</h3>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
                Nairobi is Kenya's gateway city and the starting point for the SGR (Standard Gauge Railway) train to Voi, the gateway to Tsavo. The train journey is part of the adventure, a comfortable, scenic ride through Kenya's countryside. Starting your safari from Nairobi allows you to experience both Kenya's modern infrastructure and its wild frontier in one seamless journey.
              </p>
              <p className="font-inter text-[#1C1208] text-lg leading-relaxed mt-4">
                At Danil Scenic Tours, we specialize in Tsavo safaris that cater to both private and group travelers. Our packages include airport pickup, SGR train tickets or road transport, and a full safari experience across both Tsavo East and Tsavo West with expert guides. We handle the logistics so you can focus entirely on the wildlife and the landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            What's Included in Your Tsavo Safari Package
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            When you book a Tsavo safari with Danil Scenic Tours, you are booking an all-inclusive experience. There are no hidden costs, no surprise fees, and no uncertainty about what happens next. Here is exactly what you get:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Train size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Transport Options: SGR Train or Road</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed mb-3">We offer two transport options from Nairobi to Tsavo:</p>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed mb-2"><span className="font-semibold text-[#2A4A35]">SGR Train (Recommended):</span> Travel on Kenya's modern Standard Gauge Railway from Nairobi to Voi. The train journey takes approximately 4 hours and offers comfortable seating, air conditioning, and scenic views of Kenya's countryside. This is the fastest and most comfortable option.</p>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed"><span className="font-semibold text-[#2A4A35]">Road Transfer:</span> Travel by road in a comfortable 4x4 safari vehicle. The journey takes 5 to 6 hours and includes stopovers for refreshments.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Binoculars size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Game Drives in Both Tsavo East and Tsavo West</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Your safari covers both parks. Tsavo East is known for its open plains, Red Elephants, and the Aruba Dam. Tsavo West is famous for volcanic landscapes, Mzima Springs, and the Ngulia Rhino Sanctuary. You will experience both ecosystems in one safari.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Fish size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Mzima Springs Underwater Viewing Chamber</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Walk on a submerged footbridge and look through glass panels to watch hippos and crocodiles swimming in crystal-clear water. This is one of Kenya's most unique wildlife viewing experiences.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Flame size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Shetani Lava Flow Exploration</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Walk across the surreal black lava field formed by volcanic eruptions centuries ago. The landscape feels otherworldly, and your guide will share the local legends of how the Maasai believed evil spirits emerged from the ground here.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Shield size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Ngulia Rhino Sanctuary Visit</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Tsavo West is home to one of Kenya's most successful rhino conservation programs. Visit the Ngulia Rhino Sanctuary to see endangered black rhinos in a protected environment. This is a rare opportunity to see these critically endangered animals up close.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Droplets size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">Aruba Dam Wildlife Viewing</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">The Aruba Dam in Tsavo East is a wildlife magnet. During the dry season, elephants, buffalos, zebras, and predators gather here to drink. It is also a birdwatcher's paradise, with over 500 bird species recorded in Tsavo.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm md:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <UtensilsCrossed size={28} className="text-[#D4870A] flex-shrink-0 mt-1" />
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg">All Meals, Park Fees, and Airport Transfers</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Full-board accommodation means all meals are included, with breakfast, lunch, and dinner throughout your stay. All Tsavo East and Tsavo West National Park entrance fees are covered. Airport pickup from Jomo Kenyatta International Airport and drop-off at the end of your safari are also included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            3-Day Tsavo Safari Itinerary from Nairobi
          </h2>
          <div className="space-y-10">

            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">1</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Nairobi to Tsavo East via SGR</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">Your Tsavo safari begins at Jomo Kenyatta International Airport. Our driver will meet you at arrivals and transfer you to Nairobi Terminus, the SGR train station. Board the modern SGR train to Voi, the gateway to Tsavo National Park. The train journey takes approximately 4 hours and offers comfortable seating, air conditioning, and large windows with views of Kenya's countryside.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Upon arrival in Voi, our guide will meet you at the station and transfer you to your safari vehicle. Begin your game drive en route to the lodge, keeping your eyes open for Tsavo's famous Red Elephants, giraffes, zebras, and buffalos. The drive to the lodge is a game drive itself, your guide will stop for wildlife sightings along the way.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Check into your lodge in Tsavo East and enjoy lunch. Spend the afternoon relaxing by the pool or on your private veranda, watching wildlife pass by the lodge.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">In the late afternoon, depart for a sunset game drive to explore the Aruba Dam area. This is a hotspot for wildlife where elephants, buffalos, and predators gather to drink, and over 500 bird species have been recorded in Tsavo, making it a birdwatcher's paradise. Watch the sun set over the red plains as nocturnal animals begin to stir.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Return to the lodge for dinner and overnight stay.</p>
                <div>
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">Accommodation for Day 1:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Luxury</p>
                      <p className="font-inter text-[#1C1208] text-sm">Satao Camp or Salt Lick Safari Lodge</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Mid-Range</p>
                      <p className="font-inter text-[#1C1208] text-sm">Sentrim Tsavo Lodge or Severin Lodge Camp</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Budget</p>
                      <p className="font-inter text-[#1C1208] text-sm">Sagala Lodge or Manyatta Camp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">2</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Tsavo East to Tsavo West Full-Day Experience</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">Wake before dawn for a sunrise game drive through Tsavo East National Park. The early morning is the best time to see wildlife, with predators returning from nocturnal hunts, herbivores grazing in the cool morning air, and the soft golden light perfect for photography.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Your guide will take you deeper into Tsavo East, tracking elephant herds, lion prides, and cheetahs. Tsavo is home to the Big Five (lion, leopard, elephant, buffalo, and rhinoceros, though rhinos are more common in Tsavo West). You will also see large herds of zebras, giraffes, elands, and the rare fringe-eared oryx.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Return to the lodge for breakfast, then check out and begin your transfer to Tsavo West National Park. This is not just a transfer, it is a game drive en route, so keep your camera ready. The landscape changes dramatically as you move from Tsavo East's open plains to Tsavo West's volcanic hills and acacia woodlands.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">En route, visit the Ngulia Rhino Sanctuary, one of Kenya's most successful rhino conservation programs. Here, you will see endangered black rhinos in a protected environment. Your guide will explain the conservation efforts that have brought these critically endangered animals back from the brink of extinction.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Continue the game drive, spotting leopards (Tsavo West has one of Kenya's highest leopard populations), elephants, and bird species. Check into your lodge in Tsavo West and enjoy lunch.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">After a rest period, depart for an afternoon game drive to explore Tsavo West's unique features. Your first stop is Mzima Springs, a natural oasis fed by underground rivers from the Chyulu Hills. Walk on a footbridge over the springs and peer through underwater glass panels to watch hippos and crocodiles swimming in crystal-clear water. This is a rare opportunity to see these animals from below the waterline.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Next, visit the Shetani Lava Flow, a surreal black lava field that stretches for kilometres. Walk across the lava field and let your guide share the legends and geology of this fascinating landscape.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Return to the lodge as the sun sets. Dinner and overnight stay in Tsavo West.</p>
                <div>
                  <p className="font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">Accommodation for Day 2:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Luxury</p>
                      <p className="font-inter text-[#1C1208] text-sm">Satao Camp or Salt Lick Safari Lodge</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Mid-Range</p>
                      <p className="font-inter text-[#1C1208] text-sm">Sentrim Tsavo Lodge or Severin Lodge Camp</p>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Budget</p>
                      <p className="font-inter text-[#1C1208] text-sm">Sagala Lodge or Manyatta Camp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-lg flex-shrink-0">3</span>
                <h3 className="font-playfair text-white text-2xl font-bold">Final Game Drive and Return to Nairobi</h3>
              </div>
              <div className="p-8 space-y-4">
                <p className="font-inter text-[#1C1208] leading-relaxed">Wake early for a final morning game drive in Tsavo West. This is your last chance to spot any wildlife you may have missed, leopards in the acacia trees, elephants at the waterholes, or rare bird species. Visit any sites you did not have time for on Day 2, such as Roaring Rocks, a viewpoint offering panoramic views of the park, or the Chyulu Hills for a safari walk.</p>
                <p className="font-inter text-[#1C1208] leading-relaxed">Return to the lodge for breakfast, then check out and begin your return journey to Nairobi. You will have lunch en route, with stops for refreshments and photos. By late afternoon, you will arrive in Nairobi, where you will be dropped off directly at Jomo Kenyatta International Airport for your onward flight or at your hotel if you are extending your stay in Kenya.</p>
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
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">Lodges / Camps</th>
                  <th className="font-montserrat font-bold text-white text-left p-4 border border-[#D4870A]">What to Expect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-[#FAF4E8] transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Luxury</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Satao Camp, Salt Lick Safari Lodge</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Spacious tented suites or stilted rooms with en-suite bathrooms, private verandas overlooking waterholes, gourmet dining, swimming pools, and personalized service. The ultimate in safari comfort.</td>
                </tr>
                <tr className="bg-[#FAF4E8] hover:bg-white transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Mid-Range</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Sentrim Tsavo Lodge, Severin Lodge Camp</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Comfortable tented accommodation or lodge rooms with en-suite bathrooms, buffet-style meals, well-maintained facilities, and wildlife viewing from the lodge.</td>
                </tr>
                <tr className="bg-white hover:bg-[#FAF4E8] transition-colors">
                  <td className="font-montserrat font-semibold text-[#D4870A] p-4 border border-[#D4870A]">Budget</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Sagala Lodge, Manyatta Camp</td>
                  <td className="font-inter text-[#1C1208] p-4 border border-[#D4870A]">Clean, comfortable rooms or tents, shared or en-suite bathrooms, full-board meals, and access to the same game drives and wildlife experiences as higher tiers. Great value.</td>
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
            Best Time to Visit Tsavo from Nairobi
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            Tsavo is a year-round safari destination, but the experience varies depending on when you visit. Here is a month-by-month guide:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">June to October: Dry Season</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Peak season. Wildlife concentrated at water sources. Best for game viewing and photography. Busiest and most expensive.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">January to February: Short Dry Season</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Excellent wildlife viewing, warm and dry. Less crowded than June to October. Slightly lower prices.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">November to December: Short Rains</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Lush green landscapes, dramatic skies, calving season. Fewer tourists. Great for photography.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">March to May: Long Rains</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Heavy rains, some muddy roads. Best birdwatching. Significant lodge discounts. Beautiful green landscapes.</p>
            </div>
          </div>
          <div className="bg-[#D4870A] rounded-2xl p-8 text-center">
            <p className="font-montserrat font-bold text-white text-lg mb-2">Pro Tip</p>
            <p className="font-inter text-white text-base">If your primary goal is guaranteed wildlife sightings and excellent photography, visit between June and October or January and February. If you prefer lower prices, fewer crowds, and dramatic green landscapes, visit during November to December or March to May.</p>
          </div>
        </div>
      </section>

      {/* Tsavo East vs West */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-6">
            Tsavo East vs. Tsavo West, What's the Difference?
          </h2>
          <p className="font-inter text-[#1C1208] text-lg text-center max-w-3xl mx-auto mb-12">
            Many travelers ask: "What is the difference between Tsavo East and Tsavo West?" Here is a breakdown:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-4">Tsavo East: Open Plains and Red Elephants</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Larger and flatter than Tsavo West',
                  'Open savannah grasslands and acacia woodlands',
                  'Famous for Red Elephants dusted in red volcanic soil',
                  'Aruba Dam, a wildlife magnet',
                  'Mudanda Rock, a natural rock outcrop with panoramic views',
                  'Galana River with whitewater rapids',
                  'Easier game viewing due to open terrain',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-4">Tsavo West: Volcanic Landscapes and Springs</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'More varied terrain with volcanic hills, lava flows, and springs',
                  'Mzima Springs underwater viewing chamber',
                  'Shetani Lava Flow, a surreal volcanic landscape',
                  'Ngulia Rhino Sanctuary, see endangered black rhinos',
                  'Roaring Rocks viewpoint',
                  'Higher leopard population',
                  'More dramatic scenery for photography',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-[#D4870A]">
            <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">Why Visit Both?</h3>
            <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Our 3-day safari covers both parks because they offer completely different experiences. Tsavo East is about wide-open spaces and classic safari game viewing. Tsavo West is about dramatic landscapes and unique geological features. Together, they give you the full Tsavo experience.</p>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            How to Get from Nairobi to Tsavo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Train size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">By SGR Train (Recommended)</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">The Standard Gauge Railway (SGR) is Kenya's modern train system connecting Nairobi to Mombasa, with a stop in Voi, the gateway to Tsavo. The train journey from Nairobi to Voi takes approximately 4 hours and offers comfortable seating, air conditioning, and large windows with scenic views. This is the fastest, most comfortable, and most reliable option. Upon arrival in Voi, our guide will meet you and transfer you to the park for game drives.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Car size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">By Road (5 to 6 Hours)</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Travel by road in a comfortable 4x4 safari vehicle. The journey takes 5 to 6 hours and includes stopovers for refreshments. This option allows you to experience Kenya's countryside at your own pace and offers flexibility for stops along the way.</p>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-6 border-l-4 border-[#D4870A]">
            <p className="font-inter text-[#1C1208] text-sm"><span className="font-montserrat font-semibold text-[#2A4A35]">Which option should you choose?</span> If you value speed, comfort, and reliability, choose the SGR train. If you prefer road trips and want the flexibility to stop along the way, choose the road option.</p>
          </div>
        </div>
      </section>

      {/* Why Danil */}
      <section className="w-full bg-[#1C3028] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#FDF8F0] text-4xl font-bold text-center mb-12">
            Why Book Your Tsavo Safari with Danil Scenic Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">We Are a Nairobi-Based Local Operator</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">We are based in Kahawa West, Nairobi, and we know this city and this country inside out. When you book with us, you are booking with people who live here, work here, and care deeply about showcasing the best of Kenya.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">All-Inclusive Pricing with No Hidden Costs</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">When we say "all-inclusive," we mean it. Transport (SGR train or road), accommodation, meals, park fees, Mzima Springs, Shetani Lava Flow, Ngulia Rhino Sanctuary, Aruba Dam, and airport transfers are all included.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Flexible Departures, Daily Starting Points</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">We offer daily departures from Nairobi. Private safaris depart whenever you are ready.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">We Support Sustainable Tourism</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">We work with lodges and camps that support local communities, and we ensure our guides follow ethical wildlife viewing practices.</p>
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
                  'Lightweight, neutral-coloured clothing',
                  'Long-sleeved shirts and trousers',
                  'Wide-brimmed hat and sunglasses',
                  'Comfortable walking shoes',
                  'Light jacket for early mornings',
                  'Binoculars and camera with zoom lens',
                  'Sunscreen and insect repellent',
                  'Reusable water bottle',
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
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Yellow fever vaccination certificate required</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Malaria prophylaxis recommended</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Stay hydrated during game drives</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Photography Tips</h3>
                <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Bring extra memory cards and batteries</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Use a zoom lens (200mm or higher)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Shoot in early morning or late afternoon</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Respect wildlife, maintain safe distances at all times</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Booking Timeline</h3>
                <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Book 3 to 6 months in advance for peak season (June to October)</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#D4870A] font-bold flex-shrink-0">•</span><span>Book 4 to 8 weeks in advance for shoulder season</span></li>
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
                q: 'How much does a 3-day Tsavo safari cost?',
                a: 'The cost depends on accommodation tier and group size. Contact us for a detailed quote.',
              },
              {
                q: 'Is Tsavo safe?',
                a: 'Yes. Tsavo is one of Kenya\'s safest safari destinations. Our guides are trained in safety protocols.',
              },
              {
                q: 'Can I see the Big Five in Tsavo?',
                a: 'Yes. Tsavo is home to all Big Five animals: lion, leopard, elephant, buffalo, and rhinoceros.',
              },
              {
                q: 'What is better, Tsavo or Maasai Mara?',
                a: 'Different experiences. Maasai Mara is famous for the Great Migration and higher wildlife density. Tsavo is larger, wilder, and less crowded, perfect for travelers seeking solitude and raw wilderness.',
              },
              {
                q: 'Do you offer private safaris or only group tours?',
                a: 'Both. Private safaris give you a dedicated vehicle and guide. Group safaris are more affordable.',
              },
              {
                q: 'Can I combine Tsavo with other parks?',
                a: 'Yes. We can create multi-park safaris combining Tsavo with Amboseli, Maasai Mara, or Nairobi National Park.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'Mpesa, bank transfer, and card payments. Cash is discouraged.',
              },
              {
                q: 'What is the minimum group size?',
                a: 'The minimum group size is 7. There is no maximum, we have the manpower and tour vehicles to accommodate any group size.',
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
                  <Link href="/destinations/maasai-mara-safari-tours" className="text-[#D4870A] hover:underline">Maasai Mara Safari Tours</Link>
                  <span>, experience the Great Wildebeest Migration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <Link href="/destinations/amboseli-safari-tours" className="text-[#D4870A] hover:underline">Amboseli Safari</Link>
                  <span>, iconic Mount Kilimanjaro and elephant encounters</span>
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
            src="/images/elephant-kilimanjaro.webp"
            alt="Safari vehicle at Aruba Dam waterhole Tsavo East with elephants drinking"
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
            Ready to Book Your Tsavo Adventure?
          </h2>
          <p className="font-inter text-white text-lg mb-12 opacity-85">
            Tsavo is waiting. Whether you are dreaming of watching Red Elephants dust-bathe on the open plains, peering through the underwater chamber at Mzima Springs, or tracking leopards through volcanic hills, your adventure begins with one simple step.
          </p>
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
            <Link
              href="/book?tour=Tsavo+Safari"
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
