import React, { useState } from 'react';


import resul from '../data/ResFin';

function TodoList(props) {


  return (
    <>
      <h1>Cis {props.cis}</h1>
      <div className='todo-input'>
          Resultado
      </div>
      <div className="todo-row">
          
      </div>
      <div className="todo-row">
          {props.saldo}
          resul: {resul(1.2)}
      </div>
      <div className="todo-row">
          {props.saldo}
          resul: {resul(1.2)}
      </div>
      <div className="todo-row">
          {props.saldo}
          resul: {resul(1.2)}
      </div>
    </>
  );
}

export default TodoList;
