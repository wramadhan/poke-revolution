import { ReactNode, useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { AppContext, useApp } from '@/contexts/provider'
export const Navbar = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState(false)
  const [mode, setMode] = useState(false)
  return (
    <div>
      <header className='flex py-1.5 justify-between px-12 bg-quaternary text-primary'>
        <span className='flex'>
          <Icon
            icon='ic:twotone-catching-pokemon'
            className='text-primary text-4xl'
          />
          <h1 className='font-mochiypopone pt-1.5'>Poke Revolution</h1>
        </span>
        <nav className='font-poppins flex gap-3 pt-1.5'>
          <Link href='#' className='underline'>
            Home
          </Link>
          <Link href='#'>Pokemon List</Link>
          <Link href='#'>Games</Link>
          <Link href='#'>Contact</Link>
          <span className='flex gap-3 mt-[-6px]'>
            <ToglleButton check={lang} setCheck={setLang} lang={true} />
            <ToglleButton check={mode} setCheck={setMode} lang={false} />
          </span>
        </nav>
      </header>
      <div>{children}</div>
    </div>
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
  const [isChecked, setIsChecked] = useState(check)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setCheck(!isChecked)
  }
  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div
          className={`box block h-6 w-10 rounded-full ${
            isChecked ? 'bg-primary' : 'bg-tertiary'
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
            isChecked ? 'translate-x-full' : ''
          } font-semibold`}
        >
          <Values lang={lang} isChecked={isChecked} />
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
  ;<button
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
}
