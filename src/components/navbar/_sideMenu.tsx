import { ListMenu } from '@/services/global/navbar'
import { useLangStore } from '@/store/language'
import { useOpenBurgerStore } from '@/store/toggleHamburgerNavbar'
import Link from 'next/link'
import { ToggleButton } from './_toogleButton'

export const SideMenu = () => {
  const { openBurger, toggle: toggleBurger } = useOpenBurgerStore()
  const { lang, toggle: toggleLang } = useLangStore()
  return (
    <>
      <div
        onClick={toggleBurger}
        className={`fixed bottom-0 ease-in-out duration-300 left-0 ${
          openBurger ? 'w-1/4' : 'w-0'
        } bg-tertiary opacity-50 text-primary border-tertiary z-10 bg-gray-700 hover:bg-gray-800 h-[calc(100%-40px)] drop-shadow-md shadow-tertiary`}
      ></div>
      <div
        className={`fixed bottom-0 ease-in-out duration-300 right-0 ${
          openBurger ? 'w-3/4' : 'w-0 translate-x-full opacity-0'
        } bg-tertiary border-tertiary px-4 py-8 flex flex-col z-10 bg-gray-700 hover:bg-gray-800 h-[calc(100%-40px)] drop-shadow-md shadow-tertiary`}
      >
        {ListMenu[lang ? 'en' : 'id'].map((e, i) => (
          <Link href={e.href} key={`${i + 1}`} onClick={toggleBurger}>
            <p
              key={`${i + 1}`}
              className='text-white text-start hover:underline focus:underline font-semibold'
            >
              {e.label}
            </p>
          </Link>
        ))}
        <ToggleButton check={lang} setCheck={toggleLang} lang={true} />
      </div>
    </>
  )
}
