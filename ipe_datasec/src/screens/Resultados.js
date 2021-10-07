import React, { useState } from 'react';
import ResultadoComp from '../components/ResultadoComp'

function Formulario(props) {


  return (
  <div className='mainContainer'>
    <div className='todo-app'>
      <ResultadoComp  saldo={props.saldo}/>
    </div>
  </div>);
}

export default Formulario;
