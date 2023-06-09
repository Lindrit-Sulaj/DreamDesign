import React from "react"
import Link from "next/link"

export default function NotFound(): React.JSX.Element {
  return (
    <main className='min-h-screen bg-neutral-900 flex flex-col gap-3 justify-center items-center border-solid border-b-[8px] border-b-custom-blue fixed top-0 w-full'>
      <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl text-white'>Page not found</h1>
      <p className="text-neutral-300 text-[17px] mt-2">The page you requested couldn't be found</p>
      <Link href="/" className="block text-blue-400 font-semibold text-lg">Go to home</Link>
    </main>
  )
}