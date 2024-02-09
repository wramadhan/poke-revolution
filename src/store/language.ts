import { create } from 'zustand'

type LangStore = {
  lang: boolean
  toggle: () => void
}

export const useLangStore = create<LangStore>((set) => ({
  lang: false,
  toggle: () => set((state) => ({ lang: state.lang != true })),
}))
