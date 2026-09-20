import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Binoculars,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  Users,
  UtensilsCrossed,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Nairobi City Tour & National Park Safari | Danil Scenic Tours',
  description:
    'Explore Nairobi in one day with a Nairobi National Park game drive, Giraffe Centre visit, Kazuri Beads, lunch at Tamambo Karen Blixen Restaurant, and guided 4x4 transport.',
  alternates: {
    canonical: '/destinations/nairobi-national-park-safari-tours',
  },
  openGraph: {
    title:
      'Nairobi City Tour & National Park Safari | Danil Scenic Tours',
    description:
      'A full-day Nairobi experience combining Nairobi National Park, the Giraffe Centre, Kazuri Beads, and lunch in Karen.',
    url: '/destinations/nairobi-national-park-safari-tours',
    type: 'website',
    images: [
      {
        url: LOCAL_IMAGES.ZEBRAS_SAVANNA,
        alt: 'Wildlife at Nairobi National Park with the Nairobi skyline in the background',
      },
    ],
  },
}

const itinerary = [
  {
    time: '6:30 AM',
    title: 'Hotel Pickup and Transfer to Nairobi National Park',
    description:
      'Your professional guide will pick you up from your hotel or preferred location and transfer you in a comfortable 4x4 Land Cruiser to Nairobi National Park. Enjoy bottled water and views of Nairobi during the short journey.',
  },
  {
    time: '7:00 AM - 1:00 PM',
    title: 'Half-Day Game Drive at Nairobi National Park',
    description:
      "Explore Nairobi National Park in search of lions, rhinos, buffaloes, giraffes, zebras, antelopes, and birdlife. Morning hours provide excellent opportunities for wildlife viewing and photography, with Nairobi's skyline visible beyond sections of the park.",
  },
  {
    time: '1:00 PM',
    title: 'Lunch at Tamambo Karen Blixen Restaurant',
    description:
      "Proceed to Tamambo Karen Blixen Restaurant in Nairobi's Karen area. Enjoy lunch in the garden surroundings before continuing with the afternoon activities.",
  },
  {
    time: '3:00 PM',
    title: 'Giraffe Centre',
    description:
      "Visit the Giraffe Centre and meet Rothschild's giraffes while learning about giraffe conservation. The elevated viewing platform provides an opportunity to feed the giraffes under staff guidance.",
  },
  {
    time: '3:30 PM',
    title: 'Kazuri Beads',
    description:
      'Visit Kazuri Beads and learn about the production of handcrafted ceramic beads and pottery. Browse locally made products and see the work of Kenyan artisans.',
  },
  {
    time: '5:00 PM',
    title: 'Return Transfer',
    description:
      "Your guide will transfer you back to your hotel, residence, or agreed drop-off location, concluding the full-day Nairobi wildlife and cultural experience.",
  },
]

const wildlife = [
  'Lions',
  'Black and white rhinos',
  'Buffaloes',
  'Giraffes',
  'Plains zebras',
  'Impalas, warthogs, gazelles, and other antelopes',
  'More than 400 recorded bird species',
]

const culturalHighlights = [
  "Rothschild's giraffes and conservation education at the Giraffe Centre",
  'Handcrafted ceramic beads and pottery at Kazuri Beads',
  'Lunch in the historic Karen area of Nairobi',
]

const seasons = [
  {
    title: 'June to October',
    subtitle: 'Dry Season',
    description:
      'Drier weather and thinner vegetation can make wildlife easier to spot. Animals may also concentrate around available water sources.',
  },
  {
    title: 'January to March',
    subtitle: 'Short Dry Period',
    description:
      'Warm and generally drier conditions provide another good period for wildlife viewing and morning photography.',
  },
  {
    title: 'November to December',
    subtitle: 'Short Rains',
    description:
      'Short rains bring greener landscapes and seasonal birdlife. Morning activities can still provide rewarding wildlife viewing.',
  },
  {
    title: 'April to May',
    subtitle: 'Long Rains',
    description:
      'The wetter period brings greener scenery and changing wildlife conditions. Rain can affect roads and the timing of outdoor activities.',
  },
]

const included = [
  'Transport in a 4x4 Land Cruiser with pop-up roof',
  'Professional English-speaking driver-guide',
  'Nairobi National Park game drive',
  'Nairobi National Park entry fees',
  'Giraffe Centre entry and feeding experience',
  'Kazuri Beads visit',
  'Lunch at Tamambo Karen Blixen Restaurant',
  'Hotel or residence pickup and drop-off',
  'Scheduled activity access fees',
]

const excluded = [
  'Tips and gratuities',
  'Personal purchases and souvenirs',
  'Activities or meals not listed in the itinerary',
  'Travel insurance',
  'International flights to Kenya',
]

const whyDanil = [
  {
    title: 'Local Nairobi Guides',
    description:
      "Explore the city with professional guides familiar with Nairobi's wildlife areas, attractions, roads, and local culture.",
  },
  {
    title: 'Wildlife and Culture in One Day',
    description:
      'The itinerary combines Nairobi National Park with the Giraffe Centre, Kazuri Beads, and lunch in Karen in one structured day.',
  },
  {
    title: '4x4 Safari Transport',
    description:
      'Travel in a Land Cruiser with a pop-up roof designed for wildlife viewing and photography during the National Park game drive.',
  },
  {
    title: 'Flexible Pickup',
    description:
      'Pickup and return can be arranged from your Nairobi hotel, residence, or another agreed location.',
  },
]

const beforeBooking = [
  'Confirm your Nairobi pickup and drop-off location',
  'Prepare comfortable walking shoes',
  'Charge your camera or phone',
  'Check the weather for your tour date',
  'Tell us in advance about any dietary requirements',
]

const whatToBring = [
  'Comfortable walking shoes',
  'Lightweight clothing and a warm layer for the early morning',
  'Hat and sunglasses',
  'High-SPF sunscreen',
  'Binoculars',
  'Camera or smartphone',
  'Small amount of cash for tips and personal purchases',
  'Insect repellent',
  'Personal medication',
]

const tourDay = [
  'Be ready at the agreed pickup point before departure',
  'Wear comfortable, weather-appropriate clothing',
  'Stay hydrated',
  'Follow your guide and attraction staff instructions',
  'Respect wildlife viewing distances',
  'Keep valuables secure during stops',
]

const faqs = [
  {
    question: 'How much does the Nairobi City Tour cost?',
    answer:
      'The group price is USD 260. The package includes the Nairobi National Park game drive, Giraffe Centre, Kazuri Beads, lunch at Tamambo Karen Blixen Restaurant, 4x4 Land Cruiser transport, and a professional guide.',
  },
  {
    question: 'Is this tour suitable for families with children?',
    answer:
      'Yes. The itinerary combines wildlife viewing with attractions such as the Giraffe Centre. Families should consider the early pickup and the length of the morning game drive when planning with younger children.',
  },
  {
    question:
      'What is the best time of day for wildlife viewing at Nairobi National Park?',
    answer:
      'The itinerary begins early in the morning because wildlife is often more active during the cooler morning hours and the light is generally better for photography.',
  },
  {
    question: 'Can we modify the itinerary?',
    answer:
      'Yes. Contact Danil Scenic Tours before your tour to discuss changes or additional stops. Extra activities may affect timing and pricing.',
  },
  {
    question: 'What happens if it rains?',
    answer:
      'Light rain does not automatically stop the tour. Your guide will assess conditions and advise on the best way to continue the scheduled activities safely.',
  },
  {
    question: 'How long is the Nairobi National Park game drive?',
    answer:
      'The scheduled National Park portion runs from approximately 7:00 AM to 1:00 PM, including wildlife viewing and photography stops.',
  },
  {
    question: 'Is giraffe feeding included?',
    answer:
      'Yes. The itinerary includes entry to the Giraffe Centre and the standard giraffe feeding experience offered at the attraction.',
  },
  {
    question: 'Do you offer private tours?',
    answer:
      'Yes. Private arrangements can be requested. Contact Danil Scenic Tours with your travel date and group size for availability and pricing.',
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
    title: 'Tsavo Safari Tours',
    description: 'Red Elephants and vast wilderness',
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
    title: 'Lake Nakuru Safari',
    description: 'Rhinos, birdlife, and Rift Valley scenery',
    href: '/destinations/lake-nakuru-safari-tours',
  },
]

export default function NairobiNationalParkPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={LOCAL_IMAGES.ZEBRAS_SAVANNA}
          alt="Zebras and wildlife at Nairobi National Park with the city skyline in the background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.80)_0%,rgba(28,18,8,0.30)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Nairobi Safari in the City
          </p>

          <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Nairobi City Tour: Full-Day National Park Safari and Cultural
            Experience
          </h1>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Explore Nairobi in one day with a game drive at Nairobi National
            Park, the Giraffe Centre, Kazuri Beads, and lunch at Tamambo Karen
            Blixen Restaurant.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Pricing
            </Link>

            <Link
              href="/book?tour=Nairobi+National+Park+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Book This Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Tour at a Glance */}
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
                1 Full Day
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <MapPin
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Location
              </p>

              <p className="mt-2 font-inter text-[#1C1208]">
                Nairobi, Kenya
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
                4x4 Land Cruiser
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
                USD 260
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Nairobi offers a rare combination of a major African city and
            accessible wildlife viewing. Nairobi National Park gives visitors
            the opportunity to see wildlife close to the city, including
            lions, rhinos, giraffes, zebras, buffaloes, and antelopes.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            This full-day experience combines a morning game drive with the
            Giraffe Centre, Kazuri Beads, and lunch at Tamambo Karen Blixen
            Restaurant.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            It is designed for travelers who want to experience Nairobi's
            wildlife and cultural attractions in one organised day without
            needing an overnight safari outside the city.
          </p>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:mb-14 md:text-5xl">
            Full-Day Nairobi City Tour Itinerary
          </h2>

          <div className="space-y-5">
            {itinerary.map((item) => (
              <article
                key={`${item.time}-${item.title}`}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="flex flex-col gap-3 bg-[#2A4A35] px-5 py-4 sm:flex-row sm:items-center sm:px-6 md:px-8">
                  <span className="inline-flex min-h-10 w-fit shrink-0 items-center justify-center rounded-full bg-[#D4870A] px-4 font-montserrat text-xs font-bold text-white sm:text-sm">
                    {item.time}
                  </span>

                  <h3 className="font-playfair text-xl font-bold leading-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <p className="font-inter text-sm leading-7 text-[#1C1208] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Accommodation
          </h2>

          <div className="mt-8 rounded-2xl border-l-4 border-[#D4870A] bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <p className="text-center font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
              This is a full-day tour departing from and returning to your
              accommodation. No overnight stay is included. Guests stay at
              their own hotel or accommodation in Nairobi.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            What You'll See
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Binoculars
                  size={26}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  Wildlife at Nairobi National Park
                </h3>
              </div>

              <ul className="mt-5 space-y-2">
                {wildlife.map((item) => (
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
              <div className="flex items-center gap-3">
                <Users
                  size={26}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  Cultural Highlights
                </h3>
              </div>

              <ul className="mt-5 space-y-2">
                {culturalHighlights.map((item) => (
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
      </section>

      {/* Best Time */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Best Time to Visit
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

      {/* Getting There */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Getting to Nairobi National Park
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Car
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  From Your Nairobi Hotel
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Your guide collects you from your agreed Nairobi pickup
                location at approximately 6:30 AM and transfers you directly to
                Nairobi National Park for the morning game drive.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <MapPin
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  From JKIA
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                If your international flight arrives shortly before the tour,
                contact us with your arrival details so the most practical
                pickup and tour timing can be arranged.
              </p>
            </article>
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

      {/* Why Danil */}
      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Why Book with Danil Scenic Tours
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
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Practical Planning Checklist
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                Before You Book
              </h3>

              <ul className="mt-4 space-y-2">
                {beforeBooking.map((item) => (
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
                What to Bring
              </h3>

              <ul className="mt-4 space-y-2">
                {whatToBring.map((item) => (
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
                On Tour Day
              </h3>

              <ul className="mt-4 space-y-2">
                {tourDay.map((item) => (
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
            Continue exploring destination guides and Kenya safari packages.
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
                The Nairobi City Tour also works well before or after a longer
                Kenya safari itinerary.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={LOCAL_IMAGES.ZEBRAS_SAVANNA}
          alt="Wildlife at Nairobi National Park with Nairobi in the background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.78)_0%,rgba(28,18,8,0.32)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Ready to Explore Nairobi?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Experience Nairobi National Park, the Giraffe Centre, Kazuri Beads,
            and lunch in Karen in one guided full-day tour.
          </p>

          <p className="mt-4 font-montserrat text-lg font-bold text-[#D4870A]">
            Group Price: USD 260
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/book?tour=Nairobi+National+Park+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              Book This Tour
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
