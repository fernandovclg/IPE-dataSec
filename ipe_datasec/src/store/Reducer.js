import { Dados, quest } from "../data/Data"

const InitialState = {
    estadoPergunta:{
        bloco:0,
        cis:0,
        subCis:0,
        pergunta:0,
    },

    estadoAnterior: null,

    relatorio:{
        politicasConcluidas:0,
        implementados1_6:0,
        implementados:0,
        automatizados:0,
        relatados:0,
    },
}

const reducer = (state = InitialState , action ) => {

    const pontuar = () => {
        var relatorio = {...state.relatorio}

        if(state.estadoPergunta.pergunta===0){
            relatorio.politicasConcluidas += action.pontuacao
        }
        else if(state.estadoPergunta.pergunta===1){
            relatorio.implementados += action.pontuacao
        }
        else if(state.estadoPergunta.pergunta===2){
            relatorio.automatizados += action.pontuacao
        }
        else if(state.estadoPergunta.pergunta===3){
            relatorio.relatados += action.pontuacao
        }
        return relatorio
    }

    const avancar = () => {
        ep = state.estadoPergunta
        if(!!Dados[ep.bloco])
    }

    switch(action.type) {
            case 'RESPONDER' :

        
                    return { ...state , relatorio : pontuar()}
            default: return{...state}
    }
}

export default reducer