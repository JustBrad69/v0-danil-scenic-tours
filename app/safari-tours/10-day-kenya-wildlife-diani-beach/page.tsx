import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  Clock,
  MapPin,
  Plane,
  Utensils,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { BLOB_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    '10-Day Kenya Safari Package: Maasai Mara, Nakuru, Naivasha, Amboseli & Diani Beach | Danil Scenic Tours',
  description:
    'Explore Kenya on a 10-day wildlife safari combining Maasai Mara, Lake Nakuru, Lake Naivasha, Amboseli and Diani Beach. Full itinerary, full board, professional guide from Nairobi.',
  alternates: {
    canonical: '/safari-tours/10-day-kenya-wildlife-diani-beach',
  },
  openGraph: {
    title:
      '10-Day Kenya Safari Package: Maasai Mara, Nakuru, Naivasha, Amboseli & Diani Beach | Danil Scenic Tours',
    description:
      'Explore Kenya on a 10-day wildlife safari combining Maasai Mara, Lake Nakuru, Lake Naivasha, Amboseli and Diani Beach. Full itinerary, full board, professional guide from Nairobi.',
    url: '/safari-tours/10-day-kenya-wildlife-diani-beach',
    type: 'website',
    images: [
      {
        url: BLOB_IMAGES.MAASAI_MARA,
        alt: '10-day Kenya wildlife safari and Diani Beach escape',
      },
    ],
  },
}

const itinerary = [
  {
    day: 'Day 1',
    title: 'Welcome to Kenya: Journey to the Masai Mara',
    description: [
      'Your adventure begins at Jomo Kenyatta International Airport, where your safari guide will meet you on arrival and brief you on the journey ahead. Travel through the breathtaking Great Rift Valley with spectacular viewpoints and sweeping landscapes along the route.',
      'Arrive at PrideInn Mara Camp in time for lunch, then relax before setting out on your first afternoon game drive across the legendary Masai Mara National Reserve. As the golden African sunset paints the savannah, watch for lions, elephants, buffaloes, giraffes, and cheetahs in their natural habitat. Return to camp for dinner and your first night under the African skies.',
    ],
    accommodation: 'PrideInn Mara Camp',
    meals: 'Lunch & Dinner',
  },
  {
    day: 'Day 2',
    title: 'A Full Day in the Heart of the Masai Mara',
    description: [
      "Wake to the sounds of the African wilderness. After an early breakfast, spend a full day exploring one of the world's greatest wildlife destinations. The Masai Mara is renowned for its exceptional concentration of wildlife including the Big Five and the spectacular Great Wildebeest Migration between July and October.",
      'Your guide will lead you through rolling grasslands, acacia woodlands, and winding rivers while sharing expert knowledge of the ecosystem. A picnic lunch is served in the bush, allowing uninterrupted wildlife viewing throughout the day.',
    ],
    accommodation: 'PrideInn Mara Camp',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 3',
    title: 'Scenic Drive to Lake Nakuru National Park',
    description: [
      'After breakfast, bid farewell to the Mara and journey to Lake Nakuru National Park, famous for its scenic beauty and remarkable wildlife conservation success. Arrive at Lake Nakuru Sopa Lodge for lunch before heading out on an afternoon game drive.',
      "Lake Nakuru is one of Kenya's finest places to spot endangered white and black rhinos, the graceful Rothschild's giraffe, and seasonally thousands of flamingos gathering along the alkaline lakeshore.",
    ],
    accommodation: 'Lake Nakuru Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 4',
    title: 'Discover the Wonders of Lake Nakuru',
    description: [
      'A full second day in Lake Nakuru National Park. Every game drive presents new wildlife encounters, including leopards lounging in acacia trees, large buffalo herds, zebras, waterbuck, baboons, and extraordinary birdlife across the lakeshore and woodland habitats.',
    ],
    accommodation: 'Lake Nakuru Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 5',
    title: 'Relaxation at Beautiful Lake Naivasha',
    description: [
      'After breakfast, continue to the freshwater paradise of Lake Naivasha in the heart of the Great Rift Valley. Check into Lake Naivasha Sopa Lodge and enjoy lunch surrounded by beautifully landscaped gardens.',
      'In the afternoon, embark on a tranquil boat safari across the lake, where pods of hippos and abundant birdlife await. Continue to Crescent Island Game Sanctuary for a guided walking safari among freely roaming giraffes, zebras, antelopes, and wildebeests. It is an unforgettable, up-close experience with wildlife on foot.',
    ],
    accommodation: 'Lake Naivasha Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 6',
    title: 'Amboseli National Park: Beneath Mount Kilimanjaro',
    description: [
      "Travel south to Amboseli National Park, one of Kenya's most iconic wildlife destinations. Set against Africa's highest mountain, Amboseli offers some of the continent's most photographed landscapes, with vast plains stretching beneath the snow-capped peak of Mount Kilimanjaro.",
      'Arrive at Amboseli Sopa Lodge for lunch before setting out on an evening game drive. Amboseli is celebrated for its large herds of free-ranging elephants, many with impressive tusks, alongside lions, cheetahs, hyenas, zebras, and wildebeests.',
    ],
    accommodation: 'Amboseli Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 7',
    title: 'Full Safari Adventure in Amboseli',
    description: [
      'A full day dedicated to discovering the unique beauty of Amboseli. Enjoy an exciting game drive with a picnic lunch at the famous Observation Hill, which offers sweeping panoramic views of the plains, swamps, and wildlife below, with Kilimanjaro often visible in the background.',
      "This is one of Africa's finest locations for wildlife photography. Return to Amboseli Sopa Lodge for dinner and a peaceful overnight.",
    ],
    accommodation: 'Amboseli Sopa Lodge',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 8',
    title: 'From the Savannah to the White Sands of Diani Beach',
    description: [
      'After breakfast, transfer to the airstrip for your domestic flight to Ukunda, the gateway to Diani Beach. Upon arrival, check into PrideInn Diani Hotel and enjoy lunch before spending the afternoon at leisure.',
      "Take a leisurely walk along Diani's award-winning white sandy beach, where swaying palm trees, turquoise waters, and gentle ocean breezes create the perfect tropical contrast to the safari. Dinner and overnight at the hotel.",
      'The domestic flight from Amboseli to Diani, via Nairobi where applicable, is included in the package.',
    ],
    accommodation: 'PrideInn Diani Hotel',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 9',
    title: 'Leisure and Optional Ocean Adventures',
    description: [
      'This day is entirely yours. Relax on the pristine beach, soak up the tropical sunshine, or choose from optional activities including scuba diving, snorkelling, deep-sea fishing, kite surfing, or a traditional dhow cruise.',
      'Whether you seek adventure or complete rest, Diani Beach offers the perfect setting to conclude your Kenyan journey.',
    ],
    accommodation: 'PrideInn Diani Hotel',
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: 'Day 10',
    title: 'Nairobi City Experience & Farewell Kenya',
    description: [
      "After breakfast, we head to the airport for your return flight to Nairobi. On arrival, visit the famous Giraffe Centre where you can feed and interact with the endangered Rothschild's giraffes while learning about Kenya's conservation efforts.",
      'Subject to your departure schedule, you may choose to enjoy an optional farewell dinner at the world-famous Carnivore Restaurant before being transported to Jomo Kenyatta International Airport for your international departure.',
    ],
    accommodation: null,
    meals: 'Breakfast. Lunch & Dinner subject to departure schedule',
  },
]

const accommodation = [
  {
    destination: 'Maasai Mara',
    nights: 'Nights 1-2',
    lodge: 'PrideInn Mara Camp',
  },
  {
    destination: 'Lake Nakuru',
    nights: 'Nights 3-4',
    lodge: 'Lake Nakuru Sopa Lodge',
  },
  {
    destination: 'Lake Naivasha',
    nights: 'Night 5',
    lodge: 'Lake Naivasha Sopa Lodge',
  },
  {
    destination: 'Amboseli',
    nights: 'Nights 6-7',
    lodge: 'Amboseli Sopa Lodge',
  },
  {
    destination: 'Diani Beach',
    nights: 'Nights 8-9',
    lodge: 'PrideInn Diani Hotel',
  },
]

const included = [
  'Meet and greet upon arrival at Jomo Kenyatta International Airport',
  'Full board accommodation throughout with breakfast, lunch, and dinner daily',
  'Transport in a 4x4 safari jeep with pop-up roof for game viewing and photography',
  'Professional, English-speaking safari driver-guide throughout',
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
  'Maasai Village visit',
  'Personal expenses such as drinks, laundry, and souvenirs',
  'Gratuities for driver-guide and hotel staff',
  'Any item not listed under "What\'s Included"',
]

const faqs = [
  {
    question: 'Is the domestic flight to Diani Beach included?',
    answer:
      'Yes. The domestic flight from Amboseli to Diani Beach, via Nairobi where applicable, is fully included in the package. No separate booking is required.',
  },
  {
    question: 'Can I visit a Maasai village during this safari?',
    answer:
      'Yes. A Maasai village visit is available as an optional activity. It is not included in the package price. Speak to your guide to arrange it during your time in the Masai Mara.',
  },
  {
    question: 'What is the best time to do this safari?',
    answer:
      'July to October is peak season, covering the Great Migration in the Mara and excellent dry-season conditions across all parks. January to February is also excellent. See each individual destination page for destination-specific guidance.',
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
    label: 'Lake Naivasha Safari Tours',
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    label: 'Amboseli Safari Tours',
    href: '/destinations/amboseli-safari-tours',
  },
  {
    label: 'Diani Beach Safari Tours',
    href: '/destinations/diani-beach-safari-tours',
  },
]

export default function TenDaySafariPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Maasai Mara wildlife on a 10-day Kenya safari"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.84)_0%,rgba(28,18,8,0.38)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            10 Days / 9 Nights
          </p>

          <h1 className="mx-auto max-w-5xl font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            10-Day Classic Kenya Wildlife Safari & Diani Beach Escape
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            This is Kenya in full. Ten days covering the country's greatest
            wildlife parks followed by two nights on the Indian Ocean coast.
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
              You begin in the Maasai Mara, Kenya's most iconic reserve, before
              moving through the rhino sanctuary of Lake Nakuru, the
              hippo-filled waters of Lake Naivasha, and the elephant herds of
              Amboseli beneath Mount Kilimanjaro.
            </p>

            <p>
              The journey concludes with a domestic flight to Diani Beach for
              white sand, warm ocean, and complete relaxation.
            </p>

            <p>
              Every detail is handled by Danil Scenic Tours. All parks,
              transfers, accommodation, and the domestic flight to the coast
              are covered in one package.
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
                10 Days / 9 Nights
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
                Maasai Mara → Lake Nakuru → Lake Naivasha → Amboseli → Diani
                Beach
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
                PrideInn Mara Camp, Sopa Lodges, and PrideInn Diani Hotel
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
                Full board throughout with breakfast, lunch, and dinner
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <Plane
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />
              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Transport
              </p>
              <p className="mt-2 font-inter leading-relaxed text-[#1C1208]">
                4x4 safari jeep with pop-up roof plus domestic flight from
                Amboseli to Diani
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
                Jomo Kenyatta International Airport, Nairobi
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

      {/* Accommodation Summary */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center font-playfair text-3xl text-[#2A4A35] sm:text-4xl md:text-5xl">
            Accommodation Summary
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {accommodation.map((stay) => (
              <article
                key={stay.destination}
                className="rounded-2xl bg-white p-5 text-center shadow-sm"
              >
                <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                  {stay.nights}
                </p>

                <h3 className="mt-2 font-playfair text-xl text-[#2A4A35]">
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

      {/* Why Choose */}
      <section className="relative overflow-hidden bg-[#2A4A35] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-playfair text-3xl text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Why Choose This Safari
          </h2>

          <p className="mt-6 font-inter text-base leading-8 text-[#FDF8F0]/90 sm:text-lg">
            This 10-day itinerary combines Kenya's most celebrated wildlife
            destinations with the sandy beaches of the Indian Ocean, creating
            the perfect balance of adventure and relaxation.
          </p>

          <p className="mt-4 font-inter text-base leading-8 text-[#FDF8F0]/80 sm:text-lg">
            From Big Five encounters in the Masai Mara to Amboseli's elephants,
            Lake Nakuru's rhino sanctuary, Lake Naivasha's serene landscape, and
            the tropical setting of Diani Beach, this journey brings together
            Kenya's wildlife and coast in one guided safari.
          </p>
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

      {/* Destination Links */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl text-[#2A4A35] sm:text-4xl md:text-5xl">
            Explore Each Destination in Detail
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208]">
            Read the full itinerary, wildlife guide, best time to visit, and
            FAQs for each destination included in this package.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                href="/safari-tours/5-day-amboseli-nakuru-masai-mara"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#D4870A] px-5 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:bg-[#D4870A] hover:text-[#1C1208]"
              >
                5-Day Safari
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
          src={BLOB_IMAGES.DIANI_BEACH}
          alt="Diani Beach on the Kenya coast"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[rgba(28,18,8,0.72)]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-3xl text-white sm:text-4xl md:text-5xl">
            Interested in This Safari?
          </h2>

          <p className="mt-5 font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            This package is available for both private and group bookings.
            Contact us to check availability, confirm your dates, and discuss
            accommodation preferences.
          </p>

          <p className="mt-3 font-inter text-sm leading-relaxed text-white/80 sm:text-base">
            Send us your travel dates, group size, and any specific
            preferences. We respond within 24 hours.
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
