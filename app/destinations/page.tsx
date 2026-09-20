import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { BLOB_IMAGES, LOCAL_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Kenya Safari Destinations | Danil Scenic Tours',
  description:
    'Explore Kenya safari destinations including Maasai Mara, Amboseli, Tsavo, Lake Nakuru, Lake Naivasha, Ol Pejeta, Nairobi National Park, and Diani Beach.',
  alternates: {
    canonical: '/destinations',
  },
  openGraph: {
    title: 'Kenya Safari Destinations | Danil Scenic Tours',
    description:
      'Explore Kenya wildlife parks, conservancies, Rift Valley lakes, Nairobi safari experiences, and the Indian Ocean coast.',
    url: '/destinations',
    type: 'website',
    images: [
      {
        url: BLOB_IMAGES.MAASAI_MARA,
        alt: 'Kenya safari destinations',
      },
    ],
  },
}

const destinations = [
  {
    name: 'Maasai Mara',
    subtitle: 'Great Migration & Big Cats',
    description:
      'Explore Kenya’s most famous wildlife reserve, home to lions, elephants, cheetahs, leopards, buffaloes, and the seasonal Great Migration.',
    image: BLOB_IMAGES.MAASAI_MARA,
    href: '/destinations/maasai-mara-safari-tours',
    cta: 'Explore Maasai Mara',
  },
  {
    name: 'Amboseli',
    subtitle: 'Elephants & Mount Kilimanjaro',
    description:
      'See elephant herds across open plains with Mount Kilimanjaro rising beyond one of Kenya’s most recognisable safari landscapes.',
    image: LOCAL_IMAGES.AMBOSELI_ELEPHANTS,
    href: '/destinations/amboseli-safari-tours',
    cta: 'Explore Amboseli',
  },
  {
    name: 'Tsavo',
    subtitle: 'Red Elephants & Vast Wilderness',
    description:
      'Discover Tsavo East and Tsavo West, with Red Elephants, volcanic landscapes, Mzima Springs, rhinos, and enormous wilderness areas.',
    image: BLOB_IMAGES.TSAVO_EAST,
    href: '/destinations/tsavo-safari-tours',
    cta: 'Explore Tsavo',
  },
  {
    name: 'Nairobi National Park',
    subtitle: 'Safari in the City',
    description:
      'Combine a Nairobi National Park game drive with the Giraffe Centre, Kazuri Beads, and other city experiences in one full-day itinerary.',
    image: LOCAL_IMAGES.ZEBRAS_SAVANNA,
    href: '/destinations/nairobi-national-park-safari-tours',
    cta: 'Explore Nairobi Safari',
  },
  {
    name: 'Ol Pejeta Conservancy',
    subtitle: 'Big Five Conservation',
    description:
      'Experience Big Five wildlife and rhino conservation in Kenya’s central highlands, including the home of the last two northern white rhinos.',
    image: LOCAL_IMAGES.IMPALA_HERD,
    href: '/destinations/ol-pejeta-safari-tours',
    cta: 'Explore Ol Pejeta',
  },
  {
    name: 'Lake Naivasha',
    subtitle: "Hippos, Hell's Gate & Crescent Island",
    description:
      "Take a boat safari among hippos, walk with wildlife on Crescent Island, and explore the dramatic landscapes of Hell's Gate National Park.",
    image: LOCAL_IMAGES.CROWNED_CRANE,
    href: '/destinations/lake-naivasha-safari-tours',
    cta: 'Explore Lake Naivasha',
  },
  {
    name: 'Lake Nakuru',
    subtitle: 'Rhinos, Flamingos & Rift Valley Scenery',
    description:
      'Explore one of Kenya’s leading rhino sanctuaries, with flamingos, Rothschild giraffes, lions, leopards, buffaloes, and more than 400 recorded bird species.',
    image: BLOB_IMAGES.LAKE_NAKURU,
    href: '/destinations/lake-nakuru-safari-tours',
    cta: 'Explore Lake Nakuru',
  },
  {
    name: 'Diani Beach',
    subtitle: 'Indian Ocean Coast',
    description:
      'Finish your Kenya journey on white sand beaches with snorkeling, Kisite-Mpunguti Marine Park, Wasini Island, Shimba Hills, and coastal culture.',
    image: BLOB_IMAGES.DIANI_BEACH,
    href: '/destinations/diani-beach-safari-tours',
    cta: 'Explore Diani Beach',
  },
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[62svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[68svh] sm:pt-32">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Kenya safari landscape in the Maasai Mara"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.82)_0%,rgba(28,18,8,0.34)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Explore Kenya
          </p>

          <h1 className="mt-4 font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Kenya Safari Destinations
          </h1>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Explore Kenya’s wildlife parks, conservancies, Rift Valley lakes,
            Nairobi safari experiences, and Indian Ocean coast before choosing
            the trip that fits you.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Find the Kenya Experience You Want
          </h2>

          <p className="mt-5 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Each destination page includes detailed itinerary information,
            wildlife highlights, accommodation, the best time to visit,
            practical planning information, FAQs, and booking options.
          </p>

          <p className="mt-4 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Explore the destinations first, compare the experiences, then
            choose the safari or beach escape that works best for your trip.
          </p>
        </div>
      </section>

      {/* Destination Grid */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <Link
                  href={destination.href}
                  className="flex h-full flex-col"
                  aria-label={destination.cta}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={`${destination.name} safari destination in Kenya`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.12em] text-[#D4870A]">
                      {destination.subtitle}
                    </p>

                    <h2 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                      {destination.name}
                    </h2>

                    <p className="mt-3 flex-1 font-inter text-sm leading-relaxed text-[#1C1208]">
                      {destination.description}
                    </p>

                    <span className="mt-5 inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]">
                      {destination.cta}

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

      {/* Safari Planning */}
      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8 md:p-10">
          <h2 className="font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Want to Visit More Than One Destination?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-inter text-base leading-relaxed text-[#1C1208]">
            Our multi-destination safaris combine several parks and experiences
            into one itinerary, including routes through Maasai Mara, Lake
            Nakuru, Lake Naivasha, Amboseli, and Diani Beach.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/safari-tours"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#2A4A35] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-[#1C3028]"
            >
              Explore Kenya Safari Tours
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:bg-[#D4870A] hover:text-[#1C1208]"
            >
              Compare Safari Packages
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-28">
        <Image
          src={BLOB_IMAGES.CTA_BANNER}
          alt="Kenya safari landscape"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[rgba(28,18,8,0.74)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Know Where You Want to Go?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Send us your preferred destination, travel dates, and group size
            and we will help you plan the trip.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              Book Your Safari
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
