// 5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação não pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.

import React from 'react'
import './LinhaDeCredito.css'
import { useState } from 'react'

function LinhaDeCredito() {
    const [resultado, setResultado] = useState()
    function processarValor(){

        let salarioUsuario = Number(prompt('Digite o valor do seu sálario: '))
        let valorEmprestimo  = Number(prompt('Digite o valor do emprestimo: '))
        let numeroPrestacoes = Number(prompt('Digite o número de prestações: '))

        let valorPrestacao = valorEmprestimo / numeroPrestacoes
        let valorLimitePrestacao = salarioUsuario * 0.30

        if(valorPrestacao <= valorLimitePrestacao){
            setResultado('O empréstimo pode ser feito! ')
        }else{
            setResultado('O emprestimo não pode ser efetuado :(')
        }
        setResultado(inform)
    }
  return (
    <div className='LinhaDeCredito-container'>
      <h2> Linha de Crédito para os funcionários.</h2>
      <button onClick={processarValor}>Processar Valor</button>
      {resultado}
    </div>
  )
}

export default LinhaDeCredito

