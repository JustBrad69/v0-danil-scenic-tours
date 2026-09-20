import { MapPin, Pencil, Compass } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    title: 'Choose Your Experience',
    description: 'Safari, cultural, adventure, beach, or fully custom',
  },
  {
    icon: Pencil,
    title: 'We Craft Your Itinerary',
    description: 'Our team builds it around your dates, group, and budget',
  },
  {
    icon: Compass,
    title: 'Experience Kenya',
    description: 'We handle everything. You just arrive and be present.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#F2E8D5] px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-playfair text-3xl leading-tight text-[#2A4A35] sm:text-4xl md:mb-16 md:text-5xl">
          Your Journey, In Three Steps
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center px-2 text-center sm:px-4 md:px-6"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4870A] sm:mb-6 sm:h-16 sm:w-16">
                  <Icon
                    size={28}
                    className="text-white sm:h-8 sm:w-8"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-3 font-playfair text-xl leading-tight text-[#2A4A35]">
                  {step.title}
                </h3>

                <p className="max-w-xs font-inter text-sm leading-relaxed text-[#1C1208]">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div
                    className="absolute top-8 -right-4 hidden h-0.5 w-8 bg-[#D4870A] opacity-30 md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
