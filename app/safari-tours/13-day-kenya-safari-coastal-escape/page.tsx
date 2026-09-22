import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Plane,
  XCircle,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ClientOnlyUI from '@/components/client-only-ui'
import BookingTerms from '@/components/BookingTerms'
import { BLOB_IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title:
    '13-Day Kenya Safari & Coastal Escape: Naivasha, Mara, Diani Beach & Watamu | Danil Scenic Tours',
  description:
    "Kenya's most complete 13-day safari and coastal escape: Lake Naivasha, Hell's Gate, Masai Mara, Diani Beach, Wasini Island, Mombasa City, and Watamu. Two domestic flights included.",
  alternates: {
    canonical: '/safari-tours/13-day-kenya-safari-coastal-escape',
  },
}

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrival: Nairobi to Lake Naivasha',
    paragraphs: [
      'On arrival at Jomo Kenyatta International Airport, a Danil Scenic Tours representative will meet you with a welcome and trip orientation before introducing you to your professional guide. You will be driven in a private 4x4 safari jeep along the Nairobi-Naivasha Highway.',
      'En route, stop at the Great Rift Valley viewpoint for panoramic photographs before continuing to Lake Naivasha Resort for check-in.',
      "The afternoon brings two Lake Naivasha experiences: a boat ride across the lake observing hippos and birdlife, followed by a walking safari at Crescent Island Sanctuary, where giraffes, zebras, impalas, and antelopes roam freely. Return to the resort for dinner and overnight.",
    ],
    accommodation: 'Lake Naivasha Resort',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 2',
    title: "Hell's Gate National Park",
    paragraphs: [
      "After breakfast, set out for a full-day excursion to Hell's Gate National Park, a landscape of volcanic formations, cliffs, gorges, and geothermal features. A game drive through the park covers the wildlife-rich terrain, with a picnic lunch served at a scenic spot.",
      'The afternoon offers optional cycling or hiking through the cliffs. Return to Lake Naivasha Resort for dinner and overnight.',
    ],
    accommodation: 'Lake Naivasha Resort',
    meals: 'Breakfast, Lunch & Dinner',
    note: "Bike hire at Hell's Gate is an additional cost and is not included.",
  },
  {
    day: 'Day 3',
    title: 'Lake Naivasha to Masai Mara',
    paragraphs: [
      'After breakfast, check out of Lake Naivasha Resort and begin the drive through scenic landscapes and countryside toward the Masai Mara National Reserve. Arrive at Pride Inn Mara Camp by midday for check-in and lunch.',
      'In the evening, visit a local Maasai village for a cultural experience with traditional dances, beadwork displays, and storytelling. Return to camp for dinner and overnight.',
    ],
    accommodation: 'Pride Inn Mara Camp',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 4',
    title: 'Masai Mara: Full-Day Game Drive',
    paragraphs: [
      "Rise early for breakfast before setting out on a full-day game drive across the Mara's rolling plains. With a packed lunch, spend the day following wildlife trails and riverbanks.",
      'Look for the Big Five alongside cheetahs, giraffes, zebras, and antelope species across the savannah and river habitats. Return to Pride Inn Mara Camp for dinner and overnight.',
    ],
    accommodation: 'Pride Inn Mara Camp',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 5',
    title: 'Masai Mara: Extended Exploration',
    paragraphs: [
      'Spend a second full day in the Mara, venturing deeper into the reserve to explore new habitats and wildlife territories. A packed lunch is carried along so game viewing is not interrupted.',
      'As the afternoon closes, enjoy a sundowner on the drive back before returning to Pride Inn Mara Camp for dinner and overnight.',
    ],
    accommodation: 'Pride Inn Mara Camp',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 6',
    title: 'Masai Mara to Diani Beach',
    paragraphs: [
      'Enjoy a final breakfast at Pride Inn Mara Camp before checking out. Transfer to Keekorok Airstrip and board the scheduled flight to Ukunda/Diani Airstrip.',
      'A Danil Scenic Tours representative will welcome you at the airstrip and drive you to Diani Sea Resort for check-in and lunch. Spend the afternoon relaxing by the ocean before dinner and overnight.',
    ],
    accommodation: 'Diani Sea Resort',
    meals: 'Breakfast, Lunch & Dinner',
    note:
      'Mombasa Air flight from Keekorok Airstrip to Ukunda/Diani Airstrip is included in the package.',
  },
  {
    day: 'Day 7',
    title: 'Wasini Island & Kisite Marine Park',
    paragraphs: [
      'After breakfast, your guide drives you to Shimoni for a private excursion to Wasini Island and Kisite-Mpunguti Marine National Park.',
      'The day includes a dhow cruise, dolphin watching, snorkelling among coral gardens, a seafood lunch, a cultural walk through Wasini Village, and a guided visit to the Shimoni Slave Caves.',
      'Return to Diani Sea Resort for dinner and overnight.',
    ],
    accommodation: 'Diani Sea Resort',
    meals: 'Breakfast, Lunch & Dinner',
    note: 'Optional scuba diving is available at additional cost.',
  },
  {
    day: 'Day 8',
    title: 'Mombasa City Tour',
    paragraphs: [
      'After breakfast, set out for a full-day private Mombasa City Tour. Highlights include the Elephant Tusks Monument, Markiti Spices Market, Old Town, and Fort Jesus.',
      'Enjoy a Swahili lunch before continuing to Mama Ngina Drive and crossing the Likoni Ferry. Return to Diani Sea Resort for dinner and overnight.',
    ],
    accommodation: 'Diani Sea Resort',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 9',
    title: 'Diani to Watamu & Gede Ruins',
    paragraphs: [
      'After breakfast, check out of Diani Sea Resort and transfer north to Watamu. Check in at Turtle Bay Beach Resort for lunch and rest.',
      "In the afternoon, visit the Gede Ruins, a historic Swahili settlement surrounded by coastal forest. Return to Turtle Bay for dinner and overnight.",
    ],
    accommodation: 'Turtle Bay Beach Resort, Watamu',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 10',
    title: 'Watamu Marine Park & Mida Creek',
    paragraphs: [
      'After breakfast, embark on a private excursion to Watamu Marine National Park for snorkelling, subject to tide conditions, and optional scuba diving.',
      'A boat ride leads to Waka Waka Island where lunch is served with a Giriama cultural dance performance.',
      'In the evening, visit Mida Creek for a boardwalk, canoe ride at sunset, and birdwatching. Return to Turtle Bay Beach Resort for dinner and overnight.',
    ],
    accommodation: 'Turtle Bay Beach Resort, Watamu',
    meals: 'Breakfast, Lunch & Dinner',
    note: 'Optional scuba diving is available at additional cost.',
  },
  {
    day: 'Day 11',
    title: 'Leisure at Turtle Bay Resort',
    paragraphs: [
      'Enjoy a full day at leisure. Swim, sunbathe, read on the beach, or simply relax beside the Indian Ocean.',
      'Dinner and overnight at Turtle Bay Beach Resort.',
    ],
    accommodation: 'Turtle Bay Beach Resort, Watamu',
    meals: 'Breakfast, Lunch & Dinner',
    note: null,
  },
  {
    day: 'Day 12',
    title: 'Watamu to Malindi Airport to Nairobi',
    paragraphs: [
      'Enjoy a relaxed final morning at Turtle Bay Beach Resort and a late brunch before checking out in the afternoon.',
      'A private transfer takes you to Malindi Airport for the scheduled flight to Jomo Kenyatta International Airport in Nairobi.',
      'Upon arrival in Nairobi, guests may check into a nearby hotel before their scheduled international departure.',
    ],
    accommodation:
      'Nairobi accommodation if required can be arranged at additional cost',
    meals: 'Breakfast & Lunch',
    note:
      'Malindi Airport to Jomo Kenyatta International Airport flight is included in the package.',
  },
  {
    day: 'Day 13',
    title: 'International Departure',
    paragraphs: [
      'Your 13-Day Kenya Safari and Coastal Escape concludes with your international departure from Jomo Kenyatta International Airport.',
      'Airport transfers from your Nairobi hotel can be arranged on request.',
    ],
    accommodation: null,
    meals: null,
    note: null,
  },
]

const included = [
  'Full board accommodation throughout',
  'Private transport in a 4x4 safari jeep with pop-up roof',
  'Professional safari guide throughout',
  'Boat ride on Lake Naivasha and walking safari at Crescent Island Sanctuary',
  "Entrance fee to Hell's Gate National Park",
  'All game drives and park entry fees for Masai Mara National Reserve',
  'Domestic flight from Keekorok Airstrip to Ukunda/Diani Airstrip',
  'Domestic flight from Malindi Airport to Jomo Kenyatta International Airport',
  'Full-day excursion to Wasini Island and Kisite-Mpunguti Marine National Park',
  'Mombasa City Tour including Fort Jesus, Old Town, Elephant Tusks, and Markiti Spices Market',
  'Guided visit to the Gede Ruins',
  'Watamu Marine Park excursion and Mida Creek canoe ride at sunset',
  'Airport transfers',
  'Bottled water throughout the safari and coastal journey',
  'All excursions and activities listed in the itinerary',
  'All applicable taxes and government levies',
]

const excluded = [
  'International flights to and from Kenya',
  'Visa fees and travel insurance',
  "Bike hire at Hell's Gate National Park",
  'Optional scuba diving at Kisite Marine Park and Watamu Marine Park',
  'Accommodation in Nairobi on Night 12',
  'Tips and gratuities for guides and lodge staff',
  'Personal expenses such as drinks, laundry, and souvenirs',
  'Any activity not listed in the itinerary',
]

const faqs = [
  {
    question: 'Are both domestic flights included?',
    answer:
      'Yes. The flight from Keekorok Airstrip in the Masai Mara to Ukunda/Diani Airstrip and the return flight from Malindi Airport to Jomo Kenyatta International Airport are both included in the package.',
  },
  {
    question: 'What happens on Night 12 in Nairobi?',
    answer:
      'If your international departure is the following day, overnight accommodation in Nairobi can be arranged at additional cost. Please mention this when booking so we can assist.',
  },
  {
    question: 'Is the Mombasa City Tour a private tour?',
    answer:
      'Yes. The Mombasa City Tour on Day 8 is a private guided experience with your Danil Scenic Tours guide. The pace can be adjusted on the day.',
  },
  {
    question: 'Can I do scuba diving at Kisite or Watamu?',
    answer:
      'Yes. Scuba diving is available as an optional activity at both Kisite-Mpunguti Marine National Park and Watamu Marine Park. It is not included in the package price and is arranged locally.',
  },
  {
    question: "Is bike hire at Hell's Gate included?",
    answer:
      "Bike hire is an optional activity at additional cost. The game drive through Hell's Gate and the picnic lunch are included.",
  },
  {
    question: 'What is the best time of year for this safari?',
    answer:
      'This itinerary runs year-round. July to October is peak season for the Great Migration in the Mara and dry conditions. January to February is also excellent. The coast is popular from January to March and June to October.',
  },
  {
    question: 'How much does this safari cost?',
    answer:
      'Pricing depends on your group size and travel dates. Full pricing is available on our Kenya Safari Packages page.',
  },
]

export default function ThirteenDaySafariPage() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:min-h-[78svh] sm:pt-32">
        <Image
          src={BLOB_IMAGES.WATAMU}
          alt="Kenya safari and Indian Ocean coastal escape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,18,8,0.84)_0%,rgba(28,18,8,0.30)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#D4870A] sm:text-sm">
            13 Days / 12 Nights
          </p>

          <h1 className="mt-4 font-playfair text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            13-Day Kenya Safari & Coastal Escape: Lake Naivasha, Masai Mara,
            Diani Beach & Watamu
          </h1>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-5 font-inter text-base leading-8 text-[#1C1208] sm:text-lg">
          <p>
            This 13-Day, 12-Night Safari and Coastal Escape covers Kenya&apos;s
            wildlife destinations and Indian Ocean coastline in one guided
            journey from Nairobi.
          </p>

          <p>
            The safari begins at Lake Naivasha with a boat ride, a walking
            safari on Crescent Island, and a game drive through Hell&apos;s
            Gate National Park. From there, the route continues to the Masai
            Mara.
          </p>

          <p>
            A domestic flight then takes you to the coast. Diani Beach, Wasini
            Island, Kisite Marine Park, Mombasa City, Gede Ruins, Watamu Marine
            Park, and Mida Creek complete the coastal leg.
          </p>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Safari at a Glance
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Leg 1
              </p>

              <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                Safari Adventure
              </h3>

              <p className="mt-4 font-inter text-sm leading-7 text-[#1C1208]">
                6 Days / 5 Nights
              </p>

              <p className="mt-2 font-inter text-sm leading-7 text-[#1C1208]">
                Nairobi → Lake Naivasha → Hell&apos;s Gate → Masai Mara →
                Keekorok Airstrip
              </p>

              <p className="mt-4 font-inter text-sm leading-7 text-[#1C1208]">
                Lake Naivasha Resort | Pride Inn Mara Camp
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                Leg 2
              </p>

              <h3 className="mt-2 font-playfair text-2xl font-bold text-[#2A4A35]">
                Coastal Escape
              </h3>

              <p className="mt-4 font-inter text-sm leading-7 text-[#1C1208]">
                7 Days
              </p>

              <p className="mt-2 font-inter text-sm leading-7 text-[#1C1208]">
                Diani Beach → Wasini Island → Mombasa City → Watamu → Malindi
                Airport → Nairobi
              </p>

              <p className="mt-4 font-inter text-sm leading-7 text-[#1C1208]">
                Diani Sea Resort | Turtle Bay Beach Resort
              </p>
            </article>
          </div>

          <article className="mt-5 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start gap-4">
              <Plane
                size={28}
                className="mt-1 shrink-0 text-[#D4870A]"
              />

              <div>
                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  Two Domestic Flights Included
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-[#1C1208]">
                  Keekorok Airstrip to Ukunda/Diani Airstrip and Malindi
                  Airport to Jomo Kenyatta International Airport are included
                  in the package.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl md:text-5xl">
            Day-by-Day Itinerary
          </h2>

          <div className="mt-10 space-y-5">
            {itinerary.map((item, index) => (
              <article
                key={item.day}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="flex items-center gap-4 bg-[#2A4A35] px-5 py-4 sm:px-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4870A] font-montserrat font-bold text-[#1C1208]">
                    {index + 1}
                  </span>

                  <div>
                    <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                      {item.day}
                    </p>

                    <h3 className="mt-1 font-playfair text-xl font-bold leading-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
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

                  {(item.accommodation || item.meals || item.note) && (
                    <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                      {item.accommodation && (
                        <div className="rounded-xl bg-[#FAF4E8] p-4">
                          <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                            Accommodation
                          </p>
                          <p className="mt-1 font-inter text-sm font-semibold text-[#2A4A35]">
                            {item.accommodation}
                          </p>
                        </div>
                      )}

                      {(item.meals || item.note) && (
                        <div className="rounded-xl bg-[#FAF4E8] p-4">
                          {item.meals && (
                            <>
                              <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                                Meals
                              </p>
                              <p className="mt-1 font-inter text-sm font-semibold text-[#2A4A35]">
                                {item.meals}
                              </p>
                            </>
                          )}

                          {item.note && (
                            <p className="mt-2 font-inter text-xs leading-relaxed text-[#1C1208]/70">
                              {item.note}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Accommodation Summary
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Nights 1-2', 'Lake Naivasha Resort'],
              ['Nights 3-5', 'Pride Inn Mara Camp'],
              ['Nights 6-8', 'Diani Sea Resort'],
              ['Nights 9-11', 'Turtle Bay Beach Resort, Watamu'],
            ].map(([nights, lodge]) => (
              <article
                key={nights}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
                  {nights}
                </p>
                <p className="mt-2 font-playfair text-xl font-bold text-[#2A4A35]">
                  {lodge}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
            <p className="font-montserrat text-xs font-semibold uppercase tracking-wide text-[#D4870A]">
              Night 12
            </p>

            <p className="mt-2 font-inter text-sm leading-relaxed text-[#1C1208]">
              Nairobi accommodation, if required, can be arranged at
              additional cost when booking.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What&apos;s Included
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
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="font-playfair text-3xl font-bold text-[#2A4A35]">
              What&apos;s Not Included
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
          <h2 className="text-center font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Why Choose This Safari
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              [
                'Two Journeys in One',
                'The itinerary combines a full wildlife safari with a substantial coastal journey.',
              ],
              [
                'Two Domestic Flights Included',
                'The Mara to Diani flight and Malindi to Nairobi flight are both included.',
              ],
              [
                'More Than Beach Time',
                'The coastal leg includes Kisite Marine Park, Mombasa City, Gede Ruins, Watamu Marine Park, and Mida Creek.',
              ],
              [
                'One Operator, the Entire Journey',
                'Danil Scenic Tours manages the safari, transfers, flights, accommodation, and excursions throughout.',
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="font-playfair text-2xl font-bold text-[#2A4A35]">
                  {title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-[#1C1208]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-playfair text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="overflow-hidden rounded-xl bg-[#2A4A35]"
              >
                <summary className="cursor-pointer px-5 py-4 font-montserrat text-sm font-semibold text-white sm:px-6 sm:text-base">
                  {faq.question}
                </summary>

                <div className="border-t border-white/10 px-5 py-4 sm:px-6">
                  <p className="font-inter text-sm leading-relaxed text-white/85">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-[#2A4A35] sm:text-4xl">
            Explore Related Destinations & Packages
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              [
                'Lake Naivasha Safari Tours',
                '/destinations/lake-naivasha-safari-tours',
              ],
              [
                'Maasai Mara Safari Tours',
                '/destinations/maasai-mara-safari-tours',
              ],
              [
                'Diani Beach Safari Tours',
                '/destinations/diani-beach-safari-tours',
              ],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="flex min-h-14 items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 font-montserrat text-sm font-semibold text-[#2A4A35] shadow-sm"
              >
                {name}
                <ArrowRight size={16} className="text-[#D4870A]" />
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#F2E8D5] p-5 sm:p-6">
            <p className="font-montserrat text-sm font-semibold text-[#2A4A35]">
              Other Combination Safari Itineraries
            </p>

            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/safari-tours/5-day-amboseli-nakuru-masai-mara"
                className="font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                5-Day Safari
              </Link>

              <Link
                href="/safari-tours/7-days-6-nights-maasai-mara-lake-nakuru-amboseli"
                className="font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                7 Days / 6 Nights Safari
              </Link>

              <Link
                href="/safari-tours/10-day-kenya-wildlife-diani-beach"
                className="font-montserrat text-sm font-semibold text-[#D4870A]"
              >
                10-Day Classic Kenya Wildlife & Diani Beach Escape
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/safari-packages"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2A4A35] px-6 py-3 font-montserrat text-sm font-semibold text-white"
            >
              View Pricing
            </Link>

            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208]"
            >
              Book This Safari
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ClientOnlyUI />
    </main>
  )
}
