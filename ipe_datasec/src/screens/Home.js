import React, { useState } from 'react';



function Home(props) {

  return (
  <div className='mainContainer'>
    <img src="logo.png" alt="Logo" style={{width:100,height:100, position:'absolute',left:150, top:100 , borderRadius:15 , boxShadow:10}}/>

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
