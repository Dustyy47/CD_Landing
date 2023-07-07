import { AboutScreen } from './components/screens/AboutScreen'
import { DiscussScreen } from './components/screens/DiscussScreen'
import { MainScreen } from './components/screens/MainScreen'
import { Header } from './components/ui/molecular/Header'

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <AboutScreen />
      <DiscussScreen />
    </>
  )
}

export default App
