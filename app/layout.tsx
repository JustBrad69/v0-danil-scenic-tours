import type { Metadata } from 'next'
import { Cormorant_Garamond, Playfair_Display, Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

// 1. Optimized Font Loading
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '700'],
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Danil Scenic Tours | Best Tour Operator Nairobi',
  description: 'Premium Kenya safaris, car hire, and tailor-made adventures.',
  metadataBase: new URL('https://danilscenictours.co.ke'),
  verification: {
    // Google verification from your HTML file
    google: '8F3J1nKpoYMge2swC3AhBxFknN3Im-VpwE56RBuND8M',
    // Bing/Edge verification meta tag
    other: {
      'msvalidate.01': '3DD49C6BD506A59B043AAFDAE197A96B',
    },
  },
  openGraph: {
    title: 'Danil Scenic Tours | Best Tour Operator Nairobi',
    description: 'Premium Kenya safaris, car hire, and tailor-made adventures.',
    url: 'https://danilscenictours.co.ke',
    siteName: 'Danil Scenic Tours',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Kenya Safari Adventures',
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* 2. RESOURCE HINTS */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        
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
              "areaServed": { "@type": "Country", "name": "Kenya" },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Kenya Safari Packages",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maasai Mara Safari" }, "priceSpecification": { "@type": "UnitPriceSpecification", "price": "350", "priceCurrency": "USD" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Amboseli Safari" }, "priceSpecification": { "@type": "UnitPriceSpecification", "price": "280", "priceCurrency": "USD" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lake Nakuru Safari" }, "priceSpecification": { "@type": "UnitPriceSpecification", "price": "250", "priceCurrency": "USD" } }
                ]
              }
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased ${cormorant.variable} ${playfair.variable} ${inter.variable} ${montserrat.variable} bg-[#FAF4E8]`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
