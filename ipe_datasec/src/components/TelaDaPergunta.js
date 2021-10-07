import React, { useState } from 'react';
import Todo from './Items';
import Dados from '../data/Data';

function TodoList(props) {

  const items = Dados[props.bloco][props.cis].quest[props.pergunta].itens

  return (
    <>
      <h1>Cis {props.cisNum}</h1>
      <div className='todo-input'>
          {Dados[props.bloco][props.cis].quest[props.pergunta].pergunta}
      </div>
      <Todo
        items={items}
        responder={props.responder}
      />
    </>
  );
}

export default TodoList;
