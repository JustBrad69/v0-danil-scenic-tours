'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Footer from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import { BLOB_IMAGES, LOCAL_IMAGES } from '@/lib/images'

const Navbar = dynamic(() => import('@/components/navbar'), { ssr: true })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })
const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const SafariMap = dynamic(() => import('@/components/SafariMap'), {
  ssr: false,
  loading: () => <div className="h-[450px] w-full bg-gray-200 animate-pulse rounded-2xl" />,
})

const heroSlideImages = [
  BLOB_IMAGES.CTA_BANNER,
  BLOB_IMAGES.LAKE_NAKURU,
  BLOB_IMAGES.DIANI_BEACH,
  BLOB_IMAGES.MAASAI_MARA,
]

const destinations = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara National Reserve',
    description: 'Kenya\'s most iconic reserve. Home to the Big Five, big cats, and the annual Great Wildebeest Migration (July-October).',
    image: BLOB_IMAGES.CTA_BANNER,
    isPlaceholder: false,
    href: '/destinations/maasai-mara-safari-tours',
    cta: 'Explore Maasai Mara',
  },
  {
    id: 'amboseli',
    name: 'Amboseli National Park',
    description: 'Famous elephant herds set against the breathtaking backdrop of Mt. Kilimanjaro.',
    image: LOCAL_IMAGES.AMBOSELI_ELEPHANTS,
    isPlaceholder: false,
    href: '/destinations/amboseli-safari-tours',
    cta: 'Explore Amboseli',
  },
  {
    id: 'tsavo',
    name: 'Tsavo East & West National Parks',
    description: 'Kenya\'s largest wilderness. Dramatic landscapes, red-dusted elephants, and diverse wildlife.',
    image: LOCAL_IMAGES.CHEETAH_RESTING,
    isPlaceholder: false,
    href: '/destinations/tsavo-safari-tours',
    cta: 'Explore Tsavo',
  },
  {
    id: 'lake-nakuru',
    name: 'Lake Nakuru National Park',
    description: 'Rift Valley gem renowned for its flamingo colonies, rhinos, and leopards.',
    image: BLOB_IMAGES.LAKE_NAKURU,
    isPlaceholder: false,
    href: '/book#booking-form',
    cta: 'Plan a Safari Here',
  },
  {
    id: 'lake-bogoria',
    name: 'Lake Bogoria National Reserve',
    description: 'Hot springs, geysers, and vast flamingo colonies on a striking soda lake.',
    image: BLOB_IMAGES.TSAVO_EAST,
    isPlaceholder: false,
    href: '/book#booking-form',
    cta: 'Plan a Safari Here',
  },
  {
    id: 'aberdare',
    name: 'Aberdare National Park',
    description: 'Dense highland forests with waterfalls, mountain streams, and dense vegetation.',
    image: BLOB_IMAGES.ABERDARE,
    isPlaceholder: false,
    href: '/book#booking-form',
    cta: 'Plan a Safari Here',
  },
  {
    id: 'mt-kenya',
    name: 'Mt. Kenya',
    description: 'Kenya\'s second-highest mountain. Dramatic clouds, verdant slopes, and alpine trails.',
    image: BLOB_IMAGES.MOUNT_KENYA,
    isPlaceholder: false,
    href: '/book#booking-form',
    cta: 'Plan a Safari Here',
  },
  {
    id: 'meru',
    name: 'Meru National Park',
    description: 'Remote wilderness featuring the Big Five set against dramatic golden sunsets, rocky outcrops, and pristine landscapes.',
    image: BLOB_IMAGES.MERU,
    isPlaceholder: false,
    href: '/book#booking-form',
    cta: 'Plan a Safari Here',
  },
  {
    id: 'samburu',
    name: 'Samburu National Reserve',
    description: 'Remote semi-arid landscape perfect for stargazing beneath the African night sky. Home to unique wildlife species and breathtaking celestial experiences.',
    image: BLOB_IMAGES.SAMBURU,
    isPlaceholder: false,
    href: '/book#booking-form',
    cta: 'Plan a Safari Here',
  },
  {
    id: 'diani-beach',
    name: 'Diani Beach',
    description: 'Pristine white sand coastline along the Indian Ocean. Perfect for snorkelling, diving, and relaxation.',
    image: BLOB_IMAGES.DIANI_BEACH,
    isPlaceholder: false,
    href: '/book#booking-form',
    cta: 'Plan a Safari Here',
  },
  {
    id: 'nairobi',
    name: 'Nairobi National Park',
    description: 'Experience the world\'s only wildlife capital. Enjoy a unique safari backdrop where wild rhinos, lions, and giraffes roam against the iconic Nairobi city skyline.',
    image: LOCAL_IMAGES.ZEBRAS_SAVANNA,
    isPlaceholder: false,
    href: '/destinations/nairobi-national-park-safari-tours',
    cta: 'Explore Nairobi National Park',
  },
  {
    id: 'ol-pejeta',
    name: 'Ol Pejeta Conservancy',
    description: 'Visit East Africa\'s largest black rhino sanctuary. Home to the world\'s last remaining northern white rhinos and a dedicated chimpanzee sanctuary at the foot of Mt. Kenya.',
    image: BLOB_IMAGES.SAMBURU,
    isPlaceholder: false,
    href: '/book#booking-form',
    cta: 'Plan a Safari Here',
  },
  {
    id: 'lake-naivasha',
    name: 'Lake Naivasha (Crescent Island)',
    description: 'Walk alongside giraffes and zebras on Crescent Island. A serene freshwater lake experience featuring boat safaris, incredible birdwatching, and hippos in their natural habitat.',
    image: LOCAL_IMAGES.CROWNED_CRANE,
    isPlaceholder: false,
    href: '/destinations/lake-naivasha-safari-tours',
    cta: 'Explore Lake Naivasha',
  },
]

export default function DestinationsPage() {
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
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            >
              <Image
                src={image}
                alt={`Kenya wonders slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
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
            Discover Kenya's Wild Wonders.
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Custom tours to every park, reserve, and coastline across Kenya.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-[#FAF4E8] px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-playfair text-[#2A4A35] mb-8 text-center">
            Explore the Geography of Your Adventure
          </h2>
          <SafariMap />
        </div>
      </section>

      {/* Destination Cards */}
      <section className="py-20 md:py-28 px-4 md:px-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {destinations.map((dest, index) => (
              <div
                key={index}
                id={dest.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {dest.isPlaceholder ? (
                  <div className="flex items-center justify-center bg-[#C4A882] aspect-[4/3] p-4 text-[13px] italic text-[#6B5240] text-center font-inter">
                    {dest.image}
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-xl md:text-2xl font-playfair text-[#2A4A35]">
                    {dest.name}
                  </h3>
                  <p className="text-[#1C1208] font-inter text-sm md:text-base leading-relaxed">
                    {dest.description}
                  </p>
                  <Link
                    href={dest.href}
                    className="inline-flex items-center gap-2 text-[#D4870A] font-montserrat font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {dest.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
