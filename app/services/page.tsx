import Link from 'next/link'
import React from 'react'

export default function ServicesPage(): React.JSX.Element {
  return (
    <main className='min-h-screen bg-neutral-900 flex flex-col gap-3 justify-center items-center border-solid border-b-[8px] border-b-custom-blue fixed top-0 w-full'>
      <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl text-white'>Page is in development</h1>
      <Link href="/" className='text-neutral-200 text-lg'>Go to home</Link>
    </main>
  )
}
