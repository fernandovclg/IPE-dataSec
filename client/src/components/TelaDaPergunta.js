import React from 'react';
import Item from './Items';
// import Dados from '../data/Data';
import {quest} from '../data/Data'

import { setTela, voltar } from '../store/Actions';
import {useSelector , useDispatch} from 'react-redux'
import { Dados } from '../data/Data';


function TelaDaPergunta(props) {
  
 const estadoPergunta = useSelector( state => state.estadoPergunta )
 const dispatch = useDispatch() 

 const items = quest[estadoPergunta.pergunta].items
  return (
    <>
      <h1>Cis: {Dados[estadoPergunta.bloco][estadoPergunta.cis].nome}</h1>
      <h3>SubCis: {Dados[estadoPergunta.bloco][estadoPergunta.cis].subCis[estadoPergunta.subCis].titulo}</h3>
      <h3>Descrição: {Dados[estadoPergunta.bloco][estadoPergunta.cis].subCis[estadoPergunta.subCis].description}</h3>

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
      <div className="row">
        {
          estadoPergunta.subCis>0 || estadoPergunta.pergunta>0
          ?<div className='todo-button' onClick={()=> dispatch( voltar() ) } >
             voltar 
          </div>
          :<></>
        }
        <div className='todo-button' onClick={()=> dispatch( setTela("CisMenu") ) } >
            Trocar Cis
        </div>
      </div>
    </>
  );
}

export default TelaDaPergunta;
