import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Safari Tours from Karen, Nairobi | Danil Scenic Tours | Kenya Wildlife Safaris',
  description: 'Looking for a Kenya safari from Karen? Danil Scenic Tours offers home pickup from Karen and Langata, Big Five game drives, and full-board safari packages. Call +254 722 919 249.',
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
  "areaServed": ["Karen", "Langata", "Nairobi South", "Hardy", "Nairobi"],
  "telephone": "+254722919249",
  "email": "safari@danilscenictours.co.ke"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer pickup from Karen and Langata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We pick up from all areas of Karen and Langata. When you confirm your booking, provide your home address or preferred pickup point. Your driver-guide will be at your gate at the agreed time on the morning of your safari."
      }
    },
    {
      "@type": "Question",
      "name": "How close is Nairobi National Park to Karen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nairobi National Park borders Karen and Langata directly the park's main gate on Langata Road is minutes from Karen. Our Nairobi City Tour begins at the park and is the most geographically convenient safari for Karen residents, essentially starting on your doorstep."
      }
    },
    {
      "@type": "Question",
      "name": "I have international guests staying in Karen, can you take just them on safari without me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many Karen families send their visiting guests on safari with us independently. Your guests are picked up from your Karen address, guided throughout by our professional team, and returned to you safely at the end of the safari. You do not need to accompany them."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most popular safari for Karen residents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amboseli is the most popular among our Karen and Langata clients it is the closest major park geographically, and the elephant and Kilimanjaro combination makes it exceptional. The Maasai Mara is the most popular overall and is particularly booked for the Great Migration season (July to October)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book a private safari for just my family?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Private safari packages give you your own vehicle, your own guide, and your own schedule. Private safaris are particularly popular among Karen families and expat households. Contact us with your dates and group size for a private quote."
      }
    },
    {
      "@type": "Question",
      "name": "How far is the Maasai Mara from Karen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maasai Mara is approximately a 4.5 to 5.5 hour drive from Karen via Ngong Road and Narok. We depart early in the morning so you arrive in time for an afternoon game drive on Day 1."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a safari from Karen cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on your destination, group size, and travel dates. Packages start from USD 260 for the Nairobi City Tour and go up to multi-destination combination itineraries spanning 5 to 13 days. All pricing is listed at danilscenictours.co.ke/safari-packages."
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
      "name": "Do you run group safaris for Karen community groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Groups of 7 or more qualify for our group rate, which significantly lowers the per-person cost. Karen community groups, church groups, school staff, and corporate teams from Karen businesses regularly book group safaris with us."
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
    "name": "Karen, Langata, Nairobi"
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
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lake Naivasha Safari"
        }
      }
    ]
  }
}

export default function KarenSafariTours() {
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
            Safari Tours from Karen, Nairobi — Premium Kenya Wildlife Experiences with Home Pickup
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Danil Scenic Tours serves Karen and Langata with full home pickup on all our safari packages. We collect you from your Karen address whether you are near Hardy Estate, the Galleria, Karen Hospital roundabout, or deeper into the suburb toward Ngong and your safari begins the moment you are in your 4x4 Land Cruiser. No messing around with directions to a far-off departure point. No last-minute confusion.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            We are a professional, Nairobi-based safari operator with licensed guides, confirmed park access, and a track record of taking Karen residents, their visiting family members, and international guests from across the suburb on unforgettable Kenya wildlife experiences.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Karen's Doorstep Leads Straight to Kenya's Greatest Safari Destinations
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            What makes Karen uniquely positioned for safari travel is geography. The suburb sits at the southern edge of Nairobi, which means you are already closer to Amboseli, Tsavo, and the Maasai Mara than most other Nairobi neighbourhoods. The road south toward Amboseli begins practically at your suburb boundary. The Mara route through Narok is a straightforward drive west from Karen and Langata.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            For Karen residents, a safari is not a distant adventure that requires half a day of travel just to leave the city. With an early morning departure from your home, you can be inside Amboseli National Park watching elephants against Kilimanjaro's snow-capped peak before lunchtime.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            We Pick You Up From Karen and Langata
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Our pickup service covers all of Karen and Langata. Whether your home is near Karen Country Club, off Ngong Road, near Hardy Estate, or close to the Bomas of Kenya junction on Langata Road your driver-guide will be at your gate at the agreed time. We confirm the exact pickup point when you book, and your guide contacts you via WhatsApp on the morning of departure so everything is smooth.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Hosting International Guests in Karen? We Handle the Safari
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Karen is home to many expatriates, diplomats, and internationally connected families who regularly host overseas guests. If you have friends or family visiting from abroad who want to experience Kenya's wildlife, we make the logistics entirely seamless. We pick them up from your Karen home, take them through an expertly guided safari experience, and get them back safely. We handle everything.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Kenya Safari Packages for Karen Residents
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Every Danil Scenic Tours package is available with Karen and Langata pickup. These are the most popular among our southern Nairobi clients:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nairobi City Tour — 1 Day
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            The most Karen-adjacent safari on our list. We collect you from your home and drive straight to Nairobi National Park which borders your suburb for a morning game drive. Lions, rhinos, giraffes, and buffaloes with the Nairobi skyline behind them. Continue to the Giraffe Centre on Koitobos Road (a 10-minute drive from central Karen), then Kazuri Beads and lunch at Karen Blixen Restaurant. You are home by early evening. From USD 260 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Amboseli Safari — 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Karen's most natural safari extension. Drive south from your suburb through Athi River and into Amboseli National Park Africa's finest destination for elephant photography, with Kilimanjaro as your permanent backdrop. Karen residents consistently rate Amboseli as their favourite park for its proximity and visual impact. From USD 890 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Maasai Mara Safari — 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's legendary reserve, four hours west of Karen via Narok. Big Five game drives, the world-famous Great Wildebeest Migration between July and October, and sweeping savannah landscapes that feel a world apart from Nairobi life. From USD 830 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Tsavo Safari — 3 Days / 2 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's largest wilderness. Tsavo East and West together form a vast, dramatic landscape of red dust plains, volcanic geography, and large elephant herds. From Karen, the route south toward Tsavo is direct and well-paved. From USD 550 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Lake Naivasha Safari — 2 Days / 1 Night
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            A perfect short escape for Karen residents. Two hours north, Lake Naivasha offers a hippo boat safari, a walking experience at Crescent Island, and an afternoon game drive through Hell's Gate. From USD 948 per person.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            View all packages and pricing: <Link href="/safari-packages" className="text-blue-600 hover:underline">danilscenictours.co.ke/safari-packages</Link>
            <br />
            Multi-destination combinations available — 5 days to 13 days across Kenya.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Why Karen Residents Choose Danil Scenic Tours
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-8">
            <li>Home pickup from Karen and Langata — your safari starts at your gate</li>
            <li>Professional, experienced guides with deep knowledge of every destination</li>
            <li>Full board on all packages — no meal planning, no unexpected restaurant costs</li>
            <li>Private 4x4 Land Cruiser with pop-up roof — quality game viewing from the right vehicle</li>
            <li>All park and conservancy entry fees included — no surprises at the gate</li>
            <li>Private safari options for couples, families, and visiting international guests</li>
            <li>Group rates for 7 or more — families and friend groups welcome</li>
            <li>Flexible itineraries for expat and diplomatic schedules</li>
            <li>M-Pesa, bank transfer, and card payments accepted</li>
            <li>Responsive — WhatsApp us and receive a response the same day</li>
          </ul>

          <div className="bg-white p-8 rounded-lg shadow-sm my-12 border border-gray-100">
            <p className="text-lg text-gray-800 font-medium mb-2">
              FIND US: Northern Bypass Rd, Kahawa West, Nairobi
            </p>
            <p className="text-lg text-gray-800 font-medium mb-2">
              PHONE / WHATSAPP: <a href="tel:+254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a>
            </p>
            <p className="text-lg text-gray-800 font-medium mb-6">
              EMAIL: <a href="mailto:safari@danilscenictours.co.ke" className="text-blue-600 hover:underline">safari@danilscenictours.co.ke</a>
            </p>
            <a 
              href="https://maps.google.com/?q=Danil+Scenic+Tours,+Northern+Bypass+Rd,+Kahawa+West,+Nairobi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#1A4D2E] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#143d24] transition-colors"
            >
              Get Directions on Google Maps
            </a>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Frequently Asked Questions — Safari Tours from Karen
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer pickup from Karen and Langata?</h3>
              <p className="text-lg text-gray-700">Yes. We pick up from all areas of Karen and Langata. When you confirm your booking, provide your home address or preferred pickup point. Your driver-guide will be at your gate at the agreed time on the morning of your safari.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How close is Nairobi National Park to Karen?</h3>
              <p className="text-lg text-gray-700">Nairobi National Park borders Karen and Langata directly the park's main gate on Langata Road is minutes from Karen. Our Nairobi City Tour begins at the park and is the most geographically convenient safari for Karen residents, essentially starting on your doorstep.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">I have international guests staying in Karen, can you take just them on safari without me?</h3>
              <p className="text-lg text-gray-700">Yes. Many Karen families send their visiting guests on safari with us independently. Your guests are picked up from your Karen address, guided throughout by our professional team, and returned to you safely at the end of the safari. You do not need to accompany them.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the most popular safari for Karen residents?</h3>
              <p className="text-lg text-gray-700">Amboseli is the most popular among our Karen and Langata clients it is the closest major park geographically, and the elephant and Kilimanjaro combination makes it exceptional. The Maasai Mara is the most popular overall and is particularly booked for the Great Migration season (July to October).</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I book a private safari for just my family?</h3>
              <p className="text-lg text-gray-700">Yes. Private safari packages give you your own vehicle, your own guide, and your own schedule. Private safaris are particularly popular among Karen families and expat households. Contact us with your dates and group size for a private quote.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How far is the Maasai Mara from Karen?</h3>
              <p className="text-lg text-gray-700">The Maasai Mara is approximately a 4.5 to 5.5 hour drive from Karen via Ngong Road and Narok. We depart early in the morning so you arrive in time for an afternoon game drive on Day 1.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How much does a safari from Karen cost?</h3>
              <p className="text-lg text-gray-700">Pricing depends on your destination, group size, and travel dates. Packages start from USD 260 for the Nairobi City Tour and go up to multi-destination combination itineraries spanning 5 to 13 days. All pricing is listed at danilscenictours.co.ke/safari-packages.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I pay via M-Pesa?</h3>
              <p className="text-lg text-gray-700">Yes. We accept M-Pesa, bank transfer, and card payments. A 30% deposit confirms your booking, with the balance due 45 days before your safari start date. Full payment instructions are provided upon booking confirmation.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you run group safaris for Karen community groups?</h3>
              <p className="text-lg text-gray-700">Yes. Groups of 7 or more qualify for our group rate, which significantly lowers the per-person cost. Karen community groups, church groups, school staff, and corporate teams from Karen businesses regularly book group safaris with us.</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Book Your Kenya Safari from Karen Today
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            You are closer to Kenya's wildlife than you might think. From your Karen home, the Maasai Mara, Amboseli, Tsavo, and Lake Naivasha are all within reach and Danil Scenic Tours will collect you from your gate and take care of everything from there.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            WhatsApp us with your preferred safari, your travel dates, and your group size. We respond within 24 hours with availability and a confirmed quote. For urgent requests or last-minute availability, call us directly on <a href="tel:+254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a>.
          </p>

          <div className="space-y-3 text-lg text-gray-700 mb-12">
            <p>
              → WhatsApp: <a href="https://wa.me/254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a>
            </p>
            <p>
              → Email: <a href="mailto:safari@danilscenictours.co.ke" className="text-blue-600 hover:underline">safari@danilscenictours.co.ke</a>
            </p>
            <p>
              → Visit Us: Northern Bypass Rd, Kahawa West, Nairobi
            </p>
            <p>
              → View All Packages: <Link href="/safari-packages" className="text-blue-600 hover:underline">danilscenictours.co.ke/safari-packages</Link>
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Pages</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li><Link href="/safari-packages" className="text-blue-600 hover:underline">Kenya Safari Packages - All Pricing</Link></li>
              <li><Link href="/destinations/nairobi-national-park-safari-tours" className="text-blue-600 hover:underline">Nairobi City Tour - Full Day</Link></li>
              <li><Link href="/safari-tours" className="text-blue-600 hover:underline">Kenya Safari Tours - Planning Guide</Link></li>
            </ul>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  )
}
