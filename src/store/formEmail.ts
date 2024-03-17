import { create } from 'zustand'

type FormEmail = {
  name: string
  email: string
  message: string
  loading: boolean
  setName: (value: string) => void
  setEmail: (value: string) => void
  setMessage: (value: string) => void
  setLoading: (value: boolean) => void
}

export const useFormEmail = create<FormEmail>((set) => ({
  name: '',
  email: '',
  message: '',
  loading: false,
  setName: (value: string) => set({ name: value }),
  setEmail: (value: string) => set({ email: value }),
  setMessage: (value: string) => set({ message: value }),
  setLoading: (value: boolean) => set({ loading: value }),
}))
