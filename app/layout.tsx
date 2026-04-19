import type { Metadata } from 'next'
import { Cormorant_Garamond, Playfair_Display, Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700']
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Danil Scenic Tours | Best Tour Operator Nairobi',
  description: 'Premium Kenya safaris, car hire, and tailor-made adventures.',
  openGraph: {
    title: 'Danil Scenic Tours | Best Tour Operator Nairobi',
    description: 'Premium Kenya safaris, car hire, and tailor-made adventures.',
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp',
        width: 1200,
        height: 630,
        alt: 'Lake Nakuru Flamingos - Kenya Safari',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD AI Search & Crawler Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Danil Scenic Tours",
              "description": "Premium Kenya safaris, car hire, and tailor-made adventures.",
              "url": "https://danilscenictours.co.ke",
              "telephone": "+254722919249",
              "email": ["danilscenic@gmail.com", "safari@danilscenictours.co.ke"],
              "priceRange": "$$$",
              "areaServed": {
                "@type": "Country",
                "name": "Kenya"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Kenya Safari Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Maasai Mara Safari" },
                    "priceSpecification": { "@type": "UnitPriceSpecification", "price": "350", "priceCurrency": "USD", "description": "Starting from per day" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Amboseli Safari" },
                    "priceSpecification": { "@type": "UnitPriceSpecification", "price": "280", "priceCurrency": "USD", "description": "Starting from per day" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Lake Nakuru Safari" },
                    "priceSpecification": { "@type": "UnitPriceSpecification", "price": "250", "priceCurrency": "USD", "description": "Starting from per day" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Ol Pejeta Conservancy" },
                    "priceSpecification": { "@type": "UnitPriceSpecification", "price": "320", "priceCurrency": "USD", "description": "Starting from per day" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Beach Escapes (Diani/Watamu)" },
                    "priceSpecification": { "@type": "UnitPriceSpecification", "price": "180", "priceCurrency": "USD", "description": "Starting from per night" }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased ${cormorant.variable} ${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
