import Image from 'next/image'
import Link from 'next/link'
import { BLOB_IMAGES } from '@/lib/images'

export default function FinalCTABanner() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-24 md:py-40 lg:py-48">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ken-burns-zoom">
        <Image
          src={BLOB_IMAGES.CTA_BANNER}
          alt="Maasai Mara sunset with acacia trees"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="mb-8 font-cormorant text-4xl leading-tight text-white sm:text-5xl md:mb-14 md:text-6xl lg:text-7xl">
          Your Dream Safari is One Message Away.
        </h2>

        <div className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:gap-6">
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D4870A] px-6 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-all hover:shadow-lg sm:w-auto md:px-10 md:py-4 md:text-base pulse-glow"
          >
            Start Planning
          </Link>

          <Link
            href="https://wa.me/254722919249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-montserrat text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#2A4A35] sm:w-auto md:px-10 md:py-4 md:text-base"
            aria-label="Chat with Danil Scenic Tours on WhatsApp"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
