import { Navbar } from '@/components/navbar'
import { AppProvider } from '@/contexts/provider'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AppProvider>
  )
}
