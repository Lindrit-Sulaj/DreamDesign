import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components';
import { Construction } from '@/markdown';

export default function ConstructionPage() {
  return (
    <main className="construction">
      <section className="hero flex flex-col gap-2 justify-center h-[250px] md:h-[300px] lg:h-[370px] items-center">
        <Navbar background="transparent" text="white" />
        <div className="flex gap-2 text-[17px] text-neutral-300">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/">Services</Link>
          <span>/</span>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white">Construction</h1>
        <p className="md:text-lg text-neutral-300 mt-2 max-w-lg mx-auto text-center">Ensure seamless coordination and efficient execution of your architectural projects.</p>
      </section>
      <section className='mdx max-w-screen-lg mx-auto'>
        <Construction />
      </section>
    </main>
  )
}