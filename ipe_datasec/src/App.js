import React, { useState } from 'react';
import './App.css';
import Formulario from './screens/Formulario';
import Resultados from './screens/Resultados'
import CisMenu from './screens/CisMenu'
import Home from './screens/Home';
import InputData from './screens/InputData';
import { setTela } from './store/Actions';
import {useSelector , useDispatch} from 'react-redux'

function App() {

  const tela = useSelector( state => state.tela )
  const dispatch = useDispatch() 


  const navigate = (tela)=>{
    switch (tela) {
      case "Home":
        return(<Home setTela={()=>dispatch( setTela("InputData") )}/>)
      case "InputData":
        return(<InputData setTela={()=>dispatch( setTela("CisMenu") )}/>)
      case "CisMenu":
        return(<CisMenu setTela={()=>dispatch( setTela("Form") )}/>)
      case "Form":
        return(<Formulario navigate={navigate}/>)
      case "Res":
        return(<Resultados navigate={navigate}/>)
      default :
        alert("Sem Tela Correspondente")
        return 0
    }
  }
    
  return navigate(tela)

}

export default App;

