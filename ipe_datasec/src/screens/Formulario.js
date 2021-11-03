import React, { useState } from 'react';
import TelaDaPergunta from '../components/TelaDaPergunta';
import Dados from '../data/Data';
import {useSelector} from 'react-redux'


function Formulario(props) {
  const estadoPergunta = useSelector( state => state.estadoPergunta )


  // const [bloco, setBloco] = useState(0)
  // const [cis,setCis] = useState(0)
  // const [subCis,setSubCis] = useState(0)
  // const [pergunta,setPergunta] = useState(0)
  // var cisNum = 1

  // const responder = (pontuacao)=>{
  //   // setSaldo(saldo + pontuacao)

  //   if( !!Dados[bloco][cis].quest[pergunta+1] ){
  //     setPergunta(pergunta+1)
  //   }
  //   else if(!!Dados[bloco][cis+1]){
  //     setPergunta(0)
  //     setCis(cis+1)
  //     cisNum=cisNum+1
  //   }
  //   else if(!!Dados[bloco+1]){
  //     setPergunta(0)
  //     setCis(0)
  //     cisNum=cisNum+1
  //     setBloco(bloco+1)
  //   }
  //   else{
  //     props.navigate("Res")
  //   }

  // }


  return (
  <div className='mainContainer'>
    <img src="logo.png" alt="Logo" style={{width:100,height:100, position:'absolute',left:150, top:100 , borderRadius:15 , boxShadow:10}}/>

      {/* <div className='bloco'>
        Bloco {estadoPergunta.bloco + 1}
      </div> */}

    <div className='todo-app'>
      <TelaDaPergunta />
    </div>
  </div>);
}

export default Formulario;
