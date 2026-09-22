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
  UtensilsCrossed,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import SafariMap from '@/components/SafariMap'
import BookingTerms from '@/components/BookingTerms'
import { BLOB_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    '10-Day Kenya Safari Package: Maasai Mara, Nakuru, Naivasha, Amboseli & Diani Beach | Danil Scenic Tours',
  description:
    'Explore Kenya on a 10-day wildlife safari combining Maasai Mara, Lake Nakuru, Lake Naivasha, Amboseli and Diani Beach. Full itinerary, full board, professional guide from Nairobi.',
  alternates: {
    canonical: '/safari-tours/10-day-kenya-wildlife-diani-beach',
  },
}

const itinerary = [
  {
    day: 'Day 1',
    title: 'Welcome to Kenya: Journey to the Masai Mara',
    paragraphs: [
      'Your adventure begins at Jomo Kenyatta International Airport, where your safari guide will meet you on arrival and brief you on the journey ahead. Travel through the Great Rift Valley with viewpoints and sweeping landscapes along the route.',
      'Arrive at PrideInn Mara Camp in time for lunch, then relax before setting out on your first afternoon game drive across the Masai Mara National Reserve. Return to camp for dinner and your first safari overnight.',
    ],
    accommodation: 'PrideInn Mara Camp',
    meals: 'Lunch & Dinner',
  },
  {
    day: 'Day 2',
    title: 'A Full Day in the Heart of the Masai Mara',
    paragraphs: [
      "After an early breakfast, spend a full day exploring the Masai Mara. The reserve is known for its concentration of wildlife, including the Big Five and the Great Wildebeest Migration between July and October.",
      'Your guide will lead you through rolling grasslands, acacia woodlands, and river areas while sharing knowledge of the ecosystem. A picnic lunch is served in the bush.',
    ],
    accommodation: 'PrideInn Mara Camp',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 3',
    title: 'Scenic Drive to Lake Nakuru National Park',
    paragraphs: [
      'After breakfast, leave the Mara and journey to Lake Nakuru National Park. Arrive at Lake Nakuru Sopa Lodge for lunch before heading out on an afternoon game drive.',
      "Lake Nakuru is known for white and black rhinos, Rothschild's giraffes, and seasonal flamingos along the lakeshore.",
    ],
    accommodation: 'Lake Nakuru Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 4',
    title: 'Discover the Wonders of Lake Nakuru',
    paragraphs: [
      'Spend a full second day in Lake Nakuru National Park. Game drives may reveal leopards, buffalo herds, zebras, waterbuck, baboons, and birdlife across the lakeshore and woodland habitats.',
    ],
    accommodation: 'Lake Nakuru Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 5',
    title: 'Relaxation at Beautiful Lake Naivasha',
    paragraphs: [
      'After breakfast, continue to Lake Naivasha in the Great Rift Valley. Check into Lake Naivasha Sopa Lodge and enjoy lunch.',
      'In the afternoon, take a boat safari across the lake to look for hippos and birdlife. Continue to Crescent Island Game Sanctuary for a guided walking safari among giraffes, zebras, antelopes, and wildebeests.',
    ],
    accommodation: 'Lake Naivasha Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 6',
    title: 'Amboseli National Park: Beneath Mount Kilimanjaro',
    paragraphs: [
      "Travel south to Amboseli National Park. Set against Africa's highest mountain, Amboseli offers wide plains beneath Mount Kilimanjaro.",
      'Arrive at Amboseli Sopa Lodge for lunch before setting out on an evening game drive. Amboseli is known for elephants, lions, cheetahs, hyenas, zebras, and wildebeests.',
    ],
    accommodation: 'Amboseli Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 7',
    title: 'Full Safari Adventure in Amboseli',
    paragraphs: [
      'Spend a full day exploring Amboseli. Enjoy a game drive with a picnic lunch at Observation Hill, which offers views of the plains, swamps, and wildlife, with Kilimanjaro often visible in the background.',
      'Return to Amboseli Sopa Lodge for dinner and overnight.',
    ],
    accommodation: 'Amboseli Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 8',
    title: 'From the Savannah to the White Sands of Diani Beach',
    paragraphs: [
      'After breakfast, transfer to the airstrip for your domestic flight to Ukunda, the gateway to Diani Beach. On arrival, check into PrideInn Diani Hotel and enjoy lunch before spending the afternoon at leisure.',
      "Take a walk along Diani's white sandy beach before dinner and overnight at the hotel.",
    ],
    accommodation: 'PrideInn Diani Hotel',
    meals: 'Breakfast, Lunch & Dinner',
    note: 'Domestic flight from Amboseli to Diani, via Nairobi where applicable, is included.',
  },
  {
    day: 'Day 9',
    title: 'Leisure and Optional Ocean Adventures',
    paragraphs: [
      'This day is at leisure. Relax on the beach or choose from optional activities including scuba diving, snorkelling, deep-sea fishing, kite surfing, or a traditional dhow cruise.',
    ],
    accommodation: 'PrideInn Diani Hotel',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 10',
    title: 'Nairobi City Experience & Farewell Kenya',
    paragraphs: [
      "After breakfast, travel to the airport for your return flight to Nairobi. On arrival, visit the Giraffe Centre, where you can learn about Rothschild's giraffes.",
      'Subject to your departure schedule, you may choose an optional farewell dinner at Carnivore Restaurant before transfer to Jomo Kenyatta International Airport.',
    ],
    accommodation: null,
    meals: 'Breakfast',
    note: 'Lunch and dinner are subject to the departure schedule.',
  },
]

const included = [
  'Meet and greet upon arrival at Jomo Kenyatta International Airport',
  'Full board accommodation throughout',
  'Transport in a 4x4 safari jeep with pop-up roof for game viewing and photography',
  'Professional English-speaking safari driver-guide throughout',
  'All scheduled game drives as per the itinerary',
  'Domestic flight from Amboseli to Diani Beach via Nairobi where applicable',
  'Boat ride at Lake Naivasha and guided walking safari at Crescent Island',
  'Bottled drinking water, refreshments, and snacks during the safari',
  'All national park and reserve entrance fees',
  'Government taxes and levies applicable at the time of booking',
]

const excluded = [
  'International flights to and from Kenya',
  'Visa fees where applicable',
  'Travel and medical insurance',
  'Optional excursions and activities',
  'Maasai village visit',
  'Personal expenses such as drinks, laundry, and souvenirs',
  'Gratuities for driver-guide and hotel staff',
  'Any item not listed under What’s Included',
]

const faqs = [
  {
    question: 'Is the domestic flight to Diani Beach included?',
    answer:
      'Yes. The domestic flight from Amboseli to Diani Beach, via Nairobi where applicable, is included in the package. No separate booking is required.',
  },
  {
    question: 'Can I visit a Maasai village during this safari?',
    answer:
      'Yes. A Maasai village visit is available as an optional activity. It is not included in the package price. Speak to your guide to arrange it during your time in the Masai Mara.',
  },
  {
    question: 'What is the best time to do this safari?',
    answer:
      'July to October is peak season covering the Great Migration in the Mara and excellent dry season conditions across the parks. January to February is also excellent.',
  },
  {
    question: 'Can this package be customised?',
    answer:
      'Yes. Accommodation tiers, duration, and activities can be adjusted. Contact us to discuss your preferences and we will tailor the itinerary to your group.',
  },
  {
    question: 'How much does this safari cost?',
    answer:
      'Pricing depends on group size, accommodation tier, and travel dates. Full pricing is available on our Kenya Safari Packages page.',
  },
]

export default function TenDaySafariPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[78svh] sm:pt-32">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Kenya wildlife safari"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.84)_0%,rgba(28,18,8,0.30)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            10 Days / 9 Nights
          </p>

          <h1 className="mt-4 font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            10-Day Classic Kenya Wildlife Safari & Diani Beach Escape
          </h1>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
          <p>
            This is Kenya in full. Ten days covering major wildlife parks
            followed by two nights on the Indian Ocean coast.
          </p>

          <p>
            You begin in the Maasai Mara before moving through Lake Nakuru,
            Lake Naivasha, and Amboseli. The journey concludes with a domestic
            flight to Diani Beach.
          </p>

          <p>
            All parks, transfers, accommodation, and the domestic flight to the
            coast are handled by Danil Scenic Tours.
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
                10 Days / 9 Nights
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <MapPin size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Destinations
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                Maasai Mara → Lake Nakuru → Lake Naivasha → Amboseli → Diani
                Beach
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <Hotel size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Accommodation
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                PrideInn Mara Camp | Lake Nakuru Sopa Lodge | Lake Naivasha
                Sopa Lodge | Amboseli Sopa Lodge | PrideInn Diani Hotel
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <UtensilsCrossed size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Meals
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                Full board throughout
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <Car size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Safari Transport
              </p>
              <p className="mt-1 font-inter font-semibold text-[#2A4A35]">
                4x4 safari jeep with pop-up roof
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <Plane size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Domestic Flight
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                Amboseli to Diani included
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
              'maasai-mara',
              'lake-nakuru',
              'lake-naivasha',
              'amboseli',
              'diani-beach',
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

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ['Maasai Mara', 'Nights 1-2', 'PrideInn Mara Camp'],
              ['Lake Nakuru', 'Nights 3-4', 'Lake Nakuru Sopa Lodge'],
              ['Lake Naivasha', 'Night 5', 'Lake Naivasha Sopa Lodge'],
              ['Amboseli', 'Nights 6-7', 'Amboseli Sopa Lodge'],
              ['Diani Beach', 'Nights 8-9', 'PrideInn Diani Hotel'],
            ].map(([location, nights, lodge]) => (
              <article
                key={location}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                  {nights}
                </p>
                <h3 className="mt-2 font-playfair text-xl font-bold text-[#2A4A35]">
                  {location}
                </h3>
                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {lodge}
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
            Why Choose This Safari
          </h2>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <p className="font-inter text-base leading-8 text-[#1C1208]">
              This 10-day itinerary combines Kenya&apos;s wildlife destinations
              with the beaches of the Indian Ocean, balancing safari adventure
              and coastal relaxation.
            </p>

            <p className="mt-4 font-inter text-base leading-8 text-[#1C1208]">
              The journey includes the Masai Mara, Lake Nakuru, Lake Naivasha,
              Amboseli, and Diani Beach in one guided itinerary.
            </p>
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
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Explore Each Destination in Detail
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ['Maasai Mara', '/destinations/maasai-mara-safari-tours'],
              ['Lake Nakuru', '/destinations/lake-nakuru-safari-tours'],
              ['Lake Naivasha', '/destinations/lake-naivasha-safari-tours'],
              ['Amboseli', '/destinations/amboseli-safari-tours'],
              ['Diani Beach', '/destinations/diani-beach-safari-tours'],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="flex min-h-14 items-center justify-between gap-3 rounded-xl bg-white px-4 py-4 font-montserrat text-sm font-semibold text-[#2A4A35] shadow-sm"
              >
                {name}
                <ArrowRight size={15} className="text-[#D4870A]" />
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#F2E8D5] p-5 sm:p-6">
            <p className="font-montserrat text-sm font-semibold text-[#2A4A35]">
              Other Combination Safari Itineraries
            </p>

            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/safari-tours/5-day-amboseli-nakuru-masai-mara"
                className="font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                5-Day Safari
              </Link>

              <Link
                href="/safari-tours/7-days-6-nights-maasai-mara-lake-nakuru-amboseli"
                className="font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                7 Days / 6 Nights Safari
              </Link>

              <Link
                href="/safari-tours/13-day-kenya-safari-coastal-escape"
                className="font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                13-Day Safari & Coastal Escape
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
