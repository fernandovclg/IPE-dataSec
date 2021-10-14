import React, { useState } from 'react';
import Item from './Items';
// import Dados from '../data/Data';
import {quest} from '../data/Data'

import {useSelector} from 'react-redux'


function TelaDaPergunta(props) {
  
 const estadoPergunta = useSelector( state => state.estadoPergunta )
 const pontos = useSelector( state => state.relatorio.politicasConcluidas )
 const items = quest[estadoPergunta.pergunta].items
  return (
    <>
      <h1>Cis {estadoPergunta.cis}</h1>
      <h1>SubCis {estadoPergunta.subCis}</h1>
      <h1>pontos {pontos}</h1>
      <div className='todo-input'>
          {quest[estadoPergunta.pergunta].pergunta} 
      </div>
      {
        items.map(
          (item , index) => (
            <Item enunciado={item.enunciado}
                  pontuacao = {item.pontuacao}
                  />
          )
        )
      }
    </>
  );
}

export default TelaDaPergunta;
