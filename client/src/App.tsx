import './App.css'
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
    </>
  )
}

export default App
