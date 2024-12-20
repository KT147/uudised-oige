
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';


function App() {

  return (
    <>
      <img src="https://static.vecteezy.com/system/resources/previews/010/367/865/non_2x/simple-shoe-shop-logo-in-line-style-vector.jpg" style={{ height:"300px"}}></img>
      <div>
      <Link to="/">
          <button>Avalehele</button>
        </Link>
        <Link to="/uudised">
          <button>Uudiste lehele</button>
        </Link>
        <Link to="/kontakt">
          <button>Võta meiega ühendust</button>
        </Link>
        <Link to="/meist">
          <button>Info meist</button>
        </Link>
        <Routes>
          <Route path='' element= { <Avaleht/>} />
          <Route path='uudised' element={ <Uudised/>} />
          <Route path='kontakt' element={ <Kontakt/>} />
          <Route path='meist' element={ <Meist/>} />
        </Routes>
       </div>
    </>
  )
}

export default App
