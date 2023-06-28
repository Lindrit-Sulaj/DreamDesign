import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components';

export default function ExteriorPage() {
  return (
    <main className="exterior">
      <section className="hero flex flex-col gap-2 justify-center h-[250px] md:h-[300px] lg:h-[370px] items-center">
        <Navbar background="transparent" text="white" />
        <div className="flex gap-2 text-[17px] text-neutral-300">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/">Services</Link>
          <span>/</span>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white">Exterior Design</h1>
        <p className="md:text-lg text-neutral-300 mt-2 max-w-lg mx-auto text-center">Create a lasting impression with visually stunning and harmonious architectural exteriors.</p>
      </section>
    </main>
  )
}