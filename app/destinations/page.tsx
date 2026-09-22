import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import SafariMap from '@/components/SafariMap'
import { BLOB_IMAGES, LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Kenya Safari Destinations | Danil Scenic Tours',
  description:
    'Explore Kenya safari destinations including Maasai Mara, Amboseli, Tsavo, Nairobi National Park, Ol Pejeta, Lake Naivasha, Lake Nakuru, and Diani Beach.',
  alternates: {
    canonical: '/destinations',
  },
}

const destinations = [
  {
    name: 'Maasai Mara',
    tagline: 'Great Migration & Big Cats',
    description:
      'Explore open savannahs, exceptional wildlife, big cats, and the famous Great Migration.',
    image: BLOB_IMAGES.MAASAI_MARA,
    href: '/destinations/maasai-mara-safari-tours',
    alt: 'Maasai Mara safari destination in Kenya',
  },
  {
    name: 'Amboseli',
    tagline: 'Elephants & Kilimanjaro',
    description:
      'See large elephant herds beneath the unforgettable backdrop of Mount Kilimanjaro.',
    image: LOCAL_IMAGES.AMBOSELI_ELEPHANTS,
    href: '/destinations/amboseli-safari-tours',
    alt: 'Elephants in Amboseli National Park with Mount Kilimanjaro',
  },
  {
    name: 'Tsavo',
    tagline: "Kenya's Vast Wilderness",
    description:
      'Discover Tsavo East and West, dramatic landscapes, red elephants, and expansive wilderness.',
    image: BLOB_IMAGES.TSAVO_EAST,
    href: '/destinations/tsavo-safari-tours',
    alt: 'Tsavo safari destination in Kenya',
  },
  {
    name: 'Nairobi National Park',
    tagline: 'Safari in the City',
    description:
      'Experience wildlife against the Nairobi skyline on a convenient full-day safari experience.',
    image: LOCAL_IMAGES.ZEBRAS_SAVANNA,
    href: '/destinations/nairobi-national-park-safari-tours',
    alt: 'Wildlife at Nairobi National Park',
  },
  {
    name: 'Ol Pejeta Conservancy',
    tagline: 'Wildlife & Conservation',
    description:
      'Explore Big Five country and one of Kenya’s important rhino conservation areas.',
    image: LOCAL_IMAGES.CHEETAH_RESTING,
    href: '/destinations/ol-pejeta-safari-tours',
    alt: 'Wildlife safari experience at Ol Pejeta Conservancy',
  },
  {
    name: 'Lake Naivasha',
    tagline: "Hippos, Hell's Gate & Crescent Island",
    description:
      "Cruise among hippos, walk with wildlife on Crescent Island, and explore Hell's Gate.",
    image: LOCAL_IMAGES.CROWNED_CRANE,
    href: '/destinations/lake-naivasha-safari-tours',
    alt: 'Lake Naivasha safari destination in Kenya',
  },
  {
    name: 'Lake Nakuru',
    tagline: 'Rhinos & Rift Valley Scenery',
    description:
      'Discover rhinos, flamingos, giraffes, big cats, birdlife, and beautiful Rift Valley scenery.',
    image: BLOB_IMAGES.LAKE_NAKURU,
    href: '/destinations/lake-nakuru-safari-tours',
    alt: 'Lake Nakuru National Park safari destination',
  },
  {
    name: 'Diani Beach',
    tagline: 'Indian Ocean Coast',
    description:
      'Relax on white sand beaches and explore marine wildlife, coastal forests, and Swahili culture.',
    image: BLOB_IMAGES.DIANI_BEACH,
    href: '/destinations/diani-beach-safari-tours',
    alt: 'Diani Beach white sand and Indian Ocean coastline',
  },
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[62svh] items-center justify-center overflow-hidden px-4 pb-14 pt-28 sm:min-h-[68svh] sm:pb-16 sm:pt-32 md:min-h-[72svh]">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Kenya safari destinations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.82)_0%,rgba(28,18,8,0.30)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Explore Kenya
          </p>

          <h1 className="mt-4 font-playfair text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Kenya Safari Destinations
          </h1>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Explore Kenya&apos;s national parks, wildlife conservancies, Great
            Rift Valley lakes, and Indian Ocean coast.
          </p>
        </div>
      </section>

      {/* Destination Image Grid */}
      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
              Safari Destinations
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
              Discover Kenya&apos;s Safari Destinations
            </h2>

            <p className="mx-auto mt-4 font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
              Select a destination to explore its full itinerary, wildlife,
              accommodation, travel information, and safari details.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {destinations.map((destination) => (
              <article
                key={destination.href}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <Link
                  href={destination.href}
                  className="flex h-full flex-col"
                  aria-label={`Explore ${destination.name}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
                    <Image
                      src={destination.image}
                      alt={destination.alt}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.12em] text-[#D4870A]">
                      {destination.tagline}
                    </p>

                    <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                      {destination.name}
                    </h3>

                    <p className="mt-3 flex-1 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                      {destination.description}
                    </p>

                    <span className="mt-5 inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]">
                      Explore {destination.name}
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Destination Map */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="flex justify-center">
              <MapPin
                size={28}
                className="text-[#D4870A]"
                aria-hidden="true"
              />
            </div>

            <p className="mt-3 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
              Explore the Map
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
              Kenya Safari Destination Map
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
              Select any destination marker on the map to open its detailed
              safari page.
            </p>
          </div>

          <SafariMap
            locations={[
              'nairobi',
              'maasai-mara',
              'amboseli',
              'tsavo',
              'lake-nakuru',
              'lake-naivasha',
              'ol-pejeta',
              'diani-beach',
            ]}
          />
        </div>
      </section>

      {/* Multi-Destination Safaris */}
      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            See More of Kenya
          </p>

          <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Multi-Destination Kenya Safaris
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Combine several destinations into one guided journey through
            Kenya&apos;s wildlife parks, lakes, landscapes, and coast.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/safari-tours"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#2A4A35] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-[#1C3028]"
            >
              Explore Safari Tours
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-[#2A4A35] px-6 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:bg-[#2A4A35] hover:text-white"
            >
              View Safari Packages
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24">
        <Image
          src={BLOB_IMAGES.CTA_BANNER}
          alt="Plan a Kenya safari with Danil Scenic Tours"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[rgba(28,18,8,0.76)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Ready to Explore Kenya?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Tell us where you want to go, your travel dates, and your group
            size. We&apos;ll help you build the right safari itinerary.
          </p>

          <Link
            href="/book"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#D4870A] px-7 py-3 font-montserrat text-sm font-semibold text-[#1C1208]"
          >
            Plan My Safari
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
      <ClientOnlyUI />
    </main>
  )
}
