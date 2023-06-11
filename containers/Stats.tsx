import React from 'react'

export default function Stats(): React.JSX.Element {
  return (
    <section className='py-[50px] bg-neutral-800 px-6 md:px-12 w-[90%] max-w-[1300px] mx-auto -mt-16 grid gap-y-9 grid-cols-2 md:grid-cols-4 rounded-sm border-solid border-b-[6px] border-b-custom-blue'>
      <div className='flex flex-col items-center gap-1 md:gap-2'>
        <h5 className='text-3xl lg:text-4xl font-bold text-white'>212</h5>
        <p className='text-neutral-400 font-medium text-[17px]'>Projects</p>
      </div>
      <div className='flex flex-col items-center gap-1 md:gap-2'>
        <h5 className='text-3xl lg:text-4xl font-bold text-white'>40</h5>
        <p className='text-neutral-400 font-medium text-[17px]'>Clients</p>
      </div>
      <div className='flex flex-col items-center gap-1 md:gap-2'>
        <h5 className='text-3xl lg:text-4xl font-bold text-white'>12</h5>
        <p className='text-neutral-400 font-medium text-[17px]'>Awards</p>
      </div>
      <div className='flex flex-col items-center gap-1 md:gap-2'>
        <h5 className='text-3xl lg:text-4xl font-bold text-white'>32</h5>
        <p className='text-neutral-400 font-medium text-[17px]'>Professionals</p>
      </div>
    </section>
  )
}
