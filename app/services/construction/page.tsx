import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components';
import { Construction } from '@/markdown';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Service | Dream Design',
  description: 'We provide top-qualityconstruction services for residential, commercial, and industrial projects, with a focus on innovative designs, sustainable practices, and expert project management.',
  keywords: ['Architecture Construction', 'Construction Kosovo', 'Dream Design construction']
}

export default function ConstructionPage() {
  return (
    <main className="construction">
      <section className="hero flex flex-col md:gap-2 justify-center h-[280px] md:h-[300px] lg:h-[370px] items-center px-4">
        <Navbar background="transparent" text="white" />
        <div className="flex gap-2 text-[17px] text-neutral-300">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/">Services</Link>
          <span>/</span>
        </div>
        <h1 className="font-bold mt-2 md:mt-0 text-3xl md:text-4xl lg:text-6xl text-white">Construction</h1>
        <p className="md:text-lg text-neutral-300 mt-2 max-w-lg mx-auto text-center">Ensure seamless coordination and efficient execution of your architectural projects.</p>
      </section>
      <section className='mdx max-w-screen-lg mx-auto px-4'>
        <Construction />
      </section>
    </main>
  )
}