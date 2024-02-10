import { ReactNode, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { Footer } from './footer'
import { useLangStore } from '@/store/language'
import { ListMenu } from '@/services/global/navbar'

export const Navbar = ({ children }: { children: ReactNode }) => {
  const { lang, toggle: changeLang, setDefault: setDefault } = useLangStore()
  // const [theme, setTheme] = useState(false)
  const setLanguage = () => {
    localStorage.setItem('lang', JSON.stringify(lang ? false : true))
    setDefault(lang ? false : true)
  }

  useEffect(() => {
    const localLang = localStorage.getItem('lang')
    if (localLang != undefined || localLang != null) {
      if (JSON.parse(localLang) != lang) {
        setDefault(JSON.parse(localLang))
      }
    }
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <header className='fixed z-50 w-full shadow-black drop-shadow-2xl flex py-1.5 justify-between px-12 bg-quaternary text-primary'>
        <span className='flex'>
          <Icon
            icon='ic:twotone-catching-pokemon'
            className='text-primary text-4xl rotate-12'
          />
          <h1 className='font-mochiypopone pt-1.5'>Poke Revolution</h1>
        </span>
        <nav className='font-poppins flex gap-3 pt-1.5'>
          {ListMenu[lang ? 'en' : 'id'].map((link, index) => (
            <Link key={`${index + 1}${link.href}`} href={link.href}>
              {link.label}
            </Link>
          ))}
          <span className='flex gap-3 mt-[-6px]'>
            <ToglleButton check={lang} setCheck={setLanguage} lang={true} />
            {/* <ToglleButton check={theme} setCheck={setTheme} lang={false} /> */}
          </span>
        </nav>
      </header>
      <div>{children}</div>
      <button
        onClick={scrollToTop}
        id='btn-back-to-top'
        title={lang ? 'Back to Top' : 'Kembali ke atas'}
        className={`fixed bottom-8 right-8 bg-secondary text-primary border-tertiary bg-gray-700 hover:bg-gray-800 p-2 rounded-full drop-shadow-md shadow-tertiary`}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 10l7-7m0 0l7 7m-7-7v18'
          ></path>
        </svg>
      </button>
      <Footer />
    </>
  )
}

const ToglleButton = ({
  check,
  setCheck,
  lang,
}: {
  lang: boolean
  check: boolean
  setCheck: (isChecked: boolean) => void
}) => {
  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={check}
          onChange={() => setCheck(!check)}
          className='sr-only'
        />
        <div
          className={`box block h-6 w-10 rounded-full ${
            check ? 'bg-primary' : 'bg-tertiary'
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
            check ? 'translate-x-full' : ''
          } font-semibold`}
        >
          <Values lang={lang} isChecked={check} />
        </div>
      </div>
    </label>
  )
}
const Values = ({ lang, isChecked }: { lang: boolean; isChecked: boolean }) => {
  if (lang) {
    return isChecked ? (
      <p className='text-xs'>EN</p>
    ) : (
      <p className='text-xs'>ID</p>
    )
  } else {
    return isChecked ? (
      <Icon icon='ph:sun-fill' />
    ) : (
      <Icon icon='ph:moon-fill' />
    )
  }
}

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <button
      className='flex flex-col justify-around w-10 h-10 bg-transparent border-none cursor-pointer p-0'
      onClick={toggleMenu}
    >
      <div
        className={`w-full h-1 bg-primary transition duration-300 transform ${
          isOpen ? 'rotate-45  translate-y-2.5' : 'rotate-0'
        }`}
      ></div>
      <div
        className={`w-full h-1 bg-primary transition duration-300 transform ${
          isOpen ? 'opacity-0 ' : 'opacity-100'
        }`}
      ></div>
      <div
        className={`w-full h-1 bg-primary transition duration-300 transform ${
          isOpen ? '-rotate-45 -translate-y-4' : 'rotate-0'
        }`}
      ></div>
    </button>
  )
}
