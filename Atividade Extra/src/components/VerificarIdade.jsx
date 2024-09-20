import React from 'react'
import './VerificarIdade.css'

function VerificarIdade() {
    function informarIdade(){
        if(inputIdade >= 18) {
            
        }
    }
  return (
    <div className='verificarIdade-contaier'>
        <h2>Verificador de Idade</h2>
        
        <label htmlFor="inpIdade">Digite a sua idade</label>
       <input type="text" id='inpIdade'/>

       <button onClick={informarIdade}>Informar</button>
    </div>
  )
}

export default VerificarIdade