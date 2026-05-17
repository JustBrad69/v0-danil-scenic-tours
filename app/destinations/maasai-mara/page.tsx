'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

export default function MaasaiMaraPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden flex-1">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2814%29-PPbHtHwWOiOCF897LhCVKG6lE946GY.webp"
          alt="Maasai Mara Safari"
          fill
          priority
          className="object-cover"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,18,8,0.72)] to-[rgba(28,18,8,0.2)]" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-playfair text-white text-5xl md:text-6xl font-bold mb-4">
            Maasai Mara Safari from Nairobi
          </h1>
          <p className="font-inter text-white text-lg md:text-xl opacity-85">
            Experience Kenya's Greatest Wildlife Adventure
          </p>
        </div>
      </section>

      {/* Placeholder for additional content */}
      <div className="flex-1 bg-[#FAF4E8] p-8">
        {/* Content sections will be added here */}
      </div>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </div>
  )
}
