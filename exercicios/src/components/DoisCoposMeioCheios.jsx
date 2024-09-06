// 5.30 - Dois copos meio cheios: Faça um programa para ler um número e 
// imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
// tempo.

import React from 'react'
import { useState } from 'react'
import './DoisCoposMeioCheios.css'

function ParPositivo() {

  const [resultado, setResultado] = useState()
function processarNumero(){

  let numero = Number(prompt('Digite um número: '))

  if(numero % 2 == 0 && numero > 0 ){
    setResultado('O número é par e inteiro! :)')
  }
  else{
    setResultado('O número talvez não seja positivo ou inteiro.')
  }
  setResultado(inform)
}
  
  return (
    <div className='DoisCoposMeioCheios-container'>
      <h2>Exercício para informar se o número é par e positivo ao mesmo tempo.</h2>
      <button onClick={processarNumero}>Processar</button>
     {resultado}
    </div>
  )
}

export default ParPositivo
