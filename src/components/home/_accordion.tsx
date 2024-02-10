import { QnAText } from '@/services/home/briefDesc'
import { useLangStore } from '@/store/language'
import React, { useState } from 'react'

export const Accordion: React.FC = () => {
  const { lang } = useLangStore()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='w-full my-8 mx-auto duration-500'>
      {QnAText[lang ? 'en' : 'id']['chat'].map((item, index) => (
        <div
          key={index}
          className={`duration-100 ${
            openIndex === index ? '' : ''
          } rounded mb-2`}
        >
          <div
            className='flex rounded justify-between items-center p-4 cursor-pointer transition duration-500 ease-in-out bg-gray-100 bg-tertiary hover:bg-quinary text-quaternary'
            onClick={() => toggleItem(index)}
          >
            <div className='font-semibold'>{item.q}</div>
            <div>
              <svg
                className={`${
                  openIndex === index ? '' : 'rotate-180'
                } w-6 h-6 text-gray-600 transform duration-500`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 15l7-7 7 7'
                />
              </svg>
            </div>
          </div>
          <div
            className={`duration-200 ${
              openIndex === index ? '' : 'opacity-0 h-0 translate-x-10'
            } p-4 bg-quinary rounded text-white`}
          >
            {item.a}
          </div>
        </div>
      ))}
    </div>
  )
}
