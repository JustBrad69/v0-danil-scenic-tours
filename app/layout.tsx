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
  title: 'Danil Scenic Tours | Best Tour Operator in Nairobi, Kenya',
  description: 'Explore Kenya with Danil Scenic Tours, the premier tour operator in Nairobi. Discover Maasai Mara safari packages, Ol Pejeta Conservancy, Lake Nakuru, and private tours. Unforgettable wildlife experiences await.',
  robots: 'index, follow',
  openGraph: {
    title: 'Danil Scenic Tours | Best Tour Operator in Nairobi, Kenya',
    description: 'Explore Kenya with Danil Scenic Tours. Experience Maasai Mara safaris, Ol Pejeta Conservancy, Lake Nakuru flamingo colonies, and exclusive wildlife tours.',
    type: 'website',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp',
        width: 1200,
        height: 630,
        alt: 'Vibrant flamingo colonies at Lake Nakuru National Park - Danil Scenic Tours',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`font-sans antialiased ${cormorant.variable} ${playfair.variable} ${inter.variable} ${montserrat.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
