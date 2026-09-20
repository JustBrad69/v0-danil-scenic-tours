import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICE_IMAGES, BLOB_IMAGES } from '@/lib/images'

const services = [
  {
    title: 'Safari Tours',
    teaser: 'Big Five game drives through Kenya\'s greatest national parks.',
    image: SERVICE_IMAGES.SAFARI_TOURS,
    price: 'Starting from $350/Day',
    href: '/safari-tours',
  },
  {
    title: 'Cultural Expeditions',
    teaser: 'Live the traditions, taste the cuisine, meet the people.',
    image: SERVICE_IMAGES.CULTURAL_EXPEDITIONS,
    price: 'Starting from $250/Day',
    href: '/safari-tours',
  },
  {
    title: 'Adventure Safaris',
    teaser: 'Hiking, biking, and hot air ballooning for the thrill-seeker.',
    image: SERVICE_IMAGES.ADVENTURE_SAFARIS,
    price: 'Starting from $280/Day',
    href: '/safari-tours',
  },
  {
    title: 'Beach Escapes',
    teaser: 'Unwind on Kenya\'s pristine Indian Ocean coastline.',
    image: SERVICE_IMAGES.BEACH_ESCAPES,
    price: 'Starting from $180/Night',
    href: '/safari-tours',
  },
]

export default function ServicesGrid() {
  return (
    <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-playfair text-3xl leading-tight text-[#2A4A35] sm:text-4xl md:mb-16 md:text-5xl">
          Kenya Safari Tours, Kenya Safari Packages & Private Safari Tours
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 lg:hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full sm:aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={`${service.title} with Danil Scenic Tours in Kenya`}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 32px), 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-4 p-5 sm:p-6 md:p-8">
                <h3 className="font-playfair text-2xl leading-tight text-[#2A4A35]">
                  {service.title}
                </h3>

                <p className="font-inter leading-relaxed text-[#1C1208]">
                  {service.teaser}
                </p>

                <p className="font-montserrat text-base font-semibold text-[#2A4A35]">
                  {service.price}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex min-h-11 items-center gap-2 py-2 font-montserrat font-semibold text-[#D4870A] transition-all hover:gap-3"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <h2 className="mb-10 mt-16 text-center font-playfair text-3xl leading-tight text-[#2A4A35] sm:mt-20 sm:text-4xl md:mb-16 md:mt-24 md:text-5xl">
          Custom Safari Adventures & Professional Car Hire
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
          <article
            className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 lg:hover:shadow-xl"
            aria-label="Custom Safaris service"
          >
            <div className="relative aspect-[16/10] w-full sm:aspect-[4/3]">
              <Image
                src={SERVICE_IMAGES.CUSTOMIZED_SAFARIS}
                alt="Custom safari experience with Danil Scenic Tours in Kenya"
                fill
                sizes="(max-width: 767px) calc(100vw - 32px), 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-4 p-5 sm:p-6 md:p-8">
              <h3 className="font-playfair text-2xl leading-tight text-[#2A4A35]">
                Custom Safaris
              </h3>

              <p className="font-inter leading-relaxed text-[#1C1208]">
                Tailor-made itineraries designed specifically for your interests,
                budget, and pace. From private family getaways to specialized
                photography expeditions.
              </p>

              <Link
                href="/book#booking-form"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#F97316] px-5 py-3 font-montserrat text-sm font-semibold text-white transition-all hover:shadow-lg sm:px-6 sm:text-base"
              >
                Consult an Expert Planner
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>

          <article
            className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 lg:hover:shadow-xl"
            aria-label="Professional Car Hire service"
          >
            <div className="relative aspect-[16/10] w-full sm:aspect-[4/3]">
              <Image
                src={BLOB_IMAGES.SAFARI_PHOTO_2}
                alt="Safari 4x4 Land Cruiser available for professional car hire with Danil Scenic Tours"
                fill
                sizes="(max-width: 767px) calc(100vw - 32px), 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-4 p-5 sm:p-6 md:p-8">
              <h3 className="font-playfair text-2xl leading-tight text-[#2A4A35]">
                Professional Car Hire
              </h3>

              <p className="font-inter leading-relaxed text-[#1C1208]">
                Explore Kenya at your own pace with our fleet of reliable 4x4 Land
                Cruisers and Safari Vans. Available with professional drivers or as
                self-drive options.
              </p>

              <p className="font-montserrat text-base font-semibold text-[#2A4A35]">
                Starting from $120/Day
              </p>

              <Link
                href="/book#booking-form"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#F97316] px-5 py-3 font-montserrat text-sm font-semibold text-white transition-all hover:shadow-lg sm:px-6 sm:text-base"
              >
                Request a Transport Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
