import React, { useState } from 'react';
import  { Dados } from '../data/Data'
import {useSelector , useDispatch} from 'react-redux'
import { concluir, setCis } from '../store/Actions';



function CisMenu(props) {
    const dispatch = useDispatch() 



  return (
  <div className='mainContainer'>
    
    <img src="logo.png" alt="Logo" style={{width:100,height:100, position:'absolute',left:150, top:100 , borderRadius:15 , boxShadow:10}}/>
    <div className='todo-app'>
        <h1 className='boas_vindas'>Cis Menu</h1>
        <h3>Escolha seu Cis</h3>

        {
            Dados.map(
                (item,indexBloco) =><div className='row'>
                                    {
                                        Dados[indexBloco].map(
                                            (item,indexCis) => <div className={"todo-button bloco"+indexBloco}  onClick = {()=>{
                                                dispatch( setCis(indexCis) )
                                                props.setTela("Form")}
                                                }>
                                                        Cis {item.id}
                                                </div>
                                        )
                                    }
                                </div>
            )
        }
        <div className='todo-button' onClick={()=> dispatch( concluir() ) } >
            Concluir
        </div>

    </div>
  </div>);
}

export default CisMenu;
