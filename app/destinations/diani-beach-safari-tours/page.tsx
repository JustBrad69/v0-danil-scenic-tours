import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Car,
  CheckCircle2,
  ChevronDown,
  Clock,
  Fish,
  MapPin,
  Palmtree,
  Plane,
  Ship,
  Train,
  TreePine,
  Users,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { BLOB_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Diani Beach Escape: 4-Day Kenya Coast Tour From Nairobi | Danil Scenic Tours',
  description:
    'Experience Diani Beach on a 4-day coastal escape from Nairobi. Snorkeling at Kisite Marine Park, Shimba Hills wildlife, and pristine white sand beaches with Danil Scenic Tours.',
  alternates: {
    canonical: '/destinations/diani-beach-safari-tours',
  },
  openGraph: {
    title:
      'Diani Beach Escape: 4-Day Kenya Coast Tour From Nairobi | Danil Scenic Tours',
    description:
      'Experience Diani Beach on a 4-day coastal escape from Nairobi with Kisite Marine Park, Shimba Hills, coastal culture, and white sand beaches.',
    url: '/destinations/diani-beach-safari-tours',
    type: 'website',
    images: [
      {
        url: BLOB_IMAGES.DIANI_BEACH,
        alt: 'Diani Beach on the Indian Ocean coast of Kenya',
      },
    ],
  },
}

const itinerary = [
  {
    day: '1',
    title: 'Arrival in Diani',
    sections: [
      {
        title: 'Transfer from Nairobi',
        description:
          'Danil Scenic Tours arranges your transfer from Nairobi to Diani. Depending on your dates and preference, travel either by domestic flight to Ukunda Airstrip or by SGR train to Mombasa followed by a road transfer south to Diani.',
      },
      {
        title: 'Resort Check-In',
        description:
          'On arrival, check into your selected beachfront lodge or resort and settle into the relaxed pace of the Kenyan coast.',
      },
      {
        title: 'Beach Leisure',
        description:
          'Spend the afternoon unwinding on the white sands of Diani Beach and enjoying the warm Indian Ocean setting.',
      },
      {
        title: 'Guided Sunset Walk',
        description:
          'Take a guided sunset walk along the coastline with a stop at local craft stalls along the beachfront.',
      },
      {
        title: 'Dinner and Overnight',
        description:
          'Return to your accommodation for dinner and your first night in Diani.',
      },
    ],
    meals: 'Dinner',
  },
  {
    day: '2',
    title: 'Marine Adventure at Kisite-Mpunguti',
    sections: [
      {
        title: 'Breakfast and Departure',
        description:
          'After breakfast, depart for a full-day marine excursion to Kisite-Mpunguti Marine National Park.',
      },
      {
        title: 'Boat Journey and Marine Wildlife',
        description:
          'Travel by boat toward the coral reefs. Spinner dolphins are commonly encountered during the crossing, although wildlife sightings are never guaranteed.',
      },
      {
        title: 'Snorkeling at Kisite-Mpunguti',
        description:
          'Snorkel among tropical fish and coral reefs in the clear waters of the Indian Ocean. Life jackets and experienced boat crew support guests with different swimming abilities.',
      },
      {
        title: 'Swahili Seafood Lunch on Wasini Island',
        description:
          'Enjoy a traditional coastal seafood lunch on Wasini Island with dishes such as fresh fish, octopus, and prawns.',
      },
      {
        title: 'Shimoni Slave Caves',
        description:
          'Continue with a guided visit to the Shimoni Slave Caves, a historical site connected to the 19th-century slave trade on the East African coast.',
      },
      {
        title: 'Return to Diani',
        description:
          'Return to your resort in the evening. Optional spa treatments or a beachside sundowner can be arranged separately.',
      },
    ],
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: '3',
    title: 'Shimba Hills and Beach Leisure',
    sections: [
      {
        title: 'Shimba Hills National Reserve',
        description:
          'Travel to Shimba Hills National Reserve, a lush coastal forest reserve approximately 30 kilometers from Diani.',
      },
      {
        title: 'Wildlife Experience',
        description:
          'Search for sable antelopes, elephants, and coastal birdlife while exploring the forested reserve with your guide.',
      },
      {
        title: 'Picnic Lunch',
        description:
          'Enjoy a picnic lunch during the Shimba Hills excursion.',
      },
      {
        title: 'Afternoon at Leisure',
        description:
          'Return to Diani and spend the afternoon relaxing on the beach or enjoying your resort facilities.',
      },
      {
        title: 'Optional Coastal Activities',
        description:
          'Optional activities include kite surfing, a camel ride along the beach, or a traditional dhow cruise at sunset. These activities are available at additional cost.',
      },
      {
        title: 'Dinner and Final Overnight',
        description:
          'Return to your resort for dinner and your final overnight stay in Diani.',
      },
    ],
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: '4',
    title: 'Departure',
    sections: [
      {
        title: 'Relaxed Final Morning',
        description:
          'Enjoy breakfast overlooking the Indian Ocean and a relaxed final morning before departure.',
      },
      {
        title: 'Optional Morning Activities',
        description:
          'Depending on your departure time, you may choose a short swim, browse beachfront boutiques, or visit the Colobus Conservation Centre.',
      },
      {
        title: 'Departure Transfer',
        description:
          'Your transfer to Mombasa airport, Ukunda Airstrip, the SGR station, or your onward connection departs according to your confirmed travel arrangements.',
      },
    ],
    meals: 'Breakfast',
  },
]

const accommodation = [
  {
    tier: 'Budget',
    name: 'Kandili House',
    description:
      'Affordable and relaxed accommodation with clean rooms, beach access, full-board meals, and a social atmosphere suited to travelers looking for a practical coastal stay.',
  },
  {
    tier: 'Mid-Range',
    name: 'Papillon Lagoon Reef',
    description:
      'A comfortable beachfront resort with swimming pools, dining facilities, family-friendly amenities, and direct access to Diani Beach.',
  },
  {
    tier: 'Luxury',
    name: 'Swahili Beach Resort',
    description:
      'A higher-end coastal resort with Swahili-inspired architecture, ocean-facing spaces, fine dining, spa services, and personalised hospitality.',
  },
]

const experiences = [
  {
    icon: Fish,
    title: 'Kisite-Mpunguti Marine Park',
    description:
      'Explore coral reefs, tropical fish, and Indian Ocean marine life on a full-day boat excursion.',
  },
  {
    icon: Ship,
    title: 'Wasini Island',
    description:
      'Enjoy a Swahili seafood lunch during your marine excursion and experience the coastal setting of Wasini Island.',
  },
  {
    icon: TreePine,
    title: 'Shimba Hills',
    description:
      'Explore a coastal forest reserve known for sable antelopes, elephants, and diverse birdlife.',
  },
  {
    icon: Palmtree,
    title: 'Diani Beach',
    description:
      'Relax on white sand beaches, swim in warm Indian Ocean water, and enjoy the atmosphere of Kenya’s south coast.',
  },
]

const seaHighlights = [
  'Colourful tropical fish and coral reef snorkeling',
  'Spinner dolphins may be seen during the boat crossing',
  'Seasonal sea turtle sightings',
  'Swahili seafood lunch on Wasini Island',
]

const shimbaHighlights = [
  'Sable antelopes',
  'Forest elephants',
  'Coastal birdlife',
  'Lush indigenous forest',
]

const coastHighlights = [
  'Black-and-white colobus monkeys at the Colobus Conservation Centre',
  'Shimoni Slave Caves',
  'Traditional dhow sailing and Swahili culture',
  'Optional kite surfing and camel rides',
]

const seasons = [
  {
    title: 'January to March',
    subtitle: 'Best Overall',
    description:
      'Hot, dry, and sunny conditions generally provide good weather for snorkeling, marine excursions, and beach time.',
  },
  {
    title: 'June to October',
    subtitle: 'Also Excellent',
    description:
      'The long dry season brings generally reliable weather and comfortable conditions for beach and outdoor activities. July and August may also bring stronger winds that can suit kite surfing.',
  },
  {
    title: 'November to December',
    subtitle: 'Shoulder Season',
    description:
      'Short rains bring greener landscapes to Shimba Hills and the coast. Rainfall is often intermittent, leaving periods for beach activities between showers.',
  },
  {
    title: 'April to May',
    subtitle: 'Long Rains',
    description:
      'Heavier rains can make marine activities and Shimba Hills excursions more difficult. Travelers with flexible dates may prefer a drier period.',
  },
]

const included = [
  'Full-board accommodation for 3 nights',
  'Nairobi to Diani and return transfer according to the confirmed transport option',
  'Professional English-speaking guide and driver throughout',
  'Full-day boat excursion to Kisite-Mpunguti Marine National Park',
  'Swahili seafood lunch on Wasini Island',
  'Entry to Shimoni Slave Caves',
  'Morning excursion to Shimba Hills National Reserve',
  'Guided sunset walk on Day 1',
]

const excluded = [
  'Tips and gratuities for guides and resort staff',
  'Optional watersports and activities',
  'Kite surfing',
  'Camel rides',
  'Optional dhow cruise',
  'Spa treatments',
  'Personal expenses and souvenirs',
  'International flights to and from Kenya',
  'Activities not listed in the itinerary',
]

const whyDanil = [
  {
    title: 'Coast and Safari Planning in One Place',
    description:
      'Diani can be booked as a standalone coastal trip or connected to a wildlife safari without coordinating multiple operators yourself.',
  },
  {
    title: 'More Than Beach Time',
    description:
      'The itinerary includes Kisite-Mpunguti Marine Park, Wasini Island, Shimba Hills, and Shimoni Slave Caves alongside beach leisure.',
  },
  {
    title: 'Full Board Throughout',
    description:
      'Meals are included throughout the three-night stay according to the itinerary.',
  },
  {
    title: 'Transport Arranged',
    description:
      'Danil Scenic Tours coordinates the transfer between Nairobi and Diani based on the transport option confirmed for your booking.',
  },
]

const beachPacking = [
  'Swimwear and lightweight cover-up',
  'Water shoes or reef sandals',
  'Waterproof dry bag for the boat excursion',
  'Underwater camera or GoPro if desired',
]

const forestPacking = [
  'Comfortable walking shoes or light hiking trainers',
  'Lightweight long trousers',
  'Long-sleeved shirt',
  'Insect repellent',
]

const essentials = [
  'High-factor sunscreen',
  'Hat and sunglasses',
  'Light rain jacket for wetter periods',
  'Personal medication',
]

const faqs = [
  {
    question: 'How much does the Diani Beach escape cost?',
    answer:
      'The published Safari Packages baseline starts from USD 523 per person for group travel, with a solo traveller price of USD 989. That published package uses Diani Sea Lodge with SGR and road transfers. Other accommodation tiers or a domestic flight option may change the final price.',
  },
  {
    question: 'How long is the Diani Beach escape?',
    answer:
      'The itinerary runs for 4 days and 3 nights.',
  },
  {
    question: 'How do I get from Nairobi to Diani Beach?',
    answer:
      'Danil Scenic Tours can arrange either a domestic flight to Ukunda Airstrip or an SGR journey to Mombasa followed by a road transfer to Diani. The final option is confirmed according to your dates, preference, group size, and package selected.',
  },
  {
    question: 'Is snorkeling suitable for non-swimmers?',
    answer:
      'The Kisite-Mpunguti excursion provides life jackets, and the boat crew are experienced with guests of different swimming abilities. Guests who are not comfortable entering the water can remain on the boat.',
  },
  {
    question: 'Can I combine Diani with a wildlife safari?',
    answer:
      'Yes. Diani is included in the 10-Day Classic Kenya Wildlife and Diani Beach Escape, which combines Maasai Mara, Lake Nakuru, Lake Naivasha, Amboseli, and the coast.',
  },
  {
    question: 'What is the Colobus Conservation Centre?',
    answer:
      'The Colobus Conservation Centre focuses on protecting the Angola colobus monkey and other coastal wildlife. A visit can be considered on Day 4 depending on your departure time.',
  },
  {
    question: 'Are optional watersports included?',
    answer:
      'No. Kite surfing, camel rides, optional dhow cruises, spa treatments, and other activities not listed as included are paid separately.',
  },
]

const destinationLinks = [
  {
    title: 'Maasai Mara Safari Tours',
    description: 'Great Migration and big cat experiences',
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    title: 'Amboseli Safari Tours',
    description: 'Elephants and Mount Kilimanjaro',
    href: '/destinations/amboseli-safari-tours',
  },
  {
    title: 'Tsavo Safari Tours',
    description: 'Red elephants and vast wilderness',
    href: '/destinations/tsavo-safari-tours',
  },
  {
    title: 'Nairobi City Tour',
    description: 'Wildlife and cultural attractions in Nairobi',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    title: 'Ol Pejeta Conservancy',
    description: 'Big Five wildlife and rhino conservation',
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    title: 'Lake Naivasha Safari',
    description: "Hippos, Crescent Island, and Hell's Gate",
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    title: 'Lake Nakuru Safari',
    description: 'Rhinos, flamingos, and Rift Valley scenery',
    href: '/destinations/lake-nakuru-safari-tours',
  },
]

export default function DianiBeachPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={BLOB_IMAGES.DIANI_BEACH}
          alt="White sand and turquoise Indian Ocean water at Diani Beach in Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.76)_0%,rgba(28,18,8,0.24)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            4 Days / 3 Nights
          </p>

          <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Diani Beach Escape: 4 Days on Kenya's Indian Ocean Coast
          </h1>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            White sand beaches, coral reefs, marine wildlife, Shimba Hills,
            Wasini Island, and coastal Kenyan culture.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Pricing
            </Link>

            <Link
              href="/book?tour=Diani+Beach+Escape"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Book This Escape
            </Link>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="bg-[#F2E8D5] px-4 py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl bg-white p-5">
              <Clock
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Duration
              </p>

              <p className="mt-2 font-inter text-[#1C1208]">
                4 Days / 3 Nights
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <MapPin
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Location
              </p>

              <p className="mt-2 font-inter text-[#1C1208]">
                Diani Beach, Kenya Coast
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <Car
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Transfer Options
              </p>

              <p className="mt-2 font-inter text-[#1C1208]">
                Flight or SGR + Road
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <Users
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Published Package
              </p>

              <p className="mt-2 font-montserrat text-lg font-bold text-[#2A4A35]">
                From USD 523
              </p>
            </article>
          </div>

          <div className="mt-5 rounded-xl border-l-4 border-[#D4870A] bg-white p-4 sm:p-5">
            <p className="font-inter text-sm leading-relaxed text-[#1C1208]">
              <strong className="font-montserrat text-[#2A4A35]">
                Pricing note:
              </strong>{' '}
              The published from USD 523 group package and USD 989 solo package
              use Diani Sea Lodge with SGR and road transfers. Accommodation
              upgrades or a domestic flight option can change the final quote.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Diani Beach sits south of Mombasa on Kenya's Indian Ocean
            coastline. Wide white sands, warm turquoise water, and coral reefs
            just offshore make it one of the country's best-known coastal
            destinations.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            This 4-day escape goes beyond beach leisure. The itinerary includes
            snorkeling at Kisite-Mpunguti Marine National Park, a Swahili
            seafood lunch on Wasini Island, wildlife at Shimba Hills National
            Reserve, and a visit to the Shimoni Slave Caves.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Diani can be booked as a standalone coastal trip or used as the
            beach finish after a longer Kenya wildlife safari.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Diani Beach Escape Highlights
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {experiences.map((experience) => {
              const Icon = experience.icon

              return (
                <article
                  key={experience.title}
                  className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      size={26}
                      className="mt-1 shrink-0 text-[#D4870A]"
                      aria-hidden="true"
                    />

                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                        {experience.title}
                      </h3>

                      <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Day-by-Day Itinerary
          </h2>

          <p className="mb-10 text-center font-montserrat text-sm font-semibold text-[#D4870A] md:mb-14">
            4 Days | 3 Nights
          </p>

          <div className="space-y-6">
            {itinerary.map((item) => (
              <article
                key={item.day}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="flex items-center gap-4 bg-[#2A4A35] px-5 py-4 sm:px-6 md:px-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4870A] font-montserrat text-lg font-bold text-white">
                    {item.day}
                  </span>

                  <h3 className="font-playfair text-xl font-bold leading-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <div className="space-y-5">
                    {item.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="font-montserrat text-sm font-bold text-[#2A4A35]">
                          {section.title}
                        </h4>

                        <p className="mt-2 font-inter text-sm leading-7 text-[#1C1208] sm:text-base">
                          {section.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[#D4870A]/20 pt-5">
                    <p className="font-inter text-sm text-[#1C1208]">
                      <strong>Meals:</strong> {item.meals}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Accommodation Options
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            The dedicated Diani itinerary offers three beachfront
            accommodation tiers according to budget and travel style.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {accommodation.map((stay) => (
              <article
                key={stay.tier}
                className="rounded-2xl border border-[#D4870A]/20 bg-white p-5 shadow-sm sm:p-6 md:p-8"
              >
                <p className="font-montserrat text-sm font-bold text-[#D4870A]">
                  {stay.tier}
                </p>

                <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                  {stay.name}
                </h3>

                <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {stay.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-[#D4870A] bg-white p-5 sm:p-6">
            <p className="font-inter text-sm leading-relaxed text-[#1C1208]">
              <strong className="font-montserrat text-[#2A4A35]">
                Package pricing:
              </strong>{' '}
              The Safari Packages page also lists a Diani Sea Lodge package as
              the published entry-price option. Confirm your preferred
              accommodation when requesting your quote.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            What You'll See and Experience
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                At Sea
              </h3>

              <ul className="mt-5 space-y-2">
                {seaHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-inter text-sm leading-relaxed text-[#1C1208]"
                  >
                    <span
                      className="shrink-0 font-bold text-[#D4870A]"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                In Shimba Hills
              </h3>

              <ul className="mt-5 space-y-2">
                {shimbaHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-inter text-sm leading-relaxed text-[#1C1208]"
                  >
                    <span
                      className="shrink-0 font-bold text-[#D4870A]"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                On the Coast
              </h3>

              <ul className="mt-5 space-y-2">
                {coastHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-inter text-sm leading-relaxed text-[#1C1208]"
                  >
                    <span
                      className="shrink-0 font-bold text-[#D4870A]"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Best Time to Visit Diani Beach
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {seasons.map((season) => (
              <article
                key={season.title}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8"
              >
                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  {season.title}
                </h3>

                <p className="mt-1 font-montserrat text-sm font-semibold text-[#D4870A]">
                  {season.subtitle}
                </p>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {season.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            How to Get to Diani Beach from Nairobi
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Danil Scenic Tours arranges the journey between Nairobi and Diani.
            Two main options are available.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Plane
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  Domestic Flight
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Fly from Nairobi to Ukunda Airstrip in Diani. The flight takes
                approximately one hour, followed by a short road transfer to
                your accommodation.
              </p>

              <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                This is the faster option and works particularly well when
                combining Diani with a longer wildlife safari.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Train
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  SGR Train + Road Transfer
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Travel by SGR from Nairobi to Mombasa, then continue south to
                Diani by road. The train journey takes approximately 4.5 hours,
                followed by roughly 1.5 hours by road.
              </p>

              <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                The published from USD 523 group package uses this SGR and road
                transfer arrangement.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What's Included
            </h2>

            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4870A]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What's Not Included
            </h2>

            <ul className="mt-6 space-y-3">
              {excluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base"
                >
                  <XCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4870A]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Why Danil */}
      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Why Book with Danil Scenic Tours
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyDanil.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-[#2A4A35] p-5 sm:p-6"
              >
                <h3 className="font-montserrat text-base font-bold text-[#D4870A] sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#FDF8F0]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packing */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            What to Pack for Diani Beach
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {[
              {
                title: 'Beach and Marine',
                items: beachPacking,
              },
              {
                title: 'Forest and Wildlife',
                items: forestPacking,
              },
              {
                title: 'Essentials',
                items: essentials,
              },
            ].map((section) => (
              <article
                key={section.title}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                  {section.title}
                </h3>

                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-inter text-sm leading-relaxed text-[#1C1208]"
                    >
                      <span
                        className="shrink-0 font-bold text-[#D4870A]"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-playfair text-3xl font-bold text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-[#2A4A35]"
              >
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-montserrat text-sm font-semibold text-white sm:px-6 sm:text-base">
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={20}
                    className="shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <div className="border-t border-white/10 px-5 py-4 sm:px-6">
                  <p className="font-inter text-sm leading-relaxed text-[#FDF8F0] sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Explore More Kenya Safari Destinations
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Diani Beach can be combined with Kenya's wildlife destinations or
            booked as a standalone coastal escape.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                Safari Destinations
              </h3>

              <div className="mt-5 space-y-3">
                {destinationLinks.map((destination) => (
                  <Link
                    key={destination.href}
                    href={destination.href}
                    className="block min-h-11 rounded-lg py-2 transition-colors hover:text-[#D4870A]"
                  >
                    <span className="font-montserrat text-sm font-semibold text-[#D4870A]">
                      {destination.title}
                    </span>

                    <span className="mt-1 block font-inter text-sm leading-relaxed text-[#1C1208]">
                      {destination.description}
                    </span>
                  </Link>
                ))}
              </div>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                Combine Safari and Coast
              </h3>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208]">
                Diani forms the coastal finish of our 10-day wildlife and beach
                itinerary, combining Maasai Mara, Lake Nakuru, Lake Naivasha,
                Amboseli, and Diani Beach.
              </p>

              <Link
                href="/safari-tours/10-day-kenya-wildlife-diani-beach"
                className="mt-5 flex min-h-12 items-center justify-between gap-4 rounded-lg border border-[#D4870A]/20 px-4 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:text-[#D4870A]"
              >
                10-Day Wildlife & Diani Beach Escape

                <ChevronDown
                  size={16}
                  className="-rotate-90 shrink-0"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/safari-packages"
                className="mt-3 flex min-h-12 items-center justify-between gap-4 rounded-lg border border-[#D4870A]/20 px-4 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:text-[#D4870A]"
              >
                View All Safari Packages

                <ChevronDown
                  size={16}
                  className="-rotate-90 shrink-0"
                  aria-hidden="true"
                />
              </Link>

              <div className="mt-6 rounded-xl bg-[#F2E8D5] p-5">
                <p className="font-montserrat text-sm font-bold text-[#2A4A35]">
                  Published Diani Package
                </p>

                <p className="mt-2 font-playfair text-3xl font-bold text-[#D4870A]">
                  From USD 523
                </p>

                <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208]">
                  Group rate based on the published Diani Sea Lodge and SGR
                  package. Solo traveller rate: USD 989.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={BLOB_IMAGES.DIANI_BEACH}
          alt="Diani Beach white sand and Indian Ocean coastline"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.74)_0%,rgba(28,18,8,0.28)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Book Your Diani Beach Escape
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Spend four days exploring Diani Beach, Kisite-Mpunguti Marine Park,
            Wasini Island, Shimba Hills, and the history of the Kenya coast.
          </p>

          <p className="mt-4 font-montserrat text-lg font-bold text-[#D4870A]">
            Published Group Package: From USD 523 per person
          </p>

          <p className="mt-2 font-inter text-sm text-white/80">
            Solo traveller package: USD 989
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/book?tour=Diani+Beach+Escape"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              Book This Escape
            </Link>

            <Link
              href="https://wa.me/254722919249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Chat on WhatsApp
            </Link>
          </div>

          <p className="mt-6 font-inter text-sm text-white/75">
            safari@danilscenictours.co.ke
          </p>
        </div>
      </section>

      <Footer />
      <ClientOnlyUI />
    </main>
  )
}
