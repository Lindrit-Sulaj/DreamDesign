import React from 'react'
import { Heading } from '@/components'

export default function Cta() {
  return (
    <section className='bg-neutral-900 px-6 md:px-8 py-14 lg:py-20 border-solid border-b-[6px] border-custom-blue'>
      <Heading title='Take the next step' position='center' colorTheme='dark' />
      <p className='max-w-lg mx-auto text-center text-neutral-300 text-base md:text-[17px] mt-3'>Contact us today to discuss your architectural project and turn your vision into reality.</p>
      <div className='max-w-lg flex mx-auto mt-4  shadow-md'>
        <input type="text" placeholder='Enter your email' className='grow outline-none border-none bg-neutral-800 px-4 placeholder:text-[15px] md:placeholder:text-base md:px-6 text-white' />
        <button className='px-2 py-3 md:px-4 md:py-3 bg-custom-blue hover:bg-custom-blue-hover transition-all text-white text-[15px] md:text-base'>Get in touch</button>
      </div>
    </section>
  )
}
