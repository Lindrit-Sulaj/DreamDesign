import React from 'react'

export default function Hero(): React.JSX.Element {
  return (
    <section className="hero relative text-white">
      <div className="bg absolute w-full h-full z-[-100]">
        <img className='w-full h-full object-cover brightness-[0.25]' src="https://ik.imagekit.io/0s9lwb2yr/DreamDesign/61413a17-24ea-4371-90b3-9886253f84a4_GU2qry_lS.JPG?updatedAt=1688074888858" alt="" />
      </div>
      <div className='max-w-[1300px] mx-auto px-6 md:px-16 z-[100] py-[200px] md:py-[220px]'>
        <div className='relative'>
          <div className='z-[100]'>
            <h1 className='text-[33px] leading-[44px] md:text-4xl lg:text-5xl xl:text-[64px] font-bold max-w-2xl'>We build your dreams</h1>
            <p className='mt-2 md:mt-6 text-lg lg:text-[20px] text-neutral-300 max-w-md'>Building dreams into reality one masterpiece at a time.</p>
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
