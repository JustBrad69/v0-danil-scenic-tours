import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maasai Mara Safari Tours | 4-Day Package from Nairobi | Danil Scenic Tours',
  description: 'Experience an unforgettable Maasai Mara safari from Nairobi. 4-day all-inclusive package with hot air balloon, game drives, and cultural visits. Book today!',
  openGraph: {
    title: 'Maasai Mara Safari Tours | Danil Scenic Tours',
    description: 'Experience an unforgettable Maasai Mara safari from Nairobi. All-inclusive 4-day package with hot air balloon, game drives, and cultural visits.',
    url: 'https://danilscenictours.co.ke/destinations/maasai-mara-safari-tours',
    siteName: 'Danil Scenic Tours',
    images: [{ url: 'https://danilscenictours.co.ke/og-image.webp', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function MaasaiMaraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
