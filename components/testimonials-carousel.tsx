import Link from 'next/link'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'When we were supposed to leave at 7, the jeep and driver were ready at 06:50, every day, not one day late. If we go back, we know who to call.',
    author: 'Chris',
    country: 'Belgium',
    date: 'March 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'Danson was more than a driver, he was an entertainer. He was very patient and good with the kids. 10/10 value for money.',
    author: 'Daria',
    country: 'Germany',
    date: 'January 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'The package they offered was budget friendly. Dan the tour guide was amazing, he knew the park like the back of his hand.',
    author: 'Lyeel',
    country: 'Kenya',
    date: 'January 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'An unforgettable experience! The attention to detail and personalized service made our trip truly special. Highly recommend!',
    author: 'Sarah',
    country: 'United States',
    date: 'February 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'Professional, reliable, and passionate about conservation. Every moment of the safari was perfectly orchestrated.',
    author: 'Michael',
    country: 'Canada',
    date: 'March 2025',
    rating: 5,
    verified: true,
  },
  {
    quote: 'The guides were incredibly knowledgeable and made sure we saw the Big Five. Worth every penny and then some!',
    author: 'Emma',
    country: 'United Kingdom',
    date: 'February 2025',
    rating: 5,
    verified: true,
  },
]

export default function TestimonialsCarousel() {
  return (
    <section className="bg-[#1C3028] px-4 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-2 text-center font-playfair text-3xl leading-tight text-[#FDF8F0] sm:text-4xl md:text-5xl">
          What Our Travellers Say
        </h2>

        <p className="mb-10 text-center font-montserrat text-sm font-semibold text-[#D4870A] sm:mb-12 sm:text-base">
          Verified reviews from SafariBookings.com
        </p>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:mb-12 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={`${review.author}-${review.date}`}
              className="flex h-full flex-col justify-between rounded-2xl bg-[#2A4A35] p-5 sm:p-6"
              aria-label={`Review from ${review.author}, ${review.country}`}
            >
              <div>
                <Quote
                  size={28}
                  className="mb-4 text-[#D4870A]"
                  aria-hidden="true"
                />

                <p className="mb-6 font-inter text-sm italic leading-relaxed text-[#FDF8F0]">
                  "{review.quote}"
                </p>
              </div>

              <div className="space-y-3">
                <div
                  className="flex gap-1"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#D4870A] text-[#D4870A]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <div>
                  <p className="font-montserrat text-sm font-semibold text-[#FDF8F0]">
                    {review.author}, {review.country}
                  </p>

                  <p className="font-inter text-xs text-[#D4870A]">
                    {review.date}
                  </p>

                  {review.verified && (
                    <p className="mt-2 font-montserrat text-xs font-semibold text-[#D4870A]">
                      ✓ Verified Review
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <p className="mb-4 font-inter text-xs text-[#FDF8F0] sm:text-sm">
            Source: safaribookings.com/p6036
          </p>

          <Link
            href="https://www.safaribookings.com/p6036"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#D4870A] px-5 py-3 font-montserrat text-sm font-semibold text-[#1C1208] transition-all hover:shadow-lg sm:px-6 sm:text-base pulse-glow"
            aria-label="Read all reviews on SafariBookings"
          >
            Read All Reviews on SafariBookings
          </Link>
        </div>
      </div>
    </section>
  )
}
