import React, { useState } from 'react';
import TelaDaPergunta from '../components/TelaDaPergunta';
import Dados from '../data/Data';

function Formulario(props) {


  const [saldo, setSaldo] = useState(0)
  const [bloco, setBloco] = useState(0)
  const [cis,setCis] = useState(0)
  const [pergunta,setPergunta] = useState(0)
  var cisNum = 1

  const responder = (pontuacao)=>{
    setSaldo(saldo + pontuacao)

    if( !!Dados[bloco][cis].quest[pergunta+1] ){
      setPergunta(pergunta+1)
    }
    else if(!!Dados[bloco][cis+1]){
      setPergunta(0)
      setCis(cis+1)
      cisNum=cisNum+1
    }
    else if(!!Dados[bloco+1]){
      setPergunta(0)
      setCis(0)
      cisNum=cisNum+1
      setBloco(bloco+1)
    }
    else{
      props.navigate("Res")
    }

  }


  return (
  <div className='mainContainer'>
      <div className='bloco'>
        Bloco {bloco}
      </div>
      {/* <div>
        Saldo {saldo}
      </div> */}
    <div className='todo-app'>
      <TelaDaPergunta  pergunta={pergunta}
                 setPergunta={setPergunta}
                 bloco={bloco}
                 cis={cis}
                 cisNum={cisNum}
                 responder={responder}
      />
    </div>
  </div>);
}

export default Formulario;
