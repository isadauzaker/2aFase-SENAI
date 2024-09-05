import React from 'react'
import './PositivoNegativo.css'
import { useState } from 'react'

// 5.29 - Copo meio cheio: Ler um número e informar se ele é positivo, 
// negativo ou nulo.

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
    }

  return (
    <div className='PositivoNegativo-container'>
      <h2>Exercício para informar se o número é positivo, negativo ou nulo.</h2>
      <button onClick={processarNumero}>Processar</button>
     {resultado}
    </div>
  )
}

export default PositivoNegativo
