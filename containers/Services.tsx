import React from 'react'
import Link from 'next/link'
import { Heading } from '@/components'

interface ServiceBox {
  icon: string,
  title: string,
  description: string,
  link: string,
  className: string
}

const architectureServices: ServiceBox[] = [
  {
    title: "Building Design and Planning",
    description: "We provide innovative building design and planning solutions tailored to your specific needs.",
    link: "https://example.com/building-design",
    icon: 'fa-solid fa-ruler-combined',
    className: ''
  },
  {
    title: "Interior Design and Styling",
    description: "Transform your space with our expert interior design and styling services, creating beautiful and functional environments.",
    link: "https://example.com/interior-design",
    icon: 'fa-solid fa-couch',
    className: ''
  },
  {
    title: "Urban Landscape Architecture",
    description: "Enhance the urban environment with our sustainable landscape architecture designs that integrate nature and functionality.",
    link: "https://example.com/urban-landscape-architecture",
    icon: 'fa-solid fa-city',
    className: ''
  },
  {
    title: "Renovation and Restoration",
    description: "Revitalize your existing structure with our renovation and restoration services, preserving its heritage and adding modern functionality.",
    link: "https://example.com/renovation-restoration",
    icon: 'fa-solid fa-lightbulb',
    className: ''
  }
];


export default function Services(): React.JSX.Element {
  return (
    <section className="bg-neutral-900 relative py-16 lg:py-20 overflow-hidden">
      <div className='max-w-[1300px] mx-auto px-6 md:px-8'>
        <Heading title='What we do' subtitle='Services' colorTheme='dark' />

        <div className='lg:grid grid-cols-12 grid-rows-2 w-full gap-y-8 mt-6 hidden bg-neutral-900'>
          <Service {...architectureServices[0]} className='col-start-1 col-span-5' />
          <Service {...architectureServices[1]} className='col-start-2 row-start-2 col-span-5' />
          <Service {...architectureServices[2]} className='col-start-7 col-span-5' />
          <Service {...architectureServices[3]} className='col-start-8 col-span-5 row-start-2' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 lg:hidden mt-8'>
          {architectureServices.map(service => (
            <Service key={service.title} {...service} />
          ))}
        </div>
      </div>
      <div style={{ zIndex: -100 }} className='hidden web:block'>
        <div className="absolute -bottom-10 grid grid-cols-7 grid-rows-[10] gap-x-5 -left-4 gap-7">
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
        <div className="absolute -right-2 grid grid-cols-5 top-0 grid-rows-[8] gap-x-4 gap-y-3">
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

function Service({ icon, title, description, link, className }: ServiceBox): React.JSX.Element {
  return (
    <div className={`${className} flex flex-col lg:flex-row lg:items-center gap-4
     px-1 md:px-4 py-2`}>
      <i className={`${icon} fa-xl text-white`}></i>
      <div>
        <h5 className='font-semibold text-lg text-white'>{title}</h5>
        <p className='text-neutral-textDark mt-1 max-w-lg'>{description}</p>
        <Link className='mt-1 text-blue-400 block' href={link} aria-label={title}>Learn more</Link>
      </div>
    </div>
  )
}