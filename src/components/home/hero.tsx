import Marquee from 'react-fast-marquee'
import { Icon } from '@iconify/react'
import { ButtonLabel, HeroSubTitle } from '@/services/home/hero'
import { useLangStore } from '@/store/language'

export const Hero = () => {
  const { lang } = useLangStore()
  return (
    <main className='flex flex-col justify-center font-medium py-16 text-quaternary bg-primary h-[calc(100vh+48px)]'>
      <Marquee speed={30}>
        <p>{'=-'.repeat(200)}&nbsp;</p>
      </Marquee>
      <Marquee speed={30} direction='right'>
        <p>{'Poke Revolution - '.repeat(200)}&nbsp;</p>
      </Marquee>
      <Marquee speed={30}>
        <p>{'=-'.repeat(200)}&nbsp;</p>
      </Marquee>
      <p className='w-full flex text-2xl sm:text-5xl justify-center font-mochiypopone pt-16 '>
        P
        <Icon className='mt-1.5 rotate-12' icon='ic:twotone-catching-pokemon' />
        ke Revolution
      </p>
      <p className='w-full flex text-xs sm:text-sm justify-center'>
        {HeroSubTitle[lang ? 'en' : 'id']}
      </p>
      <div className='flex justify-center py-16'>
        <ScrollDownButton label={ButtonLabel[lang ? 'en' : 'id']} />
      </div>
      <div className='flex justify-center animate-bounce h-12'>
        <Icon icon='ic:sharp-swipe-up' className='text-3xl' />
      </div>
    </main>
  )
}
const ScrollDownButton = ({ label }: { label: string }) => {
  const scrollDown = () => {
    const windowHeight = window.innerHeight
    window.scrollTo({
      top: windowHeight,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollDown}
      className='hover:shadow-inner smMax:text-xs bg-secondary text-primary font-semibold py-4 px-8 rounded-xl'
    >
      {label}
    </button>
  )
}
