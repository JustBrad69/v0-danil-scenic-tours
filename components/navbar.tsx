'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Kenya Safari Tours', href: '/safari-tours' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Safari Packages', href: '/safari-packages' },
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Book Now', href: '/book' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF4E8] text-[#1C1208] shadow-md'
          : 'bg-transparent text-white'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
        <Link
          href="/"
          className="navbar-logo-wrapper flex-shrink-0"
          aria-label="Danil Scenic Tours home"
        >
          <Image
            src="/logo.webp"
            alt="Danil Scenic Tours Logo"
            width={180}
            height={50}
            priority
            sizes="(max-width: 640px) 144px, 180px"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-5 xl:gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#D4870A] transition-colors font-montserrat text-sm whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#2A4A35] text-white absolute top-full left-0 w-full shadow-lg animate-in slide-in-from-top max-h-[calc(100vh-72px)] overflow-y-auto"
        >
          <div className="px-4 sm:px-6 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 hover:text-[#D4870A] transition-colors font-montserrat text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
