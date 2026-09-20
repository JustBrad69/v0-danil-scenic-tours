import Link from 'next/link'
import { ExternalLink, Mail } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Kenya Safari Tours', href: '/safari-tours' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Safari Packages', href: '/safari-packages' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Book Now', href: '/book' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C3028] px-4 py-12 text-[#FDF8F0] sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mb-12 md:gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-bold">
              Danil Scenic Tours
            </h3>

            <p className="font-inter text-sm leading-relaxed opacity-90">
              Creating Unforgettable Experiences
            </p>

            <p className="max-w-sm font-inter text-xs leading-relaxed opacity-75">
              To create unforgettable experiences that connect our clientele to
              the stunning landscapes, magnificent wildlife, and rich cultures
              across Kenya.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-[#D4870A]">
              Navigation
            </h4>

            <nav
              className="flex flex-col"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-10 items-center font-inter text-sm transition-colors hover:text-[#D4870A]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-[#D4870A]">
              Contact
            </h4>

            <div className="space-y-4 font-inter text-sm">
              <div>
                <p className="mb-1 opacity-75">Phone / WhatsApp</p>

                <Link
                  href="tel:+254722919249"
                  className="inline-flex min-h-10 items-center transition-colors hover:text-[#D4870A]"
                >
                  +254 722 919 249
                </Link>
              </div>

              <div>
                <p className="mb-1 opacity-75">Address</p>
                <p className="leading-relaxed">
                  Northern Bypass Rd, Nairobi, Kenya
                </p>
              </div>

              <div>
                <p className="mb-2 opacity-75">Email Us</p>

                <div className="space-y-1">
                  <Link
                    href="mailto:danilscenic@gmail.com"
                    className="flex min-h-10 items-center gap-2 break-all transition-colors hover:text-[#D4870A]"
                    aria-label="Email danilscenic@gmail.com"
                  >
                    <Mail
                      size={16}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    <span>danilscenic@gmail.com</span>
                  </Link>

                  <Link
                    href="mailto:safari@danilscenictours.co.ke"
                    className="flex min-h-10 items-center gap-2 break-all transition-colors hover:text-[#D4870A]"
                    aria-label="Email safari@danilscenictours.co.ke"
                  >
                    <Mail
                      size={16}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    <span>safari@danilscenictours.co.ke</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-[#D4870A]">
              Verified Reviews
            </h4>

            <Link
              href="https://www.safaribookings.com/p6036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#D4870A] bg-[#2A4A35] px-4 py-2 font-inter text-sm transition-colors hover:bg-[#D4870A] hover:text-[#1C3028]"
              aria-label="View Danil Scenic Tours reviews on SafariBookings"
            >
              SafariBookings Badge
              <ExternalLink size={14} aria-hidden="true" />
            </Link>

            <div className="space-y-1 font-inter text-sm">
              <p
                className="text-[#D4870A]"
                aria-label="5 out of 5 stars"
              >
                ★★★★★ 5.0/5
              </p>

              <p className="opacity-75">
                24 Verified Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(212,135,10,0.2)] pt-6 sm:pt-8">
          <p className="text-center font-inter text-xs leading-relaxed opacity-75 sm:text-sm">
            © 2026 Danil Scenic Tours. Licensed by the Tourism Regulatory
            Authority of Kenya.
          </p>
        </div>
      </div>
    </footer>
  )
}
