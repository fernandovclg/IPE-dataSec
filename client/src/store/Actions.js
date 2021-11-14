

export const setUser = ( user )=> ({
    type:'SET_USER' , 
    user: user,
})
export const setTela = ( tela )=> ({
    type:'SET_TELA' , 
    tela: tela,
})
export const setCis = ( cis )=> ({
    type:'SET_CIS' , 
    payload: cis,
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

