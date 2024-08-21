import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Tour from './components/Tour/Tour'

function App() {

  return (
    <>
      <SearchBar />
      <Tour 
        img= 'https://images.pexels.com/photos/17741532/pexels-photo-17741532/free-photo-of-a-rocky-cliff-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        place='Budapest, Hungary'
        name='Wonders of the West Coast & Kimberley'
        review='15 reviews'
        time='7days'
        price={520}
      />
    </>
  )
}

export default App
