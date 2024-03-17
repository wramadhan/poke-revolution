import { ReactNode, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { Footer } from './footer'
import { useLangStore } from '@/store/language'
import { ListMenu } from '@/services/global/navbar'
import { BurgerButton } from './navbar/_burgerButton'
import { SideMenu } from './navbar/_sideMenu'
import { ToggleButton } from './navbar/_toogleButton'
import { ScrollToTopButton } from './scrollToTopButton'

export const Navbar = ({ children }: { children: ReactNode }) => {
  const { lang, setDefault } = useLangStore()
  const setLanguage = () => {
    localStorage.setItem('lang', JSON.stringify(!lang))
    setDefault(!lang)
  }
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const localLang = localStorage.getItem('lang')
    if (localLang != undefined || localLang != null) {
      if (JSON.parse(localLang) != lang) {
        setDefault(JSON.parse(localLang))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const scrollToTop = () => {
    setOpen(!open)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <header className='fixed z-50 w-full shadow-black drop-shadow-2xl flex py-1.5 justify-between mdMax:px-4 px-12 bg-quaternary text-primary'>
        <Link href={'/'}>
          <span className='flex'>
            <Icon
              icon='ic:twotone-catching-pokemon'
              className='text-primary text-4xl mdMax:text-3xl rotate-12'
            />
            <div className='flex flex-col justify-center'>
              <h1 className='font-mochiypopone mdMax:text-sm'>
                Poke Revolution
              </h1>
            </div>
          </span>
        </Link>
        <nav className='mdMax:hidden font-poppins flex gap-3 pt-1.5 '>
          {ListMenu[lang ? 'en' : 'id'].map((link, index) => (
            <Link key={`${index + 1}${link.href}`} href={link.href}>
              <p className='hover:text-tertiary hover:scale-105 active:text-tertiary active:scale-75 duration-100'>
                {link.label}
              </p>
            </Link>
          ))}
          <span className='flex gap-3 mt-[-6px]'>
            <ToggleButton check={lang} setCheck={setLanguage} lang={true} />
          </span>
        </nav>
        <BurgerButton />
      </header>
      <div>{children}</div>
      <SideMenu />
      <ScrollToTopButton scrollToTop={scrollToTop} />
      <Footer />
    </>
  )
}
