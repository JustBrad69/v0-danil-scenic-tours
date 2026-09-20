import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Users,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { BLOB_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Kenya Safari Packages & Pricing | All-Inclusive Safari Tours from Nairobi | Danil Scenic Tours',
  description:
    'View all Kenya safari packages and prices in one place. Single-destination and multi-destination packages from Nairobi with full board, professional guide, and 4x4 Land Cruiser included.',
  alternates: {
    canonical: '/safari-packages',
  },
  openGraph: {
    title:
      'Kenya Safari Packages & Pricing | Danil Scenic Tours',
    description:
      'Compare Kenya safari packages, prices, destinations, durations, and full itineraries from Nairobi.',
    url: '/safari-packages',
    type: 'website',
    images: [
      {
        url: BLOB_IMAGES.CTA_BANNER,
        alt: 'Kenya safari landscape',
      },
    ],
  },
}

const singleDestinationPackages = [
  {
    number: '01',
    title: 'Nairobi City Tour',
    duration: '1 Day',
    location: 'Nairobi',
    price: 'USD 260',
    priceLabel: 'Group Price',
    soloPrice: null,
    includes:
      'Game drive, Giraffe Centre, Kazuri Beads, lunch at Karen Blixen Restaurant, 4x4 Land Cruiser, and guide.',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    number: '02',
    title: 'Maasai Mara Safari',
    duration: '4 Days / 3 Nights',
    location: 'Maasai Mara National Reserve',
    price: 'From USD 830 per person',
    priceLabel: 'Group Price',
    soloPrice: null,
    includes:
      'Full board, 4x4 safari vehicle, guide, park fees, and airport transfers.',
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    number: '03',
    title: 'Amboseli Safari',
    duration: '4 Days / 3 Nights',
    location: 'Amboseli National Park',
    price: 'From USD 890 per person',
    priceLabel: 'Group Price',
    soloPrice: null,
    includes:
      'Full board, 4x4 safari vehicle, guide, park fees, and airport transfers.',
    href: '/destinations/amboseli-safari-tours',
  },
  {
    number: '04',
    title: 'Tsavo Safari',
    duration: '3 Days / 2 Nights',
    location: 'Tsavo East & West National Parks',
    price: 'From USD 550 per person',
    priceLabel: 'Group Price',
    soloPrice: null,
    includes:
      'Full board, 4x4 safari vehicle, guide, park fees, and airport transfers.',
    href: '/destinations/tsavo-safari-tours',
  },
  {
    number: '05',
    title: 'Lake Nakuru Safari',
    duration: '3 Days / 2 Nights',
    location: 'Lake Nakuru National Park',
    price: 'From USD 600 per person',
    priceLabel: 'Group Price',
    soloPrice: null,
    includes:
      'Full board, 4x4 safari vehicle, guide, park fees, and airport transfers.',
    href: '/destinations/lake-nakuru-safari-tours',
  },
  {
    number: '06',
    title: 'Lake Naivasha Safari',
    duration: '2 Days / 1 Night',
    location: "Lake Naivasha, Crescent Island & Hell's Gate",
    price: 'From USD 948 per person',
    priceLabel: 'Group Price',
    soloPrice: null,
    includes:
      "Full board, 4x4 safari vehicle, guide, boat ride, Crescent Island walking safari, and Hell's Gate entry.",
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    number: '07',
    title: 'Ol Pejeta Conservancy Safari',
    duration: '2 Days / 1 Night',
    location: 'Ol Pejeta, Nanyuki',
    price: 'From USD 920 per person',
    priceLabel: 'Group Price',
    soloPrice: null,
    includes:
      'Full board at Maisha Sweetwaters Camp, 4x4 safari vehicle, guide, park fees, and airport transfers.',
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    number: '08',
    title: 'Diani Beach Escape',
    duration: '4 Days / 3 Nights',
    location: 'Diani Beach, Indian Ocean Coast',
    price: 'From USD 523 per person',
    priceLabel: 'Group Price',
    soloPrice: 'USD 989',
    includes:
      'Full board at Diani Sea Lodge, SGR transfer from Nairobi to Mombasa, road transfer to Diani, guide, and listed activities.',
    href: '/destinations/diani-beach-safari-tours',
  },
]

const multiDestinationPackages = [
  {
    number: '09',
    title: '5-Day Safari: Amboseli, Lake Nakuru & Masai Mara',
    duration: '5 Days',
    route: 'Amboseli → Lake Nakuru → Masai Mara',
    price: 'From USD 1,545 per person',
    soloPrice: null,
    includes:
      'Full board, 4x4 safari vehicle, guide, all park fees, and airport transfers.',
    href: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
  },
  {
    number: '10',
    title: '7-Day Safari: Masai Mara, Lake Nakuru & Amboseli',
    duration: '7 Days / 6 Nights',
    route: 'Masai Mara → Lake Nakuru → Amboseli',
    price: 'From USD 1,159 per person',
    soloPrice: 'USD 2,602',
    includes:
      'Full board, 4x4 safari vehicle, guide, and all park fees.',
    href: '/safari-tours/7-day-budget-kenya-safari',
  },
  {
    number: '11',
    title: '10-Day Classic Kenya Wildlife & Diani Beach Escape',
    duration: '10 Days / 9 Nights',
    route:
      'Masai Mara → Lake Nakuru → Lake Naivasha → Amboseli → Diani Beach',
    price: 'From USD 2,769 per person',
    soloPrice: 'USD 5,559',
    includes:
      'Full board, 4x4 safari vehicle, guide, all park fees, domestic flight from Amboseli to Diani, Lake Naivasha boat ride, and Crescent Island walk.',
    href: '/safari-tours/10-day-kenya-wildlife-diani-beach',
  },
]

const alwaysIncluded = [
  'Full board accommodation with breakfast, lunch, and dinner throughout, unless otherwise stated',
  'Private transport in a 4x4 Land Cruiser with pop-up roof',
  'Professional English-speaking safari driver-guide',
  'All national park and conservancy entry fees according to the itinerary',
  'Airport or hotel pickup and drop-off in Nairobi, unless otherwise stated',
]

const notIncluded = [
  'International flights to and from Kenya',
  'Visa fees and travel insurance',
  'Tips and gratuities for guides and lodge staff',
  'Personal expenses such as drinks, laundry, and souvenirs',
  'Optional activities not listed in the itinerary',
]

const singleItineraries = [
  {
    label: 'Nairobi City Tour',
    duration: '1 Day',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    label: 'Maasai Mara Safari Tours',
    duration: '4 Days / 3 Nights',
    href: '/destinations/maasai-mara-safari-tours',
  },
  {
    label: 'Amboseli Safari Tours',
    duration: '4 Days / 3 Nights',
    href: '/destinations/amboseli-safari-tours',
  },
  {
    label: 'Tsavo Safari Tours',
    duration: '3 Days / 2 Nights',
    href: '/destinations/tsavo-safari-tours',
  },
  {
    label: 'Lake Nakuru Safari Tours',
    duration: '3 Days / 2 Nights',
    href: '/destinations/lake-nakuru-safari-tours',
  },
  {
    label: 'Lake Naivasha Safari Tours',
    duration: '2 Days / 1 Night',
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    label: 'Ol Pejeta Conservancy Safari Tours',
    duration: '2 Days / 1 Night',
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    label: 'Diani Beach Escape',
    duration: '4 Days / 3 Nights',
    href: '/destinations/diani-beach-safari-tours',
  },
]

const multiItineraries = [
  {
    label: '5-Day Safari: Amboseli, Lake Nakuru & Masai Mara',
    duration: '5 Days',
    href: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
  },
  {
    label: '7-Day Safari: Masai Mara, Lake Nakuru & Amboseli',
    duration: '7 Days / 6 Nights',
    href: '/safari-tours/7-day-budget-kenya-safari',
  },
  {
    label: '10-Day Classic Kenya Wildlife & Diani Beach Escape',
    duration: '10 Days / 9 Nights',
    href: '/safari-tours/10-day-kenya-wildlife-diani-beach',
  },
]

export default function SafariPackagesPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[68svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[72svh] sm:pt-32 md:pb-20">
        <Image
          src={BLOB_IMAGES.CTA_BANNER}
          alt="Kenya safari landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.84)_0%,rgba(28,18,8,0.34)_100%)]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Safari Packages & Pricing
          </p>

          <h1 className="mx-auto mt-4 max-w-6xl font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Kenya Safari Packages: Pricing for All Single-Destination &
            Multi-Destination Safari Tours
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Compare safari durations, destinations, inclusions, and published
            prices before opening the full itinerary for each trip.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              Request a Quote
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
        </div>
      </section>

      {/* Introduction */}
      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-5 text-center">
            <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
              All Danil Scenic Tours safari pricing is listed on this page.
              Browse single-destination safaris or multi-destination
              combination packages, compare options, and contact us to confirm
              your dates and group size.
            </p>

            <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
              Packages generally include full-board accommodation, a
              professional safari guide, private 4x4 safari transport, park
              entry fees, and transfers unless the individual package states
              otherwise.
            </p>

            <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
              Prices are quoted in USD and are based on group travel unless
              otherwise stated.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-[#D4870A] bg-white p-5 shadow-sm sm:p-6">
            <p className="text-center font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
              <strong className="font-montserrat text-[#2A4A35]">
                Need confirmed availability?
              </strong>{' '}
              Send your preferred package, travel dates, and group size by
              WhatsApp. We respond within 24 hours with availability and a
              confirmed quote for your dates.
            </p>
          </div>
        </div>
      </section>

      {/* Single Destination */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A]">
              Eight Packages
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
              Single-Destination Safaris
            </h2>

            <p className="mt-4 font-inter text-base leading-relaxed text-[#1C1208]">
              Each published group price is based on a group of 7 people unless
              otherwise stated.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {singleDestinationPackages.map((pkg) => (
              <article
                key={pkg.number}
                className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-[#D4870A]">
                      Package {pkg.number}
                    </p>

                    <h3 className="mt-2 font-playfair text-2xl font-bold leading-tight text-[#2A4A35] sm:text-3xl">
                      {pkg.title}
                    </h3>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#F2E8D5] px-3 py-1 font-montserrat text-xs font-semibold text-[#2A4A35]">
                    {pkg.duration}
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-2">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4870A]"
                    aria-hidden="true"
                  />

                  <p className="font-inter text-sm leading-relaxed text-[#1C1208]">
                    {pkg.location}
                  </p>
                </div>

                <div className="mt-6 rounded-xl bg-[#F2E8D5] p-4">
                  <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#2A4A35]">
                    {pkg.priceLabel}
                  </p>

                  <p className="mt-1 font-playfair text-2xl font-bold text-[#D4870A]">
                    {pkg.price}
                  </p>

                  {pkg.soloPrice && (
                    <p className="mt-2 font-inter text-sm text-[#1C1208]">
                      <strong>Solo Traveller:</strong> {pkg.soloPrice}
                    </p>
                  )}
                </div>

                <div className="mt-5 flex-1">
                  <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#2A4A35]">
                    Includes
                  </p>

                  <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208]">
                    {pkg.includes}
                  </p>
                </div>

                <Link
                  href={pkg.href}
                  className="mt-6 inline-flex min-h-12 items-center justify-between gap-3 rounded-lg bg-[#2A4A35] px-5 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-[#1C3028]"
                >
                  View Full Itinerary
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Multi Destination */}
      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A]">
              Combination Safaris
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
              Multi-Destination Safaris
            </h2>

            <p className="mt-4 font-inter text-base leading-relaxed text-[#1C1208]">
              Combine several of Kenya's wildlife parks and coastal
              destinations in one guided itinerary.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {multiDestinationPackages.map((pkg) => (
              <article
                key={pkg.number}
                className="flex h-full flex-col rounded-2xl border border-[#D4870A]/20 bg-white p-5 shadow-sm sm:p-6 md:p-8"
              >
                <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-[#D4870A]">
                  Package {pkg.number}
                </p>

                <h3 className="mt-2 font-playfair text-2xl font-bold leading-tight text-[#2A4A35]">
                  {pkg.title}
                </h3>

                <div className="mt-5 flex items-start gap-2">
                  <Clock
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4870A]"
                    aria-hidden="true"
                  />

                  <p className="font-inter text-sm text-[#1C1208]">
                    {pkg.duration}
                  </p>
                </div>

                <div className="mt-3 flex items-start gap-2">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-[#D4870A]"
                    aria-hidden="true"
                  />

                  <p className="font-inter text-sm leading-relaxed text-[#1C1208]">
                    {pkg.route}
                  </p>
                </div>

                <div className="mt-6 rounded-xl bg-[#F2E8D5] p-4">
                  <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#2A4A35]">
                    Group Price
                  </p>

                  <p className="mt-1 font-playfair text-2xl font-bold text-[#D4870A]">
                    {pkg.price}
                  </p>

                  {pkg.soloPrice && (
                    <p className="mt-2 font-inter text-sm text-[#1C1208]">
                      <strong>Solo Traveller:</strong> {pkg.soloPrice}
                    </p>
                  )}
                </div>

                <div className="mt-5 flex-1">
                  <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#2A4A35]">
                    Includes
                  </p>

                  <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208]">
                    {pkg.includes}
                  </p>
                </div>

                <Link
                  href={pkg.href}
                  className="mt-6 inline-flex min-h-12 items-center justify-between gap-3 rounded-lg bg-[#2A4A35] px-5 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-[#1C3028]"
                >
                  View Full Itinerary
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Included / Excluded */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            What's Included in Our Safari Packages
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208]">
            The following applies across Danil Scenic Tours packages unless a
            specific itinerary states otherwise.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h3 className="font-playfair text-3xl font-bold text-[#2A4A35]">
                What's Included
              </h3>

              <ul className="mt-6 space-y-3">
                {alwaysIncluded.map((item) => (
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
              <h3 className="font-playfair text-3xl font-bold text-[#2A4A35]">
                What's Not Included
              </h3>

              <ul className="mt-6 space-y-3">
                {notIncluded.map((item) => (
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
        </div>
      </section>

      {/* Terms */}
      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Terms and Conditions
          </h2>

          <div className="mt-10 space-y-4">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-base font-bold text-[#2A4A35]">
                Pricing Changes
              </h3>

              <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Prices listed on this page are subject to change. Rates may
                change if government taxes, park fees, or levies are revised
                before travel.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-base font-bold text-[#2A4A35]">
                Deposit and Final Balance
              </h3>

              <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                A deposit of 30% of the total package cost is required to
                confirm the booking. The remaining balance must be settled no
                later than 45 days before the start of the safari.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-base font-bold text-[#2A4A35]">
                Payment Methods
              </h3>

              <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Payment instructions for bank transfer, mobile money, or card
                payment will be provided upon confirmation of the booking.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-base font-bold text-[#2A4A35]">
                Cancellation Policy
              </h3>

              <div className="mt-4 space-y-3">
                <div className="flex items-start justify-between gap-4 border-b border-[#D4870A]/15 pb-3">
                  <p className="font-inter text-sm text-[#1C1208]">
                    60+ days before departure
                  </p>

                  <p className="text-right font-montserrat text-sm font-semibold text-[#2A4A35]">
                    Full refund less administrative fees
                  </p>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-[#D4870A]/15 pb-3">
                  <p className="font-inter text-sm text-[#1C1208]">
                    30-59 days before departure
                  </p>

                  <p className="text-right font-montserrat text-sm font-semibold text-[#2A4A35]">
                    50% of total cost forfeited
                  </p>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-[#D4870A]/15 pb-3">
                  <p className="font-inter text-sm text-[#1C1208]">
                    15-29 days before departure
                  </p>

                  <p className="text-right font-montserrat text-sm font-semibold text-[#2A4A35]">
                    75% of total cost forfeited
                  </p>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <p className="font-inter text-sm text-[#1C1208]">
                    Less than 14 days before departure
                  </p>

                  <p className="text-right font-montserrat text-sm font-semibold text-[#2A4A35]">
                    100% of total cost forfeited
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-base font-bold text-[#2A4A35]">
                Suppliers and Travel Insurance
              </h3>

              <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Danil Scenic Tours acts as an agent for hotels, airlines, and
                transport companies and is not liable for delays,
                cancellations, or loss beyond our control. Guests are advised
                to obtain comprehensive travel insurance.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-base font-bold text-[#2A4A35]">
                Currency and Exchange Rates
              </h3>

              <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                All prices are quoted in USD. Payments made in other currencies
                will be converted at the prevailing bank exchange rate on the
                day of payment. Danil Scenic Tours reserves the right to adjust
                the balance payable if there are significant fluctuations in
                exchange rates, government taxes, or park fees before travel.
                Deposits once paid are protected against currency changes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* All itineraries */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Browse All Safari Itineraries
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208]">
            Open the full destination or combination itinerary before deciding
            which package to book.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Single-Destination Pages
              </h3>

              <div className="mt-5 space-y-3">
                {singleItineraries.map((itinerary) => (
                  <Link
                    key={itinerary.href}
                    href={itinerary.href}
                    className="flex min-h-12 items-center justify-between gap-4 rounded-lg border border-[#D4870A]/20 px-4 py-3 transition-colors hover:border-[#D4870A]"
                  >
                    <span>
                      <span className="block font-montserrat text-sm font-semibold text-[#2A4A35]">
                        {itinerary.label}
                      </span>

                      <span className="mt-1 block font-inter text-xs text-[#1C1208]/70">
                        {itinerary.duration}
                      </span>
                    </span>

                    <ArrowRight
                      size={16}
                      className="shrink-0 text-[#D4870A]"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                Multi-Destination Pages
              </h3>

              <div className="mt-5 space-y-3">
                {multiItineraries.map((itinerary) => (
                  <Link
                    key={itinerary.href}
                    href={itinerary.href}
                    className="flex min-h-12 items-center justify-between gap-4 rounded-lg border border-[#D4870A]/20 px-4 py-3 transition-colors hover:border-[#D4870A]"
                  >
                    <span>
                      <span className="block font-montserrat text-sm font-semibold text-[#2A4A35]">
                        {itinerary.label}
                      </span>

                      <span className="mt-1 block font-inter text-xs text-[#1C1208]/70">
                        {itinerary.duration}
                      </span>
                    </span>

                    <ArrowRight
                      size={16}
                      className="shrink-0 text-[#D4870A]"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-[#F2E8D5] p-5">
                <p className="font-montserrat text-sm font-semibold text-[#2A4A35]">
                  Not sure which itinerary fits?
                </p>

                <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208]">
                  Compare the destination pages first, then send us your travel
                  dates, group size, and preferred experiences.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Kenya safari wildlife landscape"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[rgba(28,18,8,0.76)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Ready to Book Your Kenya Safari?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Contact us with your preferred package, travel dates, and group
            size. We will send you confirmed availability and a quote for your
            trip.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
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

          <p className="mt-6 font-inter text-sm text-white/75">
            safari@danilscenictours.co.ke
          </p>
        </div>
      </section>

      <Footer />
      <ClientOnlyUI />
    </main>
  )
}
