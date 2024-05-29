import { CharacterCreatorView } from './components/character-creator-view/CharacterCreatorView'
import { CodeView } from './components/code-view/CodeView'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'

function App() {

  return (
    <div className='relative min-h-screen'>
      <Header />

      <div className='relative flex gap-40 justify-center top-[50px]'>
        <CharacterCreatorView />
        <CodeView />
      </div>

      <Footer />
    </div>
  )
}

export default App
