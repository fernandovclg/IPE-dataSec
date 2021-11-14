import React from 'react';
import { useForm } from 'react-hook-form';

import {useSelector , useDispatch} from 'react-redux'
import { setUser } from '../store/Actions';

function InputData(props) {
    
    const dispatch = useDispatch() 

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(setUser(data))
        props.setTela("Form")
    };


  return (
  <div className='mainContainer'>

    <div className='todo-app'>
    <h1 className='boas_vindas'>Entre com suas Informações</h1>
    {/* <img src="logo.png" alt="Logo" style={{width:150,height:150, borderRadius:15 , boxShadow:10}}/> */}
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='column'>
          {/* register your input into the hook by invoking the "register" function */}
          <input className={ 'todo-row formulario'} type='text' placeholder="Organização" {...register("empresa", { required: true })} />
          
          {/* include validation with required or other standard HTML validation rules */}
          <input className={ 'todo-row formulario'} type='text' placeholder="Usuário Técnico" {...register("usuario", { required: true })} />
          <input className={ 'todo-row formulario'} type='text' placeholder="Cargo" {...register("cargo")} />
          <input className={ 'todo-row formulario'} type='text' placeholder="Telefone" {...register("Telefone")} />
          {/* errors will return when field validation fails  */}
          
          <input className="todo-button submit" type="submit" />
          {errors.empresa && errors.usuario && <span className='warn'>Insira todos os dados</span>}
          {!errors.empresa && errors.usuario && <span className='warn'>Insira o usuario</span>}
          {errors.empresa && !errors.usuario && <span className='warn'>Insira uma organização</span>}
        </div>
    </form>

    </div>
  </div>);
}

export default InputData;
