import { useState } from 'react'
import './App.css'
import Contato from './pages/Contato'
import Home from './pages/Home'
import NaoSei from './pages/NaoSei'
import Render from './pages/Render'

function App() {
  const [pagina, setPagina] = useState(<Home />)

  function mostrarHome(){
    setPagina(<Home />)
  }

  return (
    <>
      <nav>
        <button onClick={mostrarHome}>Home</button>
        <button onClick={ () => {setPagina(<Contato />)} }>Contato</button>
        <button onClick={ () => {setPagina(<NaoSei />)} }>Não sei</button>
        <button onClick={ () => {setPagina(<Render />)} }>Render</button>
      </nav>
      {pagina}
      
    </>
  )
}

export default App
