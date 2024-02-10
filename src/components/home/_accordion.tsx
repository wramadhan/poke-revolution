import React, { useState } from 'react'

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      {items.map((item, index) => (
        <div key={index} className='border rounded mb-2'>
          <div
            className='flex justify-between items-center p-4 cursor-pointer transition duration-1000 ease-in-out bg-gray-100 hover:bg-gray-200'
            onClick={() => toggleItem(index)}
          >
            <div className='font-semibold'>{item.title}</div>
            <div>
              {openIndex === index ? (
                <svg
                  className='w-6 h-6 text-gray-600 transform rotate-180'
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
              ) : (
                <svg
                  className='w-6 h-6 text-gray-600'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              )}
            </div>
          </div>
          <div
            className={`${
              openIndex === index ? 'block' : 'hidden'
            } p-4 bg-gray-200`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}

// Contoh penggunaan
const ExampleAccordion: React.FC = () => {
  const items: AccordionItem[] = [
    {
      title: 'Item 1',
      content: 'Content for item 1',
    },
    {
      title: 'Item 2',
      content: 'Content for item 2',
    },
    {
      title: 'Item 3',
      content: 'Content for item 3',
    },
  ]

  return <Accordion items={items} />
}

export default ExampleAccordion
