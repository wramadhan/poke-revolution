import Marquee from 'react-fast-marquee'
import { Icon } from '@iconify/react'
import { ButtonLabel, HeroSubTitle } from '@/services/home/hero'
import { useLangStore } from '@/store/language'

export const Hero = () => {
  const { lang } = useLangStore()
  return (
    <main className='font-medium py-16 text-quaternary bg-primary h-[calc(100vh+48px)]'>
      <Marquee speed={30}>
        <p>{'Poke Revolution - '.repeat(100)}&nbsp;</p>
      </Marquee>
      <Marquee speed={30} direction='right'>
        <p>{'Poke Revolution - '.repeat(100)}&nbsp;</p>
      </Marquee>
      <Marquee speed={30}>
        <p>{'Poke Revolution - '.repeat(100)}&nbsp;</p>
      </Marquee>

      <p className='w-full flex text-5xl justify-center font-mochiypopone pt-16 '>
        P
        <Icon className='mt-1.5 rotate-12' icon='ic:twotone-catching-pokemon' />
        ke Revolution
      </p>
      <p className='w-full flex text-sm justify-center'>
        {HeroSubTitle[lang ? 'en' : 'id']}
      </p>
      <div className='flex justify-center py-16'>
        <button className='hover:shadow-inner  bg-secondary text-primary font-semibold py-4 px-8 rounded-xl'>
          {ButtonLabel[lang ? 'en' : 'id']}
        </button>
      </div>
      <div className='flex justify-center animate-bounce h-12'>
        <Icon icon='ic:sharp-swipe-up' className='text-3xl' />
      </div>
    </main>
  )
}
