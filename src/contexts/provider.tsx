import { createContext, useContext, useState, ReactNode } from 'react'

type AppState = {
  lang: string
  theme: string
}

type AppContextType = {
  appState: AppState
  setAppState: (state: AppState) => void
}

export const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [appState, setAppState] = useState<AppState>({
    lang: 'en',
    theme: 'light',
  })

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
