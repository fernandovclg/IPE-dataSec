import React, { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux'

function Formulario(props) {
  const relatorio = useSelector( state => state.relatorio )

  return (
  <div className='mainContainer'>
    <div className='todo-app'>
      <div className='bloco'>
          Resultado
      </div>
      <div className='bloco'>
        
      </div>

      <div className="todo-row">
        Politicas Concluidas : {relatorio.politicasConcluidas} 
      </div>
      <div className="todo-row">
        Controle 1-6 Implementados :  {relatorio.implementados}
      </div>
      <div className="todo-row">
        Controle Implementados :  {relatorio.implementados}
      </div>
      <div className="todo-row">
        Controle Automatizados :  {relatorio.automatizados}
      </div>
      <div className="todo-row">
        Controle Relatados :  {relatorio.relatados}
      </div>
    </div>
  </div>);
}

export default Formulario;
