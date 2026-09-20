import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICE_IMAGES, BLOB_IMAGES } from '@/lib/images'

const services = [
  {
    title: 'Safari Tours',
    teaser:
      "Big Five game drives through Kenya's greatest national parks and reserves.",
    image: SERVICE_IMAGES.SAFARI_TOURS,
    href: '/safari-tours',
    cta: 'Explore Safari Tours',
  },
  {
    title: 'Cultural Expeditions',
    teaser:
      'Experience Kenyan traditions, communities, heritage, cuisine, and local culture.',
    image: SERVICE_IMAGES.CULTURAL_EXPEDITIONS,
    href: '/safari-tours',
    cta: 'Explore Experiences',
  },
  {
    title: 'Adventure Safaris',
    teaser:
      'Combine wildlife with hiking, walking experiences, cycling, and other outdoor adventures.',
    image: SERVICE_IMAGES.ADVENTURE_SAFARIS,
    href: '/safari-tours',
    cta: 'Explore Adventures',
  },
  {
    title: 'Beach Escapes',
    teaser:
      "Unwind on Kenya's Indian Ocean coast after your safari adventure.",
    image: SERVICE_IMAGES.BEACH_ESCAPES,
    href: '/destinations/diani-beach-safari-tours',
    cta: 'Explore Diani Beach',
  },
]

export default function ServicesGrid() {
  return (
    <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Travel Experiences
          </p>

          <h2 className="mt-3 font-playfair text-3xl font-bold leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
            Kenya Safari Tours, Cultural Experiences & Beach Escapes
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Explore wildlife safaris, cultural experiences, outdoor
            adventures, and coastal escapes across Kenya.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <Link
                href={service.href}
                className="flex h-full flex-col"
                aria-label={service.cta}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} with Danil Scenic Tours`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
                  <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                    {service.teaser}
                  </p>

                  <span className="mt-5 inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]">
                    {service.cta}

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

        <div className="mx-auto mt-16 max-w-4xl text-center sm:mt-20">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Tailored Travel
          </p>

          <h2 className="mt-3 font-playfair text-3xl font-bold leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
            Custom Safari Adventures & Professional Transport
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={BLOB_IMAGES.SAFARI_PHOTO_1}
                alt="Custom Kenya safari experience with Danil Scenic Tours"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Custom Safaris
              </h3>

              <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Build a tailor-made itinerary around your preferred
                destinations, travel dates, group size, accommodation style,
                interests, and pace.
              </p>

              <Link
                href="/book"
                className="mt-5 inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                Plan a Custom Safari

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>

          <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={BLOB_IMAGES.SAFARI_PHOTO_2}
                alt="Safari 4x4 Land Cruiser transport with Danil Scenic Tours"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Professional Car Hire
              </h3>

              <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Arrange reliable safari transport for your Kenya journey,
                including 4x4 Land Cruisers and professional driver services.
              </p>

              <Link
                href="/book"
                className="mt-5 inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                Request a Transport Quote

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/safari-packages"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#2A4A35] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-[#1C3028] sm:text-base"
          >
            View Safari Packages & Prices
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
