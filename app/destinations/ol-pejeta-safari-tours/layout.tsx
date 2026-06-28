import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ol Pejeta Conservancy Safari | 2-Day Big Five Tour | Danil Scenic Tours',
  description: 'Experience a 2-day Big Five safari at Ol Pejeta Conservancy from Nairobi, with black rhino conservation, elephants, lions, and Maisha Sweetwaters Camp. Book today!',
  openGraph: {
    title: 'Ol Pejeta Conservancy Safari | Danil Scenic Tours',
    description: 'Experience a 2-day Big Five safari at Ol Pejeta Conservancy from Nairobi, with black rhino conservation, elephants, lions, and Maisha Sweetwaters Camp.',
    url: 'https://danilscenictours.co.ke/destinations/ol-pejeta-safari-tours',
    siteName: 'Danil Scenic Tours',
    images: [{ url: 'https://danilscenictours.co.ke/og-image.webp', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function OlPejetaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
