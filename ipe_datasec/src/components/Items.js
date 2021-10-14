import React, { useState } from 'react';
import quest from '../data/Data'
import { responder } from '../store/Actions';
import {useSelector , useDispatch} from 'react-redux'

const ItemComp = (props) => {

  const dispatch = useDispatch() 

  return(
    <div
      className={ 'todo-row'}
      key={props.index}
      onClick={()=> dispatch( responder(props.pontuacao) ) }
    >
      <div key={props.index}>
        {props.enunciado}
      </div>
      
    </div>
  )
};

export default ItemComp;
