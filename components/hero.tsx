'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { HERO_IMAGES } from '@/lib/images'

const slideImages = HERO_IMAGES

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (slideImages.length <= 1) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const interval = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {slideImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentImageIndex}
          >
            <Image
              src={image}
              alt={
                index === currentImageIndex
                  ? 'Maasai Mara Safari and Kenya wildlife tour by Danil Scenic Tours in Nairobi'
                  : ''
              }
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-6">
        <div className="mb-3 font-montserrat text-[10px] tracking-[0.2em] text-[#D4870A] sm:mb-4 sm:text-xs md:text-sm">
          NAIROBI, KENYA · EST. 2023
        </div>

        <h1
          className="mb-4 font-playfair text-[2.5rem] font-extrabold leading-[1.05] text-white sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
        >
          Explore Kenya Safari Tours & Wildlife Adventures
        </h1>

        <p
          className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-white sm:text-base md:mb-8 md:text-xl"
          style={{ opacity: 0.85 }}
        >
          Guided safaris, cultural expeditions, adventure tours & beach escapes,
          tailored entirely to you.
        </p>

        <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:gap-4">
          <Link
            href="/safari-tours"
            className="rounded-lg bg-[#D4870A] px-6 py-3 text-center font-montserrat text-sm font-semibold text-[#1C1208] transition-all hover:shadow-lg sm:w-auto md:px-8 md:text-base pulse-glow"
          >
            Explore Our Safaris
          </Link>

          <Link
            href="/book"
            className="rounded-lg border-2 border-white px-6 py-3 text-center font-montserrat text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#2A4A35] sm:w-auto md:px-8 md:text-base"
          >
            Plan My Trip
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-4 z-10 hidden animate-bounce sm:block md:bottom-8"
        aria-hidden="true"
      >
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  )
}
