import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lake Naivasha Safari | 2-Day Hell\'s Gate and Crescent Island Tour | Danil Scenic Tours',
  description: 'Experience a 2-day Lake Naivasha safari from Nairobi with a Crescent Island walking safari, boat ride, and Hell\'s Gate National Park game drive. Book today!',
  openGraph: {
    title: 'Lake Naivasha Safari | Danil Scenic Tours',
    description: 'Experience a 2-day Lake Naivasha safari from Nairobi with a Crescent Island walking safari, boat ride, and Hell\'s Gate National Park game drive.',
    url: 'https://danilscenictours.co.ke/destinations/lake-naivasha-safari-tours',
    siteName: 'Danil Scenic Tours',
    images: [{ url: 'https://danilscenictours.co.ke/og-image.webp', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function LakeNaivashaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
