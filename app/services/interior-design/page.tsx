import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components';
import { InteriorDesign } from '@/markdown';

export default function InteriorPage() {
  return (
    <main className="interior">
      <section className="hero flex flex-col gap-2 justify-center h-[250px] md:h-[300px] lg:h-[370px] items-center">
        <Navbar background="transparent" text="white" />
        <div className="flex gap-2 text-[17px] text-neutral-300">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/">Services</Link>
          <span>/</span>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white">Interior Design</h1>
        <p className="md:text-lg text-neutral-300 mt-2 max-w-lg mx-auto text-center">Transform your space with our expert interior design and styling services.</p>
      </section>
      <section className='mdx max-w-screen-lg mx-auto'>
        <InteriorDesign />
      </section>
    </main>
  )
}
