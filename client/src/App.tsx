import { Backpack } from 'lucide-react'
import './App.css'
import TourCard from './components/TourCard/TourCard'

function App() {

  return (
    <>
      <TourCard 
        icon={<Backpack size={36} />}
        type='Adventure'
        quantity='10 Tours+'
        price={250}
      />
    </>
  )
}

export default App
