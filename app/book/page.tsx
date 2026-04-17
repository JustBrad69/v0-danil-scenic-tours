'use client'

import { useState, useEffect } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import AccessibilityToolbar from '@/components/accessibility-toolbar'

export const metadata: Metadata = {
  title: 'Book Your Kenya Safari | Contact Danil Scenic Tours',
  description: 'Ready to book your Kenya safari? Contact the best tour operator in Nairobi. WhatsApp or call to plan your Maasai Mara safari adventure today.',
  openGraph: {
    title: 'Book Your Kenya Safari | Contact Danil Scenic Tours',
    description: 'Connect with our team via WhatsApp or phone call to book your dream Kenya safari experience.',
    type: 'website',
  },
}

const heroSlideImages = [
  '/images/cheetah-resting.webp',
  '/images/impala-herd.webp',
  '/images/leopard-cub.webp',
  '/images/crowned-crane.webp',
  '/images/elephant-kilimanjaro.webp',
  '/images/amboseli-elephants.webp',
  '/images/beach-diving.webp',
  '/images/zebras-savanna.webp',
  '/images/cultural-gathering.webp',
]

export default function BookPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />
      
      {/* Hero with Slideshow */}
      <section className="relative h-[600px] md:h-screen flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {heroSlideImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            >
              <Image
                src={image}
                alt={`Safari slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="100vw"
                fetchPriority={index === 0 ? 'high' : 'low'}
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(28,18,8,0.72) 0%, rgba(28,18,8,0.2) 100%)',
            zIndex: 1,
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-cormorant text-5xl md:text-6xl text-white mb-4 leading-tight">
            Plan Your Safari
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Tell us about your dream trip and let&apos;s make it happen.
          </p>
        </div>
      </section>

      {/* Contact Action Hub */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12" id="booking-form">
          <h2 className="text-3xl md:text-4xl font-playfair text-[#2A4A35] text-center mb-4">
            Ready to Explore?
          </h2>
          <p className="text-center text-[#1C1208] font-inter mb-10 text-base md:text-lg">
            Get in touch with our team to plan your perfect safari experience.
          </p>

          <div className="space-y-4 flex flex-col">
            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/254722919249"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#25D366] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all text-center text-base md:text-lg"
            >
              Chat with us on WhatsApp
            </Link>

            {/* Call Button */}
            <Link
              href="tel:+254722919249"
              className="w-full py-4 px-6 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all text-center text-base md:text-lg"
            >
              Call Now: +254 722 919 249
            </Link>
          </div>

          <p className="text-xs text-[#1C1208] opacity-75 font-inter text-center mt-8">
            Available Monday to Friday, 8:00 AM - 6:00 PM EAT. We respond to messages within 2 hours.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
