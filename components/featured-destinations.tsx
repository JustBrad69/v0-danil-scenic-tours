import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BLOB_IMAGES, LOCAL_IMAGES } from '@/lib/images'

const destinations = [
  {
    name: 'Maasai Mara',
    description:
      'Experience legendary wildlife, big cats, sweeping savannahs, and the Great Migration.',
    image: BLOB_IMAGES.MAASAI_MARA,
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    name: 'Amboseli',
    description:
      'See large elephant herds beneath the unforgettable backdrop of Mount Kilimanjaro.',
    image: LOCAL_IMAGES.AMBOSELI_ELEPHANTS,
    href: '/destinations/amboseli-safari-tours',
  },
  {
    name: 'Lake Nakuru',
    description:
      'Discover rhinos, flamingos, Rothschild giraffes, big cats, and Rift Valley scenery.',
    image: BLOB_IMAGES.LAKE_NAKURU,
    href: '/destinations/lake-nakuru-safari-tours',
  },
  {
    name: 'Nairobi National Park',
    description:
      'Experience wildlife against the Nairobi skyline on a convenient full-day city safari.',
    image: LOCAL_IMAGES.ZEBRAS_SAVANNA,
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    name: 'Ol Pejeta Conservancy',
    description:
      'Explore Big Five country and one of Kenya’s most important rhino conservation areas.',
    image: LOCAL_IMAGES.IMPALA_HERD,
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    name: 'Lake Naivasha',
    description:
      "Cruise among hippos, walk with wildlife on Crescent Island, and explore Hell's Gate.",
    image: LOCAL_IMAGES.CROWNED_CRANE,
    href: '/destinations/lake-naivasha-safari-tours',
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Explore Kenya
          </p>

          <h2 className="mt-3 font-playfair text-3xl leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
            Featured Safari Destinations
          </h2>

          <p className="mt-4 font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Discover Kenya’s wildlife parks, conservancies, lakes, and
            unforgettable safari experiences.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {destinations.map((destination, index) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <Link
                href={destination.href}
                className="block"
                aria-label={`Explore ${destination.name}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={`${destination.name} safari destination in Kenya`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-playfair text-2xl text-[#2A4A35]">
                    {destination.name}
                  </h3>

                  <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
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

        <div className="mt-10 text-center">
          <Link
            href="/destinations"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#2A4A35] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-[#1C3028] sm:text-base"
          >
            Explore All Destinations
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
