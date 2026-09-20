import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Binoculars,
  Building,
  Car,
  ChevronDown,
  MapPin,
  Plane,
  Star,
  Sunset,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Amboseli Safari Tours | 4-Day Kenya Safari from Nairobi | Danil Scenic Tours',
  description:
    'Experience an unforgettable Amboseli safari from Nairobi. 4-day all-inclusive package with elephant viewing, Kilimanjaro views, cultural visits, and Nairobi National Park.',
  alternates: {
    canonical: '/destinations/amboseli-safari-tours',
  },
  openGraph: {
    title:
      'Amboseli Safari Tours | 4-Day Kenya Safari from Nairobi | Danil Scenic Tours',
    description:
      'Experience an unforgettable Amboseli safari from Nairobi with elephant viewing, Kilimanjaro views, cultural visits, and Nairobi National Park.',
    url: '/destinations/amboseli-safari-tours',
    type: 'website',
    images: [
      {
        url: LOCAL_IMAGES.AMBOSELI_ELEPHANTS,
        alt: 'African elephants walking across Amboseli plains with Mount Kilimanjaro in background',
      },
    ],
  },
}

const inclusions = [
  {
    icon: Car,
    title: 'Transport in 4x4 Safari Land Cruisers',
    description:
      "All game drives are conducted in custom 4x4 Land Cruiser safari vehicles equipped with pop-up roofs for optimal wildlife viewing and photography. These vehicles are built for the rough terrain of Amboseli's dusty plains and provide a comfortable, secure ride.",
  },
  {
    icon: Building,
    title: 'Accommodation: Budget, Mid-Range, or Luxury',
    description:
      'Choose the accommodation tier that suits your travel style and budget. All options include full-board meals, comfortable lodging, and access to the same wildlife experiences.',
  },
  {
    icon: Binoculars,
    title: 'Game Drives with Experienced Guides',
    description:
      'Our driver-guides know Amboseli, including where elephant herds gather, where predators are often found, and the best times to photograph Mount Kilimanjaro.',
  },
  {
    icon: Users,
    title: 'Maasai Village Cultural Visit',
    description:
      'Visit a traditional Maasai village to meet community members, learn about their customs, traditional dances, beadwork, relationship with cattle, and connection to the land.',
  },
  {
    icon: Sunset,
    title: 'Observation Hill Sunset Experience',
    description:
      "Amboseli's Observation Hill offers panoramic views of the park, wetlands, wildlife, and Mount Kilimanjaro. On Day 2, enjoy a sunset picnic while overlooking the surrounding landscape.",
  },
  {
    icon: Star,
    title: 'Stargazing Under African Skies',
    description:
      "After dinner on Day 2, enjoy a guided stargazing session beneath Amboseli's clear night skies while learning to identify constellations and planets.",
  },
  {
    icon: UtensilsCrossed,
    title: 'All Meals, Park Fees, and Airport Transfers',
    description:
      'Full-board accommodation includes breakfast, lunch, and dinner. Amboseli National Park entrance fees, airport pickup, and drop-off at the end of your safari are also included.',
  },
  {
    icon: MapPin,
    title: 'Airport Pickup and Kimana Craft Stop on Day 1',
    description:
      'Your driver collects you from Jomo Kenyatta International Airport or your accommodation in Nairobi before travelling toward Amboseli. Along the way, stop in Kimana to browse handmade crafts and souvenirs from local artisans.',
  },
]

const itinerary = [
  {
    day: '1',
    title: 'JKIA Pickup, Kimana Souvenirs, and Journey to Amboseli',
    paragraphs: [
      "Your Amboseli adventure begins when our driver meets you at Jomo Kenyatta International Airport or your place of accommodation in Nairobi. From there, travel directly toward Amboseli as Nairobi's skyline gives way to the open landscapes of southern Kenya.",
      'En route to Amboseli, stop in Kimana to browse a market of handmade crafts and souvenirs. Local artisans display beadwork, carvings, textiles, and Maasai-inspired keepsakes.',
      'Arrive at the lodge in time for lunch, settle in, and enjoy a short rest. As the afternoon heat eases, head out on an evening game drive through Amboseli National Park. Watch for elephant herds gathering near the swamps as the sun begins to set over Mount Kilimanjaro. Return to the lodge for dinner.',
    ],
    accommodationTitle: 'Accommodation for Days 1-2',
    accommodation: [
      {
        tier: 'Luxury',
        name: 'Elewana Tortilis Camp',
      },
      {
        tier: 'Mid-Range',
        name: 'Ol Tukai Lodge',
      },
      {
        tier: 'Budget',
        name: 'Sentrim Amboseli',
      },
    ],
  },
  {
    day: '2',
    title: 'Game Drive and Cultural Experience',
    paragraphs: [
      'Wake up before dawn for an early morning game drive through Amboseli National Park. Early morning is one of the best times to see wildlife, with elephants moving toward the swamps, predators returning from nocturnal activity, and Mount Kilimanjaro often visible in the clear morning light.',
      'Your guide will take you through key wildlife areas while looking for elephant herds, lion prides, cheetahs, zebras, wildebeest, gazelles, and birdlife.',
      'Mid-morning, stop for a bush breakfast with coffee, pastries, and fresh fruit served in the wild.',
      'After breakfast, visit a Maasai village. Meet Maasai warriors and elders, learn about their semi-nomadic lifestyle, watch traditional dances, and learn about beadwork and community traditions.',
      'Return to the lodge for lunch and a rest during the heat of the day.',
      'In the afternoon, head out on another game drive and visit Observation Hill. From the top, enjoy panoramic views of the park, wetlands, elephants, hippos, the open plains, and Mount Kilimanjaro when visibility permits.',
      'Enjoy a sunset picnic on Observation Hill before returning to the lodge. After dinner, take part in a stargazing session beneath the Amboseli night sky.',
    ],
  },
  {
    day: '3',
    title: 'Return to Nairobi, Nairobi National Park, and Carnivore Dinner',
    paragraphs: [
      'After breakfast, check out of your lodge or camp and begin the drive back to Nairobi. The journey takes approximately 4 to 5 hours. Arrive around lunchtime, check into your hotel, and enjoy a rest.',
      "In the late afternoon, head out for a game drive at Nairobi National Park. With the Nairobi skyline as a backdrop, look for lions, rhinos, giraffes, zebras, buffalo, and other wildlife close to the city.",
      "End the day at the Carnivore Restaurant, one of Nairobi's well-known dining experiences. After dinner, you will be transferred back to your hotel.",
    ],
    accommodationTitle: 'Accommodation for Day 3',
    accommodation: [
      {
        tier: 'Package Selection',
        name: 'Nairobi hotel based on your chosen budget, mid-range, or luxury tier',
      },
    ],
  },
  {
    day: '4',
    title: 'Departure from JKIA',
    paragraphs: [
      'After breakfast at your hotel, your Amboseli safari comes to a close. Depending on your flight time, your driver will transfer you to Jomo Kenyatta International Airport at the appropriate time.',
      'If your flight is later in the day, there may be time for a relaxed morning in Nairobi before your airport transfer. Your driver will advise on timing based on your departure schedule.',
    ],
  },
]

const accommodationRows = [
  {
    tier: 'Luxury',
    lodge: 'Elewana Tortilis Camp',
    expectation:
      'Elegant en suite tents, main lounge and dining areas, spa, swimming pool, bar lounge, bush meals, and sundowner experiences.',
  },
  {
    tier: 'Mid-Range',
    lodge: 'Ol Tukai Lodge',
    expectation:
      'Chalet-style rooms with views of Mount Kilimanjaro or the wetlands, en suite bathrooms, swimming pool, restaurant, bars, and spa facilities.',
  },
  {
    tier: 'Budget',
    lodge: 'Sentrim Amboseli',
    expectation:
      'En suite safari tents with private verandas, restaurant, buffet meals, bar and lounge, and swimming pool.',
  },
]

const seasons = [
  {
    title: 'June to October: Dry Season',
    description:
      'This is peak season for Amboseli. Drier weather generally brings clearer skies, strong wildlife viewing around water sources, easier road access, and good photography conditions.',
  },
  {
    title: 'January to February: Short Dry Season',
    description:
      'Another strong period for visiting Amboseli. The weather is generally warm and dry, Mount Kilimanjaro is often visible, and wildlife remains abundant.',
  },
  {
    title: 'November to December: Short Rains',
    description:
      'Brief afternoon showers turn the landscape green. Cloud cover can affect Kilimanjaro visibility, but dramatic skies and vibrant vegetation create excellent photography opportunities.',
  },
  {
    title: 'March to May: Long Rains',
    description:
      'The long rains can bring heavy afternoon showers and cloudier mountain views. This period can be particularly rewarding for birdwatching and travelers seeking lower seasonal rates.',
  },
]

const whyDanil = [
  {
    title: 'Nairobi-Based Local Operator',
    description:
      'Danil Scenic Tours is based in Kahawa West, Nairobi, giving you a locally based team managing your safari from arrival through departure.',
  },
  {
    title: 'All-Inclusive Pricing with No Hidden Costs',
    description:
      'Transport, accommodation, meals, park fees, Maasai village visit, Observation Hill sunset, stargazing, Nairobi attractions tour, and airport transfers are included.',
  },
  {
    title: 'Flexible Departures',
    description:
      'Daily departures from Nairobi are available, while private safaris can be arranged around your preferred travel dates.',
  },
  {
    title: 'Expert Guides',
    description:
      'Driver-guides manage your wildlife experience, safari logistics, and journey from start to finish.',
  },
  {
    title: 'Responsible Tourism',
    description:
      'Danil Scenic Tours works with accommodation partners that support local communities and follows responsible wildlife viewing practices.',
  },
]

const packing = [
  'Lightweight, neutral-coloured clothing such as khaki, olive, or beige',
  'Long-sleeved shirts and trousers for sun and insect protection',
  'Wide-brimmed hat and sunglasses',
  'Comfortable walking shoes or hiking boots',
  'Light jacket or fleece for early mornings and evenings',
  'Swimsuit if your lodge has a pool',
  'Binoculars and camera with zoom lens',
  'Sunscreen and insect repellent',
  'Reusable water bottle',
  'Small daypack for game drives',
]

const healthSafety = [
  'Yellow fever vaccination certificate',
  'Malaria prophylaxis recommended, consult your doctor',
  'Stay hydrated during game drives',
]

const photography = [
  'Bring extra memory cards and batteries',
  'Use a zoom lens of 200mm or higher for wildlife photography',
  'Shoot in early morning or late afternoon for better light',
  'Respect wildlife and do not request off-road driving or harassment of animals for a photograph',
]

const bookingTimeline = [
  'Book at least 3 to 6 months in advance for peak season from June to October',
  'Book 4 to 8 weeks in advance for the November to May period',
  'Contact us for last-minute availability',
]

const faqs = [
  {
    question: 'How much does a 4-day Amboseli safari from Nairobi cost?',
    answer:
      'The cost depends on the accommodation tier you choose and the size of your group. Contact us for a detailed quote based on your travel dates and preferences.',
  },
  {
    question: 'Can I see Mount Kilimanjaro from Amboseli?',
    answer:
      'Yes. Amboseli offers views of Kilimanjaro from Kenyan soil. The mountain is often visible on clear mornings, particularly during the June to October and January to February dry periods. Cloud cover can affect visibility during rainy months.',
  },
  {
    question: 'Is Amboseli good for seeing elephants?',
    answer:
      'Yes. Amboseli is especially well known for its elephant herds and open landscapes that provide excellent opportunities for elephant viewing and photography.',
  },
  {
    question: 'Can I do a shorter safari, 2 or 3 days instead of 4?',
    answer:
      'Yes. While the 4-day package includes the Kimana craft stop, Observation Hill sunset, Nairobi National Park game drive, and Carnivore dinner, shorter 2-day or 3-day packages can be customised.',
  },
  {
    question: 'What is the minimum and maximum group size?',
    answer:
      'The minimum group size is 7. There is no stated maximum group size. For larger groups, multiple vehicles can be arranged.',
  },
  {
    question: 'Do you offer private safaris, or only group tours?',
    answer:
      'We offer both. Private safaris provide a dedicated vehicle and guide, while group safaris provide a shared experience at a lower per-person cost.',
  },
  {
    question: 'Is it safe to travel to Amboseli?',
    answer:
      'Amboseli is an established safari destination. Danil Scenic Tours guides follow safari safety procedures, and wildlife encounters are managed from appropriate distances.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept Mpesa, bank transfer, and card payments. Cash is accepted but is highly discouraged.',
  },
]

const destinationLinks = [
  {
    title: 'Maasai Mara Safari Tours',
    description: 'Great Migration and big cat experiences',
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    title: 'Tsavo Safari Tours',
    description: 'Large wilderness areas and varied landscapes',
    href: '/destinations/tsavo-safari-tours',
  },
  {
    title: 'Ol Pejeta Conservancy',
    description: 'Big Five safari and rhino conservation',
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    title: 'Lake Naivasha Safari',
    description: "Boat rides, Hell's Gate, and walking safaris",
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    title: 'Nairobi National Park',
    description: 'Wildlife and city attractions in Nairobi',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    title: 'Lake Nakuru Safari',
    description: 'Rhinos, birdlife, and Rift Valley scenery',
    href: '/destinations/lake-nakuru-safari-tours',
  },
]

export default function AmboseliPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={LOCAL_IMAGES.AMBOSELI_ELEPHANTS}
          alt="African elephants walking across Amboseli plains with Mount Kilimanjaro in background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.78)_0%,rgba(28,18,8,0.28)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Amboseli Safari Tours
          </p>

          <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Amboseli Safari Tours: Witness Elephants Against the Backdrop of
            Mount Kilimanjaro
          </h1>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            A 4-day safari from Nairobi combining Amboseli wildlife,
            Kilimanjaro views, Maasai culture, and a Nairobi city experience.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Safari Pricing
            </Link>

            <Link
              href="/book?tour=Amboseli+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Plan This Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            If you are seeking Africa's iconic elephant experience, Amboseli
            National Park should be high on your safari list. Located at the
            foot of Mount Kilimanjaro, Amboseli brings together elephant herds,
            golden plains, wetlands, predators, and one of Kenya's most
            recognisable landscapes.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            An Amboseli safari from Nairobi brings you face-to-face with
            elephants alongside lions, cheetahs, zebras, birdlife, and views of
            Mount Kilimanjaro. This 4-day package includes wildlife, cultural
            experiences, accommodation choices, and guided transport from
            Nairobi.
          </p>
        </div>
      </section>

      {/* Why Amboseli */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
            What Makes an Amboseli Safari Unforgettable
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Elephant Viewing
              </h3>

              <p className="mt-3 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
                Amboseli is renowned for elephant viewing. Its open terrain and
                wetlands create excellent opportunities to observe herds,
                calves, and large tuskers across the plains.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Mount Kilimanjaro as the Backdrop
              </h3>

              <p className="mt-3 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
                Mount Kilimanjaro lies across the border in Tanzania, while
                Amboseli provides dramatic views of the mountain from Kenya.
                Clear mornings can create memorable wildlife photography
                opportunities with the mountain behind the park's plains.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Starting Your Safari from Nairobi
              </h3>

              <p className="mt-3 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
                Nairobi is Kenya's main international gateway through Jomo
                Kenyatta International Airport. This package combines airport
                pickup, a Kimana craft stop, Amboseli game drives, Nairobi
                National Park, and a Carnivore dinner into one itinerary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            What's Included in Your Amboseli Safari Package
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            The package combines transport, accommodation, guided wildlife
            experiences, meals, park access, cultural activities, and
            transfers.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {inclusions.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      size={26}
                      className="mt-1 shrink-0 text-[#D4870A]"
                      aria-hidden="true"
                    />

                    <div>
                      <h3 className="font-montserrat text-base font-bold leading-snug text-[#2A4A35] sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                        {item.description}
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
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:mb-14 md:text-5xl">
            4-Day Amboseli Safari Itinerary from Nairobi
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

                <div className="space-y-4 p-5 sm:p-6 md:p-8">
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-inter text-sm leading-7 text-[#1C1208] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {item.accommodation && (
                    <div className="pt-3">
                      <p className="mb-3 font-montserrat text-sm font-semibold text-[#2A4A35]">
                        {item.accommodationTitle}:
                      </p>

                      <div
                        className={`grid grid-cols-1 gap-3 ${
                          item.accommodation.length === 3
                            ? 'sm:grid-cols-3'
                            : ''
                        }`}
                      >
                        {item.accommodation.map((stay) => (
                          <div
                            key={stay.tier}
                            className="rounded-xl bg-[#FAF4E8] p-4"
                          >
                            <p className="mb-1 font-montserrat text-xs font-semibold text-[#D4870A]">
                              {stay.tier}
                            </p>

                            <p className="font-inter text-sm text-[#1C1208]">
                              {stay.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Accommodation Options for Every Budget
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Choose from luxury, mid-range, or budget accommodation for the
            Amboseli portion of your safari.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {accommodationRows.map((row) => (
              <article
                key={row.tier}
                className="rounded-2xl border border-[#D4870A]/20 bg-white p-5 shadow-sm sm:p-6"
              >
                <p className="font-montserrat text-sm font-bold text-[#D4870A]">
                  {row.tier}
                </p>

                <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                  {row.lodge}
                </h3>

                <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {row.expectation}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-[#D4870A] bg-white p-5 sm:p-6">
            <p className="text-center font-inter text-sm leading-relaxed text-[#1C1208]">
              <strong className="font-montserrat text-[#2A4A35]">
                Important:
              </strong>{' '}
              All accommodation tiers include full-board meals, access to the
              same wildlife areas, and the same guiding. The main difference is
              the level of comfort and amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Best Time to Visit Amboseli from Nairobi
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Amboseli is a year-round safari destination, but the experience
            changes with the seasons.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {seasons.map((season) => (
              <article
                key={season.title}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8"
              >
                <h3 className="font-playfair text-2xl font-bold leading-tight text-[#2A4A35]">
                  {season.title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {season.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#D4870A] p-6 text-center sm:p-8">
            <p className="font-montserrat text-lg font-bold text-white">
              Safari Planning Tip
            </p>

            <p className="mx-auto mt-2 max-w-3xl font-inter text-sm leading-relaxed text-white sm:text-base">
              For elephant photography with Mount Kilimanjaro in the
              background, June to October and January to February are strong
              periods. Travelers seeking greener landscapes and fewer crowds
              may prefer the wetter months.
            </p>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            How to Get from Nairobi to Amboseli
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base text-[#1C1208] sm:text-lg">
            There are two main ways to travel from Nairobi to Amboseli.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Car
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  By Road, 4 to 5 Hours
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Travelling by road lets you experience the landscapes of
                southern Kenya as part of the safari. The journey includes
                stops for refreshments and continues into Amboseli in a 4x4
                safari vehicle.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Plane
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  By Air, About 30 Minutes
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Fly-in options depart from Wilson Airport in Nairobi and land
                at Amboseli Airstrip. This option reduces travel time and
                provides aerial views of the surrounding landscape.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-[#D4870A] bg-[#F2E8D5] p-5 sm:p-6">
            <p className="font-inter text-sm leading-relaxed text-[#1C1208]">
              <strong className="font-montserrat text-[#2A4A35]">
                Which option should you choose?
              </strong>{' '}
              Choose the road journey if you enjoy scenic drives and stops
              along the way. Choose the flight option if reducing travel time
              is your priority.
            </p>
          </div>
        </div>
      </section>

      {/* Why Danil */}
      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Why Book Your Amboseli Safari with Danil Scenic Tours
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

      {/* Planning */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Practical Safari Planning Checklist
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                What to Pack
              </h3>

              <ul className="mt-4 space-y-2">
                {packing.map((item) => (
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

            <div className="space-y-5">
              <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                  Health and Safety
                </h3>

                <ul className="mt-4 space-y-2">
                  {healthSafety.map((item) => (
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
                <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                  Photography Tips
                </h3>

                <ul className="mt-4 space-y-2">
                  {photography.map((item) => (
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
                <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                  Booking Timeline
                </h3>

                <ul className="mt-4 space-y-2">
                  {bookingTimeline.map((item) => (
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
            Explore more destination guides and safari planning pages.
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

                <Link
                  href="/about"
                  className="flex min-h-12 items-center justify-between rounded-lg border border-[#D4870A]/20 px-4 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:text-[#D4870A]"
                >
                  About Danil Scenic Tours
                  <ChevronDown
                    size={16}
                    className="-rotate-90"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={LOCAL_IMAGES.AMBOSELI_ELEPHANTS}
          alt="Elephant herd in Amboseli National Park with Mount Kilimanjaro in background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.76)_0%,rgba(28,18,8,0.30)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Ready to Book Your Amboseli Adventure?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Whether you want to photograph elephants with Mount Kilimanjaro in
            the background, experience Maasai culture, or watch the sunset from
            Observation Hill, start by sending us your travel dates and group
            size.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book?tour=Amboseli+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              Start Planning
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
