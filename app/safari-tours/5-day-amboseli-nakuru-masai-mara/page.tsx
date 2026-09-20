import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  Utensils,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    '5-Day Kenya Safari: Amboseli, Lake Nakuru & Masai Mara Itinerary | Danil Scenic Tours',
  description:
    "Explore three of Kenya's iconic parks on a 5-day safari from Nairobi: Amboseli, Lake Nakuru, and Masai Mara. Professional guide, full board, 4x4 Land Cruiser throughout.",
  alternates: {
    canonical: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
  },
  openGraph: {
    title:
      '5-Day Kenya Safari: Amboseli, Lake Nakuru & Masai Mara Itinerary | Danil Scenic Tours',
    description:
      "Explore three of Kenya's iconic parks on a 5-day safari from Nairobi: Amboseli, Lake Nakuru, and Masai Mara. Professional guide, full board, 4x4 Land Cruiser throughout.",
    url: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
    type: 'website',
    images: [
      {
        url: LOCAL_IMAGES.AMBOSELI_ELEPHANTS,
        alt: 'Amboseli elephants on a five-day Kenya safari',
      },
    ],
  },
}

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrival in Nairobi & Transfer to Amboseli National Park',
    description: [
      "Your safari begins with arrival in Nairobi, where your driver-guide will meet you at Jomo Kenyatta International Airport. From there, embark on a scenic four-hour drive to Amboseli National Park, one of Kenya's most celebrated wildlife destinations, set against the dramatic backdrop of Mount Kilimanjaro.",
      'Arrive at AA Lodge Amboseli, check in, and have lunch before taking a short rest. In the evening, head out for your first game drive in Amboseli, renowned for its majestic elephant herds and breathtaking Kilimanjaro views. Return to the lodge for dinner and overnight.',
    ],
    accommodation: 'AA Lodges, Amboseli',
    meals: 'Lunch & Dinner. Breakfast is not included on arrival day.',
  },
  {
    day: 'Day 2',
    title: 'Amboseli National Park to Lake Nakuru National Park',
    description: [
      'After an early morning game drive and breakfast at AA Lodge, check out and depart for Lake Nakuru National Park, approximately six hours north. A lunch stop is made en route.',
      'Arrive in the afternoon and check in at Lake Nakuru Sopa Lodge. After settling in, head out for an evening game drive. Lake Nakuru is famous for its vibrant birdlife, flamingos, white and black rhinos, lions, and leopards. Return to the lodge for dinner and overnight.',
    ],
    accommodation: 'Lake Nakuru Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 3',
    title: 'Lake Nakuru National Park to Masai Mara National Reserve',
    description: [
      'After an early breakfast, check out of Sopa Lodge and set off for the world-renowned Masai Mara National Reserve. Arrive at Loyk Mara Camp in the afternoon, check in, and unwind before heading out on an evening game drive.',
      'The Masai Mara is famous for its extraordinary wildlife density and, between July and October, the spectacular Great Wildebeest Migration. Evening game drives in the Mara are particularly rewarding as predators become active at dusk.',
    ],
    accommodation: 'Loyk Mara Camp',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 4',
    title: 'Full Day in the Masai Mara National Reserve',
    description: [
      'A full day of exploration in the Mara. Start with an early morning game drive, the best window for big cat activity, followed by breakfast back at camp.',
      'The mid-morning offers an optional visit to a local Maasai village for a cultural experience, or a guided nature walk. After lunch at camp, head out for another afternoon game drive before returning for dinner and your final safari overnight.',
    ],
    accommodation: 'Loyk Mara Camp',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 5',
    title: 'Masai Mara to Nairobi & Departure',
    description: [
      'Enjoy your final breakfast at Loyk Mara Camp before checking out and beginning the drive back to Nairobi. Arrive in the afternoon with time for a lunch stop along the route.',
      "Your driver-guide will transfer you to Jomo Kenyatta International Airport for your departure flight, marking the end of an unforgettable five-day journey through three of Kenya's finest parks.",
    ],
    accommodation: null,
    meals: 'Breakfast & Lunch. Dinner is not included on departure day.',
  },
]

const accommodation = [
  {
    destination: 'Amboseli',
    nights: 'Night 1',
    lodge: 'AA Lodges, Amboseli',
  },
  {
    destination: 'Lake Nakuru',
    nights: 'Night 2',
    lodge: 'Lake Nakuru Sopa Lodge',
  },
  {
    destination: 'Masai Mara',
    nights: 'Nights 3-4',
    lodge: 'Loyk Mara Camp',
  },
]

const included = [
  'Airport pickup on arrival and dropoff at Jomo Kenyatta International Airport on departure',
  'Accommodation as specified in the itinerary',
  'All meals as indicated per day',
  'Drinking water on all days',
  'All activities unless labelled as optional',
  'Professional, English-speaking driver-guide throughout',
  'Transport in a 4x4 safari vehicle with pop-up roof',
  'All national park and reserve entrance fees',
  'All applicable taxes and VAT',
]

const excluded = [
  'International flights',
  'Additional accommodation before or after the safari',
  'Tips and gratuities for driver-guide and lodge staff',
  'Personal items, souvenirs, travel insurance, and visa fees',
  'Government-imposed increases in taxes or park fees after booking',
]

const optionalActivities = [
  {
    title: 'Hot Air Balloon Safari',
    description: 'Hot air balloon safari over the Masai Mara.',
    price: 'USD 450 per person',
  },
  {
    title: 'Maasai Village Cultural Visit',
    description:
      'Visit a local Maasai community during your stay in the Masai Mara.',
    price: 'Cost on request',
  },
]

const faqs = [
  {
    question: 'Why is breakfast not included on Day 1?',
    answer:
      'Day 1 starts from your arrival at the airport and travels directly to Amboseli. The tour begins with lunch on arrival. Breakfast can be arranged before the tour at an additional cost if you arrive the night before.',
  },
  {
    question: 'Is the Maasai village visit included?',
    answer:
      'No. It is an optional activity available at additional cost. Your guide can arrange it during your time in the Masai Mara if you are interested.',
  },
  {
    question: 'What is the best time to do this safari?',
    answer:
      'This route runs year-round. July to October is peak season for the Great Migration in the Mara and excellent dry conditions across all three parks. January to February is also excellent.',
  },
  {
    question: 'Can the itinerary be customised?',
    answer:
      'Yes. Duration, accommodation tier, and the route can be adjusted. Contact us to discuss what works best for your group.',
  },
  {
    question: 'How much does this safari cost?',
    answer:
      'Pricing depends on group size and travel dates. All pricing is available on our Kenya Safari Packages page.',
  },
]

const destinationLinks = [
  {
    label: 'Amboseli Safari Tours',
    href: '/destinations/amboseli-safari-tours',
  },
  {
    label: 'Lake Nakuru Safari Tours',
    href: '/destinations/lake-nakuru-safari-tours',
  },
  {
    label: 'Maasai Mara Safari Tours',
    href: '/destinations/maasai-mara-safari-tours',
  },
]

export default function FiveDaySafariPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={LOCAL_IMAGES.AMBOSELI_ELEPHANTS}
          alt="Elephants in Amboseli National Park on a Kenya safari"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.84)_0%,rgba(28,18,8,0.38)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            5-Day Kenya Safari
          </p>

          <h1 className="mx-auto max-w-5xl font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            5-Day Safari Adventure to Amboseli, Lake Nakuru & Masai Mara
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Three of Kenya's most iconic national parks in five days and one
            expertly guided safari from Nairobi.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Pricing
            </Link>

            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-5 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            <p>
              This itinerary moves from the elephant herds and Kilimanjaro
              views of Amboseli, through the rhino sanctuary of Lake Nakuru,
              and finishes with the big cat encounters and legendary
              landscapes of the Masai Mara.
            </p>

            <p>
              It is a well-paced safari that covers serious ground without
              feeling rushed. Each park gets proper time for game drives, and
              the route builds naturally through Kenya's wildlife areas.
            </p>

            <p>
              Airport pickup and dropoff are included. All logistics are
              handled by Danil Scenic Tours from the moment you land.
            </p>
          </div>
        </div>
      </section>

      {/* Safari at a Glance */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-playfair text-3xl text-[#2A4A35] sm:text-4xl md:text-5xl">
            Safari at a Glance
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-5">
              <Clock
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Duration
              </p>

              <p className="mt-2 font-inter text-[#1C1208]">
                5 Days
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <MapPin
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Route
              </p>

              <p className="mt-2 font-inter leading-relaxed text-[#1C1208]">
                Amboseli National Park → Lake Nakuru National Park → Masai Mara
                National Reserve
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <BedDouble
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Accommodation
              </p>

              <p className="mt-2 font-inter leading-relaxed text-[#1C1208]">
                AA Lodges, Lake Nakuru Sopa Lodge, and Loyk Mara Camp
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <Utensils
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Meals
              </p>

              <p className="mt-2 font-inter leading-relaxed text-[#1C1208]">
                Lunch & Dinner on Day 1, full board Days 2-4, Breakfast & Lunch
                on Day 5
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <MapPin
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Transport
              </p>

              <p className="mt-2 font-inter leading-relaxed text-[#1C1208]">
                4x4 safari vehicle with pop-up roof throughout
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <MapPin
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Departure & Transfers
              </p>

              <p className="mt-2 font-inter leading-relaxed text-[#1C1208]">
                Jomo Kenyatta International Airport, Nairobi. Airport pickup
                and departure dropoff are included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day by Day */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center font-playfair text-3xl text-[#2A4A35] sm:text-4xl md:mb-14 md:text-5xl">
            Day-by-Day Itinerary
          </h2>

          <div className="space-y-5">
            {itinerary.map((item) => (
              <article
                key={item.day}
                className="rounded-2xl border border-[#D4870A]/20 bg-white p-5 shadow-sm sm:p-6 md:p-8"
              >
                <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-[#D4870A]">
                  {item.day}
                </p>

                <h3 className="mt-2 font-playfair text-2xl leading-tight text-[#2A4A35] sm:text-3xl">
                  {item.title}
                </h3>

                <div className="mt-5 space-y-4">
                  {item.description.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-inter text-sm leading-7 text-[#1C1208] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#D4870A]/20 pt-5 sm:grid-cols-2">
                  {item.accommodation && (
                    <div className="flex items-start gap-2">
                      <BedDouble
                        size={18}
                        className="mt-0.5 shrink-0 text-[#D4870A]"
                        aria-hidden="true"
                      />

                      <p className="font-inter text-sm text-[#1C1208]">
                        <strong>Accommodation:</strong> {item.accommodation}
                      </p>
                    </div>
                  )}

                  <div className="flex items-start gap-2">
                    <Utensils
                      size={18}
                      className="mt-0.5 shrink-0 text-[#D4870A]"
                      aria-hidden="true"
                    />

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
          <h2 className="mb-10 text-center font-playfair text-3xl text-[#2A4A35] sm:text-4xl md:text-5xl">
            Accommodation Summary
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {accommodation.map((stay) => (
              <article
                key={stay.destination}
                className="rounded-2xl bg-white p-5 text-center shadow-sm sm:p-6"
              >
                <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                  {stay.nights}
                </p>

                <h3 className="mt-2 font-playfair text-xl text-[#2A4A35] sm:text-2xl">
                  {stay.destination}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {stay.lodge}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Included / Not Included */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="font-playfair text-3xl text-[#2A4A35]">
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
            <h2 className="font-playfair text-3xl text-[#2A4A35]">
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

      {/* Optional Activities */}
      <section className="bg-[#2A4A35] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Optional Activities
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {optionalActivities.map((activity) => (
              <article
                key={activity.title}
                className="rounded-2xl bg-[#FDF8F0] p-5 sm:p-6"
              >
                <Sparkles
                  size={24}
                  className="mb-4 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl text-[#2A4A35]">
                  {activity.title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                  {activity.description}
                </p>

                <p className="mt-4 font-montserrat text-sm font-semibold text-[#D4870A]">
                  {activity.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-playfair text-3xl text-[#2A4A35] sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#D4870A]/20 bg-white px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-montserrat text-sm font-semibold text-[#2A4A35] sm:text-base">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}

                    <span
                      className="text-xl text-[#D4870A] transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl text-[#2A4A35] sm:text-4xl md:text-5xl">
            Explore Each Destination in Detail
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208]">
            Read the full itinerary, wildlife guide, and FAQs for each park
            included in this safari.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {destinationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-12 items-center justify-between rounded-xl bg-white px-5 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:text-[#D4870A]"
              >
                {link.label}

                <ArrowRight
                  size={16}
                  className="shrink-0"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          <div className="mt-10 border-t border-[#D4870A]/20 pt-8">
            <h3 className="text-center font-playfair text-2xl text-[#2A4A35]">
              Other Combination Safari Itineraries
            </h3>

            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/safari-tours/10-day-kenya-wildlife-diani-beach"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#D4870A] px-5 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:bg-[#D4870A] hover:text-[#1C1208]"
              >
                10-Day Wildlife & Diani Safari
                <ArrowRight size={15} aria-hidden="true" />
              </Link>

              <Link
                href="/safari-tours/7-day-budget-kenya-safari"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#D4870A] px-5 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:bg-[#D4870A] hover:text-[#1C1208]"
              >
                7-Day Budget Safari
                <ArrowRight size={15} aria-hidden="true" />
              </Link>

              <Link
                href="/safari-tours"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#D4870A] px-5 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:bg-[#D4870A] hover:text-[#1C1208]"
              >
                Kenya Safari Guide
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={LOCAL_IMAGES.ELEPHANT_KILIMANJARO}
          alt="Kenya safari elephants near Mount Kilimanjaro"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[rgba(28,18,8,0.74)]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl text-white sm:text-4xl md:text-5xl">
            Interested in This Safari?
          </h2>

          <p className="mt-5 font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Available for private and group bookings. Contact us to check
            availability, confirm your dates, and get a full quote.
          </p>

          <p className="mt-3 font-inter text-sm leading-relaxed text-white/80 sm:text-base">
            Send us your travel dates and group size. We will come back to you
            with the best options within 24 hours.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Pricing
            </Link>

            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Book Online
            </Link>

            <Link
              href="https://wa.me/254722919249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-[#25D366] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-[#25D366] sm:text-base"
            >
              WhatsApp Us
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
