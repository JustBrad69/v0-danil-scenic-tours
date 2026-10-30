import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Safari Tours from Westlands, Nairobi | Danil Scenic Tours | Kenya Wildlife Safaris',
  description: 'Looking for a Kenya safari from Westlands? Danil Scenic Tours offers home and office pickup from Westlands, Big Five game drives, and full-board safari packages. Call +254 722 919 249.',
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
  "areaServed": ["Westlands", "Parklands", "Gigiri", "Spring Valley", "Riverside Drive", "Nairobi"],
  "telephone": "+254722919249",
  "email": "safari@danilscenictours.co.ke"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer pickup from Westlands and Parklands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We pick up from Westlands, Parklands, Spring Valley, Riverside Drive, and the Gigiri corridor. When you confirm your booking, provide your home address, hotel name, or office location. Your driver-guide will be at your pickup point at the confirmed time on the morning of your safari."
      }
    },
    {
      "@type": "Question",
      "name": "I am based at the UN campus in Gigiri, can you pick me from there?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We serve the Gigiri corridor, including the UN campus area, Village Market, and the surrounding diplomatic and expat community. Confirm your address when booking and we will arrange pickup directly from your location."
      }
    },
    {
      "@type": "Question",
      "name": "I have international colleagues visiting Nairobi, can you take them on safari without me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many Westlands and Gigiri expats send visiting colleagues and family on safari with us independently. We get them from their address, handle the entire experience, and return them safely. You do not need to accompany the group."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best safari for a first-time visitor to Kenya staying in Westlands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maasai Mara 4-day safari is the most popular choice for first-time visitors it covers the Big Five, iconic landscapes, and seasonally the Great Migration. For a shorter experience, the Nairobi City Tour is perfect as a single-day introduction and departs directly from Westlands."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book a private safari for just my household or small group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Private safari packages give you your own vehicle, your own guide, and full schedule flexibility. Private safaris are popular among Westlands expat families, diplomatic households, and corporate professionals. Contact us with your dates and group size for a private quote."
      }
    },
    {
      "@type": "Question",
      "name": "How far is the Maasai Mara from Westlands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maasai Mara is a 4.5 to 5.5 hour drive from Westlands via Waiyaki Way and Narok. We depart early in the morning so you arrive in the Mara in time for an afternoon game drive on Day 1."
      }
    },
    {
      "@type": "Question",
      "name": "Are there weekend safari options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our 2-day packages Ol Pejeta and Lake Naivasha are ideal for a weekend trip departing Friday morning and returning Sunday evening. Our 3-day Lake Nakuru safari also fits a long weekend. Contact us with your dates and we will confirm availability."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a safari from Westlands cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing starts from USD 260 for the Nairobi City Tour and goes up to multi-destination combination packages spanning 5 to 13 days. All pricing is listed at danilscenictours.co.ke/safari-packages. Contact us with your group size and dates for a confirmed quote."
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
      "name": "Do you offer group safaris for office teams and UN groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Groups of 7 or more qualify for our group rate, which significantly reduces the per-person cost. Corporate teams from Westlands offices, UN staff groups, NGO colleagues, and diplomatic community groups regularly book group safaris with us."
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
    "name": "Westlands, Parklands, Gigiri, Nairobi"
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
          "name": "Ol Pejeta Safari"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lake Nakuru Safari"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Amboseli Safari"
        }
      }
    ]
  }
}

export default function WestlandsSafariTours() {
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
            Safari Tours from Westlands, Nairobi — Kenya Wildlife Experiences with Home and Office Pickup
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Danil Scenic Tours picks up clients directly from Westlands, Parklands, Spring Valley, and the Gigiri corridor. If you are an expat working at the UN campus, a professional in one of the many Westlands corporate offices, or a resident who simply wants a wildlife weekend without the logistics headache we come to you. Your 4x4 Land Cruiser departs from your door and your safari begins immediately.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            We are a professional Nairobi-based safari operator serving the full breadth of Kenya's national parks and conservancies. Our guides are experienced, our vehicles are purpose-built for game viewing, and every package includes full board accommodation so there is nothing to organise beyond booking the trip.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Westlands Connects You Directly to Kenya's Greatest Safari Country
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            What works in Westlands' favour for safari travel is road access. Waiyaki Way flows directly into the Nairobi-Nakuru highway westbound which is the route to the Maasai Mara and Lake Nakuru. Northbound from Westlands through Gigiri and Limuru, the road to Ol Pejeta and the central highlands is clear and well-maintained. Southbound toward Langata and Nairobi National Park takes under 20 minutes from the heart of Westlands.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Westlands residents are already better positioned than most Nairobi suburbs for several safari routes and with early morning departures, you are well clear of the city and into open safari country before the traffic builds.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            We Pick You Up From Westlands and Surrounding Areas
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Our pickup service covers Westlands, Parklands, Spring Valley, Riverside Drive, and the Gigiri corridor. Whether you are in an apartment block off Chiromo Road, near the Aga Khan Hospital roundabout on 3rd Parklands Avenue, or staying at the Sankara or Tribe Hotel your driver-guide will be at your address at the agreed time. We confirm your exact pickup point at the time of booking and your guide contacts you via WhatsApp on the morning of departure.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Expats, UN Staff, and International Visitors, We Handle the Logistics
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Westlands and the Gigiri corridor are home to one of the largest expat and diplomatic communities in East Africa. If you have international guests staying in Westlands who want to go on safari independently, we get them from their address, handle the entire experience professionally, and return them safely.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Kenya Safari Packages for Westlands Residents
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Every Danil Scenic Tours package is available with Westlands pickup. These are the most popular among our northern Nairobi and expat community clients:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nairobi City Tour — 1 Day
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            The ideal introduction for new arrivals in Westlands. We get you and drive to Nairobi National Park for a morning game drive lions, rhinos, giraffes, and buffaloes against the Nairobi skyline. Continue to the Giraffe Centre, Kazuri Beads, and lunch at Karen Blixen Restaurant before returning you to Westlands by early evening. From USD 260 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Maasai Mara Safari — 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's legendary wildlife reserve. Westlands sits along the Waiyaki Way-Nairobi-Nakuru highway corridor, making the Mara route west via Narok one of the most direct exits from Nairobi. Big Five game drives, sweeping open savannah, and the Great Wildebeest Migration between July and October. From USD 830 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Ol Pejeta Conservancy — 2 Days / 1 Night
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Drive north from Westlands through Gigiri and into the central highlands toward Nanyuki a route that takes you through some of Kenya's most dramatic countryside. Ol Pejeta is home to the Big Five and the last northern white rhinos on earth. Overnight at Maisha Sweetwaters Camp, return to Westlands on Day 2. From USD 920 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Lake Nakuru Safari — 3 Days / 2 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Head northwest from Westlands on Waiyaki Way and into the Rift Valley toward Lake Nakuru National Park a rhino sanctuary with flamingos, leopards, and diverse birdlife. From USD 600 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Amboseli Safari — 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Drive south from Westlands toward Amboseli National Park, Africa's most celebrated destination for elephant photography beneath Mount Kilimanjaro. From USD 890 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Multi-Destination Combinations — 5 to 13 Days
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            For longer Kenya explorations, our combination packages link multiple parks in a single guided journey. The 10-Day Classic covers Maasai Mara, Lake Nakuru, Lake Naivasha, Amboseli, and Diani Beach all with Westlands pickup on Day 1.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            View all packages and pricing: <Link href="/safari-packages" className="text-blue-600 hover:underline">danilscenictours.co.ke/safari-packages</Link>
            <br />
            Multi-destination combinations available — 5 days to 13 days across Kenya.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Why Westlands Residents Choose Danil Scenic Tours
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-8">
            <li>Home and office pickup from Westlands, Parklands, Gigiri, and Spring Valley</li>
            <li>Professional guides who meet international standards — experienced, knowledgeable, reliable</li>
            <li>Full board on all packages — breakfast, lunch, and dinner throughout</li>
            <li>Private 4x4 Land Cruiser with pop-up roof on every safari</li>
            <li>All park and conservancy entry fees included — no surprises at the gate</li>
            <li>Private safari options for couples, solo travellers, and visiting international guests</li>
            <li>Group rates for 7 or more — ideal for UN teams, NGO groups, and office colleagues</li>
            <li>Flexible scheduling for busy expat and professional calendars</li>
            <li>M-Pesa, bank transfer, and card payments accepted</li>
            <li>Responsive communication — WhatsApp reply within 24 hours, often same day</li>
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
              Book Your Westlands Safari Now
            </Link>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Frequently Asked Questions — Safari Tours from Westlands
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer pickup from Westlands and Parklands?</h3>
              <p className="text-lg text-gray-700">Yes. We pick up from Westlands, Parklands, Spring Valley, Riverside Drive, and the Gigiri corridor. When you confirm your booking, provide your home address, hotel name, or office location. Your driver-guide will be at your pickup point at the confirmed time on the morning of your safari.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">I am based at the UN campus in Gigiri, can you pick me from there?</h3>
              <p className="text-lg text-gray-700">Yes. We serve the Gigiri corridor, including the UN campus area, Village Market, and the surrounding diplomatic and expat community. Confirm your address when booking and we will arrange pickup directly from your location.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">I have international colleagues visiting Nairobi, can you take them on safari without me?</h3>
              <p className="text-lg text-gray-700">Yes. Many Westlands and Gigiri expats send visiting colleagues and family on safari with us independently. We get them from their address, handle the entire experience, and return them safely. You do not need to accompany the group.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the best safari for a first-time visitor to Kenya staying in Westlands?</h3>
              <p className="text-lg text-gray-700">The Maasai Mara 4-day safari is the most popular choice for first-time visitors it covers the Big Five, iconic landscapes, and seasonally the Great Migration. For a shorter experience, the Nairobi City Tour is perfect as a single-day introduction and departs directly from Westlands.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I book a private safari for just my household or small group?</h3>
              <p className="text-lg text-gray-700">Yes. Private safari packages give you your own vehicle, your own guide, and full schedule flexibility. Private safaris are popular among Westlands expat families, diplomatic households, and corporate professionals. Contact us with your dates and group size for a private quote.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How far is the Maasai Mara from Westlands?</h3>
              <p className="text-lg text-gray-700">The Maasai Mara is a 4.5 to 5.5 hour drive from Westlands via Waiyaki Way and Narok. We depart early in the morning so you arrive in the Mara in time for an afternoon game drive on Day 1.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Are there weekend safari options?</h3>
              <p className="text-lg text-gray-700">Yes. Our 2-day packages Ol Pejeta and Lake Naivasha are ideal for a weekend trip departing Friday morning and returning Sunday evening. Our 3-day Lake Nakuru safari also fits a long weekend. Contact us with your dates and we will confirm availability.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How much does a safari from Westlands cost?</h3>
              <p className="text-lg text-gray-700">Pricing starts from USD 260 for the Nairobi City Tour and goes up to multi-destination combination packages spanning 5 to 13 days. All pricing is listed at danilscenictours.co.ke/safari-packages. Contact us with your group size and dates for a confirmed quote.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I pay via M-Pesa?</h3>
              <p className="text-lg text-gray-700">Yes. We accept M-Pesa, bank transfer, and card payments. A 30% deposit confirms your booking, with the balance due 45 days before your safari start date. Full payment instructions are provided upon booking confirmation.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer group safaris for office teams and UN groups?</h3>
              <p className="text-lg text-gray-700">Yes. Groups of 7 or more qualify for our group rate, which significantly reduces the per-person cost. Corporate teams from Westlands offices, UN staff groups, NGO colleagues, and diplomatic community groups regularly book group safaris with us.</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Book Your Kenya Safari from Westlands Today
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's wildlife is closer than it feels from Westlands. The Maasai Mara, Amboseli, Ol Pejeta, Lake Nakuru, and Lake Naivasha are all within reach and Danil Scenic Tours will collect you from your door and handle everything from there.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            WhatsApp us with your preferred safari, your travel dates, and your group size. We respond within 24 hours with availability and a confirmed quote. For urgent bookings, call us directly on <a href="tel:+254722919249" className="text-blue-600 hover:underline">+254 722 919 249</a>.
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
