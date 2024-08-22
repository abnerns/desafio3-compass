import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './routes/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";


function App() {


  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
