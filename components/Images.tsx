import React from 'react'

interface Props {
  images: string[]
}

export default function Images({ images }: Props): React.JSX.Element {
  return (
    <div className={`grid grid-cols-2 gap-6 my-10`}>
      { images.map((image, index) => (
        <img src={image} key={index} className='md:h-[300px] lg:h-[400px] xl:h-[500px] w-full object-cover' />
      ))}
    </div>
  )
}
