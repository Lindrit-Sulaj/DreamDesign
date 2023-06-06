import React from 'react';
import { Heading } from '@/components';

export default function About(): React.JSX.Element {
  return (
    <section className="about py-14 lg:py-20">
      <div className='max-w-[1300px] px-6 md:px-8 mx-auto flex justify-center gap-y-14 items-center flex-wrap lg:flex-nowrap lg:justify-start'>
        <div className='w-full lg:w-2/3'>
          <Heading title='Who we are' subtitle='About us' />
          <p className='max-w-xl text-neutral-600 text-[17px] mt-4'>At DreamDesign, we are passionate architects driven by a relentless pursuit of excellence. With a deep-rooted commitment to our craft, we believe that architecture has the power to transform lives and shape communities.</p>
          <p className='max-w-xl text-neutral-600 text-[17px] mt-3'>As a client-centered architecture firm, we understand that every project is unique and requires a personalized approach. We believe in active collaboration, valuing our clients' input, ideas, and aspirations throughout the design process.</p>
          <button className="px-5 py-[10px] bg-custom-blue text-white mt-4 hover:bg-custom-blue-hover transition-all rounded-sm">Read more</button>
        </div>
        <img className='w-[50%] md:w-1/3' src="https://ik.imagekit.io/0s9lwb2yr/DreamDesign/Dream_Design_About_US_HpI4ORnxT.png?updatedAt=1685973932416" alt="" />
      </div>
    </section>
  )
}
