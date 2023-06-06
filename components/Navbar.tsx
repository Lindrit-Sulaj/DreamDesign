"use client"
import React, { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ background, text }: { background: string, text: string }): React.JSX.Element {
  const [opened, setOpened] = useState(false);
  const breakpoint = useMediaQuery();

  const open = (): void => setOpened(true);
  const close = (): void => setOpened(false);

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
        <button className='block md:hidden' onClick={open}>
          <i className={`fa-solid fa-bars fa-lg`}></i>
        </button>
      </div>

      <AnimatePresence>
        {breakpoint === "sm" && opened && (
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0, transition: { type: 'tween', duration: .2 } }}
            exit={{ x: '-100vw' }}
            className='absolute flex flex-col w-full h-screen bg-neutral-950 top-0 p-6'>
            <div className='flex justify-end'>
              <button onClick={close}>
                <i className="fa-solid fa-xmark fa-xl"></i>
              </button>
            </div>
            <ul className='flex flex-col justify-center grow gap-6 text-2xl font-medium items-center'>
              <li className='font-bold text-blue-300 mb-5'>DreamDesign</li>
              <li className='opacity-[.8] hover:opacity-100'><a href="#">Home</a></li>
              <li className='opacity-[.8] hover:opacity-100'><a href="#">About</a></li>
              <li className='opacity-[.8] hover:opacity-100'><a href="#">Services</a></li>
              <li className='opacity-[.8] hover:opacity-100 border-solid border-[2px] border-neutral-300 px-3 py-[5px] rounded-sm'><a href="#">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

