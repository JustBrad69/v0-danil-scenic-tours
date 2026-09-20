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
  Shield,
  Users,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Ol Pejeta Conservancy Safari from Nairobi | 2-Day Big Five Tour | Danil Scenic Tours',
  description:
    'Explore Ol Pejeta Conservancy on a 2-day safari from Nairobi. Big Five game drives, rhino conservation, Maisha Sweetwaters Camp, 4x4 transport, guide, and park fees included.',
  alternates: {
    canonical: '/destinations/ol-pejeta-safari-tours',
  },
  openGraph: {
    title:
      'Ol Pejeta Conservancy Safari from Nairobi | Danil Scenic Tours',
    description:
      'A 2-day Big Five conservation safari from Nairobi with Maisha Sweetwaters Camp, professional guide, 4x4 transport, and Ol Pejeta game drives.',
    url: '/destinations/ol-pejeta-safari-tours',
    type: 'website',
    images: [
      {
        url: LOCAL_IMAGES.ELEPHANT_KILIMANJARO,
        alt: 'Elephants on safari in central Kenya',
      },
    ],
  },
}

const itinerary = [
  {
    day: '1',
    title: 'Nairobi to Ol Pejeta Conservancy',
    sections: [
      {
        title: 'Morning Departure',
        description:
          'Your safari begins with an early morning departure from Nairobi at approximately 7:00 AM.',
      },
      {
        title: 'Scenic Drive through Central Kenya',
        description:
          "Travel through Kenya's central highlands toward the Nanyuki area. Along the route, enjoy views of farmland, highland scenery, and Mount Kenya when weather conditions permit.",
      },
      {
        title: 'Arrival and Lunch',
        description:
          'Proceed to Maisha Sweetwaters Camp for check-in and lunch. Settle into your tented accommodation and prepare for the afternoon safari.',
      },
      {
        title: 'Afternoon Game Drive',
        description:
          "Enter Ol Pejeta Conservancy for an afternoon game drive across open plains and woodland habitats. Search for elephants, lions, buffaloes, black rhinos, leopards, giraffes, zebras, hartebeest, impala, cheetahs, hyenas, and birdlife.",
      },
      {
        title: 'Evening at Camp',
        description:
          'Return to Maisha Sweetwaters Camp for dinner and an overnight stay in the Laikipia region.',
      },
    ],
    accommodation: 'Maisha Sweetwaters Camp',
    meals: 'Lunch & Dinner',
  },
  {
    day: '2',
    title: 'Ol Pejeta to Nairobi',
    sections: [
      {
        title: 'Breakfast',
        description:
          'Begin the morning with breakfast at Maisha Sweetwaters Camp.',
      },
      {
        title: 'Checkout and Return Journey',
        description:
          'Check out and begin the return journey through the central highlands toward Nairobi.',
      },
      {
        title: 'Nairobi Drop-Off',
        description:
          'Arrive in Nairobi for your agreed hotel or airport transfer, concluding the 2-day Ol Pejeta safari.',
      },
    ],
    accommodation: null,
    meals: 'Breakfast',
  },
]

const wildlife = [
  {
    title: 'Northern White Rhinos',
    description:
      'Ol Pejeta is home to the last two northern white rhinos on earth, making the conservancy one of the most significant rhino conservation destinations in the world.',
  },
  {
    title: 'Black Rhinos',
    description:
      'The conservancy is an important sanctuary for black rhinos, providing opportunities to observe this endangered species during guided game drives.',
  },
  {
    title: 'Lions',
    description:
      'Lions occur throughout the conservancy and may be encountered resting, moving through the grasslands, or tracking prey.',
  },
  {
    title: 'Elephants',
    description:
      'Elephant herds move across the open plains and woodland habitats of the conservancy.',
  },
  {
    title: 'Buffalo',
    description:
      'Cape buffalo are regularly encountered in the conservancy, often in groups around grazing areas and water sources.',
  },
  {
    title: 'Leopards',
    description:
      'Leopards are present but naturally more elusive. Woodland and mixed habitat provide suitable cover for these solitary cats.',
  },
]

const additionalWildlife = [
  'Giraffes',
  'Zebras',
  'Hartebeest',
  'Impala',
  'Cheetahs',
  'Hyenas',
  "Grevy's zebras",
  'Birdlife across the conservancy',
]

const campAmenities = [
  'Comfortable tented rooms with en suite bathrooms',
  'Full-board meals',
  'Dining and lounge areas',
  'Professional camp staff',
  'Wilderness setting in the Laikipia region',
]

const seasons = [
  {
    title: 'June to October',
    subtitle: 'Dry Season',
    description:
      'Drier conditions generally make wildlife easier to locate as animals concentrate around available water sources and vegetation becomes thinner.',
  },
  {
    title: 'December to February',
    subtitle: 'Short Dry Period',
    description:
      'Warm and generally dry conditions provide another strong period for game viewing and photography.',
  },
  {
    title: 'November',
    subtitle: 'Short Rains',
    description:
      'Short rains bring greener scenery and seasonal changes across the conservancy while wildlife viewing remains possible.',
  },
  {
    title: 'March to May',
    subtitle: 'Long Rains',
    description:
      'The wetter season produces lush landscapes and changing road conditions. Wildlife can become more dispersed as water becomes widely available.',
  },
]

const included = [
  'Full-board accommodation at Maisha Sweetwaters Camp',
  'Private 4x4 safari vehicle with pop-up roof',
  'Professional English-speaking safari guide',
  'Ol Pejeta Conservancy game drive',
  'Ol Pejeta Conservancy entry fees',
  'Nairobi airport or hotel pickup and drop-off',
]

const excluded = [
  'Tips and gratuities',
  'Optional activities not included in the itinerary',
  'Personal expenses',
  'Travel insurance',
  'International flights',
]

const whyDanil = [
  {
    title: 'Nairobi-Based Safari Operator',
    description:
      'Your safari is managed by a locally based team from the initial Nairobi pickup through the return journey.',
  },
  {
    title: 'Conservation-Focused Destination',
    description:
      'Ol Pejeta combines classic Big Five game viewing with some of Kenya’s most important rhino conservation work.',
  },
  {
    title: 'Complete Safari Logistics',
    description:
      'Accommodation, guide services, private 4x4 transport, park fees, meals, and Nairobi transfers are included in the package.',
  },
  {
    title: 'Private and Group Options',
    description:
      'Contact Danil Scenic Tours with your travel dates and group size to arrange the safari format that suits your trip.',
  },
]

const clothing = [
  'Lightweight neutral-coloured clothing',
  'Warm layer or fleece for cool mornings',
  'Comfortable walking shoes',
  'Hat or cap',
  'Sunglasses',
  'Long sleeves and trousers for sun and insect protection',
]

const health = [
  'High-SPF sunscreen',
  'Insect repellent',
  'Personal medication',
  'Hand sanitizer',
]

const cameraGear = [
  'Camera or smartphone',
  'Binoculars',
  'Extra batteries or portable charger',
  'Memory cards or storage',
]

const essentials = [
  'Passport or identification',
  'Light jacket',
  'Comfortable evening clothing',
  'Personal toiletries',
  'Small day bag',
]

const faqs = [
  {
    question: 'How much does the Ol Pejeta safari cost?',
    answer:
      'The group price starts from USD 920 per person. Contact us with your travel dates and group size for confirmed availability and the final quote.',
  },
  {
    question: 'How long is the Ol Pejeta safari?',
    answer:
      'The package runs for 2 days and 1 night, with accommodation at Maisha Sweetwaters Camp.',
  },
  {
    question: 'Will I definitely see the Big Five?',
    answer:
      'All five Big Five species occur in the Ol Pejeta ecosystem, but wildlife sightings are never guaranteed. Your guide will use local knowledge and game-drive conditions to maximise viewing opportunities.',
  },
  {
    question: 'Can I see the northern white rhinos?',
    answer:
      'Ol Pejeta is home to the last two northern white rhinos on earth. Access and viewing arrangements depend on the conservancy activities available during your visit.',
  },
  {
    question: 'How far is Ol Pejeta from Nairobi?',
    answer:
      'The safari travels north from Nairobi through the central Kenya highlands toward the Nanyuki and Ol Pejeta area. Travel time depends on road and traffic conditions.',
  },
  {
    question: 'Can the safari be customised?',
    answer:
      'Yes. Additional Ol Pejeta activities can be discussed when booking. Optional experiences may involve additional fees and availability requirements.',
  },
  {
    question: 'Is the safari suitable for families?',
    answer:
      'Yes. Much of the wildlife viewing takes place from the safari vehicle, making the itinerary suitable for many families. Share any specific family or mobility requirements when booking.',
  },
  {
    question: 'Can I travel solo?',
    answer:
      'Yes. Contact Danil Scenic Tours with your dates so available private or shared arrangements can be discussed.',
  },
]

const destinationLinks = [
  {
    title: 'Nairobi City Tour',
    description: 'One-day wildlife and cultural experience',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    title: 'Maasai Mara Safari Tours',
    description: 'Great Migration and Big Five experiences',
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    title: 'Amboseli Safari Tours',
    description: 'Elephants and Mount Kilimanjaro',
    href: '/destinations/amboseli-safari-tours',
  },
  {
    title: 'Tsavo Safari Tours',
    description: 'Red elephants and vast wilderness',
    href: '/destinations/tsavo-safari-tours',
  },
  {
    title: 'Lake Naivasha Safari',
    description: "Boat rides, Crescent Island, and Hell's Gate",
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    title: 'Lake Nakuru Safari',
    description: 'Rhinos, birdlife, and Rift Valley scenery',
    href: '/destinations/lake-nakuru-safari-tours',
  },
]

export default function OlPejetaPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={LOCAL_IMAGES.ELEPHANT_KILIMANJARO}
          alt="Wildlife on safari in central Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.80)_0%,rgba(28,18,8,0.30)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            2 Days / 1 Night
          </p>

          <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ol Pejeta Conservancy Safari
          </h1>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Big Five wildlife, rhino conservation, and a guided safari through
            Kenya's central highlands.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Pricing
            </Link>

            <Link
              href="/book?tour=Ol+Pejeta+Conservancy+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Safari at a Glance */}
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
                2 Days / 1 Night
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <MapPin
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Destination
              </p>

              <p className="mt-2 font-inter text-[#1C1208]">
                Ol Pejeta Conservancy
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <Shield
                size={24}
                className="mb-4 text-[#D4870A]"
                aria-hidden="true"
              />

              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Accommodation
              </p>

              <p className="mt-2 font-inter text-[#1C1208]">
                Maisha Sweetwaters Camp
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
                From USD 920
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
            Experience Big Five Conservation at Ol Pejeta
          </h2>

          <div className="mt-6 space-y-5">
            <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
              Ol Pejeta Conservancy combines wildlife viewing with active
              conservation in Kenya's central highlands. The conservancy is
              home to the Big Five and is especially significant for rhino
              conservation.
            </p>

            <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
              It is also home to the last two northern white rhinos on earth,
              alongside black rhinos, elephants, lions, buffaloes, leopards,
              cheetahs, hyenas, and other wildlife.
            </p>

            <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
              This 2-day, 1-night safari includes full-board accommodation at
              Maisha Sweetwaters Camp, private 4x4 transport, a professional
              guide, park fees, and Nairobi transfers.
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:mb-14 md:text-5xl">
            Ol Pejeta Safari Itinerary
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

                <div className="p-5 sm:p-6 md:p-8">
                  <div className="space-y-5">
                    {item.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="font-montserrat text-sm font-bold text-[#2A4A35]">
                          {section.title}
                        </h4>

                        <p className="mt-2 font-inter text-sm leading-7 text-[#1C1208] sm:text-base">
                          {section.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#D4870A]/20 pt-5 sm:grid-cols-2">
                    {item.accommodation && (
                      <p className="font-inter text-sm text-[#1C1208]">
                        <strong>Accommodation:</strong> {item.accommodation}
                      </p>
                    )}

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

      {/* Camp */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Maisha Sweetwaters Camp
          </h2>

          <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
              Your overnight stay is at Maisha Sweetwaters Camp in the Laikipia
              region. The package includes full-board accommodation, with
              breakfast, lunch, and dinner according to the itinerary.
            </p>

            <h3 className="mt-6 font-montserrat text-lg font-bold text-[#2A4A35]">
              Camp Features
            </h3>

            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {campAmenities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-inter text-sm leading-relaxed text-[#1C1208]"
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
        </div>
      </section>

      {/* Wildlife */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Big Five and Rhino Conservation
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Ol Pejeta combines Big Five safari experiences with some of Kenya's
            most important rhino conservation work.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {wildlife.map((animal) => (
              <article
                key={animal.title}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  {animal.title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {animal.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#D4870A] p-6 text-center sm:p-8">
            <p className="font-montserrat text-lg font-bold text-white">
              Additional Wildlife
            </p>

            <p className="mx-auto mt-3 max-w-4xl font-inter text-sm leading-relaxed text-white sm:text-base">
              {additionalWildlife.join(', ')}.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Best Time to Visit Ol Pejeta
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
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Getting to Ol Pejeta from Nairobi
          </h2>

          <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Car
                size={28}
                className="mt-1 shrink-0 text-[#D4870A]"
                aria-hidden="true"
              />

              <div>
                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  Scenic Road Journey
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                  The journey travels north from Nairobi through Kenya's
                  central highlands toward Nanyuki and Ol Pejeta Conservancy.
                  Along the route, the landscape changes from Nairobi's urban
                  surroundings to farmland and highland scenery.
                </p>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                  Mount Kenya may be visible along the journey when weather
                  conditions permit.
                </p>
              </div>
            </div>
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
            Why Choose Danil Scenic Tours
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

      {/* What to Pack */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            What to Pack for Ol Pejeta
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: 'Clothing and Footwear',
                items: clothing,
              },
              {
                title: 'Sun and Health Protection',
                items: health,
              },
              {
                title: 'Camera and Binoculars',
                items: cameraGear,
              },
              {
                title: 'Other Essentials',
                items: essentials,
              },
            ].map((section) => (
              <article
                key={section.title}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                  {section.title}
                </h3>

                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
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
            ))}
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
            Continue exploring individual destinations or compare complete
            Kenya safari packages.
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

              <div className="mt-6 rounded-xl bg-[#F2E8D5] p-5">
                <p className="font-montserrat text-sm font-bold text-[#2A4A35]">
                  Ol Pejeta Group Price
                </p>

                <p className="mt-2 font-playfair text-3xl font-bold text-[#D4870A]">
                  From USD 920
                </p>

                <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208]">
                  Contact us with your dates and group size for confirmed
                  availability and pricing.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={LOCAL_IMAGES.ELEPHANT_KILIMANJARO}
          alt="Elephants on a Kenya safari"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.78)_0%,rgba(28,18,8,0.32)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Plan Your Ol Pejeta Safari
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Experience Big Five wildlife, rhino conservation, and a night at
            Maisha Sweetwaters Camp on this 2-day safari from Nairobi.
          </p>

          <p className="mt-4 font-montserrat text-lg font-bold text-[#D4870A]">
            Group Price: From USD 920 per person
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/book?tour=Ol+Pejeta+Conservancy+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              Book This Safari
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
