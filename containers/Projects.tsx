"use client"
import React, { useState } from 'react'
import { Heading } from '@/components'
import Link from 'next/link'

interface ProjectProps {
  name: string,
  link: string,
  image: string,
  category: string
}

const projects: ProjectProps[] = [
  {
    name: 'Project 1',
    link: '/project/1',
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    category: ''
  },
  {
    name: 'Project 2',
    link: '/project/1',
    image: 'https://images.unsplash.com/photo-1598818384697-62330d600309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: ''
  },
  {
    name: 'Project 3',
    link: '/project/1',
    image: 'https://images.unsplash.com/photo-1546349851-64285be8e9fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: ''
  },
  {
    name: 'Project 4',
    link: '/project/1',
    image: 'https://images.unsplash.com/photo-1567943183748-3a7542120c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: ''
  }
]

export default function Projects(): React.JSX.Element {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <section className='bg-neutral-900 relative py-16 lg:py-20 overflow-hidden'>
      <div className='max-w-screen-web mx-auto px-6 md:px-8'>
        <Heading title='Our works' subtitle='Projects' colorTheme='dark' />
        <div className='flex flex-nowrap overflow-auto gap-2 mt-4'>
          <button
            onClick={() => setSelectedTab('')}
            className={`px-5 py-[5px] whitespace-nowrap rounded-sm ${selectedTab === '' ? 'bg-neutral-800 text-white border-neutral-700' : 'text-neutral-400 border-neutral-800'} border-solid border-[1px]`}>All</button>
          <button
            onClick={() => setSelectedTab('Interior')}
            className={`px-5 py-[5px] whitespace-nowrap rounded-sm border-solid border-[1px] ${selectedTab === 'Interior' ? 'bg-neutral-800 text-white border-neutral-700' : 'text-neutral-400 border-neutral-800'} `}>Interior</button>
          <button
            onClick={() => setSelectedTab('Buildings')}
            className={`px-5 py-[5px] whitespace-nowrap rounded-sm border-solid border-[1px] ${selectedTab === 'Buildings' ? 'bg-neutral-800 text-white border-neutral-700' : 'text-neutral-400 border-neutral-800'} `}>Buildings</button>
          <button
            onClick={() => setSelectedTab('Houses')}
            className={`px-5 py-[5px] whitespace-nowrap rounded-sm border-solid border-[1px] ${selectedTab === 'Houses' ? 'bg-neutral-800 text-white border-neutral-700' : 'text-neutral-400 border-neutral-800'} `}>Houses</button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
          {projects.map(project => (
            <Project {...project} key={project.name} />
          ))}
        </div>
      </div>
      <div style={{ zIndex: -100 }} className='hidden web:block'>
        <div className="absolute -top-10 grid grid-cols-7 grid-rows-[10] gap-x-5 -left-6 gap-7">
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-neutral-800"></div>
        </div>
        <div className="absolute -right-2 grid grid-cols-5 bottom-0 grid-rows-[8] gap-x-4 gap-y-3">
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
          <div className='w-[6px] h-[6px] rounded-full bg-neutral-800'></div>
        </div>
      </div>
    </section>
  )
}


function Project({ name, link, image }: ProjectProps): React.JSX.Element {
  return (
    <div style={{ background: `linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.8) 100%), url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='relative rounded-sm flex flex-col h-[200px] lg:h-[350px]'>
      <div className='mt-auto flex justify-between text-white px-6 py-4 items-center'>
        <h5 className='font-semibold text-lg'>{name}</h5>
        <Link href={link}>
          <i className="fa-solid fa-arrow-right-long fa-lg"></i>
        </Link>
      </div>
    </div>
  )
}