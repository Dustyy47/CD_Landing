import { Header } from './components/ui/molecular/Header'
import { MainScreen } from './components/screens/MainScreen'
import { AboutScreen } from './components/screens/AboutScreen'
import { DiscussScreen } from './components/screens/DiscussScreen'

function App() {
  return (
    <>
      <Header />
      <div>
        <MainScreen />
        <AboutScreen />
        <DiscussScreen />
      </div>
    </>
  )
}

export default App
