import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Binoculars,
  Building,
  Car,
  ChevronDown,
  Footprints,
  MapPin,
  Plane,
  Sparkles,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import { BLOB_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Maasai Mara Safari from Nairobi | Danil Scenic Tours',
  description:
    'Plan a Maasai Mara safari from Nairobi with Danil Scenic Tours. Explore the Big Five, Great Migration, safari accommodation, game drives, and a complete 4-day itinerary.',
  alternates: {
    canonical: '/destinations/maasai-mara-safari-tours',
  },
  openGraph: {
    title: 'Maasai Mara Safari from Nairobi | Danil Scenic Tours',
    description:
      'Plan a Maasai Mara safari from Nairobi with Danil Scenic Tours. Explore the Big Five, Great Migration, safari accommodation, game drives, and a complete 4-day itinerary.',
    url: '/destinations/maasai-mara-safari-tours',
    type: 'website',
    images: [
      {
        url: BLOB_IMAGES.MAASAI_MARA,
        alt: 'Maasai Mara safari in Kenya',
      },
    ],
  },
}

const inclusions = [
  {
    icon: Car,
    title: 'Transport in 4x4 Safari Land Cruisers',
    description:
      'All game drives are conducted in custom 4x4 Land Cruiser safari vehicles equipped with pop-up roofs for optimal wildlife viewing and photography. These vehicles are built for the rough terrain of the Maasai Mara and provide a comfortable, secure ride.',
  },
  {
    icon: Building,
    title: 'Accommodation: Budget, Mid-Range, or Luxury',
    description:
      'You choose the accommodation tier that suits your travel style and budget. All options include full-board meals, comfortable lodging, and access to the same wildlife experiences. Whether you stay in a budget camp or luxury tented lodge, you will wake up to the sounds of the African bush and fall asleep under a canopy of stars.',
  },
  {
    icon: Binoculars,
    title: 'Game Drives with Experienced Guides',
    description:
      'Our driver-guides are wildlife experts who have spent years in the Maasai Mara. They know where the lions den, where cheetahs hunt, and where river crossings happen during migration season. Every game drive is an opportunity to learn, ask questions, and witness wildlife behaviour at close range.',
  },
  {
    icon: Sparkles,
    title: 'Hot Air Balloon Safari, Included as Standard',
    description:
      'Unlike many operators who charge extra for this experience, our package includes a hot air balloon safari. You will float silently over the plains, watching herds of wildebeest and zebra moving below and predators stalking their morning prey.',
  },
  {
    icon: Footprints,
    title: 'Walking Safari with a Maasai Guide',
    description:
      'Experience the Mara on foot with a guided walking safari. Led by a Maasai warrior and a professional naturalist, you will learn to read animal tracks, identify medicinal plants, and understand the ecosystem from ground level.',
  },
  {
    icon: Users,
    title: 'Maasai Village Cultural Visit',
    description:
      'Visit a traditional Maasai village, known as a boma, to meet the Maasai people and learn about their centuries-old customs. You will witness traditional dances, learn about beadwork, and hear how the Maasai have lived alongside wildlife for generations.',
  },
  {
    icon: UtensilsCrossed,
    title: 'All Meals, Park Fees, and Airport Transfers',
    description:
      'Full-board accommodation means breakfast, lunch, and dinner are included throughout your stay. Maasai Mara National Reserve entrance fees are covered, together with airport pickup from Jomo Kenyatta International Airport and drop-off at the end of your safari.',
  },
  {
    icon: MapPin,
    title: 'Nairobi City Tour on Arrival',
    description:
      "On Day 1, after you check into your Nairobi hotel, we take you on a guided tour of Nairobi's top landmarks, including the KICC building, Nairobi National Park, city museums, and key historical sites.",
  },
]

const itinerary = [
  {
    day: '1',
    title: 'Arrival in Nairobi and City Tour',
    paragraphs: [
      'Your Maasai Mara safari begins the moment you land at Jomo Kenyatta International Airport. Our driver will meet you at arrivals and transfer you to your Nairobi hotel. After checking in and settling into your room, you will depart for a guided tour of Nairobi.',
      "The city tour includes stops at the iconic Kenyatta International Convention Centre, Nairobi National Park, the National Museum, and other key landmarks. After the tour, you return to your hotel for lunch and spend the rest of the afternoon at leisure. Dinner is served at the hotel, giving you time to rest before tomorrow's departure.",
    ],
    accommodationTitle: 'Accommodation for Day 1',
    accommodation: [
      {
        tier: 'Luxury',
        name: 'Crowne Plaza Nairobi Airport',
      },
      {
        tier: 'Mid-Range',
        name: 'Sarova Stanley',
      },
      {
        tier: 'Budget',
        name: 'Boma Inn',
      },
    ],
  },
  {
    day: '2',
    title: 'Nairobi to Maasai Mara via the Great Rift Valley',
    paragraphs: [
      'Wake up early for breakfast and final preparations before departing Nairobi by road. The journey to the Maasai Mara takes approximately 5 to 6 hours. Your first stop is the Great Rift Valley viewpoint, where you can take in panoramic views of the escarpment, farmlands, and distant mountains.',
      'Continuing toward the Mara, you will pass through Narok, the gateway town to Maasai country. Here, you can stop at local markets where Maasai traders sell handcrafted beadwork, traditional shukas, and carved souvenirs.',
      'By early afternoon, you arrive at your lodge or tented camp in the Maasai Mara. Check in, enjoy lunch, and spend the rest of the day relaxing at camp. Dinner is served as the African sky fills with stars.',
    ],
    accommodationTitle: 'Accommodation for Days 2-3',
    accommodation: [
      {
        tier: 'Luxury',
        name: 'Maisha Sweetwaters Camp',
      },
      {
        tier: 'Mid-Range',
        name: 'Pride Inn Mara Camp',
      },
      {
        tier: 'Budget',
        name: 'Mara Chui Lodge',
      },
    ],
  },
  {
    day: '3',
    title: 'Full-Day Maasai Mara Game Drive with Hot Air Balloon Safari',
    paragraphs: [
      'This is the highlight day of your safari. Wake up before dawn for preparations and an early breakfast. Before setting out for the game drive, you will enjoy a hot air balloon safari over the Maasai Mara National Reserve. As the balloon rises into the morning sky, watch the sunrise across the plains while spotting wildlife below.',
      'After landing, continue with an early morning game drive through the Maasai Mara National Reserve. Your guide will take you to key wildlife hotspots while tracking lion prides, cheetah families, elephant herds, and other wildlife across the reserve.',
      'Mid-morning, you will head to a Maasai village for a cultural visit. Meet Maasai warriors and elders, learn about their semi-nomadic lifestyle, watch traditional dances, and discover the importance of beadwork within Maasai culture.',
      'After the cultural visit, enjoy a bush lunch inside the reserve at a scenic location surrounded by the sights and sounds of the African wilderness.',
      "In the afternoon, embark on a guided walking safari. Explore the Mara on foot, learn to identify animal tracks, understand the role of termite mounds in the ecosystem, and discover medicinal plants used by the Maasai.",
      'As the day comes to an end, return to your lodge or tented camp for dinner and an overnight stay beneath the Maasai Mara sky.',
    ],
  },
  {
    day: '4',
    title: 'Return to Nairobi',
    paragraphs: [
      'Wake up early for a final breakfast at the lodge or tented camp before checking out. Begin your journey back to Nairobi, retracing the scenic route through the Great Rift Valley. You will make stopovers along the way for photos and refreshments.',
      'By late afternoon, arrive in Nairobi, where you will be dropped off at Jomo Kenyatta International Airport for your onward flight or at your hotel if you are extending your stay in Kenya.',
    ],
  },
]

const accommodationRows = [
  {
    tier: 'Luxury',
    nairobi: 'Crowne Plaza Nairobi Airport',
    mara: 'Maisha Sweetwaters Camp',
    expectation: 'Spacious luxury tents, gourmet dining, spa facilities',
  },
  {
    tier: 'Mid-Range',
    nairobi: 'Sarova Stanley',
    mara: 'Pride Inn Mara Camp',
    expectation: 'Comfortable tents, en-suite bathrooms, buffet meals',
  },
  {
    tier: 'Budget',
    nairobi: 'Boma Inn',
    mara: 'Mara Chui Lodge',
    expectation:
      'Clean comfortable tents, full-board meals, same game drive access',
  },
]

const seasons = [
  {
    title: 'July to October: Great Migration Season',
    description:
      "This is peak season. Large wildebeest herds move from Tanzania's Serengeti into the Maasai Mara in search of fresh grazing. The Mara River crossings are among the most dramatic moments of the migration. This is also the busiest and most expensive period.",
  },
  {
    title: 'November to December: Short Rains and Fewer Crowds',
    description:
      'The short rains bring brief afternoon showers while the landscape turns lush and green. Wildlife remains abundant, and smaller crowds can create a quieter safari experience.',
  },
  {
    title: 'January to March: Calving Season and Resident Wildlife',
    description:
      "The main wildebeest herds are in Tanzania's Serengeti for calving season, but the Maasai Mara's resident lions, leopards, elephants, and buffalo remain active. Game viewing can still be excellent.",
  },
  {
    title: 'April to June: Long Rains and Lush Landscapes',
    description:
      'The long rains transform the Mara into a green landscape. Some roads may be muddy, but birdwatching is excellent and fewer tourist vehicles can mean quieter wildlife sightings.',
  },
]

const whyDanil = [
  {
    title: 'Local Nairobi-Based Operator',
    description:
      'We are based in Kahawa West, Nairobi, and know the city and country firsthand. When you book with us, you work with a locally based team throughout your journey.',
  },
  {
    title: 'All-Inclusive Pricing, No Hidden Costs',
    description:
      'Transport, accommodation, meals, park fees, hot air balloon safari, walking safari, Maasai village visit, Nairobi city tour, and airport transfers are included in the package.',
  },
  {
    title: 'Flexible Departures, Daily Starting Points',
    description:
      'We offer daily departures from Nairobi. Private safaris can be arranged around your preferred travel dates.',
  },
  {
    title: 'Expert Guides Who Make the Difference',
    description:
      'Our driver-guides are central to the experience. They guide game drives, share knowledge of the parks, and help ensure the safari runs smoothly from beginning to end.',
  },
]

const packing = [
  'Light, neutral-coloured clothing such as khaki, olive, and beige',
  'Long-sleeved shirts and trousers for sun and insect protection',
  'Wide-brimmed hat and sunglasses',
  'Comfortable walking shoes or hiking boots',
  'Light jacket or fleece for early mornings and evenings',
  'Swimsuit if your lodge has a pool',
  'Binoculars and a camera with zoom lens',
  'Sunscreen and insect repellent',
  'Water bottle',
  'Small daypack for game drives',
]

const healthSafety = [
  'Yellow fever vaccination certificate',
  'Malaria prophylaxis recommended, consult your doctor',
  'Stay hydrated during game drives',
]

const photography = [
  'Bring extra memory cards and batteries',
  'Use a zoom lens of 200mm or higher for wildlife photography',
  'Shoot in early morning or late afternoon for the best lighting',
  'Respect wildlife and avoid disturbing animals for photographs',
]

const bookingTimeline = [
  'Book at least 3 to 6 months in advance for peak season from July to October',
  'Book 4 to 8 weeks in advance for the November to June period',
  'Contact us for last-minute availability',
]

const faqs = [
  {
    question: 'How much does a 4-day Maasai Mara safari from Nairobi cost?',
    answer:
      'The cost depends on the accommodation tier you choose and the size of your group. Contact us for a detailed quote based on your travel dates and preferences.',
  },
  {
    question: 'Is the hot air balloon safari included in the price?',
    answer:
      'Yes. The hot air balloon safari is included as standard in this 4-day package.',
  },
  {
    question: 'Can I do a shorter safari, 2 or 3 days instead of 4?',
    answer:
      'Yes. While we recommend the 4-day package for the full experience, we can customise shorter options that focus on the Maasai Mara. A minimum 3-day package is highly advisable.',
  },
  {
    question: 'What is the minimum and maximum group size?',
    answer:
      'The minimum group size is 7. There is no stated maximum group size, as vehicles and guides can be arranged according to the group.',
  },
  {
    question: 'Do you offer private safaris, or only group tours?',
    answer:
      'We offer both. Private safaris give you a dedicated vehicle and guide, while group safaris provide a shared experience at a lower per-person cost.',
  },
  {
    question: 'What if I cannot see the Great Migration during my visit?',
    answer:
      "The Great Migration is seasonal and unpredictable. Outside migration season, the Maasai Mara still offers year-round wildlife viewing, including resident lions, leopards, elephants, and buffalo.",
  },
  {
    question: 'Is it safe to travel to the Maasai Mara?',
    answer:
      'The Maasai Mara is an established safari destination. Our guides follow safari safety procedures, and wildlife encounters are managed from appropriate distances and designated routes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept Mpesa, bank transfer, and card payments. Cash is accepted but is highly discouraged.',
  },
]

const destinationLinks = [
  {
    title: 'Amboseli Safari',
    description: 'Mount Kilimanjaro views and elephant encounters',
    href: '/destinations/amboseli-safari-tours',
  },
  {
    title: 'Tsavo National Park',
    description: 'Vast landscapes and diverse wildlife',
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
    title: 'Nairobi City Tour',
    description: 'Urban safari and cultural attractions',
    href: '/destinations/nairobi-national-park-safari-tours',
  },
]

export default function MaasaiMaraPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[78svh] w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[82svh] sm:pt-32 md:pb-20">
        <Image
          src={BLOB_IMAGES.MAASAI_MARA}
          alt="Maasai Mara safari vehicle on a game drive with wildlife in Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.78)_0%,rgba(28,18,8,0.28)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            Maasai Mara Safari Tours
          </p>

          <h1 className="font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Maasai Mara Safari from Nairobi
          </h1>

          <p className="mx-auto mt-5 max-w-2xl font-inter text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            Experience Kenya's Greatest Wildlife Adventure
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              View Safari Pricing
            </Link>

            <Link
              href="/book?tour=Maasai+Mara+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2A4A35] sm:text-base"
            >
              Plan This Safari
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5 sm:space-y-6">
          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            If you are planning a safari in Kenya, the Maasai Mara is the
            destination that should sit at the top of your list. This
            world-famous wildlife haven offers an unmatched safari experience,
            home to the Big Five, the legendary Great Migration, and vast
            golden savannahs teeming with predators and prey. A Maasai Mara
            safari from Nairobi brings you directly into the heart of Africa's
            wildlife theatre, and with Danil Scenic Tours, your journey starts
            the moment you land at Jomo Kenyatta International Airport.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Whether you are an international traveller discovering Kenya for
            the first time or a domestic visitor seeking an unforgettable
            weekend escape, our 4-day Maasai Mara safari package is designed to
            immerse you in the wild while providing comfort, safety, and
            cultural experiences.
          </p>
        </div>
      </section>

      {/* What Makes It Special */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5 sm:space-y-6">
          <h2 className="font-playfair text-3xl font-bold leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
            What Makes a Maasai Mara Safari from Nairobi Unforgettable
          </h2>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            The Maasai Mara is one of the world's great wildlife destinations.
            Open grassland, acacia woodlands, and riverine forests support an
            extraordinary concentration of wildlife. Lions rest in the shade,
            cheetahs scan the plains for prey, and elephants follow ancient
            routes across the reserve.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Nairobi is Kenya's main international gateway through Jomo Kenyatta
            International Airport, making it a convenient starting point for a
            Kenya safari. It also offers its own attractions, including Nairobi
            National Park, the Karen Blixen Museum, and the Giraffe Centre.
          </p>

          <p className="font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
            Danil Scenic Tours operates both private and group Maasai Mara
            safaris from Nairobi. The package includes airport pickup, a
            Nairobi city tour on arrival, transport to the Mara, and guided
            safari experiences.
          </p>
        </div>
      </section>

      {/* Inclusions */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
            What's Included in Your Maasai Mara Safari Package
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Here is what is included in the Maasai Mara safari experience.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
            {inclusions.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      size={26}
                      className="mt-1 shrink-0 text-[#D4870A]"
                      aria-hidden="true"
                    />

                    <div>
                      <h3 className="font-montserrat text-base font-bold leading-snug text-[#2A4A35] sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:mb-14 md:text-5xl">
            4-Day Maasai Mara Safari Itinerary from Nairobi
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

                <div className="space-y-4 p-5 sm:p-6 md:p-8">
                  {item.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-inter text-sm leading-7 text-[#1C1208] sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {item.accommodation && (
                    <div className="pt-3">
                      <p className="mb-3 font-montserrat text-sm font-semibold text-[#2A4A35]">
                        {item.accommodationTitle}:
                      </p>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {item.accommodation.map((stay) => (
                          <div
                            key={stay.tier}
                            className="rounded-xl bg-[#FAF4E8] p-4"
                          >
                            <p className="mb-1 font-montserrat text-xs font-semibold text-[#D4870A]">
                              {stay.tier}
                            </p>

                            <p className="font-inter text-sm text-[#1C1208]">
                              {stay.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
            Accommodation Options for Every Budget
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            Compare the budget, mid-range, and luxury accommodation options for
            this safari.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {accommodationRows.map((row) => (
              <article
                key={row.tier}
                className="rounded-2xl border border-[#D4870A]/20 bg-white p-5 shadow-sm sm:p-6"
              >
                <p className="font-montserrat text-sm font-bold text-[#D4870A]">
                  {row.tier}
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#2A4A35]">
                      Nairobi
                    </p>
                    <p className="mt-1 font-inter text-sm text-[#1C1208]">
                      {row.nairobi}
                    </p>
                  </div>

                  <div>
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#2A4A35]">
                      Maasai Mara
                    </p>
                    <p className="mt-1 font-inter text-sm text-[#1C1208]">
                      {row.mara}
                    </p>
                  </div>

                  <div>
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#2A4A35]">
                      What to Expect
                    </p>
                    <p className="mt-1 font-inter text-sm leading-relaxed text-[#1C1208]">
                      {row.expectation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-[#D4870A] bg-white p-5 sm:p-6">
            <p className="text-center font-inter text-sm leading-relaxed text-[#1C1208]">
              <strong className="font-montserrat text-[#2A4A35]">
                Important:
              </strong>{' '}
              Regardless of which tier you choose, all accommodation options
              include full-board meals, access to the same wildlife areas, and
              the same guiding. The main difference is the level of comfort and
              amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Best Time to Visit Maasai Mara from Nairobi
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg">
            The Maasai Mara is a year-round safari destination, but the
            experience changes with the seasons.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {seasons.map((season) => (
              <article
                key={season.title}
                className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8"
              >
                <h3 className="font-playfair text-2xl font-bold leading-tight text-[#2A4A35]">
                  {season.title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-[#1C1208]">
                  {season.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#D4870A] p-6 text-center sm:p-8">
            <p className="font-montserrat text-lg font-bold text-white">
              Safari Planning Tip
            </p>

            <p className="mx-auto mt-2 max-w-3xl font-inter text-sm leading-relaxed text-white sm:text-base">
              If your main goal is the Great Migration, plan for late July
              through September. For a quieter experience with strong wildlife
              viewing, January to March or November to December may suit you
              better.
            </p>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            How to Get from Nairobi to Maasai Mara
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Car
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  By Road, 5 to 6 Hours
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Travelling by road lets you experience the Great Rift Valley,
                stop at viewpoints, pass through Narok, and see more of the
                Kenyan landscape before reaching the Mara. We use 4x4 vehicles
                for the journey and safari.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Plane
                  size={28}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  By Air, About 45 Minutes
                </h3>
              </div>

              <p className="mt-4 font-inter text-sm leading-relaxed text-[#1C1208] sm:text-base">
                Fly-in options depart from Wilson Airport in Nairobi and arrive
                at airstrips near the reserve. This option reduces travel time
                and gives you aerial views of the Rift Valley and Mara plains.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why Danil */}
      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#FDF8F0] sm:text-4xl md:text-5xl">
            Why Book Your Maasai Mara Safari with Danil Scenic Tours
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

      {/* Planning Checklist */}
      <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Practical Safari Planning Checklist
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                What to Pack
              </h3>

              <ul className="mt-4 space-y-2">
                {packing.map((item) => (
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

            <div className="space-y-5">
              <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                <h3 className="font-montserrat text-lg font-bold text-[#2A4A35]">
                  Health and Safety
                </h3>

                <ul className="mt-4 space-y-2">
                  {healthSafety.map((item) => (
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
                  Photography Tips
                </h3>

                <ul className="mt-4 space-y-2">
                  {photography.map((item) => (
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
                  Booking Timeline
                </h3>

                <ul className="mt-4 space-y-2">
                  {bookingTimeline.map((item) => (
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
            Looking to extend your Kenya safari adventure? Explore more
            destinations and safari planning options.
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
                    className="flex min-h-11 items-start justify-between gap-4 rounded-lg py-2 transition-colors hover:text-[#D4870A]"
                  >
                    <span>
                      <span className="font-montserrat text-sm font-semibold text-[#D4870A]">
                        {destination.title}
                      </span>

                      <span className="mt-1 block font-inter text-sm leading-relaxed text-[#1C1208]">
                        {destination.description}
                      </span>
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
                All safaris include professional guides, comfortable transport,
                and Kenyan safari experiences. Contact Danil Scenic Tours to
                plan an itinerary around your dates and group.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-32">
        <Image
          src={BLOB_IMAGES.CTA_BANNER}
          alt="Maasai Mara safari landscape at sunset"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.76)_0%,rgba(28,18,8,0.30)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-cormorant text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Ready to Book Your Maasai Mara Adventure?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/90 sm:text-lg">
            Whether you are planning to witness the Great Migration, track
            wildlife across the grasslands, or experience the Mara from above,
            your safari begins with your travel dates and group size.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/book?tour=Maasai+Mara+Safari"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-shadow hover:shadow-lg sm:text-base"
            >
              Start Planning
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
