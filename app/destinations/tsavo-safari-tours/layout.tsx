import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tsavo Safari from Nairobi | 3-Day Tsavo East & West Safari | Danil Scenic Tours',
  description: 'Discover Kenya\'s largest wilderness on a 3-day Tsavo safari from Nairobi. See Red Elephants, volcanic landscapes, Mzima Springs, and the Ngulia Rhino Sanctuary. Book today!',
  openGraph: {
    title: 'Tsavo Safari from Nairobi | Danil Scenic Tours',
    description: 'Discover Kenya\'s largest wilderness on a 3-day Tsavo safari from Nairobi. See Red Elephants, volcanic landscapes, Mzima Springs, and the Ngulia Rhino Sanctuary.',
    url: 'https://danilscenictours.co.ke/destinations/tsavo-safari-tours',
    siteName: 'Danil Scenic Tours',
    images: [{ url: 'https://danilscenictours.co.ke/og-image.webp', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function TsavoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
