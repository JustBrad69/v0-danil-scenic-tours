import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import BookingTerms from '@/components/BookingTerms'
import { BLOB_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Kenya Safari Packages & Pricing | All-Inclusive Safari Tours from Nairobi | Danil Scenic Tours',
  description:
    'View all Kenya safari packages and prices in one place. Single-destination and multi-destination packages from Nairobi with full board, professional guide, and 4x4 Land Cruiser included.',
  alternates: {
    canonical: '/safari-packages',
  },
}

const singleDestinationPackages = [
  {
    number: 1,
    name: 'Nairobi City Tour',
    duration: '1 Day',
    detail: 'Day Safari',
    price: 'USD 260',
    includes:
      'Game drive, Giraffe Centre, Kazuri Beads, lunch at Karen Blixen Restaurant, 4x4 Land Cruiser, guide',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    number: 2,
    name: 'Maasai Mara Safari',
    duration: '4 Days / 3 Nights',
    detail: 'Maasai Mara National Reserve',
    price: 'From USD 830 per person',
    includes:
      'Full board, 4x4 jeep, guide, park fees, airport transfers',
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    number: 3,
    name: 'Amboseli Safari',
    duration: '4 Days / 3 Nights',
    detail: 'Amboseli National Park',
    price: 'From USD 890 per person',
    includes:
      'Full board, 4x4 jeep, guide, park fees, airport transfers',
    href: '/destinations/amboseli-safari-tours',
  },
  {
    number: 4,
    name: 'Tsavo Safari',
    duration: '3 Days / 2 Nights',
    detail: 'Tsavo East & West National Parks',
    price: 'From USD 550 per person',
    includes:
      'Full board, 4x4 jeep, guide, park fees, airport transfers',
    href: '/destinations/tsavo-safari-tours',
  },
  {
    number: 5,
    name: 'Lake Nakuru Safari',
    duration: '3 Days / 2 Nights',
    detail: 'Lake Nakuru National Park',
    price: 'From USD 600 per person',
    includes:
      'Full board, 4x4 jeep, guide, park fees, airport transfers',
    href: '/destinations/lake-nakuru-safari-tours',
  },
  {
    number: 6,
    name: 'Lake Naivasha Safari',
    duration: '2 Days / 1 Night',
    detail: "Boat ride, Crescent Island, Hell's Gate",
    price: 'From USD 948 per person',
    includes:
      "Full board, 4x4 jeep, guide, boat ride, Crescent Island walking safari, Hell's Gate entry",
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    number: 7,
    name: 'Ol Pejeta Conservancy Safari',
    duration: '2 Days / 1 Night',
    detail: 'Ol Pejeta, Nanyuki',
    price: 'From USD 920 per person',
    includes:
      'Full board at Maisha Sweetwaters Camp, 4x4 jeep, guide, park fees, airport transfers',
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    number: 8,
    name: 'Diani Beach Escape',
    duration: '4 Days / 3 Nights',
    detail: 'Diani Beach, Indian Ocean Coast',
    price: 'From USD 523 per person',
    secondaryPrice: 'Solo traveller: USD 989',
    includes:
      'Full board at Diani Sea Lodge, SGR transfer Nairobi to Mombasa, road transfer to Diani, guide, all listed activities',
    href: '/destinations/diani-beach-safari-tours',
  },
]

const multiDestinationPackages = [
  {
    number: 9,
    name: '5-Day Safari: Amboseli, Lake Nakuru & Masai Mara',
    duration: '5 Days',
    route: 'Amboseli → Lake Nakuru → Masai Mara',
    price: 'From USD 1,545 per person',
    includes:
      'Full board, 4x4 jeep, guide, all park fees, airport transfers',
    href: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
  },
  {
    number: 10,
    name: '7 Days / 6 Nights: Masai Mara, Lake Nakuru & Amboseli',
    duration: '7 Days / 6 Nights',
    route: 'Masai Mara → Lake Nakuru → Amboseli',
    price: 'From USD 1,159 per person',
    secondaryPrice: 'Solo traveller: USD 2,602',
    includes: 'Full board, 4x4 safari vehicle, guide, all park fees',
    href: '/safari-tours/7-days-6-nights-maasai-mara-lake-nakuru-amboseli',
  },
  {
    number: 11,
    name: '10-Day Classic Kenya Wildlife & Diani Beach Escape',
    duration: '10 Days / 9 Nights',
    route:
      'Masai Mara → Lake Nakuru → Lake Naivasha → Amboseli → Diani Beach',
    price: 'From USD 2,769 per person',
    secondaryPrice: 'Solo traveller: USD 5,559',
    includes:
      'Full board, 4x4 jeep, guide, all park fees, domestic flight from Amboseli to Diani, boat ride, Crescent Island walk',
    href: '/safari-tours/10-day-kenya-wildlife-diani-beach',
  },
  {
    number: 12,
    name: '13-Day Safari & Coastal Escape',
    duration: '13 Days / 12 Nights',
    route: 'Lake Naivasha → Masai Mara → Diani Beach → Watamu',
    price: 'From USD 3,994 per person',
    includes:
      'Full board, 4x4 jeep, guide, all park fees, two domestic flights, all listed coastal excursions',
    href: '/safari-tours/13-day-kenya-safari-coastal-escape',
  },
]

const standardIncluded = [
  'Full board accommodation',
  'Private transport in a 4x4 Land Cruiser with pop-up roof',
  'Professional English-speaking safari driver-guide',
  'All national park and conservancy entry fees',
  'Airport or hotel pickup and dropoff in Nairobi',
]

const standardExcluded = [
  'International flights to and from Kenya',
  'Visa fees and travel insurance',
  'Tips and gratuities for guides and lodge staff',
  'Personal expenses such as drinks, laundry, and souvenirs',
  'Optional activities not listed in the itinerary',
]

const itineraryLinks = [
  {
    name: 'Nairobi City Tour',
    detail: 'Full-Day National Park Safari',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    name: 'Maasai Mara Safari Tours',
    detail: '4 Days / 3 Nights',
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    name: 'Amboseli Safari Tours',
    detail: '4 Days / 3 Nights',
    href: '/destinations/amboseli-safari-tours',
  },
  {
    name: 'Tsavo Safari Tours',
    detail: '3 Days / 2 Nights',
    href: '/destinations/tsavo-safari-tours',
  },
  {
    name: 'Lake Nakuru Safari Tours',
    detail: '3 Days / 2 Nights',
    href: '/destinations/lake-nakuru-safari-tours',
  },
  {
    name: 'Lake Naivasha Safari Tours',
    detail: '2 Days / 1 Night',
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    name: 'Ol Pejeta Conservancy Safari Tours',
    detail: '2 Days / 1 Night',
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    name: 'Diani Beach Escape',
    detail: '4 Days / 3 Nights',
    href: '/destinations/diani-beach-safari-tours',
  },
  {
    name: '5-Day Safari: Amboseli, Lake Nakuru & Masai Mara',
    detail: '5 Days',
    href: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
  },
  {
    name: '7 Days / 6 Nights: Masai Mara, Lake Nakuru & Amboseli',
    detail: '7 Days / 6 Nights',
    href: '/safari-tours/7-days-6-nights-maasai-mara-lake-nakuru-amboseli',
  },
  {
    name: '10-Day Classic Kenya Wildlife & Diani Beach Escape',
    detail: '10 Days / 9 Nights',
    href: '/safari-tours/10-day-kenya-wildlife-diani-beach',
  },
  {
    name: '13-Day Safari & Coastal Escape',
    detail: '13 Days / 12 Nights',
    href: '/safari-tours/13-day-kenya-safari-coastal-escape',
  },
]

export default function SafariPackagesPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      <section className="relative flex min-h-[58svh] items-center justify-center overflow-hidden px-4 pb-14 pt-28 sm:min-h-[64svh] sm:pt-32">
        <Image
          src={BLOB_IMAGES.CTA_BANNER}
          alt="Kenya safari packages"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[rgba(28,18,8,0.76)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            Kenya Safari Packages: Pricing for All Single-Destination &
            Multi-Destination Safari Tours
          </h1>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            All Danil Scenic Tours safari pricing is listed on this page.
            Browse single-destination safaris or multi-destination combination
            packages, compare options, and contact us to confirm your dates and
            group size.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Every package includes full board accommodation, a professional
            safari guide, private 4x4 Land Cruiser with pop-up roof, park entry
            fees, and airport transfers unless otherwise stated.
          </p>

          <p className="font-inter text-sm leading-7 text-[#1C1208] sm:text-base">
            Prices are in USD and based on group travel unless otherwise
            stated.
          </p>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A]">
              Packages 1-8
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
              Single-Destination Safaris
            </h2>

            <p className="mt-4 font-inter text-sm leading-7 text-[#1C1208] sm:text-base">
              Eight single-destination safari packages. Each listed starting
              price is based on group travel unless otherwise stated.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {singleDestinationPackages.map((pkg) => (
              <article
                key={pkg.number}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-sm sm:p-6"
              >
                <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                  Package {pkg.number}
                </p>

                <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                  {pkg.name}
                </h3>

                <p className="mt-3 font-inter text-sm font-semibold text-[#1C1208]">
                  {pkg.duration}
                </p>

                <p className="mt-1 font-inter text-sm leading-relaxed text-[#1C1208]/75">
                  {pkg.detail}
                </p>

                <p className="mt-4 font-montserrat text-lg font-bold text-[#D4870A]">
                  {pkg.price}
                </p>

                {pkg.secondaryPrice && (
                  <p className="mt-1 font-inter text-sm text-[#1C1208]/75">
                    {pkg.secondaryPrice}
                  </p>
                )}

                <div className="mt-4 flex-1">
                  <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#2A4A35]">
                    Includes
                  </p>

                  <p className="mt-2 font-inter text-sm leading-6 text-[#1C1208]">
                    {pkg.includes}
                  </p>
                </div>

                <Link
                  href={pkg.href}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
                >
                  View Full Itinerary
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A]">
              Packages 9-12
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
              Multi-Destination Safaris
            </h2>

            <p className="mt-4 font-inter text-sm leading-7 text-[#1C1208] sm:text-base">
              Four multi-destination packages combining Kenya&apos;s wildlife
              parks and coastal destinations in one guided journey.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {multiDestinationPackages.map((pkg) => (
              <article
                key={pkg.number}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8"
              >
                <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                  Package {pkg.number}
                </p>

                <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                  {pkg.name}
                </h3>

                <p className="mt-3 font-inter text-sm font-semibold text-[#1C1208]">
                  {pkg.duration}
                </p>

                <p className="mt-2 font-inter text-sm leading-7 text-[#1C1208]">
                  {pkg.route}
                </p>

                <p className="mt-4 font-montserrat text-lg font-bold text-[#D4870A]">
                  {pkg.price}
                </p>

                {pkg.secondaryPrice && (
                  <p className="mt-1 font-inter text-sm text-[#1C1208]/75">
                    {pkg.secondaryPrice}
                  </p>
                )}

                <div className="mt-4 flex-1">
                  <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#2A4A35]">
                    Includes
                  </p>

                  <p className="mt-2 font-inter text-sm leading-6 text-[#1C1208]">
                    {pkg.includes}
                  </p>
                </div>

                <Link
                  href={pkg.href}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 font-montserrat text-sm font-semibold text-[#D4870A]"
                >
                  View Full Itinerary
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What&apos;s Included in Every Package
            </h2>

            <ul className="mt-6 space-y-3">
              {standardIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4870A]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What&apos;s Not Included in Any Package
            </h2>

            <ul className="mt-6 space-y-3">
              {standardExcluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base"
                >
                  <XCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4870A]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <BookingTerms />

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
              Ready to Book Your Kenya Safari?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl font-inter text-base leading-7 text-[#1C1208]">
              Contact us with your preferred package, travel dates, and group
              size. We will send you a confirmed quote and availability.
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="https://wa.me/254722919249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2A4A35] px-6 py-3 font-montserrat text-sm font-semibold text-white"
            >
              WhatsApp: +254 722 919 249
            </Link>

            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208]"
            >
              Book Online
            </Link>
          </div>

          <p className="mt-5 text-center font-inter text-sm text-[#1C1208]/75">
            safari@danilscenictours.co.ke
          </p>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Browse All Safari Itineraries
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {itineraryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-24 flex-col justify-center rounded-xl bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="font-playfair text-xl font-bold text-[#2A4A35]">
                  {item.name}
                </span>

                <span className="mt-1 font-inter text-sm text-[#1C1208]/70">
                  {item.detail}
                </span>

                <span className="mt-3 inline-flex items-center gap-2 font-montserrat text-xs font-semibold text-[#D4870A]">
                  View itinerary
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ClientOnlyUI />
    </main>
  )
}
