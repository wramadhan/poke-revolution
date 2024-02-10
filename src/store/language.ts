import { create } from 'zustand'

type LangStore = {
  lang: boolean
  toggle: () => void
  setDefault: (value: boolean) => void
}

export const useLangStore = create<LangStore>((set) => ({
  lang: true,
  toggle: () => set((state) => ({ lang: state.lang != true })),
  setDefault: (value: boolean) => set({ lang: value }),
}))
