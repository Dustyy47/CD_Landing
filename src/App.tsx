import { createContext, useState } from 'react'
import { AboutScreen } from './components/screens/AboutScreen'
import { DiscussScreen } from './components/screens/DiscussScreen'
import { MainScreen } from './components/screens/MainScreen'
import { Header } from './components/ui/molecular/Header'

interface ILanguageContext {
  lang: Language
  setLang: (v: Language) => any
}

export const LanguageContext = createContext<ILanguageContext | null>(null)

export type Language = 'ru' | 'eng'
export const DEFAULT_LANGUAGE: Language = 'eng'

function App() {
  const [lang, setLang] = useState<Language>('eng')

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Header />
      <MainScreen />
      <AboutScreen />
      <DiscussScreen />
    </LanguageContext.Provider>
  )
}

export default App
