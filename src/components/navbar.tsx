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
  const { lang, setDefault: setDefault } = useLangStore()
  const setLanguage = () => {
    localStorage.setItem('lang', JSON.stringify(lang ? false : true))
    setDefault(lang ? false : true)
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
      <header className='fixed z-50 w-full shadow-black drop-shadow-2xl flex py-1.5 justify-between smMax:px-2 px-12 bg-quaternary text-primary'>
        <Link href={'/'}>
          <span className='flex'>
            <Icon
              icon='ic:twotone-catching-pokemon'
              className='text-primary text-4xl rotate-12'
            />
            <h1 className='font-mochiypopone pt-1.5'>Poke Revolution</h1>
          </span>
        </Link>
        <nav className='mdMax:hidden font-poppins flex gap-3 pt-1.5'>
          {ListMenu[lang ? 'en' : 'id'].map((link, index) => (
            <Link key={`${index + 1}${link.href}`} href={link.href}>
              {link.label}
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
