import React from 'react';
import {useSelector , useDispatch} from 'react-redux'

import { reiniciar } from '../store/Actions';

import Axios from 'axios'

function Formulario(props) {

  

  const dispatch = useDispatch() 

  const user = useSelector( state => state.user )
  const relatorio = useSelector( state => state.relatorio )
  const resultadoCis = useSelector( state => state.resultadoCis )
  // const soma = relatorio.politicasConcluidas / 122 + relatorio.implementados1_6 / 47 + relatorio.implementados / 122 + relatorio.automatizados / 122 + relatorio.relatados / 122
  const soma = relatorio.politicasConcluidas / 22 + relatorio.implementados1_6 / 12 + relatorio.implementados / 22 + relatorio.automatizados / 22 + relatorio.relatados / 22
  // const somaParc = relatorio.politicasConcluidas / 122 + relatorio.implementados1_6 / 47 + relatorio.implementados / 122 + relatorio.automatizados / 122 + relatorio.relatados / 122

  const round = (num, places=5) => {
    if (!("" + num).includes("e")) {
      return +(Math.round(num + "e+" + places)  + "e-" + places);
    } else {
      let arr = ("" + num).split("e");
      let sig = ""
      if (+arr[1] + places > 0) {
        sig = "+";
      }
  
      return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
    }
  }

  const gerarRela = () => {
    console.log('entrou na func')
    Axios.post('http://localhost:3001/relatorio',{
      ...relatorio,
      ...user,
      ...resultadoCis,
    }).then((res)=>{
      console.log('entrou no .then')
      console.log(res)
    }) 
  }

  return (
  <div className='mainContainer'>
        {/* <img src="logo.png" alt="Logo" style={{width:100,height:100, position:'absolute',left:150, top:100 , borderRadius:15 , boxShadow:10}}/> */}

    <div className='todo-app'>
      <div className='bloco'>
          Resultado
      </div>
      <div className='bloco'>
        
      </div>

      <div className="todo-row">
        Politicas Concluidas : {round(relatorio.politicasConcluidas / 122)} 
      </div>
      <div className="todo-row">
        Controle 1-6 Implementados :  {round(relatorio.implementados1_6 / 47)}
      </div>
      <div className="todo-row">
        Controle Implementados :  {round(relatorio.implementados / 122)}
      </div>
      <div className="todo-row">
        Controle Automatizados :  {round(relatorio.automatizados / 122)}
      </div>
      <div className="todo-row">
        Controle Relatados :  {round(relatorio.relatados / 122)}
      </div>
      <div className='bloco'>
        
      </div>
      <div className='todo-input'>
          Nivel de Maturidade : {0===soma
          ?<text className='txt_resultado'>INEXISTENTE</text>
          :<>{soma<=1
            ?<text className='txt_resultado'>INICIAL</text>
            :<>{soma<=2
              ?<text className='txt_resultado'>REPETÍVEL</text>
              :<>{soma<=3
                ?<text className='txt_resultado'>DEFINIDO</text>
                :<>{soma<=4
                  ?<text className='txt_resultado'>GERENCIADO</text>
                  :<>{soma<=5
                    ?<text className='txt_resultado'>OTIMIZADO</text>
                    :<text className='txt_resultado'>OTIMIZADO</text>
                    }</>
                  }</>
                }</>
              }</>
            }</>
          }
      </div>
      <div className='row'>
          <div className='todo-button' onClick={()=> dispatch( reiniciar() ) } >
                Reiniciar
          </div>
          <div className='todo-button' onClick={()=> {
            // alert('apertou')
            gerarRela()
          }} >
                Gerar Relatório
          </div>
      </div>
      
    </div>
  </div>);
}

export default Formulario;
