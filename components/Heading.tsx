import React from 'react'

interface Props {
  title: string,
  subtitle?: string,
  position?: 'left' | 'center',
  colorTheme?: 'light' | 'dark'
}

export default function Heading({ title, subtitle, position = "left", colorTheme = "light" }: Props) {
  return (
    <div className='hero-heading'>
      <h3 className={`${colorTheme === 'light' ? 'text-custom-blue' : 'text-blue-400'} text-lg font-medium mb-1 ${position === 'center' && 'text-center'}`}>{subtitle}</h3>
      <h2 className={`${colorTheme === 'light' ? '' : 'text-white'} font-bold text-3xl md:text-4xl ${position === 'center' && 'text-center'}`}>{title}</h2>
    </div>
  )
}
