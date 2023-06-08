import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="max-w-screen-lg mx-auto px-6 md:px-8 flex flex-wrap gap-8 py-4 md:py-6 my-2">
      <div className='md:px-6'>
        <h2 className='font-bold text-xl'>Architecture</h2>
        <div className='flex gap-3 items-center mt-3'>
          <i className="fa-solid fa-lg text-custom-blue fa-phone"></i>
          <p className='text-[17px]'>+383 000 000 000</p>
        </div>
        <div className='flex gap-3 items-center mt-3'>
          <i className="fa-solid fa-lg text-custom-blue fa-envelope"></i>
          <p className='text-[17px]'>dreamdesignks@gmail.com</p>
        </div>
      </div>
      <div className='w-full md:w-auto grow grid grid-cols-2 md:grid-cols-3 gap-y-8'>
        <div>
          <h5 className='font-semibold text-lg mb-3'>Company</h5>
          <ul className='flex flex-col gap-y-2'>
            <li className='text-neutral-600'>
              <Link href="/about">About</Link>
            </li>
            <li className='text-neutral-600'>
              <Link href="/contact">Contact</Link>
            </li>
            <li className='text-neutral-600'>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='font-semibold text-lg mb-3'>Services</h5>
          <ul className='flex flex-col gap-y-2'>
            <li className='text-neutral-600'>
              <Link href="/services/interior">Interior</Link>
            </li>
            <li className='text-neutral-600'>
              <Link href="/services/exterior">Exterior</Link>
            </li>
            <li className='text-neutral-600'>
              <Link href="/services/planning">Planning</Link>
            </li>
            <li className='text-neutral-600'>
              <Link href="/services/construction">Construction</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='font-semibold text-lg mb-3'>Socials</h5>
          <ul className='flex flex-col gap-y-2'>
            <li className='text-neutral-600'>
              <a href="#">Instagram</a>
            </li>
            <li className='text-neutral-600'>
              <a href="#">Facebook</a>
            </li>
            <li className='text-neutral-600'>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <p className='w-full text-center font-medium text-blue-600'>
        Copyright { new Date().getFullYear() }
      </p>
    </footer>
  )
}
