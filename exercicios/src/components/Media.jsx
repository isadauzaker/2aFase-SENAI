import './Media.css'
import { useState } from 'react'

function Media() {
    const [resultado, setResultado] = useState()

    function calcularMedia(){
        let nota1 = Number(prompt("Digite o 1o número: "))
        let nota2 = Number(prompt("Digite o 2o número: "))
        let media = (nota1 + nota2)/2
        setResultado(media)
    }
  return (
    <div className='Media-container'>
        <h2>Exercício para calcular a média de 2 números</h2>
        <button onClick={calcularMedia}>Calcular</button>

     Média: {resultado}
    </div>
  )
}

export default Media
