
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';
import KasutajaPositus from './pages/KasutajaPositus';
import YksPostitus from './pages/YksPostitus';


function App() {

  return (
    <>
      <img src="/kingapood.jpeg" style={{ height:"300px"}}></img>
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
        <Link to="/lisa-uudis">
          <button>Lisa uudis</button>
        </Link>
        <Link to="/halda-uudiseid">
          <button>Halda uudiseid</button>
        </Link>

      

        <Routes>
          <Route path='' element= { <Avaleht/>} />
          <Route path='uudised' element={ <Uudised/>} />
          <Route path='kontakt' element={ <Kontakt/>} />
          <Route path='meist' element={ <Meist/>} />
          <Route path='lisa-uudis' element={ <LisaUudis/>} />
          <Route path="halda-uudiseid" element={<HaldaUudiseid/>}/>
          <Route path="uudis/:index" element={<YksUudis/>}/>
          <Route path="muuda/:index" element={<MuudaUudis/>}/>
          <Route path="kasutaja-postitus/:index" element={<KasutajaPositus/>}/>
          <Route path="yks-postitus/:index" element={<YksPostitus/>}/>
        </Routes>
       </div>
    </>
  )
}

export default App
