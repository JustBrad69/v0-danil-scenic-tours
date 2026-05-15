'use client'

import dynamic from 'next/dynamic'

const FloatingButtons = dynamic(() => import('@/components/floating-buttons'), { ssr: false })
const AccessibilityToolbar = dynamic(() => import('@/components/accessibility-toolbar'), { ssr: false })

export default function ClientOnlyUI() {
  return (
    <>
      <FloatingButtons />
      <AccessibilityToolbar />
    </>
  )
}
