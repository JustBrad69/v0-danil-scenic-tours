'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Car, Binoculars, Users, UtensilsCrossed, MapPin, Clock, ChevronDown } from 'lucide-react'
import { LOCAL_IMAGES } from '@/lib/images'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

export default function NairobiNationalParkPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={LOCAL_IMAGES.ZEBRAS_SAVANNA}
          alt="Zebras and wildlife at Nairobi National Park with the city skyline in the background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)' }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-playfair text-white text-5xl md:text-6xl font-bold mb-4">
            Nairobi City Tour: Full-Day National Park Safari and Cultural Experience
          </h1>
          <p className="font-inter text-white text-lg md:text-xl" style={{ opacity: 0.85 }}>
            Explore Nairobi in one unforgettable day: game drive at Nairobi National Park, feed giraffes at the Giraffe Centre, visit Kazuri Beads, and enjoy lunch at the iconic Karen Blixen Restaurant.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Nairobi, Kenya's vibrant capital city, derives its name from the Maasai phrase "Enkare Nairobi," meaning "Place of Cool Waters," referring to the Nairobi River that flows through the city. Nairobi is the only capital city in the world with a national park within its boundaries, making it a truly exceptional destination.
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            This full-day Nairobi City Tour combines the thrill of African wildlife, lions, rhinos, giraffes, zebras, and buffalo, viewed against the backdrop of a bustling metropolis. You will visit world-class attractions including the renowned Giraffe Centre where endangered Rothschild giraffes can be fed from an elevated platform, discover the artisanal craftsmanship of Kazuri Beads, and enjoy a refined lunch in the historic Karen suburb.
          </p>
          <p className="font-inter text-[#1C1208] text-lg leading-relaxed">
            Whether you are a nature lover, cultural enthusiast, or wildlife photographer, this tour delivers unforgettable experiences and authentic encounters that showcase the unique blend of wildlife, culture, and history that define Kenya's capital.
          </p>
        </div>
      </section>

      {/* Hourly Itinerary */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-fit px-4 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-sm flex-shrink-0">
                  6:30 AM
                </span>
                <h3 className="font-playfair text-white text-xl font-bold">Hotel Pickup and Transfer to Nairobi National Park</h3>
              </div>
              <div className="p-8">
                <p className="font-inter text-[#1C1208] leading-relaxed">Your professional guide will pick you up from your hotel or preferred location and transfer you in a comfortable 4x4 Land Cruiser to Nairobi National Park. Enjoy bottled water and scenic views during the short drive.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-fit px-4 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-sm flex-shrink-0">
                  7:00 AM - 1:00 PM
                </span>
                <h3 className="font-playfair text-white text-xl font-bold">Half-Day Game Drive at Nairobi National Park</h3>
              </div>
              <div className="p-8">
                <p className="font-inter text-[#1C1208] leading-relaxed">Experience Africa's iconic wildlife in one of the world's most unique locations. Search for lions, rhinos, buffaloes, giraffes, zebras, antelopes, and over 400 bird species. The sparse vegetation and concentrated wildlife during morning hours make this an excellent time for photography and sightings. Watch these magnificent creatures with Nairobi's skyline shimmering in the distance, a truly unforgettable safari experience.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-fit px-4 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-sm flex-shrink-0">
                  1:00 PM
                </span>
                <h3 className="font-playfair text-white text-xl font-bold">Lunch at Tamambo Karen Blixen Restaurant</h3>
              </div>
              <div className="p-8">
                <p className="font-inter text-[#1C1208] leading-relaxed">Proceed to the renowned Tamambo Karen Blixen Restaurant, nestled in the tranquil and historic Karen suburb. Enjoy a delightful meal in beautiful garden surroundings while relaxing after the morning's adventure. This is the perfect place to recharge before continuing your cultural exploration.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-fit px-4 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-sm flex-shrink-0">
                  3:00 PM
                </span>
                <h3 className="font-playfair text-white text-xl font-bold">Giraffe Centre: Interact with Endangered Rothschild Giraffes</h3>
              </div>
              <div className="p-8">
                <p className="font-inter text-[#1C1208] leading-relaxed">Visit the world-famous Giraffe Centre, a conservation facility dedicated to protecting endangered Rothschild giraffes. Feed these magnificent animals directly from an elevated viewing platform, an unforgettable hands-on experience. Our guides provide educational insights into giraffe behavior, conservation efforts, and the Centre's role in protecting this vulnerable species.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-fit px-4 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-sm flex-shrink-0">
                  3:30 PM
                </span>
                <h3 className="font-playfair text-white text-xl font-bold">Kazuri Beads: Support Local Artisans</h3>
              </div>
              <div className="p-8">
                <p className="font-inter text-[#1C1208] leading-relaxed">Explore Kazuri Beads, a celebrated women-led social enterprise producing handcrafted ceramic beads and pottery. Learn about the bead-making process directly from local artisans, support sustainable livelihoods for Kenyan women, and browse unique handmade souvenirs to take home.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#2A4A35] px-8 py-4 flex items-center gap-4">
                <span className="w-fit px-4 h-10 rounded-full bg-[#D4870A] flex items-center justify-center text-white font-montserrat font-bold text-sm flex-shrink-0">
                  5:00 PM
                </span>
                <h3 className="font-playfair text-white text-xl font-bold">Return Transfer to Your Hotel</h3>
              </div>
              <div className="p-8">
                <p className="font-inter text-[#1C1208] leading-relaxed">Your guide will transfer you back to your hotel, residence, or the airport, marking the conclusion of a remarkable day exploring Nairobi's wildlife, culture, and heritage.</p>
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
              This is a full-day tour departing from and returning to your accommodation. No overnight stay is included. Guests stay at their own choice of hotel or lodge in Nairobi.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            What You'll See
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Wildlife at Nairobi National Park</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Lions, Nairobi\'s iconic predators, often spotted resting in the early morning or late afternoon',
                  'Rhinos, both black and white rhinos inhabit the park, with morning drives offering the best sighting chances',
                  'Buffaloes, large herds congregate around water sources',
                  'Giraffes, reticulated giraffes browsing on acacia trees against the city skyline',
                  'Zebras, plains zebras in their natural habitat',
                  'Antelopes, including impalas, warthogs, and gazelles',
                  'Over 400 bird species, including fish eagles, herons, pelicans, and kingfishers',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Cultural Highlights</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <span>Rothschild giraffes at the Giraffe Centre, endangered animals found nowhere else in the wild</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <span>Handcrafted ceramic beads at Kazuri Beads, supporting women's economic empowerment in Kenya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Best Time to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-[#D4870A]">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-1">June to October</h3>
              <p className="font-montserrat font-semibold text-[#D4870A] text-sm mb-3">Dry Season, Best Overall</p>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">This is the optimal season for Nairobi National Park visits. Dry weather, minimal rainfall, and lower humidity create ideal conditions for game viewing. Animals congregate around water sources, making wildlife sightings easier and more frequent. The vegetation is sparse, providing clear visibility for photography. Expect cooler mornings and comfortable daytime temperatures.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">January to March</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Short Dry Season. Another excellent period for wildlife viewing with warm, dry weather. Morning temperatures are crisp, and animals are highly active. This is a good time for photography with soft golden light.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">December</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Short Rains. Despite occasional afternoon showers, December offers mild weather, affordable low-season prices, and returning migratory birds. Good wildlife opportunities remain as the short rains minimally disrupt safari experiences. Plan outdoor activities for the morning when weather is clearest.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold mb-3">November</h3>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Short Rains Begin. By early November, humidity increases and rains typically begin. While still visitable, this is the least favorable season for optimal wildlife viewing compared to the dry months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="w-full bg-[#F2E8D5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            How to Get There
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Car size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">By Road from Nairobi</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">Nairobi National Park is just 7 kilometers south of Nairobi's city center. Your guide will pick you up from your hotel, residence, or preferred location at 6:30 AM. The short 10 to 15 minute drive to the park's main gate allows you to maximize time on the game drive.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={32} className="text-[#D4870A]" />
                <h3 className="font-playfair text-[#2A4A35] text-2xl font-bold">From Jomo Kenyatta International Airport (JKIA)</h3>
              </div>
              <p className="font-inter text-[#1C1208] text-sm leading-relaxed">If arriving directly at JKIA, arrange a hotel transfer first and book this tour for the following day. The 18-kilometer drive from JKIA to central Nairobi takes approximately 45 minutes to 1 hour depending on traffic.</p>
            </div>
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
                'Transport in a comfortable 4x4 Land Cruiser Jeep with pop-up roof',
                'Services of a professional, English-speaking driver-guide',
                'Nairobi National Park entry fees',
                'Giraffe Centre entry fees and giraffe feeding experience',
                'Lunch at Tamambo Karen Blixen Restaurant',
                'Hotel/residence pickup and drop-off',
                'All park and activity access fees',
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
                'Tips and gratuities (optional but appreciated)',
                'Personal purchases at Kazuri Beads or gift shops',
                'Any activities or meals not specifically mentioned in the itinerary',
                'Travel insurance',
                'International flights to Kenya',
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

      {/* Why Danil */}
      <section className="w-full bg-[#1C3028] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#FDF8F0] text-4xl font-bold text-center mb-12">
            Why Book with Danil Scenic Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Expert Local Guides</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">Our professional guides are fluent English speakers with deep knowledge of Nairobi's wildlife, history, and culture. They provide engaging commentary and ensure you capture memorable moments and photographs.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Authentic Experiences</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">We combine wildlife adventure with meaningful cultural interactions. Visit woman-owned enterprises like Kazuri Beads and enjoy lunch at the historic Karen Blixen Restaurant, supporting local communities and authentic Kenyan experiences.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Premium Comfort</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">Travel in a well-maintained 4x4 Land Cruiser with pop-up roof for optimal wildlife viewing and photography. Complimentary bottled water and professional service throughout the day.</p>
            </div>
            <div className="bg-[#2A4A35] rounded-2xl p-6">
              <h3 className="font-montserrat font-bold text-[#D4870A] text-lg mb-3">Flexible Scheduling</h3>
              <p className="font-inter text-[#FDF8F0] text-sm leading-relaxed">Custom pickup times and locations available upon request. Adapt the itinerary to your interests and energy levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Checklist */}
      <section className="w-full bg-[#FAF4E8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-[#2A4A35] text-4xl font-bold text-center mb-12">
            Practical Planning Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">Before You Book</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Check your physical fitness level (moderate activity, some walking at Giraffe Centre and Kazuri Beads)',
                  'Verify you have comfortable walking shoes',
                  'Ensure your camera or phone is fully charged',
                  'Check weather forecast for your travel dates',
                  'Confirm hotel details for pickup and drop-off',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">☐</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">What to Bring</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Comfortable walking shoes',
                  'Light layers and long sleeves for sun protection',
                  'Hat and sunglasses',
                  'High-SPF sunscreen',
                  'Binoculars for wildlife viewing',
                  'Camera or smartphone for photos',
                  'Small cash for tips and personal purchases',
                  'Modest clothing for cultural sites',
                  'Insect repellent',
                  'Any personal medications',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">☐</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#2A4A35] text-lg mb-4">On Tour Day</h3>
              <ul className="space-y-2 font-inter text-[#1C1208] text-sm">
                {[
                  'Arrive at pickup location 10 minutes early',
                  'Wear comfortable, weather-appropriate clothing',
                  'Stay hydrated throughout the day',
                  'Listen to guide instructions for safety',
                  'Respect wildlife distance guidelines',
                  'Keep valuables secure while at stops',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D4870A] font-bold flex-shrink-0">☐</span>
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
                q: 'Is this tour suitable for families with children?',
                a: 'Yes, this tour is excellent for families. The Giraffe Centre interaction is particularly popular with children. Ensure children are comfortable with early morning pickups and can sit in a vehicle for extended periods.',
              },
              {
                q: 'What is the best time of day for wildlife viewing at Nairobi National Park?',
                a: 'Early morning, as our tour begins at 7 AM, is optimal. Animals are most active before the heat of the day, and you will have better chances of spotting lions, rhinos, and other predators. Morning light is also excellent for photography.',
              },
              {
                q: 'Can we extend the tour or modify the itinerary?',
                a: 'Yes. We offer flexible, customizable itineraries. Contact us to discuss options such as longer game drives, additional cultural stops, or alternative activities. Custom arrangements may incur additional costs.',
              },
              {
                q: 'What if it rains on tour day?',
                a: 'Light rain rarely affects the tour, animals are often more active after rainfall. Our vehicles have pop-up roofs and canvas covers for protection. We will provide appropriate guidance. Heavy rain is extremely rare during the dry seasons, June to October.',
              },
              {
                q: 'How long will we actually spend game driving?',
                a: 'You will have approximately 5 to 6 hours of game drive time from 7 AM to 1 PM, including scenic stops for photography and wildlife observation.',
              },
              {
                q: 'Is the Giraffe Centre feeding experience safe?',
                a: 'Yes, completely safe. The Giraffe Centre is a professional conservation facility. Staff provide clear instructions, and the giraffes are acclimated to human interaction. You feed them from an elevated platform, your hands remain above their reach.',
              },
              {
                q: 'Do you offer private tours, or are these group tours?',
                a: 'We offer both group safaris and private customized tours. Contact Danil Scenic Tours for pricing and availability of private bookings.',
              },
              {
                q: 'What is the dress code for the tour?',
                a: 'Wear comfortable, light-colored clothing for sun protection and to minimize insect attraction. Long sleeves and trousers are recommended. Avoid bright colors or heavily perfumed items. When visiting Kazuri Beads, wear modest clothing out of respect.',
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
                  <Link href="/destinations/tsavo-safari-tours" className="text-[#D4870A] hover:underline">Tsavo National Park</Link>
                  <span>, vast landscapes and diverse wildlife</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <span>Ol Pejeta Conservancy, Big Five safari and rhino conservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4870A] font-bold flex-shrink-0">•</span>
                  <span>Lake Naivasha Safari, boat rides, Hell's Gate, and walking safaris</span>
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
            src={LOCAL_IMAGES.ZEBRAS_SAVANNA}
            alt="Wildlife at Nairobi National Park with city skyline backdrop"
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
            Ready to Explore Nairobi?
          </h2>
          <p className="font-inter text-white text-lg mb-12 opacity-85">
            Book your Nairobi City Tour today and experience Africa's most accessible and exciting safari destination.
          </p>
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
            <Link
              href="/book?tour=Nairobi+National+Park+Safari"
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
