import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Binoculars,
  CheckCircle2,
  Compass,
  Mountain,
  Palmtree,
  SlidersHorizontal,
  Users,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import {
  BLOB_IMAGES,
  DESTINATION_IMAGES,
  LOCAL_IMAGES,
} from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Kenya Safari Guide: Types, Destinations & Planning Tips | Danil Scenic Tours',
  description:
    'Your complete Kenya safari guide. Explore safari types, top wildlife destinations, combination packages, and planning tips from Nairobi-based Danil Scenic Tours.',
  alternates: {
    canonical: '/safari-tours',
  },
  openGraph: {
    title:
      'Kenya Safari Guide: Types, Destinations & Planning Tips | Danil Scenic Tours',
    description:
      'Your complete Kenya safari guide. Explore safari types, top wildlife destinations, combination packages, and planning tips from Nairobi-based Danil Scenic Tours.',
    url: '/safari-tours',
    type: 'website',
    images: [
      {
        url: BLOB_IMAGES.MAASAI_MARA,
        alt: 'Kenya safari wildlife experience',
      },
    ],
  },
}

const safariTypes = [
  {
    icon: Binoculars,
    title: 'Game Drive Safaris',
    description:
      'This is the classic Kenya safari. You travel through national parks and conservancies in a 4x4 Land Cruiser with a pop-up roof, spotting wildlife at close range.',
    extra:
      'Expect Big Five sightings, hundreds of bird species, wildebeest herds, cheetahs, and giraffes depending on where you go. Most game drives run early morning and late afternoon, when animals are most active.',
  },
  {
    icon: Users,
    title: 'Cultural Expeditions',
    description:
      "Kenya's culture is as rich as its wildlife. Cultural safaris take you into Maasai warrior communities, the Swahili heritage of Old Town Mombasa, and living traditions that have been preserved for centuries.",
    extra:
      'These experiences are built around genuine interactions, including guided visits, traditional food, and craft demonstrations.',
  },
  {
    icon: Mountain,
    title: 'Adventure Safaris',
    description:
      "For those who want to do more than watch from a vehicle. Adventure safaris include hiking through Hell's Gate National Park, walking safaris on Crescent Island, and cycling routes through dramatic Rift Valley scenery.",
    extra:
      'These are ideal for fit travellers who want an active, ground-level safari experience alongside the wildlife.',
  },
  {
    icon: Palmtree,
    title: 'Beach Escapes',
    description:
      "Kenya's Indian Ocean coastline offers white sand beaches, warm water, coral reefs, and a relaxed coastal pace, making it a natural way to end a safari itinerary.",
    extra:
      'Diani Beach, south of Mombasa, pairs naturally with Maasai Mara for a classic wildlife-and-beach combination.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Custom Safaris',
    description:
      'Every traveler is different. If none of the standard itineraries fit your dates, group size, or interests, Danil Scenic Tours builds packages around you.',
    extra:
      'Tell us your budget, preferred dates, and what you want to experience. We handle everything from there.',
  },
]

const destinations = [
  {
    name: 'Maasai Mara',
    subtitle: 'The Great Migration',
    image: DESTINATION_IMAGES.MAASAI_MARA,
    description:
      "Kenya's most iconic destination. Home to the Great Migration and year-round big cat sightings across open grassland.",
    highlights: [
      'Big Five: lion, elephant, leopard, buffalo, rhino',
      'Annual wildebeest migration from July to October',
      '4-day / 3-night recommended stay',
      'Best time: July to October, January to February',
    ],
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    name: 'Amboseli',
    subtitle: 'Elephants & Kilimanjaro',
    image: DESTINATION_IMAGES.AMBOSELI,
    description:
      'Famous for large elephant herds and Mount Kilimanjaro rising above the plains. A beautiful, relatively compact park ideal for photography.',
    highlights: [
      'Large elephant herds',
      'Clear Kilimanjaro views, especially in the morning',
      '3-day / 2-night recommended stay',
      'Best time: June to October, January to February',
    ],
    href: '/destinations/amboseli-safari-tours',
  },
  {
    name: 'Tsavo',
    subtitle: "Kenya's Largest Wilderness",
    image: BLOB_IMAGES.TSAVO_EAST,
    description:
      "Tsavo East and West together form Kenya's largest national park. Red dust, dramatic landscapes, and large herds create a different safari experience.",
    highlights: [
      'Red elephants from the volcanic soil',
      "Yatta Plateau, the world's longest lava flow",
      '3-day / 2-night recommended stay',
      'Best time: June to October, December to March',
    ],
    href: '/destinations/tsavo-safari-tours',
  },
  {
    name: 'Nairobi',
    subtitle: 'Safari in the City',
    image: LOCAL_IMAGES.ZEBRAS_SAVANNA,
    description:
      'A full-day experience combining a Nairobi National Park game drive, the Giraffe Centre, and Kazuri Beads.',
    highlights: [
      'Lions, rhinos, and giraffes against the Nairobi skyline',
      'Giraffe Centre experience',
      'Lunch at Tamambo Karen Blixen Restaurant',
      '1-day experience, ideal as an add-on',
    ],
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    name: 'Ol Pejeta',
    subtitle: 'Big Five Conservation',
    image: LOCAL_IMAGES.ELEPHANT_KILIMANJARO,
    description:
      'Ol Pejeta Conservancy combines Big Five game drives with active wildlife conservation in the central highlands.',
    highlights: [
      'Black rhinos and the last northern white rhinos',
      'Elephants, lions, leopards, cheetahs, and hyenas',
      '2-day / 1-night stay at Maisha Sweetwaters Camp',
      'Scenic drive through the central Kenya highlands',
    ],
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    name: 'Lake Naivasha',
    subtitle: "Hippos, Hell's Gate & Crescent Island",
    image: LOCAL_IMAGES.CROWNED_CRANE,
    description:
      'A freshwater lake in the Great Rift Valley combining a boat ride among hippos, a walking safari on Crescent Island, and a visit to Hell\'s Gate.',
    highlights: [
      'Boat safari with hippos and abundant birdlife',
      'Walking safari on Crescent Island',
      "Hell's Gate National Park cliffs and gorges",
      '2-day / 1-night stay at Lake Naivasha Sopa Resort',
    ],
    href: '/destinations/lake-naivasha-safari-tours',
  },
]

const combinationSafaris = [
  {
    title: '10-Day Classic Kenya Wildlife & Diani Beach Escape',
    route:
      'Maasai Mara → Lake Nakuru → Lake Naivasha → Amboseli → Diani Beach',
    description:
      "Ten days covering four of Kenya's greatest safari destinations followed by two nights on the Indian Ocean coast at Diani Beach. Includes a domestic flight from Amboseli to the coast.",
    href: '/safari-tours/10-day-kenya-wildlife-diani-beach',
  },
  {
    title: '5-Day Safari to Amboseli, Lake Nakuru & Masai Mara',
    route: 'Amboseli → Lake Nakuru → Masai Mara',
    description:
      "A well-paced five-day route through three of Kenya's signature parks. Start with Kilimanjaro views in Amboseli, flamingos at Lake Nakuru, and end with big cat sightings in the Mara.",
    href: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
  },
  {
    title: '7-Day Budget Kenya Wildlife Safari',
    route: 'Masai Mara → Lake Nakuru → Amboseli',
    description:
      "Three of Kenya's top wildlife destinations in one itinerary, built for travelers who want to experience Kenya's best with budget accommodation and a complete safari program.",
    href: '/safari-tours/7-day-budget-kenya-safari',
  },
]

const included = [
  'Private transport in a 4x4 Land Cruiser with pop-up roof',
  'Professional, English-speaking driver-guide throughout',
  'Full-board accommodation with breakfast, lunch, and dinner included',
  'All park entry fees and conservation fees',
  'Airport or hotel pickup and dropoff in Nairobi',
]

const excluded = [
  'Tips and gratuities for guides and lodge staff',
  'Personal expenses and souvenirs',
  'Activities not stated in the itinerary',
  'International flights to and from Kenya',
]

const faqs = [
  {
    question: 'Do I need a visa to visit Kenya?',
    answer:
      'Yes. Most nationalities require a visa to enter Kenya. Kenya now operates the Electronic Travel Authorisation (eTA) system, which replaces the old visa on arrival. Apply online at etakenya.go.ke before you travel.',
  },
  {
    question: 'Is Kenya safe to visit?',
    answer:
      'Kenya is a well-established tourist destination with millions of visitors every year. Safari areas, national parks, and tourist corridors are considered safe. As with any travel, standard precautions apply. Your guide will brief you on everything you need to know on arrival.',
  },
  {
    question: 'What should I pack for a Kenya safari?',
    answer:
      'Lightweight, breathable clothing in neutral colours such as khaki, olive, and beige. Bring a warm layer for early morning game drives, comfortable walking shoes, a hat, high-factor sunscreen, insect repellent, binoculars, and a camera.',
  },
  {
    question: 'What is the best time of year to go on safari in Kenya?',
    answer:
      'June to October is the peak dry season and the best overall time for game viewing. July to October also covers the Great Migration in Maasai Mara. January to February is also excellent. Green season from November to May offers beautiful scenery and lower rates, though April and May can bring heavy rains.',
  },
  {
    question: 'Can I customise an itinerary?',
    answer:
      'Yes. Every package can be adjusted. You can extend a stay at one park, change accommodation tier, or add a beach escape to the end of your safari.',
  },
  {
    question: 'How do I book and what deposit is required?',
    answer:
      'Booking is done by contacting us via email or WhatsApp. A 50% deposit applies for bookings made more than 2 months before your safari, 75% for bookings made 1 to 2 months before your safari, and 100% payment for bookings made less than 1 month before your safari.',
  },
  {
    question: 'How much does a Kenya safari cost?',
    answer:
      'Pricing varies by destination, duration, group size, and accommodation tier. Pricing for individual safaris and combination packages is available on the Kenya Safari Packages page.',
  },
]

export default function SafariToursPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Kenya safari landscape in the Maasai Mara"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.82)_0%,rgba(28,18,8,0.38)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Kenya Safari Tours
          </p>

          <h1 className="mx-auto max-w-4xl font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Kenya Safari Guide: Everything You Need to Plan Your Trip
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Kenya is one of the world's great safari destinations. The
            landscapes shift from open savannah to forest, from volcanic hills
            to freshwater lakes. The wildlife is extraordinary and it is all
            within reach of Nairobi.
          </p>

          <p className="mx-auto mt-4 max-w-3xl font-inter text-sm leading-relaxed text-white/80 sm:text-base">
            This guide covers the types of safaris available, the best
            destinations, how to combine them, and how to choose what fits your
            time and budget.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Safari Packages
            </Link>

            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Plan My Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF4E8] px-4 py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            All safaris are operated by Danil Scenic Tours, a Nairobi-based
            safari operator with professional guides and full-board, 4x4 Land
            Cruiser experiences across Kenya.
          </p>
        </div>
      </section>

      {/* Safari Types */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <h2 className="font-playfair text-3xl leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
              Types of Safari in Kenya
            </h2>

            <p className="mt-4 font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
              Not all safaris are the same. Here is a plain breakdown of what
              is available so you can pick what suits you best.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safariTypes.map((type) => {
              const Icon = type.icon

              return (
                <article
                  key={type.title}
                  className="rounded-2xl bg-white p-5 shadow-md sm:p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4870A]">
                    <Icon
                      size={24}
                      className="text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-playfair text-2xl text-[#2A4A35]">
                    {type.title}
                  </h3>

                  <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                    {type.description}
                  </p>

                  <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]/80">
                    {type.extra}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <h2 className="font-playfair text-3xl leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
              Kenya Safari Destinations We Cover
            </h2>

            <p className="mt-4 font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
              Explore the destinations we operate across and continue to the
              full itinerary, wildlife guide, best time to visit, and package
              details.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={destination.image}
                    alt={`${destination.name} safari destination in Kenya`}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="mb-1 font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                    {destination.subtitle}
                  </p>

                  <h3 className="font-playfair text-2xl text-[#2A4A35]">
                    {destination.name}
                  </h3>

                  <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                    {destination.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {destination.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 font-inter text-sm leading-relaxed text-[#1C1208]"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#D4870A]"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={destination.href}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 py-2 font-montserrat text-sm font-semibold text-[#D4870A] transition-all hover:gap-3"
                  >
                    Read Full Itinerary
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Combination Safaris */}
      <section className="bg-[#2A4A35] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <h2 className="font-playfair text-3xl leading-tight text-[#FDF8F0] sm:text-4xl md:text-5xl">
              Multi-Destination Kenya Safari Itineraries
            </h2>

            <p className="mt-4 font-inter text-base leading-relaxed text-[#FDF8F0]/85 sm:text-lg">
              Want to see more than one destination? These combination packages
              link multiple parks and experiences into a single trip.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {combinationSafaris.map((safari) => (
              <article
                key={safari.href}
                className="flex h-full flex-col rounded-2xl bg-[#FDF8F0] p-5 sm:p-6"
              >
                <Compass
                  size={28}
                  className="mb-5 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl leading-tight text-[#2A4A35]">
                  {safari.title}
                </h3>

                <p className="mt-4 font-montserrat text-sm font-semibold leading-relaxed text-[#D4870A]">
                  Route: {safari.route}
                </p>

                <p className="mt-4 flex-1 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                  {safari.description}
                </p>

                <Link
                  href={safari.href}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 py-2 font-montserrat text-sm font-semibold text-[#D4870A] transition-all hover:gap-3"
                >
                  View Full Itinerary
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="font-playfair text-3xl leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
              How to Choose Your Kenya Safari
            </h2>

            <p className="mt-4 font-inter text-base text-[#1C1208] sm:text-lg">
              Not sure where to start? These four questions will point you in
              the right direction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-[#F2E8D5] p-5 sm:p-6">
              <h3 className="font-playfair text-2xl text-[#2A4A35]">
                How Many Days Do You Have?
              </h3>

              <ul className="mt-4 space-y-2 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                <li>1 day: Nairobi City Tour</li>
                <li>2 days: Ol Pejeta or Lake Naivasha</li>
                <li>3 to 4 days: Maasai Mara, Amboseli, or Tsavo</li>
                <li>5 to 7 days: Combination packages covering 2 to 3 parks</li>
                <li>10 days: Full circuit with a beach finish at Diani</li>
              </ul>
            </article>

            <article className="rounded-2xl bg-[#F2E8D5] p-5 sm:p-6">
              <h3 className="font-playfair text-2xl text-[#2A4A35]">
                When Are You Travelling?
              </h3>

              <ul className="mt-4 space-y-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                <li>
                  <strong>June to October:</strong> Peak dry season with strong
                  wildlife visibility. Great Migration in the Mara from July to
                  October.
                </li>
                <li>
                  <strong>January to February:</strong> Short dry season with
                  excellent game viewing and fewer crowds than peak season.
                </li>
                <li>
                  <strong>November to May:</strong> Green season with beautiful
                  scenery, strong birdlife, and lower rates. Some roads can be
                  challenging in April and May.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl bg-[#F2E8D5] p-5 sm:p-6">
              <h3 className="font-playfair text-2xl text-[#2A4A35]">
                Group or Private?
              </h3>

              <div className="mt-4 space-y-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                <p>
                  Group safaris, with a minimum of 7 people, offer lower
                  per-person costs and a shared experience. Budget
                  accommodation is the default.
                </p>

                <p>
                  Private safaris offer full flexibility: your own vehicle,
                  your own dates, and your choice of accommodation tier. They
                  are ideal for families, couples, and small groups with
                  specific preferences.
                </p>
              </div>
            </article>

            <article className="rounded-2xl bg-[#F2E8D5] p-5 sm:p-6">
              <h3 className="font-playfair text-2xl text-[#2A4A35]">
                What Is Your Budget?
              </h3>

              <ul className="mt-4 space-y-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                <li>
                  <strong>Budget:</strong> Comfortable tented accommodation,
                  full board, and 4x4 transport.
                </li>
                <li>
                  <strong>Mid-range:</strong> Well-established lodges inside or
                  near the parks with excellent facilities.
                </li>
                <li>
                  <strong>Luxury:</strong> Private camps with en suite tents,
                  gourmet dining, spa facilities, and personalised service.
                </li>
              </ul>
            </article>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="https://wa.me/254722919249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-shadow hover:shadow-lg sm:text-base"
            >
              Get Help Choosing Your Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
            What's Included in Every Danil Scenic Safari
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center font-inter text-base text-[#1C1208] sm:text-lg">
            Every package we operate includes the following as standard. No
            hidden extras.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-playfair text-2xl text-[#2A4A35]">
                Included
              </h3>

              <ul className="mt-5 space-y-3">
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
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-playfair text-2xl text-[#2A4A35]">
                Not Included
              </h3>

              <ul className="mt-5 space-y-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-playfair text-3xl leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
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

      {/* Final CTA */}
      <section className="bg-[#2A4A35] px-4 py-14 text-center sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-3xl leading-tight text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Ready to Plan Your Kenya Safari?
          </h2>

          <p className="mt-4 font-inter text-base leading-relaxed text-[#FDF8F0]/85 sm:text-lg">
            You have read the guide. Now it is time to make it happen. View
            safari prices, compare packages, or contact us with your travel
            dates and group size.
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
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#FDF8F0] transition-colors hover:bg-[#D4870A] hover:text-[#1C1208] sm:text-base"
            >
              Book Online
            </Link>

            <Link
              href="https://wa.me/254722919249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              WhatsApp Us
            </Link>
          </div>

          <p className="mt-6 font-inter text-sm text-[#FDF8F0]/75">
            safari@danilscenictours.co.ke
          </p>
        </div>
      </section>

      <Footer />
      <ClientOnlyUI />
    </main>
  )
}
