import React from 'react'

export default function Hero(): React.JSX.Element {
  return (
    <section className="hero relative text-white">
      <div className="bg absolute flex w-full h-full z-[-100]">
        <div className="md:w-1/3 bg-neutral-900 h-full"></div>
        <img className='w-full md:w-2/3 h-full object-cover brightness-[0.60] md:brightness-90' src="https://ik.imagekit.io/0s9lwb2yr/DreamDesign/pexels-bryce-morrow-362109_idY2I-8ms.jpg?updatedAt=1685877333778" alt="" />
      </div>
      <div className='max-w-[1300px] mx-auto px-6 md:px-16 z-[100] py-[200px] md:py-[220px]'>
        <div className='relative'>
          <h4 className='dd absolute -top-6 md:-top-12 text-neutral-800 -left-4 lg:-left-8 z-[-100] text-6xl md:text-8xl font-extrabold'>DD</h4>
          <div className='z-[100]'>
            <h1 className='text-[33px] leading-[44px] md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-2xl'>We build your <span className=''>dream</span> house</h1>
            <p className='mt-2 md:mt-6 text-lg text-neutral-300 max-w-sm'>Building dreams into reality one masterpiece at a time</p>
            <div className='flex gap-2 mt-4 md:mt-6'>
              <button className="px-4 py-2 md:px-6 md:py-3 bg-custom-blue text-white border-solid border-[1px] border-custom-blue hover:bg-custom-blue-hover hover:border-custom-blue-hover transition-all rounded-sm">Get Started</button>
              <button className="px-4 py-2 md:px-6 md:py-3 text-white border-solid border-[1px] hover:bg-[rgba(255,255,255,.1)] transition-all border-white rounded-sm">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
