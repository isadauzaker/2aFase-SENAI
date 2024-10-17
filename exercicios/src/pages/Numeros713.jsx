import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros713() {
    const[inputNumero, setInputNumero] = useState('')
  return (
    <div>
        <Navbar />
        <h1>Exercício 7.13</h1>
        <input type="text" 
        value={inputNumero}
        onChange={ (event) => setInputNumero(event.target.value) }
        />
        <button>Ler</button>
        <button>Números Pares</button>
    </div>
  )
}

export default Numeros713