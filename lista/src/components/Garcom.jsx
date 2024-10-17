import './Garcom.css'
import { useState } from 'react'
import RelatorioEmprestimo from './RelatorioEmprestimo'

function Garcom() {
    const [inputSalario, setInputSalario] = useState('')
    const [inputEmprestimo, setInputEmprestimo] = useState('')
    const [inputPrestacoes, setInputPrestacoes] = useState('')
    const [stateRelatorio, setStateRelatorio] = useState()

    function analisarEmprestimo(){
        let valorMaximoPrestacao = inputSalario * 0.3
        let valorPrestacao = inputEmprestimo / inputPrestacoes
        if ( valorPrestacao < valorMaximoPrestacao){

            let infosRelatorio = {
                situacao: "aprovado",
                    maxPrestacao: valorMaximoPrestacao,
                    prestacao: valorPrestacao,
                    emprestimo: inputEmprestimo,
                    prestacoes: inputPrestacoes
            }
            setStateRelatorio(infosRelatorio)
        }else{
            let infosRelatorio = {
                situacao: "reprovado",
                    maxPrestacao: valorMaximoPrestacao,
                    prestacao: valorPrestacao,
                    emprestimo: inputEmprestimo,
                    prestacoes: inputPrestacoes
            }
            setStateRelatorio(infosRelatorio)
        } 
    }
  return (
    <div className='Garcom-container'>

        <label htmlFor="inpSalario">Salario</label>
        <input type="text" id='inpSalario'
        value={inputSalario}
        onChange={ (event) => setInputSalario(event.target.value) }
         />

        <label htmlFor="inpEmprestimo">Valor do emprestimo</label>
        <input type="text" id='inpEmprestimos'
        value={inputEmprestimo}
        onChange={ (event) => setInputEmprestimo(event.target.value) }
         />

        <label htmlFor="inpPrestacoes">Qnt de prestações</label>
        <input type="text" id='inpPrestacoes'
        value={inputPrestacoes}
        onChange={ (event) => setInputPrestacoes(event.target.value) }
         />

        <button onClick={analisarEmprestimo}>Analisar empréstimo</button>

        {stateRelatorio && 
            <RelatorioEmprestimo infos={ stateRelatorio } />
        }

    </div>
  )
}

export default Garcom