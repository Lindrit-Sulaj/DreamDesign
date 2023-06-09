import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Dream Design',
  description: 'At DreamDesign, we are passionate architects driven by a relentless pursuit of excellence. With a deep-rooted commitment to our craft, we believe that architecture has the power to transform lives and shape communities.'
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      { children }
    </>
  )
}
