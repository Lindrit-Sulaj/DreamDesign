import React from 'react';
import { Heading } from '@/components';

export default function Benefits(): React.JSX.Element {
  return (
    <section className='max-w-screen-web mx-auto px-6 md:px-8 py-14 lg:py-20 flex justify-center items-center flex-wrap lg:flex-nowrap lg:justify-start gap-y-10'>
      <div className='w-full lg:w-2/3'>
        <Heading title='Why choose us?' subtitle='Benefits' />
        <p className='max-w-xl text-neutral-600 text-[17px] mt-4'>With expertise, client-centricity, and design innovation, we deliver exceptional architectural solutions that surpass expectations</p>
        <ul className='list-disc ml-8 mt-4'>
          <li className="font-semibold text-[17px]">Expertise and Experience</li>
          <li className="font-semibold text-[17px] mt-2">Client-Centric Approach</li>
          <li className="font-semibold text-[17px] mt-2">Design Innovation</li>
          <li className="font-semibold text-[17px] mt-2">Cost-Effective solutions</li>
        </ul>
        <button className="px-5 py-[10px] bg-custom-blue text-white mt-6 hover:bg-custom-blue-hover transition-all rounded-sm">Start now</button>
      </div>
      <img className='w-[70%] md:w-3/5 lg:w-1/3' src="https://ik.imagekit.io/0s9lwb2yr/DreamDesign/Dream_Design_Benefits_xJnIykbXb.png?updatedAt=1686075639716" alt="" />
    </section>
  )
}
