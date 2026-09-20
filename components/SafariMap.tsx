'use client'

import dynamic from 'next/dynamic'

export type SafariMapLocationId =
  | 'nairobi'
  | 'maasai-mara'
  | 'amboseli'
  | 'tsavo'
  | 'lake-nakuru'
  | 'lake-naivasha'
  | 'ol-pejeta'
  | 'diani-beach'

export type SafariMapProps = {
  locationIds: SafariMapLocationId[]
  showRouteLine?: boolean
}

const SafariMapClient = dynamic(() => import('./SafariMapClient'), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-[360px] w-full items-center justify-center rounded-2xl border-2 border-[#2A4A35]/20 bg-[#F2E8D5] sm:h-[420px] md:h-[520px]"
      aria-label="Loading safari map"
    >
      <p className="font-montserrat text-sm font-semibold text-[#2A4A35]">
        Loading safari map...
      </p>
    </div>
  ),
})

export default function SafariMap({
  locationIds,
  showRouteLine = false,
}: SafariMapProps) {
  return (
    <SafariMapClient
      locationIds={locationIds}
      showRouteLine={showRouteLine}
    />
  )
}
