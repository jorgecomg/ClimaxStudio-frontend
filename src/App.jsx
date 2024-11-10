import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Estudio from './pages/Estudio';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Pacotes from './pages/Pacotes';
import Eventos from './pages/Eventos';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/studio" element={<Estudio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path='/pacotes' element={<Pacotes/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
