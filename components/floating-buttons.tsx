import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <Link
      href="https://wa.me/254722919249"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 md:bottom-8 md:right-8"
      aria-label="Chat with Danil Scenic Tours on WhatsApp"
    >
      <MessageCircle size={22} className="sm:h-6 sm:w-6" aria-hidden="true" />
    </Link>
  )
}
