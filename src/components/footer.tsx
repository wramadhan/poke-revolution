import { HeroSubTitle } from '@/services/home/hero'
import { Icon } from '@iconify/react'
import { useLangStore } from '@/store/language'
import Link from 'next/link'

export const Footer = () => {
  const { lang } = useLangStore()
  return (
    <footer className='smMax:px-2 px-12 mdMax:px-4 py-2 bg-tertiary'>
      <div className='md:flex justify-between text-quaternary'>
        <div className='flex justify-center mdMax:w-full'>
          <Link href={'/'}>
            <span className='flex'>
              <div className='flex flex-col justify-center'>
                <Icon
                  icon='ic:twotone-catching-pokemon'
                  className='text-4xl rotate-12 mt-2'
                />
              </div>
              <div className='text-center'>
                <p className='pt-1.5'>
                  <p className='font-mochiypopone mdMax:text-sm text-lg text-center'>
                    Poke Revolution
                  </p>
                  <p className='text-xs mdMax:pt-0.5 font-poppins mdMax:text-[10px]'>
                    {HeroSubTitle[lang ? 'en' : 'id']}
                  </p>
                </p>
              </div>
            </span>
          </Link>
        </div>
        <p className='md:flex flex-col justify-center text-white text-center text-xs pt-3'>
          &copy; Copyright 2024 Wahyu Ramadhan
        </p>
      </div>
    </footer>
  )
}
