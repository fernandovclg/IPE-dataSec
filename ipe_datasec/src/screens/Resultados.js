import React, { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux'

import { reiniciar } from '../store/Actions';

function Formulario(props) {

  

  const dispatch = useDispatch() 

  const relatorio = useSelector( state => state.relatorio )
  const soma = relatorio.politicasConcluidas / 122 + relatorio.implementados1_6 / 47 + relatorio.implementados / 122 + relatorio.automatizados / 122 + relatorio.relatados / 122

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
              ?<text className='txt_resultado'>REPET??VEL</text>
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
            alert('apertou')
          }} >
                Gerar Relat??rio
          </div>
      </div>
      
    </div>
  </div>);
}

export default Formulario;
