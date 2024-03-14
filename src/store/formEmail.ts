import { create } from 'zustand'

type FormEmail = {
  name: string
  email: string
  message: string
  setName: (value: string) => void
  setEmail: (value: string) => void
  setMessage: (value: string) => void
}

export const useFormEmail = create<FormEmail>((set) => ({
  name: '',
  email: '',
  message: '',
  setName: (value: string) => set({ name: value }),
  setEmail: (value: string) => set({ email: value }),
  setMessage: (value: string) => set({ message: value }),
}))
