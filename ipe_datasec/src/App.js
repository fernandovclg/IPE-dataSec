import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TelaDaPergunta';
import Dados from './data/Data';
import Formulario from './screens/Formulario';
import Resultados from './screens/Resultados'

function App() {

  const [saldo, setSaldo] = useState(0)
  const [tela, setTela] = useState("Form")
  // const [tela, setTela] = useState("Res")

  const navigate = (tela)=>{
    switch (tela) {
      case "Form":
        return(<Formulario  saldo={saldo}
                            navigate={navigate}/>)
      case "Res":
        return(<Resultados  saldo={saldo}
                            navigate={navigate}/>)
      default :
        alert("Sem Tela Correspondente")
        return 0
    }
  }
    
  return navigate(tela)

}

export default App;
