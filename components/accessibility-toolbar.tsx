'use client'

import { useEffect, useState } from 'react'
import { Accessibility, Minus, Plus } from 'lucide-react'

const DYSLEXIA_FONT_LINK_ID = 'danil-opendyslexic-font'

function ensureDyslexiaFontLoaded() {
  if (typeof document === 'undefined') return

  if (document.getElementById(DYSLEXIA_FONT_LINK_ID)) return

  const link = document.createElement('link')
  link.id = DYSLEXIA_FONT_LINK_ID
  link.href =
    'https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)
}

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontLarge, setFontLarge] = useState(false)
  const [fontSmall, setFontSmall] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [dyslexiaFont, setDyslexiaFont] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedFontLarge = localStorage.getItem('font-large') === 'true'
    const savedFontSmall = localStorage.getItem('font-small') === 'true'
    const savedHighContrast =
      localStorage.getItem('high-contrast') === 'true'
    const savedDyslexia =
      localStorage.getItem('dyslexia-font') === 'true'

    setFontLarge(savedFontLarge)
    setFontSmall(savedFontSmall)
    setHighContrast(savedHighContrast)
    setDyslexiaFont(savedDyslexia)

    const html = document.documentElement

    html.classList.toggle('font-large', savedFontLarge)
    html.classList.toggle('font-small', savedFontSmall)
    html.classList.toggle('high-contrast', savedHighContrast)
    html.classList.toggle('dyslexia-font', savedDyslexia)

    if (savedDyslexia) {
      ensureDyslexiaFontLoaded()
    }

    setMounted(true)
  }, [])

  const toggleFontLarge = () => {
    const newState = !fontLarge

    setFontLarge(newState)
    setFontSmall(false)

    const html = document.documentElement

    html.classList.toggle('font-large', newState)
    html.classList.remove('font-small')

    localStorage.setItem('font-large', String(newState))
    localStorage.setItem('font-small', 'false')
  }

  const toggleFontSmall = () => {
    const newState = !fontSmall

    setFontSmall(newState)
    setFontLarge(false)

    const html = document.documentElement

    html.classList.toggle('font-small', newState)
    html.classList.remove('font-large')

    localStorage.setItem('font-small', String(newState))
    localStorage.setItem('font-large', 'false')
  }

  const toggleHighContrast = () => {
    const newState = !highContrast

    setHighContrast(newState)
    document.documentElement.classList.toggle('high-contrast', newState)

    localStorage.setItem('high-contrast', String(newState))
  }

  const toggleDyslexia = () => {
    const newState = !dyslexiaFont

    setDyslexiaFont(newState)
    document.documentElement.classList.toggle('dyslexia-font', newState)

    localStorage.setItem('dyslexia-font', String(newState))

    if (newState) {
      ensureDyslexiaFontLoaded()
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
      {/* Expanded Panel */}
      {isOpen && (
        <div
          id="accessibility-panel"
          className="absolute bottom-16 left-0 w-[min(18rem,calc(100vw-2rem))] rounded-lg border-2 border-[#2A4A35] bg-[#FDF8F0] p-4 shadow-xl animate-in fade-in slide-in-from-bottom-2 sm:bottom-20"
        >
          <h3 className="mb-4 font-montserrat text-sm font-semibold text-[#2A4A35]">
            Accessibility
          </h3>

          <div className="space-y-4">
            {/* Font Size Controls */}
            <div>
              <p className="mb-2 font-inter text-xs font-semibold text-[#1C1208]">
                Font Size
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={toggleFontSmall}
                  aria-label="Decrease font size"
                  aria-pressed={fontSmall}
                  className={`flex min-h-11 min-w-11 items-center justify-center rounded transition-colors ${
                    fontSmall
                      ? 'bg-[#2A4A35] text-white'
                      : 'bg-[#F2E8D5] text-[#1C1208] hover:bg-[#E8DCC5]'
                  }`}
                >
                  <Minus size={16} aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={toggleFontLarge}
                  aria-label="Increase font size"
                  aria-pressed={fontLarge}
                  className={`flex min-h-11 min-w-11 items-center justify-center rounded transition-colors ${
                    fontLarge
                      ? 'bg-[#2A4A35] text-white'
                      : 'bg-[#F2E8D5] text-[#1C1208] hover:bg-[#E8DCC5]'
                  }`}
                >
                  <Plus size={16} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* High Contrast */}
            <label className="flex min-h-11 cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={highContrast}
                onChange={toggleHighContrast}
                className="h-4 w-4 shrink-0"
              />

              <span className="font-inter text-xs text-[#1C1208]">
                High Contrast
              </span>
            </label>

            {/* Dyslexia Font */}
            <label className="flex min-h-11 cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={dyslexiaFont}
                onChange={toggleDyslexia}
                className="h-4 w-4 shrink-0"
              />

              <span className="font-inter text-xs text-[#1C1208]">
                Dyslexia-Friendly Font
              </span>
            </label>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4870A] text-white shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14"
        aria-label={
          isOpen
            ? 'Close accessibility options'
            : 'Open accessibility options'
        }
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility size={22} aria-hidden="true" />
      </button>
    </div>
  )
}
