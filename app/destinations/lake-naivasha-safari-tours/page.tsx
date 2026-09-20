import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Binoculars,
  Bike,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  Ship,
  Users,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    "Lake Naivasha Safari from Nairobi | 2-Day Hell's Gate & Crescent Island Tour | Danil Scenic Tours",
  description:
    "Explore Lake Naivasha on a 2-day safari from Nairobi with a boat ride, Crescent Island walking safari, Hell's Gate National Park, full-board accommodation, and 4x4 transport.",
  alternates: {
    canonical: '/destinations/lake-naivasha-safari-tours',
  },
  openGraph: {
    title:
      "Lake Naivasha Safari from Nairobi | 2-Day Hell's Gate & Crescent Island Tour",
    description:
      "A 2-day Lake Naivasha safari with a boat ride, Crescent Island walking safari, Hell's Gate National Park, and Lake Naivasha Sopa Resort.",
    url: '/destinations/lake-naivasha-safari-tours',
    type: 'website',
    images: [
      {
        url: LOCAL_IMAGES.CROWNED_CRANE,
        alt: 'Crowned crane and birdlife at Lake Naivasha in Kenya',
      },
    ],
  },
}

const itinerary = [
  {
    day: '1',
    title: "Rift Valley, Crescent Island and Hell's Gate",
    sections: [
      {
        title: '7:00 AM - Nairobi Departure',
        description:
          'Your safari begins with an early morning departure from Nairobi in a 4x4 safari vehicle. Travel along the Nairobi-Naivasha Highway with a stop at the Great Rift Valley viewpoint for panoramic photographs.',
      },
      {
        title: 'Arrival at Lake Naivasha',
        description:
          'Continue to Lake Naivasha Sopa Resort for check-in and preparation for the first activities of the safari.',
      },
      {
        title: 'Lake Naivasha Boat Safari',
        description:
          'Take a guided boat ride across Lake Naivasha, where hippos and abundant birdlife can be observed around the freshwater lake.',
      },
      {
        title: 'Crescent Island Walking Safari',
        description:
          'Continue to Crescent Island Sanctuary for a guided walking safari among giraffes, zebras, impalas, antelopes, and other wildlife in an open natural setting.',
      },
      {
        title: 'Lunch at the Resort',
        description:
          'Return to Lake Naivasha Sopa Resort for lunch before the afternoon excursion.',
      },
      {
        title: "Hell's Gate National Park",
        description:
          "Travel to Hell's Gate National Park, known for its towering cliffs, gorges, open landscapes, and geothermal features. Explore the park by vehicle, with optional cycling or hiking available at additional cost.",
      },
      {
        title: 'Dinner and Overnight',
        description:
          'Return to Lake Naivasha Sopa Resort for dinner and your overnight stay.',
      },
    ],
    accommodation: 'Lake Naivasha Sopa Resort',
    meals: 'Lunch & Dinner',
  },
  {
    day: '2',
    title: 'Lake Naivasha to Nairobi',
    sections: [
      {
        title: '8:00 AM - Breakfast and Checkout',
        description:
          'Enjoy breakfast at Lake Naivasha Sopa Resort before checking out.',
      },
      {
        title: 'Return to Nairobi',
        description:
          'Depart Lake Naivasha and travel back to Nairobi, where you will be dropped off at your agreed hotel, residence, or other destination.',
      },
    ],
    accommodation: null,
    meals: 'Breakfast',
  },
]

const experiences = [
  {
    icon: Ship,
    title: 'Lake Naivasha Boat Safari',
    description:
      'Cruise across the freshwater lake while looking for hippos and the diverse birdlife found around Lake Naivasha.',
  },
  {
    icon: Users,
    title: 'Crescent Island Walking Safari',
    description:
      'Explore Crescent Island on foot with opportunities to see giraffes, zebras, impalas, and other wildlife at ground level.',
  },
  {
    icon: Bike,
    title: "Hell's Gate National Park",
    description:
      "Explore Hell's Gate's dramatic cliffs, gorges, open landscapes, and geothermal scenery. Cycling or hiking can be added at extra cost.",
  },
  {
    icon: Binoculars,
    title: 'Birdwatching',
    description:
      'Lake Naivasha supports more than 400 recorded bird species, making the lake particularly rewarding for birdwatchers and photographers.',
  },
]

const included = [
  'Full-board accommodation at Lake Naivasha Sopa Resort',
  'Private transport in a 4x4 safari vehicle with pop-up roof',
  'Professional safari guide',
  'Lake Naivasha boat ride',
  'Crescent Island walking safari',
  "Hell's Gate National Park entry",
]

const excluded = [
  "Bike hire at Hell's Gate National Park",
  'Optional activities not listed in the itinerary',
  'Tips and gratuities',
  'Personal expenses',
  'Travel insurance',
  'International flights',
]

const seasons = [
  {
    title: 'June to October',
    subtitle: 'Dry Season',
    description:
      'Generally drier conditions provide good opportunities for boat rides, walking activities, wildlife viewing, and photography.',
  },
  {
    title: 'January to February',
    subtitle: 'Short Dry Period',
    description:
      'Warm and generally dry weather makes this another strong period for Lake Naivasha activities and wildlife viewing.',
  },
  {
    title: 'November to December',
    subtitle: 'Short Rains',
    description:
      'The landscape becomes greener and migratory bird activity can add variety to the lake experience. Showers are often more likely later in the day.',
  },
  {
    title: 'March to May',
    subtitle: 'Long Rains',
    description:
      'The wetter season brings lush scenery and changing conditions for outdoor activities. Tour timing may be adjusted according to weather and road conditions.',
  },
]

const whyDanil = [
  {
    title: 'Three Experiences in One Safari',
    description:
      "The itinerary combines a boat safari, a walking safari on Crescent Island, and a visit to Hell's Gate National Park.",
  },
  {
    title: 'Full Safari Logistics',
    description:
      'Transport, accommodation, guiding, the boat ride, Crescent Island walking safari, and park entry are organised as one package.',
  },
  {
    title: 'Nairobi Departure',
    description:
      'The safari begins and ends in Nairobi, making Lake Naivasha a practical short safari for travelers with limited time.',
  },
  {
    title: 'Full-Board Accommodation',
    description:
      'Your overnight stay at Lake Naivasha Sopa Resort includes meals according to the itinerary.',
  },
]

const clothing = [
  'Lightweight, breathable clothing',
  'Warm layer for the early morning',
  'Comfortable walking shoes',
  'Hat and sunglasses',
  'Light rain jacket',
]

const protection = [
  'High-SPF sunscreen',
  'Insect repellent',
  'Personal medication',
  'Reusable water bottle',
]

const equipment = [
  'Camera or smartphone',
  'Binoculars for wildlife and birdwatching',
  'Extra batteries or portable charger',
  'Memory cards or storage',
]

const faqs = [
  {
    question: 'How much does the Lake Naivasha safari cost?',
    answer:
      'The group price starts from USD 948 per person. Contact us with your travel dates and group size for confirmed availability and the final quote.',
  },
  {
    question: 'How long is the Lake Naivasha safari?',
    answer:
      'The package runs for 2 days and 1 night, with accommodation at Lake Naivasha Sopa Resort.',
  },
  {
    question: 'What activities are included?',
    answer:
      "The package includes a Lake Naivasha boat ride, a guided walking safari at Crescent Island, and entry to Hell's Gate National Park.",
  },
  {
    question: 'Is bike hire at Hell\'s Gate included?',
    answer:
      "No. Bike hire is optional and is not included in the package price. You can discuss cycling or hiking options when booking.",
  },
  {
    question: 'What wildlife can I see at Lake Naivasha?',
    answer:
      'The lake is known for hippos and extensive birdlife. Crescent Island offers opportunities to see giraffes, zebras, impalas, and other wildlife on foot.',
  },
  {
    question: 'Can I swim in Lake Naivasha?',
    answer:
      'Swimming in the open lake is not part of this safari. Wildlife viewing is conducted by boat and from designated land areas.',
  },
  {
    question: 'Is the Crescent Island walking safari difficult?',
    answer:
      'The activity is a guided walking experience over natural terrain. Let us know about any mobility requirements before booking so the itinerary can be discussed appropriately.',
  },
  {
    question: 'Is this safari suitable for families?',
    answer:
      'Yes. The combination of a boat ride, walking safari, and park visit can work well for families. Share the ages of younger travelers when booking so the itinerary can be planned appropriately.',
  },
]

const destinationLinks = [
  {
    title: 'Nairobi City Tour',
    description: 'One-day wildlife and cultural experience',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    title: 'Ol Pejeta Conservancy',
    description: 'Big Five and rhino conservation',
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    title: 'Maasai Mara Safari Tours',
    description: 'Great Migration and Big Five experiences',
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
    title: 'Lake Nakuru Safari',
    description: 'Rhinos, birdlife, and Rift Valley scenery',
    href: '/destinations/lake-nakuru-safari-tours',
  },
]

export default function LakeNaivashaPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={LOCAL_IMAGES.CROWNED_CRANE}
          alt="Crowned crane and birdlife at Lake Naivasha in Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.80)_0%,rgba(28,18,8,0.30)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            2 Days / 1 Night
          </p>

          <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Lake Naivasha Safari
          </h1>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Boat safari, Crescent Island walking safari, and Hell's Gate
            National Park from Nairobi.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Pricing
            </Link>

            <Link
              href="/book?tour=Lake+Naivasha+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Safari at a Glance */}
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
                2 Days / 1 Night
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <MapPin
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Accommodation
              </p>

              <p className="mt-2 font-inter text-[#1C1208]">
                Lake Naivasha Sopa Resort
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <Car
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Transport
              </p>

              <p className="mt-2 font-inter text-[#1C1208]">
                Private 4x4 Safari Vehicle
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <Users
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Group Price
              </p>

              <p className="mt-2 font-montserrat text-lg font-bold text-[#2A4A35]">
                From USD 948
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Lake Naivasha is a freshwater lake in Kenya's Great Rift Valley
            known for hippos, birdlife, open landscapes, and easy access to
            several different outdoor experiences.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            This 2-day, 1-night safari combines three distinct experiences: a
            boat safari on Lake Naivasha, a walking safari on Crescent Island,
            and an excursion to Hell's Gate National Park.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Your overnight stay is at Lake Naivasha Sopa Resort, with
            full-board accommodation included as part of the package.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Lake Naivasha Safari Highlights
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
          <h2 className="mb-10 text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:mb-14 md:text-5xl">
            Day-by-Day Itinerary
          </h2>

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

                  <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#D4870A]/20 pt-5 sm:grid-cols-2">
                    {item.accommodation && (
                      <p className="font-inter text-sm text-[#1C1208]">
                        <strong>Accommodation:</strong> {item.accommodation}
                      </p>
                    )}

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
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Lake Naivasha Sopa Resort
          </h2>

          <div className="mt-8 rounded-2xl border-l-4 border-[#D4870A] bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <p className="text-center font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
              Your 2-day, 1-night package includes a stay at Lake Naivasha Sopa
              Resort with full-board accommodation. Meals are provided
              according to the safari itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
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

      {/* Best Time */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Best Time to Visit Lake Naivasha
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

      {/* Why Danil */}
      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Why Choose Danil Scenic Tours
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

      {/* What to Pack */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            What to Pack
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: 'Clothing and Footwear',
                items: clothing,
              },
              {
                title: 'Sun and Health Protection',
                items: protection,
              },
              {
                title: 'Photography and Equipment',
                items: equipment,
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
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Explore More Kenya Safari Experiences
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Continue exploring individual destinations or compare complete
            safari packages.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                Individual Safari Destinations
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
                Safari Planning
              </h3>

              <div className="mt-5 space-y-3">
                <Link
                  href="/safari-tours"
                  className="flex min-h-12 items-center justify-between rounded-lg border border-[#D4870A]/20 px-4 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:text-[#D4870A]"
                >
                  Kenya Safari Tours
                  <ChevronDown
                    size={16}
                    className="-rotate-90"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/safari-packages"
                  className="flex min-h-12 items-center justify-between rounded-lg border border-[#D4870A]/20 px-4 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:text-[#D4870A]"
                >
                  Kenya Safari Packages
                  <ChevronDown
                    size={16}
                    className="-rotate-90"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="mt-6 rounded-xl bg-[#F2E8D5] p-5">
                <p className="font-montserrat text-sm font-bold text-[#2A4A35]">
                  Lake Naivasha Group Price
                </p>

                <p className="mt-2 font-playfair text-3xl font-bold text-[#D4870A]">
                  From USD 948
                </p>

                <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208]">
                  Contact us with your travel dates and group size for
                  confirmed availability and pricing.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={LOCAL_IMAGES.CROWNED_CRANE}
          alt="Birdlife at Lake Naivasha in Kenya"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.78)_0%,rgba(28,18,8,0.32)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Plan Your Lake Naivasha Safari
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Experience Lake Naivasha by boat, walk among wildlife on Crescent
            Island, and explore the landscapes of Hell's Gate on this 2-day
            safari from Nairobi.
          </p>

          <p className="mt-4 font-montserrat text-lg font-bold text-[#D4870A]">
            Group Price: From USD 948 per person
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/book?tour=Lake+Naivasha+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              Book This Safari
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
        </div>
      </section>

      <Footer />
      <ClientOnlyUI />
    </main>
  )
}
