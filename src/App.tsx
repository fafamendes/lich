import { CharacterCreatorView } from './components/character-creator-view/CharacterCreatorView'
import { CodeView } from './components/code-view/CodeView'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'

function App() {
  return <div className='app-shell'><Header /><main className='workspace' aria-label='Editor de caracteres LCD'><CharacterCreatorView /><CodeView /></main><Footer /></div>
}
export default App
