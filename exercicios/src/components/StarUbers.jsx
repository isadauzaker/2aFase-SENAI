// 5.18 - STAR Ubers
// PRIMEIRA ETAPA:
// - Ler a distância da próxima corrida e dizer quanto tempo vai levar.
// 1 dado de Entrada: Distância (em quilômetros);
// 1 dado de Saída: Tempo de viagem (em segundos).
// Simples assim.
// 5.19 - SEGUNDA ETAPA:
// O tempo de viagem já é apresentado em segundos...
// Caso este tempo seja maior que um minuto, apresentar este valor também 
// em minutos;
// Caso seja maior que uma hora, apresentar também em horas;
// Caso seja maior que um dia, apresentar também em dias;
// Caso seja maior que 30 dias, apresentar também em meses;
// Caso seja maior que 12 meses, apresentar também em anos.
// Deu, simples assim...

import React from 'react'
import './StarUbers.css'
import { useState } from 'react'

function StarUbers() {
    const [resultado, setResultado] = useState()

    function processarNumero(){
        let distancia = Number(prompt('Digite a distância percorrida em (km): '))
        let velocidadeDaLuz = 3000000
        let tempo = distancia / velocidadeDaLuz
        setResultado(tempo)

        if(tempo > 315360000) {
          let anos = tempo / 315360000
          setResultado(anos)
        }
        else if( tempo > 2592000){
          let meses = tempo / 2592000
          setResultado(meses)
        }
        else if(tempo > 86400){
          let dias = tempo / 86400
          setResultado(dias)
        }
        else if(tempo > 36000){
          let horas = tempo / 36000
          setResultado(horas)
        }
        else if(tempo > 60){
          let minutos = tempo / 60
          setResultado(minutos)
        }
        else{
          setResultado(segundos)
        }
         
    }
  return (
    <div className='StarUbers-container'>
      <h2>Exercício para informar quanto tempo a viagem vai levar. </h2>
      <button onClick={processarNumero}>Processar</button>
      {resultado}
    </div>
  )
}

export default StarUbers
