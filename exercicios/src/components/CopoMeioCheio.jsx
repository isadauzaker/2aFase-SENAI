// 5.29 - Copo meio cheio: Ler um número e informar se ele é positivo, 
// negativo ou nulo.

import React from 'react'
import './CopoMeioCheio.css'
import { useState } from 'react'


function PositivoNegativo() {
    const [resultado, setResultado] = useState()

    function processarNumero(){
        let numero = Number(prompt('Digite um número: '))

        if(numero > 0){
            setResultado('O número é positivo.')
        }
        else if(numero < 0){
            setResultado('O número é negativo.')
        }
        else{
            setResultado('Nulo')
        }
        setResultado(inform)
    }

  return (
    <div className='CopoMeioCheio-container'>
      <h2>Exercício para informar se o número é positivo, negativo ou nulo.</h2>
      <button onClick={processarNumero}>Processar</button>
     {resultado}
    </div>
  )
}

export default PositivoNegativo
