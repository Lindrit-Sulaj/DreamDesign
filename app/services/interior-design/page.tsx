import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components';
import { InteriorDesign } from '@/markdown';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Service | Dream Design',
  description: "Elevate your space with DreamDesign's exceptional interior design services. Our talented team creates personalized and captivating designs that reflect your style. From color palettes to furniture selection, we pay a lot of attention to detail.",
  keywords: ['interior design kosovo', 'interior design', 'interior services kosovo']
}

export default function InteriorPage() {
  return (
    <main className="interior">
      <section className="hero flex flex-col md:gap-2 justify-center h-[280px] md:h-[300px] lg:h-[370px] items-center px-4">
        <Navbar background="transparent" text="white" />
        <div className="flex gap-2 text-[17px] text-neutral-300">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/">Services</Link>
          <span>/</span>
        </div>
        <h1 className="font-bold mt-2 md:mt-0 text-3xl md:text-4xl lg:text-6xl text-white">Interior Design</h1>
        <p className="md:text-lg text-neutral-300 mt-2 max-w-lg mx-auto text-center">Transform your space with our expert interior design and styling services.</p>
      </section>
      <section className='mdx max-w-screen-lg mx-auto px-4'>
        <InteriorDesign />
      </section>
    </main>
  )
}
