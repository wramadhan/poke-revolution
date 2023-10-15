import Marquee from 'react-fast-marquee'
import { Icon } from '@iconify/react'

export const MainHome = () => {
  return (
    <main className='font-medium py-16 text-quaternary bg-primary h-[calc(100vh-48px)]'>
      <Marquee speed={30}>
        <p>{'Poke Revolution - '.repeat(10)}&nbsp;</p>
      </Marquee>
      <Marquee speed={30} direction='right'>
        <p>{'Poke Revolution - '.repeat(10)}&nbsp;</p>
      </Marquee>
      <Marquee speed={30}>
        <p>{'Poke Revolution - '.repeat(10)}&nbsp;</p>
      </Marquee>

      <p className='w-full flex text-5xl justify-center font-mochiypopone pt-16 '>
        P
        <Icon className='mt-1.5' icon='ic:twotone-catching-pokemon' />
        ke Revolution
      </p>
      <p className='w-full flex text-sm justify-center'>
        Everything will evolve in time
      </p>
      <div className='flex justify-center py-16'>
        <button className='hover:shadow-inner  bg-secondary text-primary font-semibold py-4 px-8 rounded-xl'>
          Get Started
        </button>
      </div>
      <div className='flex justify-center animate-bounce h-12'>
        <Icon icon='ic:sharp-swipe-up' className='text-3xl' />
      </div>
    </main>
  )
}
