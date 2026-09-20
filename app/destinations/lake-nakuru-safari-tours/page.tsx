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
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { BLOB_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    'Lake Nakuru Safari Tours: 3-Day Flamingo & Rhino Experience From Nairobi | Danil Scenic Tours',
  description:
    'Explore Lake Nakuru National Park on a 3-day safari from Nairobi. Spot white rhinos, flamingos, lions, leopards, and giraffes with Danil Scenic Tours.',
  alternates: {
    canonical: '/destinations/lake-nakuru-safari-tours',
  },
  openGraph: {
    title:
      'Lake Nakuru Safari Tours: 3-Day Flamingo & Rhino Experience From Nairobi | Danil Scenic Tours',
    description:
      'Explore Lake Nakuru National Park on a 3-day safari from Nairobi with rhinos, flamingos, lions, leopards, giraffes, full-board accommodation, and guided game drives.',
    url: '/destinations/lake-nakuru-safari-tours',
    type: 'website',
    images: [
      {
        url: BLOB_IMAGES.LAKE_NAKURU,
        alt: 'Lake Nakuru National Park safari in Kenya',
      },
    ],
  },
}

const itinerary = [
  {
    day: '1',
    title: 'Nairobi to Lake Nakuru',
    sections: [
      {
        title: '7:00 AM Pickup from Nairobi',
        description:
          'Your safari begins with a 7:00 AM pickup from your Nairobi hotel. Travel northwest toward the Great Rift Valley.',
      },
      {
        title: 'Great Rift Valley Viewpoint',
        description:
          'Stop briefly at the Great Rift Valley viewpoint for panoramic photographs before descending toward the valley floor.',
      },
      {
        title: 'Arrival and Lunch',
        description:
          'On arrival at Lake Nakuru National Park, check into your accommodation and enjoy lunch before the afternoon game drive.',
      },
      {
        title: 'Afternoon Game Drive',
        description:
          "Explore the acacia woodlands and lakeshore circuit. Look for buffalo, Rothschild giraffes, white rhinos, flamingos, and other wildlife around the lake.",
      },
      {
        title: 'Dinner and Overnight',
        description:
          'Return to your lodge for dinner and the first overnight stay near or inside Lake Nakuru National Park.',
      },
    ],
    meals: 'Lunch & Dinner',
  },
  {
    day: '2',
    title: 'Full Day Exploration',
    sections: [
      {
        title: 'Sunrise Game Drive',
        description:
          'Rise early for a sunrise game drive, one of the strongest periods for spotting lions and leopards before temperatures rise.',
      },
      {
        title: 'Breakfast and Baboon Cliff',
        description:
          'Return for breakfast before heading to Baboon Cliff for wide views across Lake Nakuru and the surrounding escarpment.',
      },
      {
        title: 'Lunch',
        description:
          'Return for lunch before continuing with the afternoon exploration of the park.',
      },
      {
        title: 'Makalia Waterfalls',
        description:
          'Continue deeper into the park with a stop at Makalia Waterfalls, a quieter forested area that contrasts with the open lakeshore.',
      },
      {
        title: 'Late Afternoon Wildlife Drive',
        description:
          'Continue searching for zebras, waterbuck, hyenas, buffalo, rhinos, giraffes, and birdlife as the afternoon cools.',
      },
      {
        title: 'Dinner and Overnight',
        description:
          'Return to your lodge for dinner and a second overnight stay.',
      },
    ],
    meals: 'Breakfast, Lunch & Dinner',
  },
  {
    day: '3',
    title: 'Lake Nakuru to Nairobi',
    sections: [
      {
        title: 'Breakfast and Checkout',
        description:
          'Enjoy breakfast at your accommodation before checking out.',
      },
      {
        title: 'Return to Nairobi',
        description:
          'Begin the journey back to Nairobi, arriving in the early afternoon for your agreed hotel or airport drop-off.',
      },
    ],
    meals: 'Breakfast',
  },
]

const accommodation = [
  {
    tier: 'Budget',
    name: 'Ziwa Bush Lodge',
    description:
      'Rustic, eco-friendly accommodation with comfortable en suite rooms, full-board meals, and access to the park gates. Suitable for travelers seeking a practical safari stay without premium pricing.',
  },
  {
    tier: 'Mid-Range',
    name: 'Lake Nakuru Sopa Lodge',
    description:
      'A well-established safari lodge with comfortable facilities, attentive service, and a convenient base for early morning and late afternoon game drives.',
  },
  {
    tier: 'Luxury',
    name: 'Sarova Lion Hill Game Lodge',
    description:
      'A premium lodge overlooking Lake Nakuru with comfortable rooms, dining facilities, a swimming pool, spa facilities, and panoramic park views.',
  },
]

const wildlife = [
  {
    title: 'Rhinos',
    description:
      "Lake Nakuru is one of Kenya's important rhino sanctuaries. Both white and black rhinos are present, with white rhinos frequently seen around the lakeshore.",
  },
  {
    title: 'Big Cats',
    description:
      'Lions and leopards live within the park. Early morning and late afternoon game drives provide opportunities to search for these predators when they are more active.',
  },
  {
    title: 'Flamingos and Waterbirds',
    description:
      'The alkaline lake attracts flamingos, pelicans, cormorants, and more than 400 recorded bird species. Flamingo numbers change with seasonal water conditions.',
  },
  {
    title: 'Rothschild Giraffes',
    description:
      'Rothschild giraffes are established within the park and are regularly encountered across woodland and open areas.',
  },
  {
    title: 'Buffalo and Plains Wildlife',
    description:
      'Large buffalo herds, plains zebras, waterbuck, and other grazing wildlife occur throughout the park.',
  },
  {
    title: 'Baboons, Hyenas and Jackals',
    description:
      'Baboon troops are frequently seen around Baboon Cliff, while hyenas and jackals become increasingly active toward dusk.',
  },
]

const seasons = [
  {
    title: 'June to September',
    subtitle: 'Best Overall',
    description:
      'The long dry season offers strong game-viewing conditions. Vegetation is thinner, wildlife concentrates around water sources, roads are generally firm, and skies are often clear for photography.',
  },
  {
    title: 'January to February',
    subtitle: 'Also Excellent',
    description:
      'The short dry season brings warm conditions and limited rainfall. Wildlife remains active and visible across the park, often with fewer visitors than the main dry season.',
  },
  {
    title: 'October to December',
    subtitle: 'Shoulder Season',
    description:
      'Short rains bring greener scenery and strong birdlife as migratory species arrive. Wildlife viewing remains rewarding and accommodation rates may be lower.',
  },
  {
    title: 'March to May',
    subtitle: 'Long Rains',
    description:
      'The long rains can make roads muddy and wildlife more dispersed as water becomes widely available. Travelers with flexible dates may prefer one of the drier periods.',
  },
]

const included = [
  'Full-board accommodation for 2 nights',
  'Breakfast, lunch, and dinner according to the itinerary',
  'Private transport in a 4x4 Land Cruiser with pop-up roof',
  'Professional English-speaking driver-guide throughout',
  'All Lake Nakuru National Park entry fees',
  'Airport or hotel pickup and drop-off in Nairobi',
]

const excluded = [
  'Tips and gratuities for your guide and lodge staff',
  'Personal expenses and souvenirs',
  'Activities not listed in the itinerary',
  'International flights to and from Kenya',
]

const whyDanil = [
  {
    title: 'Local Expertise',
    description:
      'Our guides know Lake Nakuru, including rhino areas, predator territories, and the best times to visit key viewpoints such as Baboon Cliff.',
  },
  {
    title: 'Private Safari Experience',
    description:
      'Private safari arrangements allow the game-drive schedule and pace to be planned around your group.',
  },
  {
    title: 'Full-Board Package',
    description:
      'Meals are included throughout the stay according to the itinerary, simplifying your safari planning and lodge arrangements.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'Safari prices are published on the Kenya Safari Packages page, with confirmed quotes based on your travel dates, group size, and accommodation preference.',
  },
]

const clothing = [
  'Lightweight, breathable clothing in neutral colours such as khaki, olive, and beige',
  'Warm fleece or jacket for early morning game drives',
  'Comfortable walking shoes or trainers',
  'Wide-brimmed hat',
  'Sunglasses',
]

const essentials = [
  'High-factor sunscreen',
  'Insect repellent',
  'Personal medication',
  'Binoculars for bird and rhino spotting',
  'Camera with a zoom lens',
]

const faqs = [
  {
    question: 'How much does the Lake Nakuru safari cost?',
    answer:
      'The group price starts from USD 600 per person. Contact us with your travel dates, group size, and preferred accommodation tier for confirmed availability and the final quote.',
  },
  {
    question: 'Are flamingos guaranteed at Lake Nakuru?',
    answer:
      'No. Flamingo numbers fluctuate depending on water levels, alkalinity, and seasonal conditions. Your guide can advise on current conditions before your visit.',
  },
  {
    question: 'Is Lake Nakuru safe to visit?',
    answer:
      'Lake Nakuru National Park is a controlled wildlife area, and game drives are conducted in a safari vehicle with an experienced guide. Guests should follow guide and park instructions throughout the visit.',
  },
  {
    question: 'Can I see rhinos at Lake Nakuru?',
    answer:
      'Both white and black rhinos occur within Lake Nakuru National Park. Wildlife sightings can never be guaranteed, but rhinos are one of the park’s major conservation highlights.',
  },
  {
    question: 'Is 3 days enough for Lake Nakuru?',
    answer:
      'Yes. The 3-day itinerary provides time for an arrival-day game drive, a full day of exploration, and a final morning before returning to Nairobi.',
  },
  {
    question: 'Can this safari be combined with other destinations?',
    answer:
      'Yes. Lake Nakuru combines naturally with Maasai Mara, Amboseli, and Lake Naivasha. You can also choose one of our multi-destination safari itineraries.',
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
    description: 'Red elephants and vast wilderness',
    href: '/destinations/tsavo-safari-tours',
  },
  {
    title: 'Nairobi City Tour',
    description: 'Wildlife and cultural attractions in Nairobi',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
  {
    title: 'Ol Pejeta Conservancy',
    description: 'Big Five wildlife and rhino conservation',
    href: '/destinations/ol-pejeta-safari-tours',
  },
  {
    title: 'Lake Naivasha Safari',
    description: "Hippos, Crescent Island, and Hell's Gate",
    href: '/destinations/lake-naivasha-safari-tours',
  },
  {
    title: 'Diani Beach Escape',
    description: 'Indian Ocean coast and beach experiences',
    href: '/destinations/diani-beach-safari-tours',
  },
]

const combinationLinks = [
  {
    title: '5-Day Amboseli, Lake Nakuru & Masai Mara Safari',
    href: '/safari-tours/5-day-amboseli-nakuru-masai-mara',
  },
  {
    title: '7-Day Budget Kenya Wildlife Safari',
    href: '/safari-tours/7-day-budget-kenya-safari',
  },
  {
    title: '10-Day Kenya Wildlife & Diani Beach Escape',
    href: '/safari-tours/10-day-kenya-wildlife-diani-beach',
  },
]

export default function LakeNakuruPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={BLOB_IMAGES.LAKE_NAKURU}
          alt="Lake Nakuru National Park safari landscape in Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.82)_0%,rgba(28,18,8,0.32)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            3 Days / 2 Nights
          </p>

          <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Lake Nakuru Safari: 3-Day Wildlife Experience in the Great Rift
            Valley
          </h1>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Rhinos, flamingos, big cats, Rift Valley landscapes, and two nights
            near one of Kenya's most wildlife-rich national parks.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Pricing
            </Link>

            <Link
              href="/book?tour=Lake+Nakuru+Safari"
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
                3 Days / 2 Nights
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
                Lake Nakuru National Park
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
                Private 4x4 Land Cruiser
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
                From USD 600
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5">
          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Lake Nakuru National Park sits in the heart of Kenya's Great Rift
            Valley, approximately 160 kilometers northwest of Nairobi. It is
            one of Kenya's most compact yet wildlife-rich parks, known for
            white and black rhinos, resident lions, leopards, giraffes, and
            flamingos along its alkaline shores.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            This 3-day safari includes game drives through lakeshore woodland,
            open savannah, and scenic viewpoints such as Baboon Cliff, with
            accommodation inside or near the park for two nights.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Whether your priority is rhino viewing, big cats, birdlife, or the
            landscapes of the Great Rift Valley, Lake Nakuru offers a
            concentrated safari experience within a relatively compact area.
          </p>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Day-by-Day Itinerary
          </h2>

          <p className="mb-10 text-center font-montserrat text-sm font-semibold text-[#D4870A] md:mb-14">
            3 Days | 2 Nights | Departs Nairobi at 7:00 AM
          </p>

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

                  <div className="mt-6 border-t border-[#D4870A]/20 pt-5">
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

      {/* Accommodation */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Accommodation Options
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Your accommodation for two nights is inside or near Lake Nakuru
            National Park. Choose the tier that matches your preferred level of
            comfort and budget.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {accommodation.map((stay) => (
              <article
                key={stay.tier}
                className="rounded-2xl border border-[#D4870A]/20 bg-white p-5 shadow-sm sm:p-6 md:p-8"
              >
                <p className="font-montserrat text-sm font-bold text-[#D4870A]">
                  {stay.tier}
                </p>

                <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                  {stay.name}
                </h3>

                <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {stay.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Binoculars
              size={30}
              className="mx-auto text-[#D4870A]"
              aria-hidden="true"
            />

            <h2 className="mt-4 font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
              What You'll See at Lake Nakuru
            </h2>

            <p className="mt-4 font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
              Lake Nakuru National Park supports a wide range of wildlife
              within a relatively compact area.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {wildlife.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  {item.title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Best Time to Visit Lake Nakuru
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
            How to Get to Lake Nakuru
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
                  Nairobi to Lake Nakuru by Road
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                  Lake Nakuru National Park is approximately 160 kilometers
                  northwest of Nairobi. The drive normally takes around 2.5 to
                  3 hours depending on traffic and road conditions.
                </p>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                  Your driver-guide collects you from your Nairobi hotel at
                  7:00 AM, with a short stop at the Great Rift Valley viewpoint
                  before continuing to the park.
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

      {/* What to Pack */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            What to Pack
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                Clothing
              </h3>

              <ul className="mt-4 space-y-2">
                {clothing.map((item) => (
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
                Essentials
              </h3>

              <ul className="mt-4 space-y-2">
                {essentials.map((item) => (
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
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Explore More Kenya Safari Destinations
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
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
                Multi-Destination Safaris
              </h3>

              <div className="mt-5 space-y-3">
                {combinationLinks.map((safari) => (
                  <Link
                    key={safari.href}
                    href={safari.href}
                    className="flex min-h-12 items-center justify-between gap-4 rounded-lg border border-[#D4870A]/20 px-4 py-3 font-montserrat text-sm font-semibold text-[#2A4A35] transition-colors hover:text-[#D4870A]"
                  >
                    {safari.title}

                    <ChevronDown
                      size={16}
                      className="-rotate-90 shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-[#F2E8D5] p-5">
                <p className="font-montserrat text-sm font-bold text-[#2A4A35]">
                  Lake Nakuru Group Price
                </p>

                <p className="mt-2 font-playfair text-3xl font-bold text-[#D4870A]">
                  From USD 600
                </p>

                <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208]">
                  Contact us with your dates, group size, and accommodation
                  preference for a confirmed quote.
                </p>
              </div>

              <Link
                href="/safari-packages"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#2A4A35] px-5 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-[#1C3028]"
              >
                View All Safari Packages
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={BLOB_IMAGES.LAKE_NAKURU}
          alt="Lake Nakuru National Park in Kenya"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.80)_0%,rgba(28,18,8,0.34)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Book Your Lake Nakuru Safari
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Spend three days exploring Lake Nakuru National Park with guided
            game drives, rhino viewing, Rift Valley scenery, birdlife, and your
            choice of accommodation tier.
          </p>

          <p className="mt-4 font-montserrat text-lg font-bold text-[#D4870A]">
            Group Price: From USD 600 per person
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/book?tour=Lake+Nakuru+Safari"
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
