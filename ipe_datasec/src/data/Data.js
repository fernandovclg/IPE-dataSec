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
                            titulo: "Utilize uma Ferramenta Ativa de Descoberta" ,
                            description:"Use uma ferramenta de descoberta ativa para identificar dispositivos conectados à rede da organização e atualizar o inventário de ativos de hardware.",
                            quest: quest,
                        },
                        {
                            id:1.2 ,//o numero q identifica cadasub cis
                            assetType:"digitar",
                            securityFunction:"digitar",
                            titulo: "Utilize uma Ferramenta de Descoberta Passiva" ,
                            description:"Utilize uma ferramenta de descoberta passiva para identificar dispositivos conectado à rede da organização e atualizar automaticamente o hardware da organização inventário de ativos.",
                            quest: quest,
                        },
                        {
                            id:1.3 ,//o numero q identifica cadasub cis
                            assetType:"digitar",
                            securityFunction:"digitar",
                            titulo: "Use o Registro de DHCP para Atualizar Inventário de Ativos" ,
                            description:"Use protocolo de configuração dinâmica de host (DHCP) registrando em todos os servidores DHCP ou endereço IP ferramentas de gestão para atualizar a organização inventário de ativos de hardware.",
                            quest: quest,
                        },
                        {
                            id:1.4 ,//o numero q identifica cadasub cis
                            assetType:"digitar",
                            securityFunction:"digitar",
                            titulo: "Manter Ativo Detalhado Inventário" ,
                            description:"Mantenha um inventário preciso e atualizado de todos os ativos de tecnologia com potencial para armazenar ou processar informações. Este inventário deve incluem todos os ativos, estejam eles conectados ao rede da organização ou não.",
                            quest: quest,
                        },
                //etc...
            ],
        },
        
    ],
        
]


