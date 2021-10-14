import React, { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux'

function Formulario(props) {
  const relatorio = useSelector( state => state.relatorio )
  const soma = relatorio.politicasConcluidas / 122 + relatorio.implementados1_6 / 47 + relatorio.implementados / 122 + relatorio.automatizados / 122 + relatorio.relatados / 122

  return (
  <div className='mainContainer'>
    <div className='todo-app'>
      <div className='bloco'>
          Resultado
      </div>
      <div className='bloco'>
        
      </div>

      <div className="todo-row">
        Politicas Concluidas : {relatorio.politicasConcluidas / 122} 
      </div>
      <div className="todo-row">
        Controle 1-6 Implementados :  {relatorio.implementados1_6 / 47}
      </div>
      <div className="todo-row">
        Controle Implementados :  {relatorio.implementados / 122}
      </div>
      <div className="todo-row">
        Controle Automatizados :  {relatorio.automatizados / 122}
      </div>
      <div className="todo-row">
        Controle Relatados :  {relatorio.relatados / 122}
      </div>
      <div className='bloco'>
        
      </div>
      <div className='todo-input'>
          Nivel de Maturidade : {0===soma
          ?<text>inexistente</text>
          :<>{soma<=1
            ?<text>inicial</text>
            :<>{soma<=2
              ?<text>repetivel</text>
              :<>{soma<=3
                ?<text>definido</text>
                :<>{soma<=4
                  ?<text>gerenciado</text>
                  :<>{soma<=5
                    ?<text>otimizado</text>
                    :<text>otimizado</text>
                    }</>
                  }</>
                }</>
              }</>
            }</>
          }
      </div>
    </div>
  </div>);
}

export default Formulario;
