

export const setTela = ( tela )=> ({
    type:'SET_TELA' , 
    tela: tela,
})
export const responder = (pontuacao )=> ({
    type:'RESPONDER' , 
    pontuacao: pontuacao,
})

export const voltar = ()=> ({
    type:'VOLTAR' , 
})
export const concluir = ()=> ({
    type:'CONCLUIR' , 
})

export const reiniciar = ()=> ({
    type:'REINICIAR' , 
})

