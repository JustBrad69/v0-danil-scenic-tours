import Image from 'next/image'
import Link from 'next/link'
import { LOCAL_IMAGES } from '@/lib/images'

export default function StorytellingSectionHome() {
  return (
    <section className="bg-[#FAF4E8] px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
          {/* Text */}
          <div className="space-y-5 md:space-y-6">
            <h2 className="font-playfair text-3xl leading-tight text-[#2A4A35] sm:text-4xl md:text-5xl">
              More Than a Safari. A Connection.
            </h2>

            <p className="font-inter text-base leading-relaxed text-[#1C1208] sm:text-lg sm:leading-8">
              At Danil Scenic Tours, we believe travel should change you. Not just show you things, but connect you deeply to Kenya's landscapes, its wildlife, and its people. Whether it's your first game drive or your tenth, we build every experience around you.
            </p>

            <Link
              href="/about"
              className="inline-flex min-h-11 items-center border-b-2 border-[#D4870A] pb-1 font-montserrat text-sm font-semibold text-[#D4870A] transition-opacity hover:opacity-80 sm:text-base"
            >
              Read Our Story →
            </Link>
          </div>

          {/* Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg sm:aspect-[4/3]">
            <Image
              src={LOCAL_IMAGES.CULTURAL_GATHERING}
              alt="Cultural experience in Kenya with Danil Scenic Tours"
              fill
              className="object-cover object-center"
              sizes="(max-width: 767px) calc(100vw - 32px), 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
