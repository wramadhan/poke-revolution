import { HeroSubTitle } from '@/services/home/hero'
import { Icon } from '@iconify/react'
import { useLangStore } from '@/store/language'
import { ContactUs } from '@/services/global/footer'

export const Footer = () => {
  const { lang } = useLangStore()
  return (
    <footer className='px-12 py-2 bg-tertiary'>
      <div className='flex justify-between text-quaternary'>
        <span className='flex'>
          <Icon
            icon='ic:twotone-catching-pokemon'
            className='text-4xl rotate-12 mt-2'
          />
          <h1 className='font-mochiypopone pt-1.5'>
            <div>Poke Revolution</div>
            <div className='text-xs'>{HeroSubTitle[lang ? 'en' : 'id']}</div>
          </h1>
        </span>
        <button>{ContactUs[lang ? 'en' : 'id']}</button>
      </div>
      <p className='text-white sm:text-center pt-2'>
        &copy; Copyright 2024 Wahyu Ramadhan
      </p>
    </footer>
  )
}
