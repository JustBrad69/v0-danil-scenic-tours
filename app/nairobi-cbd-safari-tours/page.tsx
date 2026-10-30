import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Safari Tours from Nairobi CBD | Hotel Pickup Included | Danil Scenic Tours',
  description: 'Planning a Kenya safari from Nairobi CBD? Danil Scenic Tours offers hotel & office pickup across the CBD - Maasai Mara, Amboseli, and more. Call +254 722 919 249.',
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  "name": "Danil Scenic Tours",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Northern Bypass Rd, Githurai",
    "addressLocality": "Kahawa West",
    "addressRegion": "Nairobi",
    "addressCountry": "KE"
  },
  "areaServed": ["Nairobi CBD", "Nairobi City Centre", "Nairobi", "Kenya"],
  "telephone": "+254722919249",
  "email": "safari@danilscenictours.co.ke"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer pickup from CBD hotels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, pickup from any CBD hotel or office address is part of our service. When you confirm your booking, provide your hotel name and room number. Your driver-guide will be at your hotel entrance at the confirmed time on the morning of your safari."
      }
    },
    {
      "@type": "Question",
      "name": "I am staying at the Sarova Stanley / Hilton Nairobi can you pick me up from there?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We pick up from the Sarova Stanley, Hilton Nairobi, Intercontinental, Radisson Blu, and all other CBD hotels. Simply confirm your hotel and preferred pickup time when booking. We are familiar with all major CBD properties and their access points."
      }
    },
    {
      "@type": "Question",
      "name": "I am a business traveller in Nairobi for 4 days, what safari fits my schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 2-day Lake Naivasha or Ol Pejeta safari fits a tight schedule well. Depart Day 1, return Day 2. For a more immersive experience, our 4-day Maasai Mara safari works well as a weekend extension. Contact us with your exact dates and we will recommend the best option."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best safari for an international visitor staying in Nairobi for one week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maasai Mara 4-day safari is the most popular choice for first-time visitors to Kenya. It covers the Big Five, wide-open savannah landscapes, and seasonally the Great Migration. Combine it with a Nairobi City Tour on a spare day for a complete Nairobi experience."
      }
    },
    {
      "@type": "Question",
      "name": "How far is the Maasai Mara from Nairobi CBD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maasai Mara is a 5 to 6 hour drive via the Great Rift Valley route. We depart from the CBD early in the morning so you arrive in time for an afternoon game drive on Day 1."
      }
    },
    {
      "@type": "Question",
      "name": "Can you drop me at JKIA at the end of my safari instead of back at the CBD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can arrange airport dropoff at Jomo Kenyatta International Airport on the final day of your safari instead of returning to your CBD hotel. Confirm your departure flight details when booking and we will plan the return journey accordingly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer weekend safaris?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our 2-day packages for Lake Naivasha and Ol Pejeta are ideal for a Friday-to-Sunday or Saturday-to-Monday weekend trip. Depart Friday morning from your CBD location, return Sunday evening. Contact us with your preferred dates for availability."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine a Nairobi City Tour with a multi-day safari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many clients add the Nairobi City Tour as a Day 1 activity before departing on a longer safari the following morning. It is a great way to see Nairobi National Park, the Giraffe Centre, and Karen Blixen Museum before heading to the Mara or Amboseli. Contact us to build this into your itinerary."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a safari from Nairobi CBD cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on your chosen destination, group size, and travel dates. Packages start from USD 260 for the Nairobi City Tour (1 day) and range up to multi-destination combination itineraries. All pricing is listed on our Kenya Safari Packages page at danilscenictours.co.ke/safari-packages."
      }
    }
  ]
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Safari Tours",
  "provider": {
    "@type": "TouristInformationCenter",
    "name": "Danil Scenic Tours"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Nairobi CBD"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kenya Safari Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nairobi City Tour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maasai Mara Safari"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Amboseli Safari"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lake Naivasha Safari"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ol Pejeta Safari"
        }
      }
    ]
  }
}

export default function NairobiCBDSafariTours() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Safari Tours from Nairobi CBD - Hotel Pickup, Expert Guides & Kenya's Best Wildlife Parks
          </h1>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Your Safari Starts at Your CBD Hotel or Office - No Logistics on Your Part
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            We Pick You Up From Any CBD Hotel
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Danil Scenic Tours makes it simple. We pick you up from your CBD hotel or office, and your safari begins. Your 4x4 Land Cruiser with pop-up roof arrives at your location whether it is Sarova Stanley, Hilton Nairobi, Intercontinental, Radisson Blu, or any other CBD address and you are on your way to the wild.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We are a professional Nairobi-based safari operator with a real office, licensed guides, and a track record of taking business travellers, international tourists, and Nairobi professionals on world-class Kenya wildlife safaris. If you are in the CBD and thinking about a safari, you have found the right operator.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Perfect for Business Travellers and International Visitors
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Many of our CBD clients are in Nairobi on business. A 4-day Maasai Mara safari fits neatly into a week-long visit. A 1-day Nairobi City Tour works perfectly between meetings. Our 2-day Lake Naivasha or Ol Pejeta packages are ideal for a weekend extension before or after a conference at KICC or a corporate event at a CBD venue.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We understand that business travellers value clarity and reliability above everything. Your itinerary is confirmed before you travel, your guide is punctual, your accommodation is full board so there are no decisions to make about meals, and your park entry fees are pre-covered. Nothing unexpected. Nothing to figure out on the day.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Kenya Safari Packages Available from Nairobi CBD
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Every Danil Scenic Tours safari is available with CBD pickup. Here are the packages most commonly booked by CBD clients:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nairobi City Tour - 1 Day
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            The most accessible safari from the CBD. We get you from your hotel, take you through Nairobi National Park for a morning game drive with lions, rhinos, and giraffes against the city skyline, then continue to the Giraffe Centre and Kazuri Beads. Lunch at Karen Blixen Restaurant, and you are back at your CBD hotel by evening. From USD 260 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Lake Naivasha Safari - 2 Days / 1 Night
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            A perfect weekend escape from the CBD. Two hours from Nairobi, Lake Naivasha offers a hippo boat ride, a walking safari at Crescent Island, and an afternoon game drive through Hell's Gate National Park. You return to the CBD on Day 2. From USD 948 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Ol Pejeta Conservancy Safari - 2 Days / 1 Night
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Drive north through Kenya's central highlands to Ol Pejeta, home to the Big Five and the last northern white rhinos on earth. Overnight at Maisha Sweetwaters Camp, return to the CBD on Day 2. From USD 920 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Maasai Mara Safari - 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's signature safari experience. Depart from your CBD hotel on Day 1, arrive in the Mara for an afternoon game drive, and spend three full days tracking lions, elephants, leopards, and between July and October the spectacular Great Wildebeest Migration. From USD 830 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Amboseli Safari - 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Mount Kilimanjaro as your backdrop, massive elephant herds as your foreground. Amboseli is one of Africa's most photographed safari destinations and just 4 hours south of Nairobi. From USD 890 per person (group rate).
          </p>

          <p className="text-lg text-gray-700 mb-6">
            View all packages and pricing: <Link href="/safari-packages" className="text-blue-600 hover:underline">danilscenictours.co.ke/safari-packages</Link>
            <br />
            Multi-destination combinations also available - from 5 to 13 days.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Why CBD Clients Choose Danil Scenic Tours
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-8">
            <li>Direct hotel and office pickup from anywhere in Nairobi CBD - no separate transfer required</li>
            <li>Professional, punctual guides who understand the needs of business and international clients</li>
            <li>Full board on all packages - breakfast, lunch, and dinner included throughout</li>
            <li>Private 4x4 Land Cruiser with pop-up roof on every safari</li>
            <li>All park entry fees pre-covered - no cash required at park gates</li>
            <li>Flexible booking - WhatsApp us today and depart as early as tomorrow morning for select packages</li>
            <li>Solo traveller rates available on all major packages</li>
            <li>M-Pesa, bank transfer, and card payments accepted</li>
            <li>Registered, verified safari operator with a physical office in Nairobi</li>
            <li>Responsive communication - we answer within 24 hours, often same-day</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            How Pickup Works from the CBD
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            CBD pickup is straightforward. When you confirm your safari booking, provide us with your hotel name and room number or your office address on Kenyatta Avenue, Moi Avenue, or elsewhere in the CBD. We confirm the morning pickup time based on your chosen destination and handle the rest.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            What to Expect on Pickup Morning
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Your driver-guide will be at your hotel entrance or agreed pickup point at the confirmed time. For early departures, most CBD hotels have 24-hour lobbies your guide will contact you via WhatsApp 15 minutes before arrival so you are ready to go. Your safari vehicle will already be loaded with packed water and snacks for the road. All you need to bring is yourself.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Return Transfers to the CBD
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            On the final day of your safari, your guide drives you back directly to your CBD hotel or to Jomo Kenyatta International Airport if you are departing that day. We confirm your preferred drop-off point at the time of booking so the return journey is planned from the start.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-sm my-12 border border-gray-100">
            <p className="text-lg text-gray-800 font-medium mb-2">
              WhatsApp / Phone: <a href="tel:+254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a>
            </p>
            <p className="text-lg text-gray-800 font-medium mb-2">
              Email: <a href="mailto:safari@danilscenictours.co.ke" className="text-blue-600 hover:underline">safari@danilscenictours.co.ke</a>
            </p>
            <p className="text-lg text-gray-800 font-medium mb-6">
              Office: Northern Bypass Rd, Kahawa West, Nairobi
            </p>
            <Link 
              href="/book" 
              className="inline-block bg-[#1A4D2E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#143d24] transition-colors"
            >
              Book Your CBD Safari Now
            </Link>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Frequently Asked Questions - Safari Tours from Nairobi CBD
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer pickup from CBD hotels?</h3>
              <p className="text-lg text-gray-700">Yes, pickup from any CBD hotel or office address is part of our service. When you confirm your booking, provide your hotel name and room number. Your driver-guide will be at your hotel entrance at the confirmed time on the morning of your safari.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">I am staying at the Sarova Stanley / Hilton Nairobi can you pick me up from there?</h3>
              <p className="text-lg text-gray-700">Yes. We pick up from the Sarova Stanley, Hilton Nairobi, Intercontinental, Radisson Blu, and all other CBD hotels. Simply confirm your hotel and preferred pickup time when booking. We are familiar with all major CBD properties and their access points.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">I am a business traveller in Nairobi for 4 days, what safari fits my schedule?</h3>
              <p className="text-lg text-gray-700">A 2-day Lake Naivasha or Ol Pejeta safari fits a tight schedule well. Depart Day 1, return Day 2. For a more immersive experience, our 4-day Maasai Mara safari works well as a weekend extension. Contact us with your exact dates and we will recommend the best option.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the best safari for an international visitor staying in Nairobi for one week?</h3>
              <p className="text-lg text-gray-700">The Maasai Mara 4-day safari is the most popular choice for first-time visitors to Kenya. It covers the Big Five, wide-open savannah landscapes, and seasonally the Great Migration. Combine it with a Nairobi City Tour on a spare day for a complete Nairobi experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How far is the Maasai Mara from Nairobi CBD?</h3>
              <p className="text-lg text-gray-700">The Maasai Mara is a 5 to 6 hour drive via the Great Rift Valley route. We depart from the CBD early in the morning so you arrive in time for an afternoon game drive on Day 1.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can you drop me at JKIA at the end of my safari instead of back at the CBD?</h3>
              <p className="text-lg text-gray-700">Yes. We can arrange airport dropoff at Jomo Kenyatta International Airport on the final day of your safari instead of returning to your CBD hotel. Confirm your departure flight details when booking and we will plan the return journey accordingly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer weekend safaris?</h3>
              <p className="text-lg text-gray-700">Yes. Our 2-day packages for Lake Naivasha and Ol Pejeta are ideal for a Friday-to-Sunday or Saturday-to-Monday weekend trip. Depart Friday morning from your CBD location, return Sunday evening. Contact us with your preferred dates for availability.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I combine a Nairobi City Tour with a multi-day safari?</h3>
              <p className="text-lg text-gray-700">Yes, many clients add the Nairobi City Tour as a Day 1 activity before departing on a longer safari the following morning. It is a great way to see Nairobi National Park, the Giraffe Centre, and Karen Blixen Museum before heading to the Mara or Amboseli. Contact us to build this into your itinerary.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How much does a safari from Nairobi CBD cost?</h3>
              <p className="text-lg text-gray-700">Pricing depends on your chosen destination, group size, and travel dates. Packages start from USD 260 for the Nairobi City Tour (1 day) and range up to multi-destination combination itineraries. All pricing is listed on our Kenya Safari Packages page at danilscenictours.co.ke/safari-packages.</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Book Your Safari from Nairobi CBD Today
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            You are already in the best city in East Africa to start a safari. The Maasai Mara, Amboseli, Lake Naivasha, and Tsavo are all within reach and Danil Scenic Tours will come to you to make it happen.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Send us a WhatsApp message with your hotel or office location, your preferred dates, and the type of safari you have in mind. We respond within 24 hours usually the same day. For urgent bookings, call us directly on <a href="tel:+254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a>.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-12">
            <li>WhatsApp: <a href="https://wa.me/254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a></li>
            <li>Email: <a href="mailto:safari@danilscenictours.co.ke" className="text-blue-600 hover:underline">safari@danilscenictours.co.ke</a></li>
            <li>Book Online: <Link href="/book" className="text-blue-600 hover:underline">danilscenictours.co.ke/book</Link></li>
            <li>View All Packages: <Link href="/safari-packages" className="text-blue-600 hover:underline">danilscenictours.co.ke/safari-packages</Link></li>
          </ul>

          <p className="text-lg text-gray-700 italic mb-12">
            Staying in Nairobi CBD for just a few days? Our team can help you plan the right safari for your exact time window. WhatsApp us now and we will have a tailored recommendation ready within the hour.
          </p>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Pages</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li><Link href="/safari-packages" className="text-blue-600 hover:underline">Kenya Safari Packages - All Pricing</Link></li>
              <li><Link href="/safari-tours" className="text-blue-600 hover:underline">Kenya Safari Tours - Types & Planning Guide</Link></li>
              <li><Link href="/kahawa-west-safari-tours" className="text-blue-600 hover:underline">Safari Tours in Kahawa West</Link></li>
            </ul>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  )
}
