import type { Metadata } from 'next'
import {
  Cormorant_Garamond,
  Playfair_Display,
  Inter,
  Montserrat,
} from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Kenya Safari Tours & Packages starting from Nairobi | Danil Scenic Tours',
  description:
    'Premium Kenya safaris, car hire, and tailor-made adventures.',
  metadataBase: new URL('https://danilscenictours.co.ke'),
  verification: {
    google: 'RJmw-rzdCnh4bbNUWoVTRL7yG-d9kZjEP48RY17GPM8',
    other: {
      'msvalidate.01': '3DD49C6BD506A59B043AAFDAE197A96B',
    },
  },
  openGraph: {
    title:
      'Kenya Safari Tours & Packages starting from Nairobi | Danil Scenic Tours',
    description:
      'Premium Kenya safaris, car hire, and tailor-made adventures.',
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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Danil Scenic Tours',
  description:
    'Premium Kenya safaris, car hire, and tailor-made adventures.',
  url: 'https://danilscenictours.co.ke',
  telephone: '+254722919249',
  email: 'safari@danilscenictours.co.ke',
  priceRange: '$$$',
  areaServed: {
    '@type': 'Country',
    name: 'Kenya',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kenya Safari Packages',
    url: 'https://danilscenictours.co.ke/safari-packages',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Nairobi City Tour',
        url: 'https://danilscenictours.co.ke/destinations/nairobi-national-park-safari-tours',
        price: '260',
        priceCurrency: 'USD',
        description:
          '1-day Nairobi City Tour. Group price USD 260.',
        itemOffered: {
          '@type': 'Service',
          name: 'Nairobi City Tour',
        },
      },
      {
        '@type': 'Offer',
        name: 'Maasai Mara Safari',
        url: 'https://danilscenictours.co.ke/destinations/maasai-mara-safari-tours',
        price: '830',
        priceCurrency: 'USD',
        description:
          '4-day, 3-night Maasai Mara Safari. Group price from USD 830 per person.',
        itemOffered: {
          '@type': 'Service',
          name: 'Maasai Mara Safari',
        },
      },
      {
        '@type': 'Offer',
        name: 'Amboseli Safari',
        url: 'https://danilscenictours.co.ke/destinations/amboseli-safari-tours',
        price: '890',
        priceCurrency: 'USD',
        description:
          '4-day, 3-night Amboseli Safari. Group price from USD 890 per person.',
        itemOffered: {
          '@type': 'Service',
          name: 'Amboseli Safari',
        },
      },
      {
        '@type': 'Offer',
        name: 'Tsavo Safari',
        url: 'https://danilscenictours.co.ke/destinations/tsavo-safari-tours',
        price: '550',
        priceCurrency: 'USD',
        description:
          '3-day, 2-night Tsavo East and Tsavo West Safari. Group price from USD 550 per person.',
        itemOffered: {
          '@type': 'Service',
          name: 'Tsavo Safari',
        },
      },
      {
        '@type': 'Offer',
        name: 'Lake Nakuru Safari',
        url: 'https://danilscenictours.co.ke/destinations/lake-nakuru-safari-tours',
        price: '600',
        priceCurrency: 'USD',
        description:
          '3-day, 2-night Lake Nakuru Safari. Group price from USD 600 per person.',
        itemOffered: {
          '@type': 'Service',
          name: 'Lake Nakuru Safari',
        },
      },
      {
        '@type': 'Offer',
        name: 'Lake Naivasha Safari',
        url: 'https://danilscenictours.co.ke/destinations/lake-naivasha-safari-tours',
        price: '948',
        priceCurrency: 'USD',
        description:
          '2-day, 1-night Lake Naivasha Safari. Group price from USD 948 per person.',
        itemOffered: {
          '@type': 'Service',
          name: 'Lake Naivasha Safari',
        },
      },
      {
        '@type': 'Offer',
        name: 'Ol Pejeta Conservancy Safari',
        url: 'https://danilscenictours.co.ke/destinations/ol-pejeta-safari-tours',
        price: '920',
        priceCurrency: 'USD',
        description:
          '2-day, 1-night Ol Pejeta Conservancy Safari. Group price from USD 920 per person.',
        itemOffered: {
          '@type': 'Service',
          name: 'Ol Pejeta Conservancy Safari',
        },
      },
      {
        '@type': 'Offer',
        name: 'Diani Beach Escape',
        url: 'https://danilscenictours.co.ke/destinations/diani-beach-safari-tours',
        price: '523',
        priceCurrency: 'USD',
        description:
          '4-day, 3-night Diani Beach Escape. Group price from USD 523 per person. Solo traveller price USD 989.',
        itemOffered: {
          '@type': 'Service',
          name: 'Diani Beach Escape',
        },
      },
      {
        '@type': 'Offer',
        name: '5-Day Safari: Amboseli, Lake Nakuru & Masai Mara',
        url: 'https://danilscenictours.co.ke/safari-tours/5-day-amboseli-nakuru-masai-mara',
        price: '1545',
        priceCurrency: 'USD',
        description:
          '5-day Kenya safari through Amboseli, Lake Nakuru, and Masai Mara. Group price from USD 1,545 per person.',
        itemOffered: {
          '@type': 'Service',
          name: '5-Day Amboseli, Lake Nakuru & Masai Mara Safari',
        },
      },
      {
        '@type': 'Offer',
        name: '7-Day Safari: Masai Mara, Lake Nakuru & Amboseli',
        url: 'https://danilscenictours.co.ke/safari-tours/7-day-budget-kenya-safari',
        price: '1159',
        priceCurrency: 'USD',
        description:
          '7-day, 6-night Kenya wildlife safari through Masai Mara, Lake Nakuru, and Amboseli. Group price from USD 1,159 per person. Solo traveller price USD 2,602.',
        itemOffered: {
          '@type': 'Service',
          name: '7-Day Budget Kenya Wildlife Safari',
        },
      },
      {
        '@type': 'Offer',
        name: '10-Day Classic Kenya Wildlife & Diani Beach Escape',
        url: 'https://danilscenictours.co.ke/safari-tours/10-day-kenya-wildlife-diani-beach',
        price: '2769',
        priceCurrency: 'USD',
        description:
          '10-day Kenya wildlife and Diani Beach safari. Group price from USD 2,769 per person. Solo traveller price USD 5,559.',
        itemOffered: {
          '@type': 'Service',
          name: '10-Day Classic Kenya Wildlife & Diani Beach Escape',
        },
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
        <link
          rel="preconnect"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
        />
        <link
          rel="dns-prefetch"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body
        className={`font-sans antialiased ${cormorant.variable} ${playfair.variable} ${inter.variable} ${montserrat.variable} bg-[#FAF4E8]`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
