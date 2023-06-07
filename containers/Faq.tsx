import React from 'react'
import { Heading } from '@/components'

interface Question {
  title: string,
  answer: string
}

const questions: Question[] = [
  {
    "title": "What types of projects do you specialize in?",
    "answer": "We specialize in residential, commercial, and institutional architectural projects."
  },
  {
    "title": "How long does the design process typically take?",
    "answer": "The design process duration varies depending on the complexity and scope of the project."
  },
  {
    "title": "Can we be involved in the decision-making process during the project?",
    "answer": "Absolutely, we value client input and strive for open collaboration throughout the project."
  },
  {
    "title": "What is your approach to sustainable design?",
    "answer": "We integrate eco-friendly practices and sustainable design principles into our projects."
  }
]

export default function Faq(): React.JSX.Element {
  return (
    <section className='max-w-screen-web mx-auto px-6 md:px-8 py-14 lg:py-20'>
      <Heading title='Your Questions Answered' subtitle='Frequently Asked Questions' position='center' />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:mt-8 gap-4 md:gap-6">
        { questions.map((question, id) => (
          <Question {...question} key={id} />
        ))}
      </div>
    </section>
  )
}

function Question({ title, answer }: Question): React.JSX.Element {
  return (
    <div className='bg-neutral-50 px-6 py-7'>
      <div className='flex gap-2 items-start'>
        <i className="fa-solid fa-chevron-down mt-1"></i>
        <h5 className='font-semibold text-base lg:text-lg'>{title}</h5>
      </div>
      <p className='text-neutral-600 mt-2 text-[15px] md:text-base lg:text-[17px]'>{answer}</p>
    </div>
  )
}