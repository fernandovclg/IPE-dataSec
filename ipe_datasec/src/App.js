import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TelaDaPergunta';
import Dados from './data/Data';
import Formulario from './screens/Formulario';
import Resultados from './screens/Resultados'

function App() {

  // const [saldo, setSaldo] = useState(0)
  const [relatorio, setRelatorio] = useState({
    PoliConc:0,
    implem1_6:0,
    implem:0,
    autom:0,
    rela:0,
    saldo:0
  })
  const [tela, setTela] = useState("Form")

  const navigate = (tela)=>{
    switch (tela) {
      case "Form":
        return(<Formulario  relatorio={relatorio}
                            // setSaldo={setSaldo}
                            navigate={navigate}/>)
      case "Res":
        return(<Resultados  relatorio={relatorio}
                            setRelatorio={setRelatorio}
                            navigate={navigate}/>)
      default :
        alert("Sem Tela Correspondente")
        return 0
    }
  }
    
  return navigate(tela)

}

export default App;
