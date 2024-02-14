import { create } from 'zustand'

type OpenBurgerStore = {
  openBurger: boolean
  toggle: () => void
}

export const useOpenBurgerStore = create<OpenBurgerStore>((set) => ({
  openBurger: false,
  toggle: () => set((state) => ({ openBurger: state.openBurger != true })),
}))
