import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import BookingTerms from '@/components/BookingTerms'
import { BLOB_IMAGES, LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Kenya Safari Guide: Types, Destinations & Planning Tips | Danil Scenic Tours',
  description:
    'Your complete Kenya safari guide. Explore safari types, top wildlife destinations, combination packages, and planning tips from Nairobi-based Danil Scenic Tours.',
  alternates: {
    canonical: '/safari-tours',
  },
}

const safariTypes = [
  {
    title: 'Game Drive Safaris',
    text:
      'Travel through national parks and conservancies in a 4x4 Land Cruiser with a pop-up roof, spotting wildlife at close range.',
  },
  {
    title: 'Cultural Expeditions',
    text:
      'Explore Kenyan traditions, Maasai communities, Swahili heritage, food, crafts, and cultural experiences.',
  },
  {
    title: 'Adventure Safaris',
    text:
      "Combine wildlife with hiking, walking safaris, cycling, and active experiences such as Hell's Gate and Crescent Island.",
  },
  {
    title: 'Beach Escapes',
    text:
      "Finish your safari on Kenya's Indian Ocean coast, including Diani Beach and longer coastal journeys to Watamu.",
  },
  {
    title: 'Custom Safaris',
    text:
      'Build an itinerary around your dates, group size, preferred accommodation, interests, and pace.',
  },
]

const destinations = [
  {
    name: 'Maasai Mara',
    heading: 'The Great Migration',
    bullets: [
      'Big Five wildlife',
      'Annual wildebeest migration from July to October',
      '4 Days / 3 Nights recommended stay',
      'Popular periods include July to October and January to February',
    ],
    image: BLOB_IMAGES.MAASAI_MARA,
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    name: 'Amboseli',
    heading: 'Elephants & Kilimanjaro',
    bullets: [
      'Large elephant herds',
      'Mount Kilimanjaro views',
      '4 Days / 3 Nights recommended stay',
      'Popular periods include June to October and January to February',
    ],
    image: LOCAL_IMAGES.AMBOSELI_ELEPHANTS,
    href: '/destinations/amboseli-safari-tours',
  },
  {
    name: 'Tsavo',
    heading: "Kenya's Vast Wilderness",
    bullets: [
      'Tsavo East and Tsavo West',
      'Red elephants and dramatic landscapes',
      '3 Days / 2 Nights recommended stay',
      'Popular periods include June to October and December to March',
    ],
    image: BLOB_IMAGES.TSAVO_EAST,
    href: '/destinations/tsavo-safari-tours',
  },
  {
    name: 'Nairobi National Park',
    heading: 'Safari in the City',
    bullets: [
      'National park game drive',
      'Giraffe Centre',
      'Kazuri Beads',
      '1-day safari experience',
    ],
    image: LOCAL_IMAGES.ZEBRAS_SAVANNA,
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    name: 'Ol Pejeta Conservancy',
    heading: 'Wildlife Conservation',
    bullets: [
      'Rhino conservation',
      'Big Five wildlife',
      '2 Days / 1 Night',
      'Central Kenya highlands',
    ],
    image: LOCAL_IMAGES.CHEETAH_RESTING,
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    name: 'Lake Naivasha',
    heading: "Hippos, Hell's Gate & Crescent Island",
    bullets: [
      'Boat safari on Lake Naivasha',
      'Walking safari on Crescent Island',
      "Hell's Gate National Park",
      '2 Days / 1 Night',
    ],
    image: LOCAL_IMAGES.CROWNED_CRANE,
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    name: 'Lake Nakuru',
    heading: 'Rhinos & Rift Valley Scenery',
    bullets: [
      'White and black rhinos',
      'Birdlife and seasonal flamingos',
      '3 Days / 2 Nights',
      'Great Rift Valley landscapes',
    ],
    image: BLOB_IMAGES.LAKE_NAKURU,
    href: '/destinations/lake-nakuru-safari-tours',
  },
  {
    name: 'Diani Beach',
    heading: 'Indian Ocean Coast',
    bullets: [
      'White sand beaches',
      'Marine experiences',
      '4 Days / 3 Nights',
      'Wildlife and beach combinations',
    ],
    image: BLOB_IMAGES.DIANI_BEACH,
    href: '/destinations/diani-beach-safari-tours',
  },
]

const combinations = [
  {
    name: '10-Day Classic Kenya Wildlife & Diani Beach Escape',
    route:
      'Maasai Mara → Lake Nakuru → Lake Naivasha → Amboseli → Diani Beach',
    text:
      'Ten days combining major wildlife destinations with two nights on the Indian Ocean coast at Diani Beach.',
    href: '/safari-tours/10-day-kenya-wildlife-diani-beach',
  },
  {
    name: '5-Day Safari to Amboseli, Lake Nakuru & Masai Mara',
    route: 'Amboseli → Lake Nakuru → Masai Mara',
    text:
      'A five-day route through three of Kenya’s wildlife destinations, moving from Amboseli to Lake Nakuru and the Masai Mara.',
    href: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
  },
  {
    name: '7 Days / 6 Nights: Masai Mara, Lake Nakuru & Amboseli',
    route: 'Masai Mara → Lake Nakuru → Amboseli',
    text:
      'Seven days across the Masai Mara, Lake Nakuru, and Amboseli with full itinerary, accommodation, meals, guide, and safari transport.',
    href: '/safari-tours/7-days-6-nights-maasai-mara-lake-nakuru-amboseli',
  },
  {
    name: '13-Day Kenya Safari & Coastal Escape',
    route: 'Lake Naivasha → Masai Mara → Diani Beach → Watamu',
    text:
      'A 13-day safari and coastal journey combining Lake Naivasha, the Masai Mara, Diani Beach, Wasini Island, Mombasa, Watamu, and two domestic flights.',
    href: '/safari-tours/13-day-kenya-safari-coastal-escape',
  },
]

const included = [
  'Private transport in a 4x4 Land Cruiser with pop-up roof',
  'Professional English-speaking driver-guide throughout',
  'Full board accommodation',
  'All park entry fees and conservation fees',
  'Airport or hotel pickup and dropoff in Nairobi',
]

const excluded = [
  'International flights to and from Kenya',
  'Visa fees and travel insurance',
  'Tips and gratuities',
  'Personal expenses and souvenirs',
  'Activities not stated in the itinerary',
]

export default function SafariToursPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      <section className="relative flex min-h-[68svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[74svh] sm:pt-32">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Kenya safari landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[rgba(28,18,8,0.72)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Kenya Safari Guide
          </p>

          <h1 className="mt-4 font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            Kenya Safari Guide: Everything You Need to Plan Your Trip
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Explore safari types, wildlife destinations, combination
            itineraries, and planning information for your Kenya safari.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
          <p>
            Kenya is one of the world&apos;s great safari destinations. The
            landscapes shift from open savannah to forest, volcanic hills,
            freshwater lakes, and the Indian Ocean coastline.
          </p>

          <p>
            This guide covers the types of safaris available, the destinations
            we operate, how to combine them, and how to choose an itinerary
            that fits your available time and budget.
          </p>

          <p>
            Safaris are operated by Danil Scenic Tours with professional guides
            and 4x4 safari vehicles across Kenya.
          </p>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A]">
              Safari Styles
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
              Types of Safari in Kenya
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {safariTypes.map((type) => (
              <article
                key={type.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  {type.title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-[#1C1208]">
                  {type.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A]">
              Where We Go
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
              Kenya Safari Destinations We Cover
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <article
                key={destination.href}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <Link href={destination.href} className="flex h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                      {destination.heading}
                    </p>

                    <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                      {destination.name}
                    </h3>

                    <ul className="mt-4 flex-1 space-y-2">
                      {destination.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="font-inter text-sm leading-6 text-[#1C1208]"
                        >
                          • {bullet}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-5 inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]">
                      Read Full Itinerary
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A]">
              Combination Safaris
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
              Multi-Destination Kenya Safari Itineraries
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {combinations.map((safari) => (
              <article
                key={safari.href}
                className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
              >
                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  {safari.name}
                </h3>

                <p className="mt-4 font-montserrat text-sm font-semibold text-[#D4870A]">
                  {safari.route}
                </p>

                <p className="mt-4 font-inter text-sm leading-7 text-[#1C1208]">
                  {safari.text}
                </p>

                <Link
                  href={safari.href}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
                >
                  View Full Itinerary
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            How to Choose Your Kenya Safari
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                How Many Days Do You Have?
              </h3>

              <ul className="mt-4 space-y-2 font-inter text-sm leading-7 text-[#1C1208]">
                <li>1 day: Nairobi City Tour</li>
                <li>2 days: Ol Pejeta or Lake Naivasha</li>
                <li>
                  3-4 days: Maasai Mara, Amboseli, Tsavo, or Lake Nakuru
                </li>
                <li>5-7 days: Multi-destination safari combinations</li>
                <li>10 days: Wildlife safari with Diani Beach</li>
                <li>13 days: Safari and coastal escape to Watamu</li>
              </ul>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                When Are You Travelling?
              </h3>

              <ul className="mt-4 space-y-2 font-inter text-sm leading-7 text-[#1C1208]">
                <li>June to October: Dry season and strong wildlife viewing</li>
                <li>
                  July to October: Great Migration period in the Maasai Mara
                </li>
                <li>January to February: Short dry season</li>
                <li>
                  November to May: Green season with lush scenery and birdlife
                </li>
              </ul>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Group or Private?
              </h3>

              <p className="mt-4 font-inter text-sm leading-7 text-[#1C1208]">
                Group safaris offer lower per-person costs and a shared travel
                experience. Private safaris offer greater flexibility around
                dates, vehicle use, accommodation, and pace.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Accommodation Style
              </h3>

              <p className="mt-4 font-inter text-sm leading-7 text-[#1C1208]">
                Accommodation options range from comfortable tented camps to
                established safari lodges and premium properties depending on
                the itinerary and your preferences.
              </p>
            </article>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208]"
            >
              Plan a Custom Safari
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What&apos;s Included in Every Danil Scenic Safari
            </h2>

            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-inter text-sm leading-relaxed text-[#1C1208]"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4870A]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What&apos;s Not Included
            </h2>

            <ul className="mt-6 space-y-3">
              {excluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-inter text-sm leading-relaxed text-[#1C1208]"
                >
                  <XCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4870A]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <BookingTerms />

      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-3">
            {[
              {
                question: 'Can I customise an itinerary?',
                answer:
                  'Yes. Packages can be adjusted around duration, accommodation, destinations, activities, and group preferences.',
              },
              {
                question: 'How do I book and what deposit is required?',
                answer:
                  'Booking is done through Email, WhatsApp, or the booking page. A 30% deposit confirms the booking, and the remaining balance is due no later than 45 days before the safari start date.',
              },
              {
                question: 'What payment methods are available?',
                answer:
                  'Payment instructions for bank transfer, mobile money, or card are provided after booking confirmation.',
              },
              {
                question: 'How much does a Kenya safari cost?',
                answer:
                  'Pricing varies by destination, duration, group size, and itinerary. Full published pricing is available on the Kenya Safari Packages page.',
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="overflow-hidden rounded-xl bg-[#2A4A35]"
              >
                <summary className="cursor-pointer px-5 py-4 font-montserrat text-sm font-semibold text-white sm:px-6 sm:text-base">
                  {faq.question}
                </summary>

                <p className="border-t border-white/10 px-5 py-4 font-inter text-sm leading-relaxed text-white/85 sm:px-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 text-center sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Ready to Plan Your Kenya Safari?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-inter text-base leading-7 text-[#1C1208]">
            View safari prices and packages or contact us to plan your
            itinerary.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2A4A35] px-6 py-3 font-montserrat text-sm font-semibold text-white"
            >
              View Safari Packages
            </Link>

            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208]"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ClientOnlyUI />
    </main>
  )
}
