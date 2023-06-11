import Link from 'next/link'
import React from 'react'
import { Navbar } from '@/components';
import { Cta } from '@/containers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Dicover our amazing services and find what we can help you',
  keywords: ['Dream Design Services', 'Kosovo architecture services', 'Sherbime te arkitektures']
}

const data: Array<{
  image: string;
  title: string;
  description: string;
  link: string;
}> = [
  {
    image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Interior Design",
    description: "Our interior design services focus on creating captivating and functional interior spaces that reflect your style and enhance the overall ambiance.",
    link: "/services/interior-design"
  },
  {
    image: "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Exterior Design",
    description: "With our exterior design services, we specialize in crafting visually stunning and harmonious architectural exteriors that leave a lasting impression.",
    link: "/services/exterior-design"
  },
  {
    image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Construction Management",
    description: "Our construction management services ensure seamless coordination and efficient execution of architectural projects, from planning to completion.",
    link: "/services/construction-management"
  },
  {
    image: "https://images.pexels.com/photos/5768107/pexels-photo-5768107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Maintenance Services",
    description: "Our maintenance services provide ongoing support and care for your architectural projects, ensuring their longevity and optimal performance.",
    link: "/services/maintenance"
  }
];



export default function ServicesPage(): React.JSX.Element {
  return (
    <main className='services'>
      <section className="hero flex flex-col gap-2 justify-center h-[250px] md:h-[300px] lg:h-[350px] items-center">
        <Navbar background="transparent" text="white" />
        <div className="flex gap-2 text-[17px] text-neutral-300">
          <Link href="/">Home</Link>
          <span>/</span>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white">Our Services</h1>
        <p className="md:text-lg text-neutral-300 mt-2">Discover our amazing services</p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-lg mx-auto my-10 gap-x-6 gap-y-8 md:gap-y-12 px-6 md:px-8">
        { data.map(service => (
          <Service key={service.title} {...service} />
        ))}
      </section>
      <Cta />
    </main>
  )
}

function Service({ title, image, description, link }: { title: string, image: string, description: string, link: string }): React.JSX.Element {
  return (
    <div>
      <img className='h-[250px] w-full object-cover rounded-sm' src={image} alt={title} />
      <h5 className='font-bold text-[20px] mt-5'>{title}</h5>
      <p className='text-neutral-500 mt-1'>{description}</p>
      <Link className='font-medium mt-2 block text-blue-500' href={link} aria-label={title}>View Service</Link>
    </div>
  )
}
