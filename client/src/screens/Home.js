import React from 'react';



function Home(props) {

  return (
  <div className='mainContainer'>

    <div className='todo-app'>
    <h1 className='boas_vindas'>Seja Bem Vindo!</h1>
    <img src="logo.png" alt="Logo" style={{width:150,height:150, borderRadius:15 , boxShadow:10}}/>
    <h3>Pressione o botao abaixo para iniciar o teste</h3>
    <div className="todo-button" onClick = {()=>props.setTela("Form")}>
        Iniciar
    </div>

    </div>
  </div>);
}

export default Home;
