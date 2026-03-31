'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Safari Tours',
    description: 'Big Five game drives through Kenya\'s greatest national parks.',
    image: '/images/elephant-kilimanjaro.webp',
    isPlaceholder: false,
    price: 'Starting from $150/day',
  },
  {
    title: 'Cultural Expeditions',
    description: 'Live the traditions, taste the cuisine, meet the people.',
    image: '/images/cultural-gathering.webp',
    isPlaceholder: false,
    price: 'Starting from $128/day',
  },
  {
    title: 'Adventure Safaris',
    description: 'Hiking, biking, and hot air ballooning for the thrill-seeker.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-loren-nelson-iii-393937649-14779646-JNYFWwU42lFLNOQPguKoXD6t0DPdE7.webp',
    isPlaceholder: false,
    price: 'Starting from $180/day',
  },
  {
    title: 'Beach Escapes',
    description: 'Unwind on Kenya\'s pristine Indian Ocean coastline.',
    image: '/images/beach-diving.webp',
    isPlaceholder: false,
    price: 'Starting from $200/day',
  },
]

const customSafari = {
  title: 'Custom Safari',
  description: 'Your dream safari, designed around you. Tell us what you want and we\'ll make it happen.',
  image: '/images/zebras-savanna.webp',
  isPlaceholder: false,
  price: 'Get a Free Quote',
}

export default function ServicesGrid() {
  return (
    <section className="py-20 px-4 bg-[#F2E8D5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair text-[#2A4A35] text-center mb-16">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              {service.isPlaceholder ? (
                <div
                  style={{
                    backgroundColor: '#C4A882',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '4/3',
                    width: '100%',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: '#6B5240',
                    textAlign: 'center',
                    padding: '16px',
                  }}
                >
                  {service.image}
                </div>
              ) : (
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-playfair text-[#2A4A35]">
                  {service.title}
                </h3>
                <p className="text-[#1C1208] font-inter leading-relaxed">
                  {service.description}
                </p>
                <p className="text-[#D4870A] font-montserrat font-semibold text-sm">
                  {service.price}
                </p>
                <Link
                  href="/safaris"
                  className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Safari - Final CTA Card */}
        <div className="mt-12">
          <div className="bg-[#2A4A35] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={customSafari.image}
                  alt={customSafari.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-3xl md:text-4xl font-playfair text-white">
                  {customSafari.title}
                </h3>
                <p className="text-white/90 font-inter leading-relaxed text-lg">
                  {customSafari.description}
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4870A] text-white font-montserrat font-semibold rounded-lg hover:bg-[#B8740A] hover:gap-3 transition-all w-fit"
                >
                  {customSafari.price} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
