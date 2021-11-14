import express from 'express';
import cors from 'cors'
import  fs from 'fs'



// const express = require('express')
// const cors = require('cors')
// const fs = require('fs');

const app = express()

app.use(cors())
app.use(express.json())

//functions 



const dataHoje = ()=>{
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    const dataAtual = dia + '/' + mes + '/' + ano;
    return(dataAtual )
}

const formatoMontenegro = (reqBody) =>{
    return(
        {
        codigo: Math.random(),
        nome: reqBody.empresa,
        usuario: reqBody.usuario,
        cargo:reqBody.cargo,
        data: dataHoje(),
        regiao_militar: reqBody.regMil,
        resultado: [
          reqBody.politicasConcluidas,
          reqBody.implementados1_6,
          reqBody.implementados ,
          reqBody.automatizados ,
          reqBody.relatados
        ],
        cis1: reqBody.cis1,
        cis2: reqBody.cis2,
        cis3: reqBody.cis3,
        cis4: reqBody.cis4,
      }
    )
}

app.post('/relatorio',(req,res)=>{
    console.log('REQUEST RECEBIDO')
    console.log('REQUEST BODY')
    console.log(req.body)
    const newBody = formatoMontenegro(req.body)
    const newBodyJson = JSON.stringify(newBody)

    fs.writeFile("ind.json", newBodyJson , function(err, result) {
        if(err) console.log('error', err);
    });

})

app.listen( 3001 , ()=>{
    console.log('rodando servidor')
})