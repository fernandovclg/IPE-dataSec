export const quest = [
    //isso eh uma pergunta
    {
        pergunta:"Política Definida",
        items:[
            {
                enunciado:"Nenhuma Política",
                pontuacao: 0 
            },
            {
                enunciado:"Política Informal",
                pontuacao: 0.25
            },
            {
                enunciado:"Política Escrita Parcial",
                pontuacao: 0.5
            },
            {
                enunciado:"Política Escrita Totalmente",
                pontuacao: 0.75
            },
            {
                enunciado:"Política Escrita Aprovada",
                pontuacao: 1.0
            },
        ]
    },
    {
        pergunta:"Controle Implementado",
        items:[
            {
                enunciado:"Não Implementado",
                pontuacao: 0 
            },
            {
                enunciado:"Partes da Política Implementada",
                pontuacao: 0.25
            },
            {
                enunciado:"Implementado em Alguns Sistemas",
                pontuacao: 0.5
            },
            {
                enunciado:"Implementado na Maioria dos Sistemas",
                pontuacao: 0.75
            },
            {
                enunciado:"Implementado em Todos os Sistemas",
                pontuacao: 1.0
            },
        ]
    },
    {
        pergunta:"Controle Automatizado ou Tecnicamente Aplicado",
        items:[
            {
                enunciado:"Não Automatizado",
                pontuacao: 0 
            },
            {
                enunciado:"Partes da Política Automatizada",
                pontuacao: 0.25
            },
            {
                enunciado:"Automatizado em Alguns Sistemas",
                pontuacao: 0.5
            },
            {
                enunciado:"Automatizado na Maioria dos Sistemas",
                pontuacao: 0.75
            },
            {
                enunciado:"Automatizado em Todos os Sistemas",
                pontuacao: 1.0
            },
        ]
    },
    {
        pergunta:"Controle Relatado a Alta Administração",
        items:[
            {
                enunciado:"Não Reportado",
                pontuacao: 0 
            },
            {
                enunciado:"Partes da Política Relatada",
                pontuacao: 0.25
            },
            {
                enunciado:"Relatado em Alguns Sistemas",
                pontuacao: 0.5
            },
            {
                enunciado:"Relatado na Maioria dos Sistemas",
                pontuacao: 0.75
            },
            {
                enunciado:"Relatado em Todos os Sistemas",
                pontuacao: 1.0
            },
        ]
    },
]




 export const Dados = [
    //abaixo fica o Bloco 1
    [
        //cis 1
        {
            id: 1,
            nome:"Inventário e Controle de Ativos de Hardware",
            pontos: 0 ,
            subCis:[
                {
                    id:1.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "digitar o titulo de cada subcis" ,
                    description:"digitar",
                    quest: quest,
                },
                //etc...
            ]
        },
        
    ],
        
]


