import React from 'react'

export default function Navbar({ background, text }: { background: string, text: string }): React.JSX.Element {
  return (
    <nav style={{
      background,
      color: text
    }} className='h-[70px] z-[100] absolute text-white top-0 w-full'>
      <div className="max-w-[1300px] mx-auto h-full flex items-center justify-between px-6 md:px-8">
        <h2 className='font-bold text-xl'>Architecture</h2>
        <ul className='hidden md:flex gap-6 text-[17px] items-center'>
          <li className='opacity-75 hover:opacity-100'><a href="#">Home</a></li>
          <li className='opacity-75 hover:opacity-100'><a href="#">About</a></li>
          <li className='opacity-75 hover:opacity-100'><a href="#">Services</a></li>
          <li className='opacity-75 hover:opacity-100 border-solid border-[1px] border-neutral-500 px-3 py-[5px] rounded-sm'><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

