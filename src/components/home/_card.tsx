import Image from 'next/legacy/image'
import { useRouter } from 'next/router'

type CardProps = {
  imageSrc: string
  altText: string
  desc: string
  route: string
}

export const Card = ({ imageSrc, altText, desc, route }: CardProps) => {
  const router = useRouter()

  return (
    <button
      type='button'
      onClick={() => {
        router.push(route)
      }}
      className={`bg-primary rounded-3xl p-2 shadow-2xl shadow-tertiary cursor-pointer`}
    >
      <div className='w-[130px] h-[220px] sm:w-[250px] sm:h-[360px] bg-primary rounded-3xl overflow-hidden group'>
        <div className='relative w-full h-full'>
          <Image
            src={imageSrc}
            alt={altText}
            layout='fill'
            objectFit='cover'
            className={`rounded-3xl transition-transform duration-300 group-hover:scale-125 group-hover:sm:translate-x-8`}
            title={altText}
          />
          <div
            className={`absolute bottom-0 px-2 py-3 bg-black smMax:h-full bg-opacity-50 rounded-b-3xl w-full transition-transform duration-300 smMax:flex smMax:flex-col smMax:justify-center group-hover:translate-y-0 sm:translate-y-12`}
          >
            <p
              className={`text-white duration-300 pb-4 font-bold underline group-hover:no-underline text-sm text-center`}
            >
              {altText}
            </p>
            <p className='text-xs text-white text-center'>{desc}</p>
          </div>
        </div>
      </div>
    </button>
  )
}
