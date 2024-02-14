import { useOpenBurgerStore } from '@/store/toggleHamburgerNavbar'

export const BurgerButton = () => {
  const { openBurger, toggle } = useOpenBurgerStore()

  return (
    <div className='md:hidden flex flex-col justify-center'>
      <button
        className={` ${
          openBurger ? 'mt-1' : ''
        } flex flex-col justify-around duration-300 w-6 h-6 bg-transparent border-none cursor-pointer`}
        onClick={toggle}
      >
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`w-full h-0.5 bg-primary transition duration-300 transform ${
              index === 0
                ? openBurger
                  ? 'rotate-45 translate-y-1'
                  : 'rotate-0'
                : index === 1
                ? openBurger
                  ? 'opacity-0'
                  : 'opacity-100'
                : openBurger
                ? '-rotate-45 -translate-y-3'
                : 'rotate-0'
            }`}
          ></div>
        ))}
      </button>
    </div>
  )
}
