import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Safari Tours from Kilimani, Nairobi | Danil Scenic Tours | Kenya Wildlife Safaris',
  description: 'Looking for a Kenya safari from Kilimani? Danil Scenic Tours offers home pickup from Kilimani, Hurlingham and Kileleshwa, full-board safaris and expert guides. Call +254 722 919 249.',
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TouristInformationCenter",
  "name": "Danil Scenic Tours",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Northern Bypass Rd",
    "addressLocality": "Kahawa West",
    "addressRegion": "Nairobi",
    "addressCountry": "KE"
  },
  "areaServed": ["Kilimani", "Hurlingham", "Kileleshwa", "Lavington", "Nairobi"],
  "telephone": "+254722919249",
  "email": "safari@danilscenictours.co.ke"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer pickup from Kilimani and Hurlingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We pick up from Kilimani, Hurlingham, Kileleshwa, and Lavington. When you confirm your booking, provide your home address or office location. Your driver-guide will be at your pickup point at the agreed time on the morning of your safari."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most popular safari for Kilimani residents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maasai Mara 4-day safari is the most booked among our central and southern Nairobi clients. Amboseli is also consistently popular, particularly for its visual drama and the straightforward southern route from Kilimani. For a single-day option, the Nairobi City Tour is ideal and returns you home the same evening."
      }
    },
    {
      "@type": "Question",
      "name": "Can I send visiting family or friends on safari without joining them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many Kilimani residents send their visiting guests on safari independently. We get them from your Kilimani address, guide them throughout, and return them safely. You do not need to be part of the trip. Confirm the dates, guest numbers, and pickup address when booking."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer private safaris for small groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Private safari packages give you your own vehicle, your own guide, and full schedule flexibility. No shared vehicles. Private safaris are particularly popular among Kilimani families, couples, and professional groups who prefer a personalised experience. Contact us with your dates and group size for a private quote."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Amboseli from Kilimani?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amboseli National Park is a 4 hour drive from Kilimani via Langata Road and the Mombasa Road south. We depart early in the morning so you arrive at Amboseli in time for lunch and an afternoon game drive on Day 1."
      }
    },
    {
      "@type": "Question",
      "name": "Are there weekend safari options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our 2-day Lake Naivasha safari is ideal for a Friday to Sunday trip. The 3-day Tsavo safari covers a long weekend comfortably. For the Maasai Mara, a 4-day package from Thursday morning to Sunday evening works well for professionals with Monday commitments. Contact us with your exact dates."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a safari from Kilimani cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing starts from USD 260 for the Nairobi City Tour and goes up to multi-destination combination packages spanning 5 to 13 days. Full pricing for all packages is listed at danilscenictours.co.ke/safari-packages. Contact us with your group size and dates for a confirmed quote."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay via M-Pesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We accept M-Pesa, bank transfer, and card payments. A 30% deposit confirms your booking, with the balance due 45 days before your safari start date. Full payment instructions are provided upon booking confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer group safaris for office teams and social groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Groups of 7 or more qualify for our group rate, which significantly reduces the per-person cost. Kilimani office teams, apartment building groups, school parent communities, and social circles regularly book group safaris with us. Contact us with your group size and preferred dates."
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
    "name": "Kilimani, Hurlingham, Kileleshwa, Nairobi"
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
          "name": "Lake Naivasha Safari"
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
          "name": "Maasai Mara Safari"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tsavo Safari"
        }
      }
    ]
  }
}

export default function KilimaniSafariTours() {
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
            Safari Tours from Kilimani, Nairobi - Kenya Wildlife Experiences with Home Pickup
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Danil Scenic Tours picks up clients directly from Kilimani, Hurlingham, and Kileleshwa. If you are a young professional planning a Maasai Mara weekend, a family organising a school holiday safari, or an expat hosting overseas visitors who want to experience Kenya's wildlife we come to your door. Your 4x4 Land Cruiser departs from your pickup point and your safari begins from there.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            We are a Nairobi-based safari operator with licensed guides, well-maintained safari vehicles, and a track record of delivering excellent wildlife experiences to clients from across the city. Every package is full board accommodation, all meals, park entry fees, and professional guiding are included from the moment you step into your vehicle.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Kilimani's Location Puts Kenya's Safari Destinations Within Easy Reach
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Kilimani sits close to the junction of Ngong Road and the wider southern Nairobi network, which means departure routes to most major safari destinations are efficient and straightforward.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            For Kilimani residents, an early morning safari departure means you are moving through light traffic and onto the open highway within minutes. You arrive at your destination well-positioned for an afternoon game drive not exhausted from a complicated city transit.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            We Pick You Up From Kilimani, Hurlingham, and Kileleshwa
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Our pickup service covers all of Kilimani, Hurlingham, Kileleshwa, and Lavington. Whether you are near Yaya Centre on Argwings Kodhek Road, along Dennis Pritt Road, near the Nairobi Hospital roundabout, or deeper into the suburb toward Kileleshwa your driver-guide will be at your location at the confirmed time. We agree the pickup point at the time of booking and your guide contacts you via WhatsApp on the morning of departure.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Visiting Guests in Kilimani? We Handle Their Safari Entirely
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Many Kilimani residents host friends and family from outside Nairobi whether Kenyan relatives visiting from other counties or international guests unfamiliar with the city. If your visitors want to go on safari and you cannot join them, we handle everything. We get them from their address, guide them professionally throughout the entire safari experience, and return them safely to you.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            A WhatsApp message to confirm the dates, the number of guests, and your pickup address is all it takes.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Kenya Safari Packages for Kilimani Residents
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Every Danil Scenic Tours package is available with Kilimani pickup. Here are the most popular among our southern and central Nairobi clients:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nairobi City Tour - 1 Day
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            The ideal choice for Kilimani residents who want a safari experience without an overnight commitment. We collect you from your Kilimani address and head straight to Nairobi National Park where lions, rhinos, buffaloes, and giraffes with the city skyline as the backdrop. Continue to the Giraffe Centre, Kazuri Beads, and lunch at Karen Blixen Restaurant. You are back home in Kilimani by early evening. From USD 260 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Lake Naivasha Safari - 2 Days / 1 Night
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            A perfect Kilimani weekend escape. Two hours northwest, Lake Naivasha offers a hippo boat ride, a walking safari among giraffes and zebras on Crescent Island, and an afternoon game drive through Hell's Gate National Park. From USD 948 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Amboseli Safari - 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's most visually dramatic safari, elephant herds moving across the open plains with Mount Kilimanjaro rising behind them. From USD 890 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Maasai Mara Safari - 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's most celebrated reserve and the home of the Great Wildebeest Migration between July and October. Big Five game drives across open savannah, dramatic river crossings, and three full nights in the Mara. From USD 830 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Tsavo Safari - 3 Days / 2 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's largest and wildest park. Red elephants, volcanic landscapes, and vast open terrain that feels genuinely remote. The Tsavo route south from Kilimani is straightforward via Mombasa Road. From USD 550 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Multi-Destination Combinations - 5 to 13 Days
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            For a more comprehensive Kenya experience, our combination packages link multiple parks and destinations in one guided journey. The 5-day Amboseli, Lake Nakuru and Masai Mara combination, the 10-day Classic with a Diani Beach finish, and the 13-day Safari and Coastal Escape are all available with Kilimani pickup on Day 1.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            View all packages and pricing: <Link href="/safari-packages" className="text-blue-600 hover:underline">danilscenictours.co.ke/safari-packages</Link>
            <br />
            Multi-destination combinations available - 5 days to 13 days across Kenya.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Why Kilimani Residents Choose Danil Scenic Tours
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-8">
            <li>Home pickup from Kilimani, Hurlingham, Kileleshwa, and Lavington</li>
            <li>Professional, experienced guides - knowledgeable, punctual, and guest-focused</li>
            <li>Full board on all packages - breakfast, lunch, and dinner included throughout</li>
            <li>Private 4x4 Land Cruiser with pop-up roof on every safari</li>
            <li>All park and conservancy entry fees pre-covered</li>
            <li>Private safari options for couples, families, and visiting guests</li>
            <li>Flexible itineraries for busy Nairobi professional schedules</li>
            <li>M-Pesa, bank transfer, and card payments accepted</li>
            <li>Responsive - WhatsApp reply within 24 hours, often same day</li>
          </ul>

          <div className="bg-white p-8 rounded-lg shadow-sm my-12 border border-gray-100">
            <p className="text-lg text-gray-800 font-medium mb-2">
              PHONE / WHATSAPP: <a href="tel:+254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a>
            </p>
            <p className="text-lg text-gray-800 font-medium mb-2">
              EMAIL: <a href="mailto:safari@danilscenictours.co.ke" className="text-blue-600 hover:underline">safari@danilscenictours.co.ke</a>
            </p>
            <p className="text-lg text-gray-800 font-medium mb-6">
              OFFICE: Northern Bypass Rd, Kahawa West, Nairobi
            </p>
            <Link 
              href="/book" 
              className="inline-block bg-[#1A4D2E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#143d24] transition-colors"
            >
              Book Your Kilimani Safari Now
            </Link>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Frequently Asked Questions - Safari Tours from Kilimani
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer pickup from Kilimani and Hurlingham?</h3>
              <p className="text-lg text-gray-700">Yes. We pick up from Kilimani, Hurlingham, Kileleshwa, and Lavington. When you confirm your booking, provide your home address or office location. Your driver-guide will be at your pickup point at the agreed time on the morning of your safari.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the most popular safari for Kilimani residents?</h3>
              <p className="text-lg text-gray-700">The Maasai Mara 4-day safari is the most booked among our central and southern Nairobi clients. Amboseli is also consistently popular, particularly for its visual drama and the straightforward southern route from Kilimani. For a single-day option, the Nairobi City Tour is ideal and returns you home the same evening.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I send visiting family or friends on safari without joining them?</h3>
              <p className="text-lg text-gray-700">Yes. Many Kilimani residents send their visiting guests on safari independently. We get them from your Kilimani address, guide them throughout, and return them safely. You do not need to be part of the trip. Confirm the dates, guest numbers, and pickup address when booking.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer private safaris for small groups?</h3>
              <p className="text-lg text-gray-700">Yes. Private safari packages give you your own vehicle, your own guide, and full schedule flexibility. No shared vehicles. Private safaris are particularly popular among Kilimani families, couples, and professional groups who prefer a personalised experience. Contact us with your dates and group size for a private quote.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How far is Amboseli from Kilimani?</h3>
              <p className="text-lg text-gray-700">Amboseli National Park is a 4 hour drive from Kilimani via Langata Road and the Mombasa Road south. We depart early in the morning so you arrive at Amboseli in time for lunch and an afternoon game drive on Day 1.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Are there weekend safari options?</h3>
              <p className="text-lg text-gray-700">Yes. Our 2-day Lake Naivasha safari is ideal for a Friday to Sunday trip. The 3-day Tsavo safari covers a long weekend comfortably. For the Maasai Mara, a 4-day package from Thursday morning to Sunday evening works well for professionals with Monday commitments. Contact us with your exact dates.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How much does a safari from Kilimani cost?</h3>
              <p className="text-lg text-gray-700">Pricing starts from USD 260 for the Nairobi City Tour and goes up to multi-destination combination packages spanning 5 to 13 days. Full pricing for all packages is listed at danilscenictours.co.ke/safari-packages. Contact us with your group size and dates for a confirmed quote.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I pay via M-Pesa?</h3>
              <p className="text-lg text-gray-700">Yes. We accept M-Pesa, bank transfer, and card payments. A 30% deposit confirms your booking, with the balance due 45 days before your safari start date. Full payment instructions are provided upon booking confirmation.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer group safaris for office teams and social groups?</h3>
              <p className="text-lg text-gray-700">Yes. Groups of 7 or more qualify for our group rate, which significantly reduces the per-person cost. Kilimani office teams, apartment building groups, school parent communities, and social circles regularly book group safaris with us. Contact us with your group size and preferred dates.</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Book Your Kenya Safari from Kilimani Today
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's wildlife is closer than you think from Kilimani. The Maasai Mara, Amboseli, Tsavo, Lake Naivasha, and more are all within reach and Danil Scenic Tours will collect you from your door and handle everything from there.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Send us a WhatsApp message with your preferred safari, your travel dates, and your group size. We respond within 24 hours with availability and a confirmed quote. For urgent bookings, call us directly on <a href="tel:+254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a>.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-12">
            <li>WhatsApp: <a href="https://wa.me/254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a></li>
            <li>Email: <a href="mailto:safari@danilscenictours.co.ke" className="text-blue-600 hover:underline">safari@danilscenictours.co.ke</a></li>
            <li>Visit Us: Northern Bypass Rd, Kahawa West, Nairobi</li>
            <li>View All Packages: <Link href="/safari-packages" className="text-blue-600 hover:underline">danilscenictours.co.ke/safari-packages</Link></li>
          </ul>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Pages</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li><Link href="/safari-packages" className="text-blue-600 hover:underline">Kenya Safari Packages - All Pricing</Link></li>
              <li><Link href="/safari-tours" className="text-blue-600 hover:underline">Kenya Safari Tours - Planning Guide</Link></li>
              <li><Link href="/karen-safari-tours" className="text-blue-600 hover:underline">Safari Tours in Karen</Link></li>
            </ul>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  )
}
