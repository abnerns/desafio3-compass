import './App.css'
import NavButton from './components/NavButton/NavButton'
import SearchBox from './components/SearchBox/SearchBox'
import { Send } from 'lucide-react'

function App() {

  return (
    <>
      <SearchBox 
        label="Destination"
        icon={<Send />}
        placeholder="Where to go?"
      />
      <NavButton
        value="Search"
      />
    </>
  )
}

export default App
