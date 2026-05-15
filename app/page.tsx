import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TrustBar from '@/components/trust-bar'
import StorytellingSectionHome from '@/components/storytelling-section-home'
import ServicesGrid from '@/components/services-grid'
import FeaturedDestinations from '@/components/featured-destinations'
import HowItWorks from '@/components/how-it-works'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import FinalCTABanner from '@/components/final-cta-banner'
import Footer from '@/components/footer'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />
      <Hero />
      <TrustBar />
      <StorytellingSectionHome />
      <ServicesGrid />
      <FeaturedDestinations />
      <HowItWorks />
      <TestimonialsCarousel />
      <FinalCTABanner />
      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
