import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import NavBar from './components/NavBar';
import About from './components/About';
import Work from "./components/Work";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ShowModal from "./components/ShowModal";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  // Verificar si la ruta actual es "/welcome"
  const isWelcomePage = location.pathname === '/';

  return (
    <div className='app'>
      <NavBar/>
     {!isWelcomePage && <ShowModal/>}
     <Routes>
      <Route exact path='/' element={<Welcome/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/work' element={<Work/>}/>
      <Route exact path='/skills' element={<Skills/>}/>
      <Route exact path='/education' element={<Education/>} />
      <Route exact path='/contact' element={<Contact/>} />
     </Routes>
     
     {/* Mostrar ShowModal en todas partes excepto en /welcome */}
    </div>
  )
}

export default App
