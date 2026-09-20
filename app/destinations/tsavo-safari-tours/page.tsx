import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Binoculars,
  Car,
  ChevronDown,
  Droplets,
  Fish,
  Flame,
  Shield,
  Train,
  UtensilsCrossed,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { BLOB_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Tsavo National Park Safari from Nairobi | Tsavo East & West | Danil Scenic Tours',
  description:
    'Explore Tsavo East and Tsavo West on a 3-day safari from Nairobi with Danil Scenic Tours. See red elephants, Mzima Springs, Shetani Lava Flow, rhinos, and more.',
  alternates: {
    canonical: '/destinations/tsavo-safari-tours',
  },
  openGraph: {
    title:
      'Tsavo National Park Safari from Nairobi | Danil Scenic Tours',
    description:
      'Discover Tsavo East and Tsavo West on a 3-day Kenya safari from Nairobi with guided game drives, full board accommodation, and park fees included.',
    url: '/destinations/tsavo-safari-tours',
    type: 'website',
    images: [
      {
        url: BLOB_IMAGES.TSAVO_EAST,
        alt: 'Tsavo National Park safari in Kenya',
      },
    ],
  },
}

const inclusions = [
  {
    icon: Train,
    title: 'Transport Options: SGR Train or Road',
    description:
      'We offer two transport options from Nairobi to Tsavo. The SGR train travels from Nairobi to Voi in approximately 4 hours with comfortable seating, air conditioning, and countryside views. Road transfers use a 4x4 safari vehicle and take approximately 5 to 6 hours with refreshment stops.',
  },
  {
    icon: Binoculars,
    title: 'Game Drives in Both Tsavo East and Tsavo West',
    description:
      'Your safari covers both parks. Tsavo East is known for open plains, Red Elephants, and Aruba Dam. Tsavo West features volcanic landscapes, Mzima Springs, and the Ngulia Rhino Sanctuary.',
  },
  {
    icon: Fish,
    title: 'Mzima Springs Underwater Viewing Chamber',
    description:
      'Visit Mzima Springs and use the underwater viewing area to observe aquatic life in the clear spring water, including hippos and crocodiles when present.',
  },
  {
    icon: Flame,
    title: 'Shetani Lava Flow Exploration',
    description:
      'Explore the black volcanic landscape of the Shetani Lava Flow while your guide explains its geology and the local stories associated with the area.',
  },
  {
    icon: Shield,
    title: 'Ngulia Rhino Sanctuary Visit',
    description:
      'Visit the Ngulia Rhino Sanctuary in Tsavo West, an important protected area for endangered black rhinos and rhino conservation.',
  },
  {
    icon: Droplets,
    title: 'Aruba Dam Wildlife Viewing',
    description:
      'Aruba Dam in Tsavo East attracts wildlife to its water source, particularly during dry conditions. Elephants, buffaloes, zebras, predators, and numerous bird species may be encountered in the area.',
  },
  {
    icon: UtensilsCrossed,
    title: 'All Meals, Park Fees, and Airport Transfers',
    description:
      'Full-board accommodation includes breakfast, lunch, and dinner throughout your stay. Tsavo East and Tsavo West park entry fees, airport pickup, and drop-off are also included.',
  },
]

const itinerary = [
  {
    day: '1',
    title: 'Nairobi to Tsavo East via SGR',
    paragraphs: [
      'Your Tsavo safari begins at Jomo Kenyatta International Airport. Our driver will meet you at arrivals and transfer you to Nairobi Terminus, the SGR train station. Board the SGR train to Voi, the gateway to Tsavo National Park. The journey takes approximately 4 hours and provides countryside views along the route.',
      "Upon arrival in Voi, our guide will meet you at the station and transfer you to your safari vehicle. Begin a game drive en route to the lodge, looking for Tsavo's Red Elephants, giraffes, zebras, buffaloes, and other wildlife.",
      'Check into your lodge in Tsavo East and enjoy lunch. Spend part of the afternoon relaxing before heading back into the park.',
      'In the late afternoon, depart for a sunset game drive around the Aruba Dam area. The water source attracts wildlife and birdlife, creating excellent viewing opportunities toward the end of the day.',
      'Return to the lodge for dinner and overnight.',
    ],
    accommodationTitle: 'Accommodation for Day 1',
    accommodation: [
      {
        tier: 'Luxury',
        name: 'Satao Camp or Salt Lick Safari Lodge',
      },
      {
        tier: 'Mid-Range',
        name: 'Sentrim Tsavo Lodge or Severin Lodge Camp',
      },
      {
        tier: 'Budget',
        name: 'Sagala Lodge or Manyatta Camp',
      },
    ],
  },
  {
    day: '2',
    title: 'Tsavo East to Tsavo West Full-Day Experience',
    paragraphs: [
      'Wake before dawn for a sunrise game drive through Tsavo East National Park. Early morning offers cooler conditions, active wildlife, and softer light for photography.',
      'Your guide will explore deeper sections of Tsavo East while looking for elephants, lions, cheetahs, zebras, giraffes, elands, fringe-eared oryx, and other wildlife.',
      "Return to the lodge for breakfast, then check out and begin your journey toward Tsavo West. The transfer continues through wildlife country as the landscape changes from Tsavo East's open plains to the volcanic hills and woodlands of Tsavo West.",
      'Visit the Ngulia Rhino Sanctuary and learn about black rhino conservation in the region.',
      'Continue through Tsavo West before checking into your lodge for lunch and a short rest.',
      'In the afternoon, visit Mzima Springs, a natural oasis fed by underground water from the Chyulu Hills. Explore the springs and underwater viewing area.',
      'Continue to the Shetani Lava Flow, where the dark volcanic landscape provides a dramatic contrast to the surrounding bush.',
      'Return to the lodge for dinner and overnight in Tsavo West.',
    ],
    accommodationTitle: 'Accommodation for Day 2',
    accommodation: [
      {
        tier: 'Luxury',
        name: 'Satao Camp or Salt Lick Safari Lodge',
      },
      {
        tier: 'Mid-Range',
        name: 'Sentrim Tsavo Lodge or Severin Lodge Camp',
      },
      {
        tier: 'Budget',
        name: 'Sagala Lodge or Manyatta Camp',
      },
    ],
  },
  {
    day: '3',
    title: 'Final Game Drive and Return to Nairobi',
    paragraphs: [
      'Wake early for a final morning game drive in Tsavo West. This is your final opportunity to search for wildlife you may not yet have encountered and to revisit key areas of the park.',
      'Depending on timing, the morning may include locations such as Roaring Rocks or other sites that were not covered the previous day.',
      'Return to the lodge for breakfast, check out, and begin the return journey to Nairobi. Lunch is taken en route with stops for refreshments and photographs.',
      'By late afternoon, arrive in Nairobi for drop-off at Jomo Kenyatta International Airport or your hotel if you are extending your stay.',
    ],
  },
]

const accommodationRows = [
  {
    tier: 'Luxury',
    lodges: 'Satao Camp, Salt Lick Safari Lodge',
    expectation:
      'Spacious tented suites or distinctive safari rooms, en suite bathrooms, wildlife views, dining facilities, swimming pools, and personalised service.',
  },
  {
    tier: 'Mid-Range',
    lodges: 'Sentrim Tsavo Lodge, Severin Lodge Camp',
    expectation:
      'Comfortable tented accommodation or lodge rooms with en suite bathrooms, buffet-style meals, established facilities, and convenient safari access.',
  },
  {
    tier: 'Budget',
    lodges: 'Sagala Lodge, Manyatta Camp',
    expectation:
      'Clean rooms or tents, full-board meals, practical facilities, and access to the same scheduled game-drive areas.',
  },
]

const seasons = [
  {
    title: 'June to October: Dry Season',
    description:
      'Peak safari season with wildlife concentrating around water sources. Conditions are generally favourable for game viewing and photography.',
  },
  {
    title: 'January to February: Short Dry Season',
    description:
      'Warm and dry conditions with strong wildlife viewing and generally fewer visitors than the main June to October period.',
  },
  {
    title: 'November to December: Short Rains',
    description:
      'Greener landscapes, dramatic skies, fewer visitors, and seasonal changes in wildlife activity.',
  },
  {
    title: 'March to May: Long Rains',
    description:
      'The landscape becomes greener and birdlife can be particularly rewarding. Some roads may become muddy and many accommodation providers offer lower seasonal rates.',
  },
]

const eastHighlights = [
  'Larger and flatter than Tsavo West',
  'Open savannah grasslands and acacia woodlands',
  'Famous for Red Elephants dusted in red soil',
  'Aruba Dam wildlife viewing',
  'Mudanda Rock viewpoint',
  'Galana River',
  'Open terrain that can make wildlife easier to spot',
]

const westHighlights = [
  'More varied terrain with volcanic hills, lava flows, and springs',
  'Mzima Springs and underwater viewing area',
  'Shetani Lava Flow',
  'Ngulia Rhino Sanctuary',
  'Roaring Rocks viewpoint',
  'Leopard habitat',
  'Dramatic scenery and varied landscapes',
]

const whyDanil = [
  {
    title: 'Nairobi-Based Local Operator',
    description:
      'Danil Scenic Tours is based in Nairobi and manages the journey from your pickup through the safari and return transfer.',
  },
  {
    title: 'All-Inclusive Safari Package',
    description:
      'Transport, accommodation, meals, park fees, scheduled Tsavo activities, and airport transfers are included in the safari package.',
  },
  {
    title: 'Flexible Departures',
    description:
      'Departures can be arranged from Nairobi, with private safari dates planned around your travel schedule.',
  },
  {
    title: 'Responsible Tourism',
    description:
      'We work with safari accommodation partners and guides who support responsible tourism and ethical wildlife viewing practices.',
  },
]

const packing = [
  'Lightweight, neutral-coloured clothing',
  'Long-sleeved shirts and trousers',
  'Wide-brimmed hat and sunglasses',
  'Comfortable walking shoes',
  'Light jacket for early mornings',
  'Binoculars and camera with zoom lens',
  'Sunscreen and insect repellent',
  'Reusable water bottle',
]

const healthSafety = [
  'Yellow fever vaccination certificate',
  'Malaria prophylaxis recommended, consult your doctor',
  'Stay hydrated during game drives',
]

const photography = [
  'Bring extra memory cards and batteries',
  'Use a zoom lens of 200mm or higher',
  'Photograph wildlife in early morning or late afternoon when possible',
  'Respect wildlife and maintain appropriate distances',
]

const bookingTimeline = [
  'Book 3 to 6 months in advance for peak season from June to October',
  'Book 4 to 8 weeks in advance for other periods',
  'Contact us for last-minute availability',
]

const faqs = [
  {
    question: 'How much does a 3-day Tsavo safari cost?',
    answer:
      'The cost depends on your accommodation tier and group size. Full current pricing is available on our Kenya Safari Packages page.',
  },
  {
    question: 'Is Tsavo safe?',
    answer:
      'Tsavo is an established safari destination. Our guides follow safari safety procedures throughout game drives and transfers.',
  },
  {
    question: 'Can I see the Big Five in Tsavo?',
    answer:
      'Tsavo is home to lion, leopard, elephant, buffalo, and rhinoceros. Wildlife sightings are never guaranteed, but all five species occur within the wider Tsavo ecosystem.',
  },
  {
    question: 'What is the difference between Tsavo and Maasai Mara?',
    answer:
      'They offer different safari experiences. Maasai Mara is known for the Great Migration and concentrated wildlife viewing, while Tsavo is much larger and known for wide landscapes, Red Elephants, volcanic scenery, and a more remote wilderness experience.',
  },
  {
    question: 'Do you offer private safaris or only group tours?',
    answer:
      'Both options are available. Private safaris provide a dedicated vehicle and guide, while group safaris provide a shared experience.',
  },
  {
    question: 'Can I combine Tsavo with other parks?',
    answer:
      'Yes. Tsavo can be combined with other Kenya safari destinations depending on your available time and preferred itinerary.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept Mpesa, bank transfer, and card payments. Cash is discouraged.',
  },
  {
    question: 'What is the minimum group size?',
    answer:
      'The minimum group size is 7. Larger groups can be accommodated using multiple vehicles where required.',
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

export default function TsavoPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={BLOB_IMAGES.TSAVO_EAST}
          alt="Tsavo National Park safari landscape in Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.78)_0%,rgba(28,18,8,0.28)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Tsavo East & Tsavo West
          </p>

          <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Tsavo National Park Safari from Nairobi
          </h1>

          <p className="mx-auto mt-5 max-w-2xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Discover Kenya's Wildest Frontier
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Safari Pricing
            </Link>

            <Link
              href="/book?tour=Tsavo+Safari"
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
            If you are seeking a safari experience beyond Kenya's busier
            reserves, Tsavo offers vast landscapes and a strong sense of
            wilderness. Split into Tsavo East and Tsavo West, the ecosystem is
            known for Red Elephants, volcanic terrain, natural springs, broad
            plains, and varied wildlife.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Our 3-day Tsavo safari from Nairobi covers both Tsavo East and
            Tsavo West, combining game drives with locations such as Aruba Dam,
            Mzima Springs, the Shetani Lava Flow, and Ngulia Rhino Sanctuary.
          </p>
        </div>
      </section>

      {/* What Makes Tsavo Special */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
            What Makes a Tsavo Safari Unforgettable
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Kenya's Largest National Park System
              </h3>

              <p className="mt-3 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
                Tsavo East and Tsavo West together create an enormous
                wilderness. Its scale means game drives can feel quieter and
                more remote than those in Kenya's smaller safari areas.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                The Legendary Red Elephants
              </h3>

              <p className="mt-3 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
                Tsavo is famous for elephants that coat themselves in the
                region's red soil, creating the distinctive appearance that
                earned them the name Red Elephants.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                The Man-Eaters of Tsavo
              </h3>

              <p className="mt-3 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
                Tsavo also has a famous place in Kenya's railway history. During
                construction of the Uganda Railway in 1898, two male lions
                attacked railway workers and became known as the Man-Eaters of
                Tsavo.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Volcanic Landscapes and Natural Springs
              </h3>

              <p className="mt-3 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
                Tsavo West includes volcanic terrain such as the Shetani Lava
                Flow alongside Mzima Springs, creating a dramatically different
                landscape from the open plains of Tsavo East.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Starting Your Safari from Nairobi
              </h3>

              <p className="mt-3 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
                Nairobi provides both road access and the SGR rail connection
                toward Voi. Danil Scenic Tours can arrange the transfer,
                safari vehicle, accommodation, park visits, and return journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            What's Included in Your Tsavo Safari Package
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            The package combines transport, game drives, full-board
            accommodation, park access, guided activities, and transfers.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {inclusions.map((item, index) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8 ${
                    index === inclusions.length - 1
                      ? 'sm:col-span-2'
                      : ''
                  }`}
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
            3-Day Tsavo Safari Itinerary from Nairobi
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

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {item.accommodation.map((stay) => (
                          <div
                            key={stay.tier}
                            className="rounded-xl bg-[#FAF4E8] p-4"
                          >
                            <p className="mb-1 font-montserrat text-xs font-semibold text-[#D4870A]">
                              {stay.tier}
                            </p>

                            <p className="font-inter text-sm leading-relaxed text-[#1C1208]">
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
            Choose the accommodation level that matches your preferred comfort
            and budget.
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

                <h3 className="mt-2 font-playfair text-2xl font-bold leading-tight text-[#2A4A35]">
                  {row.lodges}
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
              Accommodation tiers differ mainly in comfort and amenities. The
              scheduled safari route and wildlife areas remain the same.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Best Time to Visit Tsavo from Nairobi
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Tsavo can be visited throughout the year, with conditions changing
            between dry and rainy seasons.
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
              June to October and January to February generally provide drier
              game-viewing conditions. The wetter periods bring greener
              landscapes, birdlife, and fewer visitors.
            </p>
          </div>
        </div>
      </section>

      {/* East vs West */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Tsavo East vs. Tsavo West: What's the Difference?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            The two parks share one ecosystem but offer noticeably different
            landscapes and safari experiences.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Tsavo East: Open Plains and Red Elephants
              </h3>

              <ul className="mt-5 space-y-2">
                {eastHighlights.map((item) => (
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

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Tsavo West: Volcanic Landscapes and Springs
              </h3>

              <ul className="mt-5 space-y-2">
                {westHighlights.map((item) => (
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

          <div className="mt-8 rounded-2xl border-l-4 border-[#D4870A] bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
              Why Visit Both?
            </h3>

            <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
              The 3-day safari covers both because they provide complementary
              experiences. Tsavo East focuses on open landscapes and classic
              game viewing, while Tsavo West adds volcanic terrain, natural
              springs, rhino conservation, and dramatic viewpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            How to Get from Nairobi to Tsavo
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Train
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  By SGR Train
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                The Standard Gauge Railway connects Nairobi with Voi, one of
                the main gateways to Tsavo. The journey takes approximately 4
                hours. On arrival, your safari guide meets you for the transfer
                into the park.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Car
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  By Road, 5 to 6 Hours
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Travel from Nairobi in a 4x4 safari vehicle with stops for
                refreshments along the way. This option offers more flexibility
                for stops during the journey.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why Danil */}
      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Why Book Your Tsavo Safari with Danil Scenic Tours
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
            Explore more destination guides and Kenya safari planning pages.
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

              <p className="mt-6 font-inter text-sm leading-relaxed text-[#1C1208]">
                Tsavo can also be combined with other Kenya safari
                destinations depending on your available time and preferred
                route.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={BLOB_IMAGES.TSAVO_EAST}
          alt="Tsavo safari landscape in Kenya"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.78)_0%,rgba(28,18,8,0.32)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Ready to Book Your Tsavo Adventure?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Explore Tsavo East and Tsavo West, search for Red Elephants, visit
            Mzima Springs, and experience one of Kenya's largest wilderness
            areas.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Pricing
            </Link>

            <Link
              href="/book?tour=Tsavo+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Start Planning
            </Link>

            <Link
              href="https://wa.me/254722919249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-[#25D366] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-[#25D366] sm:text-base"
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
