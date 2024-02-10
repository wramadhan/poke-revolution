import Image from 'next/image'
import { useState } from 'react'

type CardProps = {
  imageSrc: string
  altText: string
  desc: string
}

export const Card = ({ imageSrc, altText, desc }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-primary rounded-3xl p-2 shadow-2xl shadow-tertiary cursor-pointer`}
    >
      <div
        className='w-[250px] h-[360px] bg-primary rounded-3xl overflow-hidden group'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='relative w-full h-full'>
          <Image
            src={imageSrc}
            alt={altText}
            layout='fill'
            objectFit='cover'
            className={`rounded-3xl duration-300 ${
              isHovered ? 'scale-125 translate-x-8 ' : ''
            }`}
            title={altText}
          />
          <div
            className={`absolute bottom-0 px-2 py-3 bg-black bg-opacity-50 rounded-b-3xl w-full transition-transform duration-300 ${
              isHovered ? 'translate-y-0' : 'translate-y-12'
            }`}
          >
            <p
              className={`text-white duration-300 pb-4 font-bold ${
                isHovered ? 'underline' : ''
              } text-sm text-center`}
            >
              {altText}
            </p>
            <p className='text-xs text-white text-center'>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
