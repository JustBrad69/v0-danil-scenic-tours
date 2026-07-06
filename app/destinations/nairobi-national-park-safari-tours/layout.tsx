import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nairobi City Tour: Full-Day National Park Safari & Cultural Experience | Danil Scenic',
  description: 'Full-day Nairobi City Tour combining a Nairobi National Park game drive, Giraffe Centre feeding experience, Kazuri Beads, and lunch at Karen Blixen Restaurant. Book today!',
  openGraph: {
    title: 'Nairobi City Tour: Full-Day National Park Safari & Cultural Experience | Danil Scenic',
    description: 'Full-day Nairobi City Tour combining a Nairobi National Park game drive, Giraffe Centre feeding experience, Kazuri Beads, and lunch at Karen Blixen Restaurant.',
    url: 'https://danilscenictours.co.ke/destinations/nairobi-national-park-safari-tours',
    siteName: 'Danil Scenic Tours',
    images: [{ url: 'https://danilscenictours.co.ke/og-image.webp', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function NairobiNationalParkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
