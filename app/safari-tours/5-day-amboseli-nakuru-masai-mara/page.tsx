import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Car,
  CheckCircle2,
  Hotel,
  MapPin,
  Plane,
  Sparkles,
  UtensilsCrossed,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import SafariMap from '@/components/SafariMap'
import BookingTerms from '@/components/BookingTerms'
import { LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    '5-Day Kenya Safari: Amboseli, Lake Nakuru & Masai Mara Itinerary | Danil Scenic Tours',
  description:
    "Explore three of Kenya's iconic parks on a 5-day safari from Nairobi: Amboseli, Lake Nakuru, and Masai Mara. Professional guide, full board, 4x4 Land Cruiser throughout.",
  alternates: {
    canonical: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
  },
}

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrival in Nairobi & Transfer to Amboseli National Park',
    paragraphs: [
      "Your safari begins with arrival in Nairobi, where your driver-guide will meet you at Jomo Kenyatta International Airport. From there, embark on a scenic four-hour drive to Amboseli National Park, one of Kenya's most celebrated wildlife destinations, set against the dramatic backdrop of Mount Kilimanjaro.",
      'Arrive at AA Lodge Amboseli and check in, have lunch, and take a short rest. In the evening, head out for your first game drive in Amboseli, renowned for its elephant herds and Kilimanjaro views. Return to the lodge for dinner and overnight.',
    ],
    accommodation: 'AA Lodges, Amboseli',
    meals: 'Lunch & Dinner',
    note: 'Breakfast not included on arrival day',
  },
  {
    day: 'Day 2',
    title: 'Amboseli National Park to Lake Nakuru National Park',
    paragraphs: [
      'After an early morning game drive and breakfast at AA Lodge, check out and depart for Lake Nakuru National Park approximately six hours north. A lunch stop is made en route.',
      'Arrive in the afternoon and check in at Lake Nakuru Sopa Lodge. After settling in, head out for an evening game drive. Lake Nakuru is known for birdlife, flamingos, white and black rhinos, lions, and leopards. Return to the lodge for dinner and overnight.',
    ],
    accommodation: 'Lake Nakuru Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 3',
    title: 'Lake Nakuru National Park to Masai Mara National Reserve',
    paragraphs: [
      'After an early breakfast, check out of Sopa Lodge and set off for the Masai Mara National Reserve. Arrive at Loyk Mara Camp in the afternoon, check in, and unwind before heading out on an evening game drive.',
      'The Masai Mara is known for its wildlife density and, between July and October, the Great Wildebeest Migration. Evening game drives in the Mara are rewarding as predators become active at dusk.',
    ],
    accommodation: 'Loyk Mara Camp',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 4',
    title: 'Full Day in the Masai Mara National Reserve',
    paragraphs: [
      'A full day of exploration in the Mara. Start with an early morning game drive, followed by breakfast back at camp. The mid-morning offers an optional visit to a local Maasai village for a cultural experience or a guided nature walk.',
      'After lunch at camp, head out for another afternoon game drive before returning for dinner and your final safari overnight.',
    ],
    accommodation: 'Loyk Mara Camp',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 5',
    title: 'Masai Mara to Nairobi & Departure',
    paragraphs: [
      'Enjoy your final breakfast at Loyk Mara Camp before checking out and beginning the drive back to Nairobi. Arrive in the afternoon with time for a lunch stop along the route.',
      "Your driver-guide will transfer you to Jomo Kenyatta International Airport for your departure flight, marking the end of a five-day journey through three of Kenya's parks.",
    ],
    accommodation: null,
    meals: 'Breakfast & Lunch',
    note: 'Dinner not included on departure day',
  },
]

const included = [
  'Airport pickup on arrival and dropoff at Jomo Kenyatta International Airport on departure',
  'Accommodation as specified in the itinerary',
  'All meals as indicated per day',
  'Drinking water on all days',
  'All activities unless labelled as optional',
  'Professional English-speaking driver-guide throughout',
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

export default function FiveDaySafariPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[78svh] sm:pt-32">
        <Image
          src={LOCAL_IMAGES.AMBOSELI_ELEPHANTS}
          alt="Elephants in Amboseli National Park"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.82)_0%,rgba(28,18,8,0.28)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            5-Day Kenya Safari
          </p>

          <h1 className="mt-4 font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            5-Day Safari Adventure to Amboseli, Lake Nakuru & Masai Mara
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Three of Kenya&apos;s iconic national parks in five days and one
            expertly guided safari from Nairobi.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
          <p>
            Three of Kenya&apos;s most iconic national parks in five days and
            one expertly guided safari from Nairobi. This itinerary moves from
            the elephant herds and Kilimanjaro views of Amboseli, through the
            rhino sanctuary of Lake Nakuru, and finishes with the big cat
            encounters and landscapes of the Masai Mara.
          </p>

          <p>
            A well-paced safari that covers serious ground without feeling
            rushed. Each park gets proper time for game drives, and the route
            builds naturally from south to north.
          </p>

          <p>
            Airport pickup and dropoff are included. All logistics are handled
            by Danil Scenic Tours from the moment you land.
          </p>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Safari at a Glance
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <CalendarDays size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Duration
              </p>
              <p className="mt-1 font-inter font-semibold text-[#2A4A35]">
                5 Days
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <MapPin size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Destinations
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                Amboseli National Park → Lake Nakuru National Park → Masai Mara
                National Reserve
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <Hotel size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Accommodation
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                AA Lodges | Lake Nakuru Sopa Lodge | Loyk Mara Camp
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <UtensilsCrossed size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Meals
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                Lunch & dinner Day 1 | Full board Days 2-4 | Breakfast & lunch
                Day 5
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <Car size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Transport
              </p>
              <p className="mt-1 font-inter font-semibold text-[#2A4A35]">
                4x4 safari vehicle with pop-up roof
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <Plane size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Departure
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                Jomo Kenyatta International Airport, Nairobi
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
            >
              View Full Pricing
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A]">
              Your Journey
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
              Safari Route Map
            </h2>
          </div>

          <SafariMap
            locations={[
              'nairobi',
              'amboseli',
              'lake-nakuru',
              'maasai-mara',
            ]}
            showRouteLine
          />
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Day-by-Day Itinerary
          </h2>

          <div className="mt-10 space-y-5">
            {itinerary.map((item, index) => (
              <article
                key={item.day}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="flex items-center gap-4 bg-[#2A4A35] px-5 py-4 sm:px-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4870A] font-montserrat font-bold text-[#1C1208]">
                    {index + 1}
                  </span>

                  <div>
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                      {item.day}
                    </p>

                    <h3 className="mt-1 font-playfair text-xl font-bold leading-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 p-5 sm:p-6 md:p-8">
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-inter text-sm leading-7 text-[#1C1208] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}

                  <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                    {item.accommodation && (
                      <div className="rounded-xl bg-[#FAF4E8] p-4">
                        <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                          Accommodation
                        </p>
                        <p className="mt-1 font-inter text-sm font-semibold text-[#2A4A35]">
                          {item.accommodation}
                        </p>
                      </div>
                    )}

                    <div className="rounded-xl bg-[#FAF4E8] p-4">
                      <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                        Meals
                      </p>
                      <p className="mt-1 font-inter text-sm font-semibold text-[#2A4A35]">
                        {item.meals}
                      </p>

                      {item.note && (
                        <p className="mt-1 font-inter text-xs text-[#1C1208]/65">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Accommodation Summary
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                location: 'Amboseli',
                nights: 'Night 1',
                lodge: 'AA Lodges, Amboseli',
              },
              {
                location: 'Lake Nakuru',
                nights: 'Night 2',
                lodge: 'Lake Nakuru Sopa Lodge',
              },
              {
                location: 'Masai Mara',
                nights: 'Nights 3-4',
                lodge: 'Loyk Mara Camp',
              },
            ].map((stay) => (
              <article
                key={stay.location}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6"
              >
                <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                  {stay.nights}
                </p>

                <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                  {stay.location}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {stay.lodge}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What&apos;s Included
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
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What&apos;s Not Included
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
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Optional Activities
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <Sparkles size={26} className="text-[#D4870A]" />

              <h3 className="mt-4 font-playfair text-2xl font-bold text-[#2A4A35]">
                Hot Air Balloon Safari
              </h3>

              <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                Hot air balloon safari over the Masai Mara.
              </p>

              <p className="mt-3 font-montserrat font-semibold text-[#D4870A]">
                USD 450 per person
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <Sparkles size={26} className="text-[#D4870A]" />

              <h3 className="mt-4 font-playfair text-2xl font-bold text-[#2A4A35]">
                Maasai Village Cultural Visit
              </h3>

              <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                Visit a local Maasai community during your time in the Masai
                Mara.
              </p>

              <p className="mt-3 font-montserrat font-semibold text-[#D4870A]">
                Cost on request
              </p>
            </article>
          </div>
        </div>
      </section>

      <BookingTerms />

      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="overflow-hidden rounded-xl bg-[#2A4A35]"
              >
                <summary className="cursor-pointer px-5 py-4 font-montserrat text-sm font-semibold text-white sm:px-6 sm:text-base">
                  {faq.question}
                </summary>

                <div className="border-t border-white/10 px-5 py-4 sm:px-6">
                  <p className="font-inter text-sm leading-relaxed text-white/85">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Explore Each Destination in Detail
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                name: 'Amboseli Safari Tours',
                href: '/destinations/amboseli-safari-tours',
              },
              {
                name: 'Lake Nakuru Safari Tours',
                href: '/destinations/lake-nakuru-safari-tours',
              },
              {
                name: 'Maasai Mara Safari Tours',
                href: '/destinations/maasai-mara-safari-tours',
              },
            ].map((destination) => (
              <Link
                key={destination.href}
                href={destination.href}
                className="flex min-h-14 items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 font-montserrat text-sm font-semibold text-[#2A4A35] shadow-sm"
              >
                {destination.name}
                <ArrowRight size={16} className="text-[#D4870A]" />
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#F2E8D5] p-5 sm:p-6">
            <p className="font-montserrat text-sm font-semibold text-[#2A4A35]">
              Other Combination Safari Itineraries
            </p>

            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/safari-tours/7-days-6-nights-maasai-mara-lake-nakuru-amboseli"
                className="inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                7 Days / 6 Nights Safari
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/safari-tours/10-day-kenya-wildlife-diani-beach"
                className="inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                10-Day Safari
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/safari-tours/13-day-kenya-safari-coastal-escape"
                className="inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                13-Day Safari & Coastal Escape
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2A4A35] px-6 py-3 font-montserrat text-sm font-semibold text-white"
            >
              View Pricing
            </Link>

            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208]"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ClientOnlyUI />
    </main>
  )
}
