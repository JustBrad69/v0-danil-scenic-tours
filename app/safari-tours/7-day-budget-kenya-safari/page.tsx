import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  Clock,
  MapPin,
  Utensils,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { BLOB_IMAGES, LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    '7-Day Kenya Safari: Maasai Mara, Lake Nakuru & Amboseli Itinerary | Danil Scenic Tours',
  description:
    'Explore Maasai Mara, Lake Nakuru, and Amboseli on a 7-day, 6-night Kenya safari from Nairobi. Professional guide, full board, 4x4 safari vehicle throughout.',
  alternates: {
    canonical: '/safari-tours/7-day-budget-kenya-safari',
  },
  openGraph: {
    title:
      '7-Day Kenya Safari: Maasai Mara, Lake Nakuru & Amboseli Itinerary | Danil Scenic Tours',
    description:
      'Explore Maasai Mara, Lake Nakuru, and Amboseli on a 7-day, 6-night Kenya safari from Nairobi. Professional guide, full board, 4x4 safari vehicle throughout.',
    url: '/safari-tours/7-day-budget-kenya-safari',
    type: 'website',
    images: [
      {
        url: BLOB_IMAGES.MAASAI_MARA,
        alt: 'Seven-day Kenya safari through Maasai Mara, Lake Nakuru and Amboseli',
      },
    ],
  },
}

const itinerary = [
  {
    day: 'Day 1',
    title: 'Nairobi to Masai Mara National Reserve',
    description: [
      'Your safari begins with a morning pickup from your Nairobi hotel. Travel through the scenic Great Rift Valley, arriving at Fisi Camp in the Masai Mara in time for lunch. After checking in and resting, head out for your first afternoon game drive.',
      "This first drive introduces you to one of Kenya's premier wildlife reserves. Lions, elephants, buffaloes, giraffes, zebras, and antelopes are all commonly spotted across the Mara's open plains. Return to camp for dinner and overnight.",
    ],
    accommodation: 'Fisi Camp, Masai Mara',
    meals: 'Lunch & Dinner',
  },
  {
    day: 'Day 2',
    title: 'Full-Day Safari in the Masai Mara',
    description: [
      'After an early breakfast, spend the entire day exploring the vast Mara plains in a 4x4 safari vehicle. Your professional guide will search for the Big Five and interpret the ecosystem throughout the day.',
      "Guests may also choose to visit a traditional Maasai village to learn about the culture and way of life of the Maasai people, one of Kenya's most distinctive communities. Return to Fisi Camp for dinner and overnight.",
    ],
    accommodation: 'Fisi Camp, Masai Mara',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 3',
    title: 'Masai Mara to Lake Nakuru',
    description: [
      'After breakfast, depart the Mara and journey to Nakuru, home to Lake Nakuru National Park. Check in at Ivory Park Hotel, enjoy lunch, and spend the afternoon at leisure.',
      'Guests who wish to make the most of the driving route may choose to stop at Lake Naivasha for an optional boat ride or guided nature walk on Crescent Island, where wildlife roams freely in an unfenced natural setting.',
    ],
    accommodation: 'Ivory Park Hotel, Nakuru',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 4',
    title: 'Full Day in Lake Nakuru National Park',
    description: [
      "After breakfast, set out for a full-day game drive in Lake Nakuru National Park. Renowned for its thriving white and black rhino population, Rothschild's giraffes, and rich birdlife, the park offers exceptional wildlife viewing across acacia woodland and lakeshore habitats.",
      'Keep your camera ready for leopards in the trees, large buffalo herds, zebras, waterbuck, baboons, and flamingos along the lake. Return to Ivory Park Hotel for dinner and overnight.',
    ],
    accommodation: 'Ivory Park Hotel, Nakuru',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 5',
    title: 'Lake Nakuru to Amboseli National Park',
    description: [
      'After breakfast, depart for Amboseli National Park, famous across Africa for its large elephant herds and the breathtaking backdrop of Mount Kilimanjaro. Arrive at Nyati Safari Camp in time for lunch before heading out on an afternoon game drive.',
      'Amboseli offers outstanding encounters with elephants, lions, cheetahs, buffaloes, zebras, wildebeests, and numerous bird species in an open landscape that makes wildlife viewing and photography particularly rewarding.',
    ],
    accommodation: 'Nyati Safari Camp, Amboseli',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 6',
    title: 'Full-Day Safari in Amboseli National Park',
    description: [
      "Dedicate the day entirely to Amboseli. Explore the park's open plains, seasonal wetlands, and acacia woodlands while enjoying Kilimanjaro views in the background when weather permits.",
      "Amboseli is widely regarded as one of Africa's finest locations for photographing elephants against the dramatic silhouette of Africa's highest mountain. Return to Nyati Safari Camp for dinner and your final safari overnight.",
    ],
    accommodation: 'Nyati Safari Camp, Amboseli',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 7',
    title: 'Departure',
    description: [
      "Enjoy a leisurely final breakfast before checking out. Your driver-guide will transfer you to your agreed drop-off location in Nairobi, whether your hotel or Jomo Kenyatta International Airport, marking the conclusion of seven memorable days across Kenya's wildlife parks.",
    ],
    accommodation: null,
    meals: 'Breakfast only',
  },
]

const accommodation = [
  {
    destination: 'Masai Mara',
    nights: 'Nights 1-2',
    lodge: 'Fisi Camp',
  },
  {
    destination: 'Lake Nakuru',
    nights: 'Nights 3-4',
    lodge: 'Ivory Park Hotel',
  },
  {
    destination: 'Amboseli',
    nights: 'Nights 5-6',
    lodge: 'Nyati Safari Camp',
  },
]

const included = [
  'Accommodation as specified in the itinerary',
  'All meals as indicated per day',
  'Transport in a 4x4 safari vehicle with pop-up roof',
  'Professional, English-speaking safari driver-guide throughout',
  'All scheduled game drives as per the itinerary',
  'All national park entrance fees',
  'Government taxes and VAT',
]

const excluded = [
  'International flights',
  'Travel insurance',
  'Visa fees where applicable',
  'Optional activities and excursions',
  'Personal expenses such as drinks, laundry, and souvenirs',
  'Gratuities for driver-guide and hotel staff',
  'Additional accommodation before or after the safari',
  'Any item not listed under "What\'s Included"',
]

const faqs = [
  {
    question: 'What is the optional Lake Naivasha stop on Day 3?',
    answer:
      'On the drive from the Masai Mara to Nakuru, guests may choose to stop at Lake Naivasha for an optional boat ride or a guided walk on Crescent Island. This is not included in the package and is available at extra cost.',
  },
  {
    question: 'Where is Ivory Park Hotel located?',
    answer:
      'Ivory Park Hotel is located in Nakuru town, close to the gate of Lake Nakuru National Park. Game drives into the park depart from this base.',
  },
  {
    question: 'Is a Maasai village visit included?',
    answer:
      'No. It is an optional activity available during your time in the Masai Mara at additional cost. Your guide can arrange it if you are interested.',
  },
  {
    question: 'What is the best time to do this safari?',
    answer:
      'This route runs year-round. July to October is peak season for the Great Migration in the Mara and dry conditions across all three parks. January to February is also excellent.',
  },
  {
    question: 'How much does this safari cost?',
    answer:
      'Pricing depends on group size and travel dates. All pricing is available on our Kenya Safari Packages page.',
  },
]

const destinationLinks = [
  {
    label: 'Maasai Mara Safari Tours',
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    label: 'Lake Nakuru Safari Tours',
    href: '/destinations/lake-nakuru-safari-tours',
  },
  {
    label: 'Amboseli Safari Tours',
    href: '/destinations/amboseli-safari-tours',
  },
]

export default function SevenDayBudgetSafariPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Masai Mara wildlife on a seven-day Kenya safari"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.84)_0%,rgba(28,18,8,0.38)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            7-Day Budget Kenya Wildlife Safari
          </p>

          <h1 className="mx-auto max-w-5xl font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            7 Days / 6 Nights Safari Itinerary to Maasai Mara, Lake Nakuru
            National Park and Amboseli National Park
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Experience three of Kenya's greatest wildlife destinations in one
            structured seven-day safari from Nairobi.
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
              In seven days, experience three of Kenya's greatest national
              parks. Travel from the sweeping plains of the Masai Mara, through
              the rhino-rich lakeshore of Lake Nakuru, to the elephant herds of
              Amboseli beneath Mount Kilimanjaro.
            </p>

            <p>
              This itinerary is built for travelers who want to cover serious
              ground across Kenya's iconic wildlife destinations in a single
              well-structured trip. Two nights in each major safari area give
              you proper time for game drives rather than a quick drive-through.
            </p>

            <p>
              Hotel pickup and dropoff in Nairobi are included. Danil Scenic
              Tours manages the logistics throughout the journey.
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
                7 Days / 6 Nights
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
                Masai Mara National Reserve → Lake Nakuru National Park →
                Amboseli National Park
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
                Fisi Camp, Ivory Park Hotel, and Nyati Safari Camp
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
                Lunch & Dinner on Day 1, full board Days 2-6, Breakfast on Day
                7
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
                Departure
              </p>

              <p className="mt-2 font-inter leading-relaxed text-[#1C1208]">
                Morning pickup from your Nairobi hotel
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
            Read the full itinerary, wildlife guide, best time to visit, and
            FAQs for each park on this route.
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
                href="/safari-tours/5-day-amboseli-nakuru-masai-mara"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#D4870A] px-5 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:bg-[#D4870A] hover:text-[#1C1208]"
              >
                5-Day Safari
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
          alt="Elephants in Kenya with Mount Kilimanjaro in the background"
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
            Send us your travel dates and group size. We will respond within 24
            hours with the best options for your trip.
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
