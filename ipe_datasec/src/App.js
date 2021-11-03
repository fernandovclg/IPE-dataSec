import React, { useState } from 'react';
import './App.css';
import Formulario from './screens/Formulario';
import Resultados from './screens/Resultados'
import CisMenu from './screens/CisMenu'
import Home from './screens/Home';
import { setTela } from './store/Actions';
import {useSelector , useDispatch} from 'react-redux'

function App() {

  const tela = useSelector( state => state.tela )
  const dispatch = useDispatch() 


  const navigate = (tela)=>{
    switch (tela) {
      case "Home":
        return(<Home setTela={()=>dispatch( setTela("CisMenu") )}/>)
      case "Form":
        return(<Formulario navigate={navigate}/>)
      case "Res":
        return(<Resultados navigate={navigate}/>)
      case "CisMenu":
        return(<CisMenu setTela={()=>dispatch( setTela("Form") )}/>)
      default :
        alert("Sem Tela Correspondente")
        return 0
    }
  }
    
  return navigate(tela)

}

export default App;

