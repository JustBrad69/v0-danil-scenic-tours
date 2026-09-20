import { Star, FileText, Badge, Globe, MapPin } from 'lucide-react'

const items = [
  { icon: Star, label: '5.0/5 on SafariBookings' },
  { icon: FileText, label: '24 Verified Reviews' },
  { icon: Badge, label: 'TRA Licensed Operator' },
  { icon: Globe, label: 'Guides in 4 Languages' },
  { icon: MapPin, label: 'Based in Nairobi since 2023' },
]

export default function TrustBar() {
  return (
    <section
      className="border-y border-[rgba(212,135,10,0.2)] bg-[#F2E8D5] px-4 py-6 sm:py-7 md:py-8"
      aria-label="Why choose Danil Scenic Tours"
    >
      <div className="mx-auto max-w-7xl">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {items.map((item) => {
            const Icon = item.icon

            return (
              <li
                key={item.label}
                className="flex min-h-10 items-center justify-center gap-3 text-center sm:justify-start sm:text-left sm:last:col-span-2 sm:last:justify-center lg:last:col-span-1 lg:last:justify-start"
              >
                <Icon
                  size={22}
                  className="shrink-0 text-[#D4870A]"
                  aria-hidden="true"
                />

                <span className="font-montserrat text-sm font-medium leading-snug text-[#1C1208]">
                  {item.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
