import React, { useState } from 'react';



function Home(props) {

  return (
  <div className='mainContainer'>

    <div className='todo-app'>
    <h1 className='boas_vindas'>Seja Bem Vindo!</h1>
    <h3>Precione o botao abaixo para iniciar o teste</h3>
    <div className="todo-button" onClick = {()=>props.setTela("Form")}>
        Iniciar
    </div>

    </div>
  </div>);
}

export default Home;
