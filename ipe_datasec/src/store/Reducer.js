import { Dados, quest } from "../data/Data"

const InitialState = {
    tela:"Home",
    estadoPergunta:{
        bloco:0,
        cis:0,
        subCis:0,
        pergunta:0,
    },

    estadoAnterior: [],

    relatorio:{
        politicasConcluidas:0,
        implementados1_6:0,
        implementados:0,
        automatizados:0,
        relatados:0,
    },
}

const reducer = (state = InitialState , action ) => {

    var tela = state.tela

    const salvar = () => {
        var eA = [...state.estadoAnterior]
        eA.push({
            estadoPergunta: state.estadoPergunta,
            relatorio: state.relatorio,
            tela:tela,
        })
        return eA
    }

    const pontuar = () => {
        var relatorio = {...state.relatorio}

        if(state.estadoPergunta.pergunta===0){
            relatorio.politicasConcluidas += action.pontuacao
        }
        else if(state.estadoPergunta.pergunta===1){
            relatorio.implementados += action.pontuacao
            if(state.estadoPergunta.bloco === 0){
                relatorio.implementados1_6 += action.pontuacao
            }
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
        const ep = state.estadoPergunta
        var epAux = {...ep}

        if(!!Dados[ep.bloco][ep.cis].subCis[ep.subCis].quest[ep.pergunta+1]){
            epAux.pergunta += 1
        }
        else {
            epAux.pergunta = 0
            if(!!Dados[ep.bloco][ep.cis].subCis[ep.subCis + 1]){
              epAux.subCis += 1
            }
            else {
                epAux.subCis = 0
                if(!!Dados[ep.bloco][ep.cis+1]){
                    epAux.cis += 1
                }
                else{
                    epAux.cis = 0
                    if(!!Dados[ep.bloco+1]){
                        epAux.bloco += 1 
                    }
                    else {
                        tela= "Res"
                    }
                }

            }
        }
        return epAux
    }

    const finalizar = () => {}

    switch(action.type) {
            case 'RESPONDER' :
                return { ...state , 
                            relatorio : pontuar() , 
                            estadoPergunta : avancar() ,
                            estadoAnterior : salvar() ,
                            tela: tela ,
                        }
            case 'VOLTAR' :
                const voltar = () =>{
                    const eA = [...state.estadoAnterior]
                    eA.pop()
                    return eA
                }
                return { ...state.estadoAnterior.slice(-1)[0] , 
                            estadoAnterior : voltar() ,
                        }
            case 'SET_TELA':
                return { ...state , 
                            tela: action.tela,
                        }
            case 'SET_CIS':
                return { ...state , 
                            estadoPergunta: {...state.estadoPergunta,
                                            cis:action.payload,
                                            subCis:0},
                        }
            case 'CONCLUIR':
                return { ...state , 
                            tela: "Res",
                        }
            case 'REINICIAR':
                return InitialState
    

            default: return {...state}
    }
}

export default reducer