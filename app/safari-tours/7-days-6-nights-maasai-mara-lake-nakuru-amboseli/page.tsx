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
    '7-Day Kenya Safari: Maasai Mara, Lake Nakuru & Amboseli Itinerary | Danil Scenic Tours',
  description:
    'Explore Maasai Mara, Lake Nakuru, and Amboseli on a 7-day, 6-night Kenya safari from Nairobi. Professional guide, full board, 4x4 safari vehicle throughout.',
  alternates: {
    canonical:
      '/safari-tours/7-days-6-nights-maasai-mara-lake-nakuru-amboseli',
  },
}

const itinerary = [
  {
    day: 'Day 1',
    title: 'Nairobi to Masai Mara National Reserve',
    paragraphs: [
      'Your safari begins with a morning pickup from your Nairobi hotel. Travel through the scenic Great Rift Valley, arriving at Fisi Camp in the Masai Mara in time for lunch. After checking in and resting, head out for your first afternoon game drive.',
      "This first drive introduces you to one of Kenya's premier wildlife reserves. Lions, elephants, buffaloes, giraffes, zebras, and antelopes are all commonly spotted in the Mara's open plains. Return to camp for dinner and overnight.",
    ],
    accommodation: 'Fisi Camp, Masai Mara',
    meals: 'Lunch & Dinner',
  },
  {
    day: 'Day 2',
    title: 'Full-Day Safari in the Masai Mara',
    paragraphs: [
      'After an early breakfast, spend the entire day exploring the vast Mara plains in a 4x4 safari vehicle. Your professional guide will search for the Big Five and interpret the ecosystem throughout the day.',
      "Guests may also choose to visit a traditional Maasai village to learn about the culture and way of life of the Maasai people, one of Kenya's most distinctive communities. Return to Fisi Camp for dinner and overnight.",
    ],
    accommodation: 'Fisi Camp, Masai Mara',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 3',
    title: 'Masai Mara to Lake Nakuru',
    paragraphs: [
      'After breakfast, depart the Mara and journey to Nakuru, home to Lake Nakuru National Park. Check in at Ivory Park Hotel and enjoy lunch and the afternoon.',
      'Guests who wish to make the most of the driving route may choose to stop at Lake Naivasha for an optional boat ride or a guided nature walk on Crescent Island, where wildlife roams freely in an unfenced natural setting.',
    ],
    accommodation: 'Ivory Park Hotel, Nakuru',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 4',
    title: 'Full Day in Lake Nakuru National Park',
    paragraphs: [
      "After breakfast, set out for a full-day game drive in Lake Nakuru National Park. Renowned for its white and black rhino population, Rothschild's giraffes, and rich birdlife, the park offers wildlife viewing across acacia woodland and lakeshore habitats.",
      'Keep your camera ready for leopards in the trees, buffalo herds, zebras, waterbuck, baboons, and flamingos along the lake. Return to Ivory Park Hotel for dinner and overnight.',
    ],
    accommodation: 'Ivory Park Hotel, Nakuru',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 5',
    title: 'Lake Nakuru to Amboseli National Park',
    paragraphs: [
      'After breakfast, depart for Amboseli National Park, known for its elephant herds and views of Mount Kilimanjaro. Arrive at Nyati Safari Camp in time for lunch before heading out on an afternoon game drive.',
      'Amboseli offers encounters with elephants, lions, cheetahs, buffaloes, zebras, wildebeests, and numerous bird species in an open landscape that makes wildlife viewing and photography particularly rewarding.',
    ],
    accommodation: 'Nyati Safari Camp, Amboseli',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 6',
    title: 'Full-Day Safari in Amboseli National Park',
    paragraphs: [
      "Dedicated entirely to Amboseli. Spend the day exploring the park's open plains, seasonal wetlands, and acacia woodlands while enjoying Kilimanjaro views in the background if weather permits.",
      "Amboseli is widely regarded as one of Africa's finest locations for photographing elephants against the silhouette of Mount Kilimanjaro. Return to Nyati Safari Camp for dinner and your final safari overnight.",
    ],
    accommodation: 'Nyati Safari Camp, Amboseli',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 7',
    title: 'Departure',
    paragraphs: [
      'Enjoy a leisurely final breakfast before checking out. Your driver-guide will transfer you to your agreed dropoff location in Nairobi, whether your hotel or Jomo Kenyatta International Airport, marking the conclusion of seven days across Kenya.',
    ],
    accommodation: null,
    meals: 'Breakfast only',
  },
]

const included = [
  'Accommodation as specified in the itinerary',
  'All meals as indicated per day',
  'Transport in a 4x4 safari vehicle with pop-up roof',
  'Professional English-speaking safari driver-guide throughout',
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
  'Any item not listed under What’s Included',
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

export default function SevenDaySafariPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[78svh] sm:pt-32">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Masai Mara wildlife safari in Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.84)_0%,rgba(28,18,8,0.30)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            7 Days / 6 Nights
          </p>

          <h1 className="mt-4 font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            7 Days / 6 Nights Safari Itinerary to Maasai Mara, Lake Nakuru
            National Park and Amboseli National Park
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Experience three of Kenya&apos;s major wildlife destinations in one
            guided journey from Nairobi.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
          <p>
            In seven days, experience three of Kenya&apos;s greatest national
            parks. One expertly guided safari takes you from the sweeping
            plains of the Masai Mara, through the rhino-rich lakeshore of Lake
            Nakuru, to the elephant herds of Amboseli beneath Mount
            Kilimanjaro.
          </p>

          <p>
            This itinerary is built for travelers who want to cover serious
            ground across Kenya&apos;s wildlife destinations in a single
            well-structured trip. Two full days in each major park ensure you
            have proper time for game drives.
          </p>

          <p>
            Hotel pickup and dropoff in Nairobi are included. All logistics are
            managed by Danil Scenic Tours throughout.
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
                7 Days / 6 Nights
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <MapPin size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Destinations
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                Masai Mara National Reserve → Lake Nakuru National Park →
                Amboseli National Park
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <Hotel size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Accommodation
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                Fisi Camp | Ivory Park Hotel | Nyati Safari Camp
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <UtensilsCrossed size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Meals
              </p>
              <p className="mt-1 font-inter text-sm font-semibold leading-relaxed text-[#2A4A35]">
                Lunch & dinner Day 1 | Full board Days 2-6 | Breakfast only
                Day 7
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
              <MapPin size={26} className="text-[#D4870A]" />
              <p className="mt-4 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Departs
              </p>
              <p className="mt-1 font-inter font-semibold text-[#2A4A35]">
                Nairobi hotel pickup
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
              'amboseli',
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
                location: 'Masai Mara',
                nights: 'Nights 1-2',
                accommodation: 'Fisi Camp',
              },
              {
                location: 'Lake Nakuru',
                nights: 'Nights 3-4',
                accommodation: 'Ivory Park Hotel',
              },
              {
                location: 'Amboseli',
                nights: 'Nights 5-6',
                accommodation: 'Nyati Safari Camp',
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
                  {stay.accommodation}
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
                name: 'Maasai Mara Safari Tours',
                href: '/destinations/maasai-mara-safari-tours',
              },
              {
                name: 'Lake Nakuru Safari Tours',
                href: '/destinations/lake-nakuru-safari-tours',
              },
              {
                name: 'Amboseli Safari Tours',
                href: '/destinations/amboseli-safari-tours',
              },
            ].map((destination) => (
              <Link
                key={destination.href}
                href={destination.href}
                className="flex min-h-14 items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 font-montserrat text-sm font-semibold text-[#2A4A35] shadow-sm transition-shadow hover:shadow-md"
              >
                {destination.name}
                <ArrowRight
                  size={16}
                  className="shrink-0 text-[#D4870A]"
                />
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
                className="inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                5-Day Safari
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
