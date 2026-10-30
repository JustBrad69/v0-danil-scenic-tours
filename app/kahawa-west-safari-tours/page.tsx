import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Safari Tours in Kahawa West, Nairobi | Danil Scenic Tours | Kenya Wildlife Safaris',
  description: 'Danil Scenic Tours is based in Kahawa West on Northern Bypass Rd. Home pickup, Big Five game drives, group and private safaris from Nairobi. Call +254 722 919 249.',
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
  "areaServed": ["Kahawa West", "Githurai", "Kasarani", "Roysambu", "Kahawa Sukari", "Nairobi"],
  "telephone": "+254722919249",
  "email": "safari@danilscenictours.co.ke",
  "openingHours": "Mo-Sa 08:00-18:00"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer pickup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pickup from Kahawa West and surrounding northern Nairobi areas is included. Confirm your pickup point when booking."
      }
    },
    {
      "@type": "Question",
      "name": "How far is the Maasai Mara from Kahawa West?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Approximately a 5 to 6 hour drive. We depart early in the morning from Kahawa West so you arrive in time for an afternoon game drive on Day 1."
      }
    },
    {
      "@type": "Question",
      "name": "Can our group from Kahawa West get a group rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Groups of 7 or more get our group rate, which significantly lowers the per-person cost. Contact us with your group size and dates for a confirmed quote."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay via M-Pesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We accept M-Pesa, bank transfer, and card. A 30% deposit confirms your booking, with the balance due 45 days before your safari date."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most popular safari for Kahawa West residents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maasai Mara 4-day safari is the most booked. The Nairobi City Tour is popular for one-day options. For groups of 7 or more, the 7-day Maasai Mara, Lake Nakuru and Amboseli combination offers excellent value."
      }
    },
    {
      "@type": "Question",
      "name": "Do you run safaris year-round from Kahawa West?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 365 days a year. Peak season is June to October. January to February is also excellent. Book 3 to 6 months ahead for peak season."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer family-friendly safaris with children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Let us know ages when booking and we will advise on the most suitable itinerary."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the safari price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full board accommodation, 4x4 Land Cruiser with pop-up roof, professional guide, all park entry fees, and home pickup and dropoff in Nairobi. International flights, visa fees, tips, and personal expenses are not included."
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
    "name": "Kahawa West, Githurai, Kasarani, Nairobi"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kenya Safari Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nairobi City Tour - 1 Day"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maasai Mara Safari - 4 Days / 3 Nights"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Amboseli Safari - 4 Days / 3 Nights"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lake Naivasha Safari - 2 Days / 1 Night"
        }
      }
    ]
  }
}

export default function KahawaWestSafariTours() {
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
            Safari Tours in Kahawa West, Nairobi - Your Local Wildlife Adventure Starts Here
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Danil Scenic Tours is based in Kahawa West on Northern Bypass Road. We serve Kahawa West, Kasarani, Roysambu, Kahawa Sukari, and surrounding northern Nairobi areas. Every package comes with home pickup your guide comes to you.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Kahawa West's Own Safari Operator - Right Here on the Northern Bypass
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            We Pick You Up From Kahawa West
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Pickup is included for all Kahawa West and surrounding area clients. Your guide comes to your agreed location. Confirm your pickup point at the time of booking.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Group Safaris for Families and Friend Circles
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Kahawa West is a community neighbourhood and people travel together. Our group packages are built for families, church groups, Kenyatta University colleagues, and work teams. Seven or more people bring the per-person cost down significantly, making the Maasai Mara, Amboseli, or a multi-destination combo accessible without overstretching your budget. One vehicle, one guide, full board throughout.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Kenya Safari Packages for Kahawa West Residents
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Every Danil Scenic Tours package is available with Kahawa West pickup. The most popular among our northern Nairobi clients:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nairobi City Tour - 1 Day
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            A full-day Nairobi experience combining a National Park game drive, the Giraffe Centre, Kazuri Beads, and lunch at Karen Blixen Restaurant. Back home the same evening. From USD 260 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Maasai Mara Safari - 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Kenya's most iconic reserve. Big Five game drives, open savannah, and the Great Wildebeest Migration between July and October. From USD 830 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Amboseli Safari - 4 Days / 3 Nights
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Elephant herds against the backdrop of Mount Kilimanjaro. One of Africa's most photographed wildlife destinations, 4 hours south of Nairobi. From USD 890 per person (group rate).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Lake Naivasha Safari - 2 Days / 1 Night
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            A hippo boat ride, a walking safari on Crescent Island, and a game drive through Hell's Gate, all in two days. From USD 948 per person.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Tsavo, Lake Nakuru, Ol Pejeta & More
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Short 2-day escapes to 13-day Kenya-wide journeys all available with Kahawa West pickup.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            View all packages and pricing: <Link href="/safari-packages" className="text-blue-600 hover:underline">danilscenictours.co.ke/safari-packages</Link>
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Why Kahawa West Locals Choose Danil Scenic Tours
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-8">
            <li>Physically based in Kahawa West - not just claiming to serve the area</li>
            <li>Free home pickup from Kahawa West, Githurai, and surrounding suburbs</li>
            <li>Full board on all packages - meals included throughout</li>
            <li>4x4 Land Cruiser with pop-up roof on every safari</li>
            <li>All park entry fees included</li>
            <li>Group rates from 7 people</li>
            <li>M-Pesa, bank transfer, and card payments accepted</li>
            <li>Walk-in visits welcome at our Northern Bypass office</li>
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
              Book Your Safari Now
            </Link>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Frequently Asked Questions For Safari Tours from Kahawa West
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer pickup?</h3>
              <p className="text-lg text-gray-700">Yes. Pickup from Kahawa West and surrounding northern Nairobi areas is included. Confirm your pickup point when booking.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How far is the Maasai Mara from Kahawa West?</h3>
              <p className="text-lg text-gray-700">Approximately a 5 to 6 hour drive. We depart early in the morning from Kahawa West so you arrive in time for an afternoon game drive on Day 1.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can our group from Kahawa West get a group rate?</h3>
              <p className="text-lg text-gray-700">Yes. Groups of 7 or more get our group rate, which significantly lowers the per-person cost. Contact us with your group size and dates for a confirmed quote.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I pay via M-Pesa?</h3>
              <p className="text-lg text-gray-700">Yes. We accept M-Pesa, bank transfer, and card. A 30% deposit confirms your booking, with the balance due 45 days before your safari date.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is the most popular safari for Kahawa West residents?</h3>
              <p className="text-lg text-gray-700">The Maasai Mara 4-day safari is the most booked. The Nairobi City Tour is popular for one-day options. For groups of 7 or more, the 7-day Maasai Mara, Lake Nakuru and Amboseli combination offers excellent value.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you run safaris year-round from Kahawa West?</h3>
              <p className="text-lg text-gray-700">Yes, 365 days a year. Peak season is June to October. January to February is also excellent. Book 3 to 6 months ahead for peak season.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer family-friendly safaris with children?</h3>
              <p className="text-lg text-gray-700">Yes. Let us know ages when booking and we will advise on the most suitable itinerary.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is included in the safari price?</h3>
              <p className="text-lg text-gray-700">Full board accommodation, 4x4 Land Cruiser with pop-up roof, professional guide, all park entry fees, and home pickup and dropoff in Nairobi. International flights, visa fees, tips, and personal expenses are not included.</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">
            Book Your Kenya Safari Today
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We are in Kahawa West and we are ready to take you on safari. Send us a WhatsApp with your preferred safari, travel dates, and group size. We respond within 24 hours.
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
              <li><Link href="/destinations/maasai-mara-safari-tours" className="text-blue-600 hover:underline">Maasai Mara Safari Tours</Link></li>
              <li><Link href="/destinations/amboseli-safari-tours" className="text-blue-600 hover:underline">Amboseli Safari Tours</Link></li>
              <li><Link href="/destinations/nairobi-national-park-safari-tours" className="text-blue-600 hover:underline">Nairobi City Tour</Link></li>
              <li><Link href="/safari-tours" className="text-blue-600 hover:underline">Kenya Safari Tours - Types & Planning Guide</Link></li>
              <li><Link href="/about" className="text-blue-600 hover:underline">About Danil Scenic Tours</Link></li>
            </ul>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  )
}
