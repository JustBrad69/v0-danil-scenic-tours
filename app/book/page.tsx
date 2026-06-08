'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ChevronDown, Plus, Minus, CheckSquare, Square, ChevronRight, ChevronLeft, Check } from 'lucide-react'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

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

const TOUR_OPTIONS = [
  'Maasai Mara Safari',
  'Amboseli Safari',
  'Tsavo Safari',
  'Lake Nakuru Safari',
  'Lake Bogoria Safari',
  'Aberdare Safari',
  'Mt. Kenya Safari',
  'Meru National Park Safari',
  'Samburu Safari',
  'Diani Beach Escape',
  'Nairobi National Park Safari',
  'Ol Pejeta Conservancy Safari',
  'Lake Naivasha Safari',
  'Cultural Expeditions',
  'Adventure Safaris',
  'Custom Safari',
  'Professional Car Hire',
]

const ACCOMMODATION_TIERS = ['Budget', 'Mid-Range', 'Luxury']
const TRIP_TYPES = ['Solo', 'Couple', 'Family', 'Friends Group', 'Corporate / Team']
const CONTACT_PREFERENCES = ['WhatsApp', 'Email', 'Phone Call']

const STORAGE_KEY = 'danil_inquiry_form'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  selectedTours: string[]
  arrivalDate: string
  departureDate: string
  adults: number
  children: number
  accommodationTier: string
  tripType: string
  contactPreference: string
  specialRequirements: string
}

const defaultForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  selectedTours: [],
  arrivalDate: '',
  departureDate: '',
  adults: 1,
  children: 0,
  accommodationTier: '',
  tripType: '',
  contactPreference: 'WhatsApp',
  specialRequirements: '',
}

function loadSaved(): Partial<FormData> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveToDisk(data: FormData) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {}
}

export default function BookPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [form, setForm] = useState<FormData>(defaultForm)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlideImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const saved = loadSaved()
    const params = new URLSearchParams(window.location.search)
    const tourParam = params.get('tour')

    const merged: FormData = {
      ...defaultForm,
      ...saved,
    }

    if (tourParam) {
      const matched = TOUR_OPTIONS.find(t =>
        t.toLowerCase().replace(/\s+/g, '-') === tourParam.toLowerCase()
      )
      if (matched && !merged.selectedTours.includes(matched)) {
        merged.selectedTours = [...merged.selectedTours, matched]
      }
    }

    setForm(merged)
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTourDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function update(field: keyof FormData, value: FormData[keyof FormData]) {
    setForm(prev => {
      const updated = { ...prev, [field]: value }
      saveToDisk(updated)
      return updated
    })
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  function toggleTour(tour: string) {
    const current = form.selectedTours
    const updated = current.includes(tour)
      ? current.filter(t => t !== tour)
      : [...current, tour]
    update('selectedTours', updated)
  }

  function validateStep(s: number): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (s === 1) {
      if (!form.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!form.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!form.email.trim()) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email'
      if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    }

    if (s === 2) {
      if (form.selectedTours.length === 0) newErrors.selectedTours = 'Select at least one tour'
      if (!form.arrivalDate) newErrors.arrivalDate = 'Arrival date is required'
      if (!form.departureDate) newErrors.departureDate = 'Departure date is required'
      if (form.adults < 1) newErrors.adults = 'At least 1 adult is required'
    }

    if (s === 3) {
      if (!form.accommodationTier) newErrors.accommodationTier = 'Please select a tier'
      if (!form.tripType) newErrors.tripType = 'Please select a trip type'
      if (!form.contactPreference) newErrors.contactPreference = 'Please select a preference'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function nextStep() {
    if (validateStep(step)) setStep(s => s + 1)
  }

  function prevStep() {
    setStep(s => s - 1)
  }

  function buildSummary(): string {
    const lines = [
      `*New Safari Inquiry from Danil Scenic Tours Website*`,
      ``,
      `*Name:* ${form.firstName} ${form.lastName}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      ``,
      `*Tours Selected:* ${form.selectedTours.join(', ')}`,
      `*Arrival:* ${form.arrivalDate}`,
      `*Departure:* ${form.departureDate}`,
      `*Travelers:* ${form.adults} adult(s), ${form.children} child(ren) — Total: ${form.adults + form.children}`,
      ``,
      `*Accommodation Tier:* ${form.accommodationTier}`,
      `*Trip Type:* ${form.tripType}`,
      `*Preferred Contact:* ${form.contactPreference}`,
      ``,
      form.specialRequirements
        ? `*Special Requirements:* ${form.specialRequirements}`
        : `*Special Requirements:* None`,
    ]
    return lines.join('\n')
  }

  function handleWhatsApp() {
    const message = encodeURIComponent(buildSummary())
    window.open(`https://wa.me/254722919249?text=${message}`, '_blank')
    setSubmitted(true)
  }

  function handleSubmit() {
    if (!validateStep(3)) return
    setStep(4)
  }

  const totalTravelers = form.adults + form.children

  return (
    <main className="min-h-screen bg-[#FAF4E8]">
      <Navbar />

      {/* Hero */}
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
                alt={`Safari slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
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
            Plan Your Safari
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Tell us about your dream trip and let&apos;s make it happen.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 bg-[#FAF4E8]">
        <div className="max-w-2xl mx-auto" id="booking-form">

          {/* Progress Bar */}
          {step <= 3 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                {['Your Details', 'Your Trip', 'Preferences'].map((label, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-montserrat font-bold text-sm transition-all ${
                        step > i + 1
                          ? 'bg-[#2A4A35] text-white'
                          : step === i + 1
                          ? 'bg-[#D4870A] text-white'
                          : 'bg-white text-[#1C1208] border border-gray-200'
                      }`}
                    >
                      {step > i + 1 ? <Check size={14} /> : i + 1}
                    </div>
                    <span className={`font-montserrat text-xs hidden sm:block ${step === i + 1 ? 'text-[#D4870A] font-semibold' : 'text-[#1C1208] opacity-60'}`}>
                      {label}
                    </span>
                    {i < 2 && <div className={`w-8 sm:w-16 h-0.5 mx-1 ${step > i + 1 ? 'bg-[#2A4A35]' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-playfair text-[#2A4A35] mb-1">Your Details</h2>
                  <p className="font-inter text-[#1C1208] text-sm opacity-70">Step 1 of 3 — Tell us who you are</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={e => update('firstName', e.target.value)}
                      placeholder="e.g. John"
                      className={`w-full border rounded-lg px-4 py-3 font-inter text-sm text-[#1C1208] outline-none transition-all focus:border-[#D4870A] ${errors.firstName ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1 font-inter">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={e => update('lastName', e.target.value)}
                      placeholder="e.g. Doe"
                      className={`w-full border rounded-lg px-4 py-3 font-inter text-sm text-[#1C1208] outline-none transition-all focus:border-[#D4870A] ${errors.lastName ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1 font-inter">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    placeholder="e.g. john@email.com"
                    className={`w-full border rounded-lg px-4 py-3 font-inter text-sm text-[#1C1208] outline-none transition-all focus:border-[#D4870A] ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-inter">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                    placeholder="e.g. +254 722 919 249"
                    className={`w-full border rounded-lg px-4 py-3 font-inter text-sm text-[#1C1208] outline-none transition-all focus:border-[#D4870A] ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-inter">{errors.phone}</p>}
                </div>

                <button
                  onClick={nextStep}
                  className="w-full py-4 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Continue to Trip Details <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-playfair text-[#2A4A35] mb-1">Your Trip</h2>
                  <p className="font-inter text-[#1C1208] text-sm opacity-70">Step 2 of 3 — Tell us about your safari</p>
                </div>

                <div ref={dropdownRef}>
                  <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">
                    Tours of Interest <span className="text-red-500">*</span>
                  </label>
                  <div
                    onClick={() => setTourDropdownOpen(o => !o)}
                    className={`w-full border rounded-lg px-4 py-3 font-inter text-sm text-[#1C1208] cursor-pointer flex items-center justify-between transition-all ${errors.selectedTours ? 'border-red-400' : 'border-gray-200'} ${tourDropdownOpen ? 'border-[#D4870A]' : ''}`}
                  >
                    <span className={form.selectedTours.length === 0 ? 'opacity-40' : ''}>
                      {form.selectedTours.length === 0
                        ? 'Select one or more tours'
                        : `${form.selectedTours.length} tour${form.selectedTours.length > 1 ? 's' : ''} selected`}
                    </span>
                    <ChevronDown size={16} className={`transition-transform ${tourDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {tourDropdownOpen && (
                    <div className="border border-gray-200 rounded-lg mt-1 overflow-hidden shadow-lg max-h-60 overflow-y-auto">
                      {TOUR_OPTIONS.map(tour => (
                        <div
                          key={tour}
                          onClick={() => toggleTour(tour)}
                          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#FAF4E8] transition-colors border-b border-gray-50 last:border-0"
                        >
                          {form.selectedTours.includes(tour)
                            ? <CheckSquare size={18} className="text-[#D4870A] flex-shrink-0" />
                            : <Square size={18} className="text-gray-300 flex-shrink-0" />
                          }
                          <span className={`font-inter text-sm ${form.selectedTours.includes(tour) ? 'text-[#2A4A35] font-semibold' : 'text-[#1C1208]'}`}>
                            {tour}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {form.selectedTours.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {form.selectedTours.map(tour => (
                        <span
                          key={tour}
                          onClick={() => toggleTour(tour)}
                          className="bg-[#FAF4E8] border border-[#D4870A] text-[#2A4A35] font-montserrat text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-[#D4870A] hover:text-white transition-all"
                        >
                          {tour} ×
                        </span>
                      ))}
                    </div>
                  )}
                  {errors.selectedTours && <p className="text-red-500 text-xs mt-1 font-inter">{errors.selectedTours}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">
                      Arrival Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={form.arrivalDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => update('arrivalDate', e.target.value)}
                      className={`w-full border rounded-lg px-4 py-3 font-inter text-sm text-[#1C1208] outline-none transition-all focus:border-[#D4870A] ${errors.arrivalDate ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.arrivalDate && <p className="text-red-500 text-xs mt-1 font-inter">{errors.arrivalDate}</p>}
                  </div>
                  <div>
                    <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">
                      Departure Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={form.departureDate}
                      min={form.arrivalDate || new Date().toISOString().split('T')[0]}
                      onChange={e => update('departureDate', e.target.value)}
                      className={`w-full border rounded-lg px-4 py-3 font-inter text-sm text-[#1C1208] outline-none transition-all focus:border-[#D4870A] ${errors.departureDate ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.departureDate && <p className="text-red-500 text-xs mt-1 font-inter">{errors.departureDate}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">
                    Group Size <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">Adults</p>
                      <p className="font-inter text-xs text-[#1C1208] opacity-60 mb-3">18 years and above</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => update('adults', Math.max(1, form.adults - 1))}
                          className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#D4870A] transition-all"
                        >
                          <Minus size={14} className="text-[#1C1208]" />
                        </button>
                        <span className="font-montserrat font-bold text-xl text-[#2A4A35] w-8 text-center">{form.adults}</span>
                        <button
                          onClick={() => update('adults', form.adults + 1)}
                          className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#D4870A] transition-all"
                        >
                          <Plus size={14} className="text-[#1C1208]" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-[#FAF4E8] rounded-xl p-4">
                      <p className="font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">Children</p>
                      <p className="font-inter text-xs text-[#1C1208] opacity-60 mb-3">Under 18 years</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => update('children', Math.max(0, form.children - 1))}
                          className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#D4870A] transition-all"
                        >
                          <Minus size={14} className="text-[#1C1208]" />
                        </button>
                        <span className="font-montserrat font-bold text-xl text-[#2A4A35] w-8 text-center">{form.children}</span>
                        <button
                          onClick={() => update('children', form.children + 1)}
                          className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#D4870A] transition-all"
                        >
                          <Plus size={14} className="text-[#1C1208]" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="font-montserrat font-semibold text-[#D4870A] text-sm">
                      Total Travelers: {totalTravelers}
                    </span>
                    {totalTravelers < 7 && (
                      <p className="font-inter text-xs text-[#1C1208] opacity-60 mt-1">
                        Note: Our minimum group size is 7. We can help you join a group if needed.
                      </p>
                    )}
                  </div>
                  {errors.adults && <p className="text-red-500 text-xs mt-1 font-inter">{errors.adults}</p>}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevStep}
                    className="w-1/3 py-4 border-2 border-[#2A4A35] text-[#2A4A35] font-montserrat font-semibold rounded-lg hover:bg-[#2A4A35] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronLeft size={18} /> Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="w-2/3 py-4 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Continue to Preferences <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-playfair text-[#2A4A35] mb-1">Your Preferences</h2>
                  <p className="font-inter text-[#1C1208] text-sm opacity-70">Step 3 of 3 — Help us tailor your experience</p>
                </div>

                <div>
                  <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">
                    Accommodation Preference <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {ACCOMMODATION_TIERS.map(tier => (
                      <button
                        key={tier}
                        onClick={() => update('accommodationTier', tier)}
                        className={`py-3 px-2 rounded-xl border-2 font-montserrat font-semibold text-sm transition-all ${
                          form.accommodationTier === tier
                            ? 'border-[#D4870A] bg-[#D4870A] text-white'
                            : 'border-gray-200 text-[#1C1208] hover:border-[#D4870A]'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                  {errors.accommodationTier && <p className="text-red-500 text-xs mt-1 font-inter">{errors.accommodationTier}</p>}
                </div>

                <div>
                  <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">
                    Trip Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TRIP_TYPES.map(type => (
                      <button
                        key={type}
                        onClick={() => update('tripType', type)}
                        className={`py-2 px-4 rounded-full border-2 font-montserrat font-semibold text-sm transition-all ${
                          form.tripType === type
                            ? 'border-[#2A4A35] bg-[#2A4A35] text-white'
                            : 'border-gray-200 text-[#1C1208] hover:border-[#2A4A35]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  {errors.tripType && <p className="text-red-500 text-xs mt-1 font-inter">{errors.tripType}</p>}
                </div>

                <div>
                  <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-3">
                    Preferred Contact Method <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {CONTACT_PREFERENCES.map(pref => (
                      <button
                        key={pref}
                        onClick={() => update('contactPreference', pref)}
                        className={`py-3 px-2 rounded-xl border-2 font-montserrat font-semibold text-sm transition-all ${
                          form.contactPreference === pref
                            ? 'border-[#D4870A] bg-[#D4870A] text-white'
                            : 'border-gray-200 text-[#1C1208] hover:border-[#D4870A]'
                        }`}
                      >
                        {pref}
                      </button>
                    ))}
                  </div>
                  {errors.contactPreference && <p className="text-red-500 text-xs mt-1 font-inter">{errors.contactPreference}</p>}
                </div>

                <div>
                  <label className="block font-montserrat font-semibold text-[#2A4A35] text-sm mb-1">
                    Special Requirements
                    <span className="font-normal text-[#1C1208] opacity-50 ml-1">(optional)</span>
                  </label>
                  <textarea
                    value={form.specialRequirements}
                    onChange={e => update('specialRequirements', e.target.value)}
                    placeholder="Dietary needs, mobility considerations, honeymoon, photography focus, anniversary, or anything else we should know..."
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 font-inter text-sm text-[#1C1208] outline-none transition-all focus:border-[#D4870A] resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevStep}
                    className="w-1/3 py-4 border-2 border-[#2A4A35] text-[#2A4A35] font-montserrat font-semibold rounded-lg hover:bg-[#2A4A35] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronLeft size={18} /> Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-2/3 py-4 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Review My Inquiry <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Review and Submit */}
            {step === 4 && !submitted && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-playfair text-[#2A4A35] mb-1">Review Your Inquiry</h2>
                  <p className="font-inter text-[#1C1208] text-sm opacity-70">Check your details before sending</p>
                </div>

                <div className="bg-[#FAF4E8] rounded-xl p-6 space-y-4 font-inter text-sm text-[#1C1208]">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Name</p>
                      <p>{form.firstName} {form.lastName}</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Email</p>
                      <p>{form.email}</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Phone</p>
                      <p>{form.phone}</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Preferred Contact</p>
                      <p>{form.contactPreference}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Tours Selected</p>
                      <p>{form.selectedTours.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Arrival</p>
                      <p>{form.arrivalDate}</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Departure</p>
                      <p>{form.departureDate}</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Travelers</p>
                      <p>{form.adults} adult(s), {form.children} child(ren)</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Accommodation</p>
                      <p>{form.accommodationTier}</p>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Trip Type</p>
                      <p>{form.tripType}</p>
                    </div>
                    {form.specialRequirements && (
                      <div className="col-span-2">
                        <p className="font-montserrat font-semibold text-[#D4870A] text-xs mb-1">Special Requirements</p>
                        <p>{form.specialRequirements}</p>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setStep(1)}
                  className="text-[#D4870A] font-montserrat font-semibold text-sm underline"
                >
                  Edit my details
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-[#D4870A] text-[#1C1208] font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
                >
                  Send Inquiry
                </button>

                <p className="text-xs text-[#1C1208] opacity-60 font-inter text-center">
                  Your inquiry will be sent via WhatsApp. We respond within 2 hours during business hours.
                </p>
              </div>
            )}

            {/* SUBMITTED */}
            {submitted && (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#2A4A35] flex items-center justify-center mx-auto">
                  <Check size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-playfair text-[#2A4A35] mb-2">Inquiry Sent</h2>
                  <p className="font-inter text-[#1C1208] text-base leading-relaxed">
                    Thank you, {form.firstName}. Our team will reach out to you via {form.contactPreference} within 2 hours during business hours.
                  </p>
                </div>
                <div className="bg-[#FAF4E8] rounded-xl p-4 font-inter text-sm text-[#1C1208] text-left space-y-2">
                  <p className="font-montserrat font-semibold text-[#2A4A35]">What happens next:</p>
                  <p>1. Our safari consultant reviews your inquiry</p>
                  <p>2. We prepare a personalised quote for your dates and group</p>
                  <p>3. We contact you via {form.contactPreference} to discuss details</p>
                  <p>4. We finalise your itinerary together</p>
                </div>
                <button
                  onClick={() => {
                    setStep(1)
                    setSubmitted(false)
                  }}
                  className="font-montserrat font-semibold text-[#D4870A] text-sm underline"
                >
                  Submit another inquiry
                </button>
              </div>
            )}
          </div>

          {/* Direct Contact Section */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h3 className="font-playfair text-[#2A4A35] text-2xl text-center mb-2">
              Prefer to Reach Out Directly?
            </h3>
            <p className="font-inter text-[#1C1208] text-sm text-center opacity-70 mb-6">
              Skip the form and contact us right away.
            </p>
            <div className="space-y-3">
              <Link
                href="https://wa.me/254722919249"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#25D366] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
              >
                Chat on WhatsApp
              </Link>
              
                href="mailto:danilscenic@gmail.com?cc=safari@danilscenictours.co.ke&subject=Safari%20Inquiry"
                className="w-full py-4 px-6 bg-[#2A4A35] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
              >
                Send us an Email
              </a>
              <Link
                href="tel:+254722919249"
                className="w-full py-4 px-6 bg-[#F97316] text-white font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-base"
              >
                Call Now: +254 722 919 249
              </Link>
            </div>
            <p className="text-xs text-[#1C1208] opacity-60 font-inter text-center mt-6">
              Available Monday to Friday, 8:00 AM - 6:00 PM EAT. We respond within 2 hours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <AccessibilityToolbar />
    </main>
  )
}
