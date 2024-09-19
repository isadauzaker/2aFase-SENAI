// 5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação não pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.

import './LinhaDeCredito.css'
import { useState } from 'react'
import RelatorioEmprestimo from './RelatorioEmprestimo'

function LinhaDeCredito() {
  const [stateRelatorio, setStateRelatorio] = useState()
    function processarValor(){

        let salarioUsuario = Number(prompt('Digite o valor do seu sálario: '))
        let valorEmprestimo  = Number(prompt('Digite o valor do emprestimo: '))
        let numeroPrestacoes = Number(prompt('Digite o número de prestações: '))

        let valorPrestacao = valorEmprestimo / numeroPrestacoes
        let valorMaximoPrestacao = salarioUsuario * 0.30

        if(valorPrestacao <= valorMaximoPrestacao){
            // setResultado('O empréstimo pode ser feito! ')
            let infosRelatorio = {
              situacao: "aprovado",
              maxPrestacao: valorMaximoPrestacao,
              prestacao: valorPrestacao,
              emprestimo: valorEmprestimo,
              prestacoes: numeroPrestacoes
            }
            setStateRelatorio(infosRelatorio)
        }else infosRelatorio = {
          situacao: "reprovado",
              maxPrestacao: valorMaximoPrestacao,
              prestacao: valorPrestacao,
              emprestimo: valorEmprestimo,
              prestacoes: numeroPrestacoes
            // setResultado('O emprestimo não pode ser efetuado :(')

        }
        setStateRelatorio(infosRelatorio)
    }
  return (
    <div className='LinhaDeCredito-container'>
      <h2> Linha de Crédito para os funcionários.</h2>
      <button onClick={processarValor}>Processar Valor</button>
      {stateRelatorio &&   <RelatorioEmprestimo infos={ stateRelatorio } /> }
    </div>
  )
}

export default LinhaDeCredito

