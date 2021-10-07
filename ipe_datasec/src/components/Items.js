import React, { useState } from 'react';

const Item = (props) => {


  return props.items.map((item, index) => (
    <div
      className={ 'todo-row'}
      key={index}
      onClick={()=>props.responder(item.pontuacao)}
    >
      <div key={item.id}>
        {item.enunciado}
      </div>
      
    </div>
  ));
};

export default Item;
