const quest = [
    //isso eh uma pergunta
    {
        pergunta:"Política Definida",
        itens:[
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
        itens:[
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
        itens:[
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
        itens:[
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



const Dados = [
    //abaixo fica o Bloco 1
    [
        //cis 1
        {
            id: 1,
            nome:"Inventário e Controle de Ativos de Hardware",
            quest: quest,
            pontos: 0 ,
        },
        //cis 2
        {
            id: 2,
            nome:"Estoque e Controle de Ativos de Software",
            quest: quest,
            pontos: 0 ,
        },
        //cis 3
        {
            id: 3,
            nome:"Gestão Contínua de Vulnerabilidade",
            quest: quest,
            pontos: 0 ,
        },
        //cis 4
        {
            id: 4,
            nome:"Uso Controlado de Administrativo Privilégios",
            quest: quest,
            pontos: 0 ,
        },
        //cis 5
        {
            id: 5,
            nome:"Configuração Segura para Hardware e Software em Dispositivos Móveis, Laptops, Estações de Trabalho e Servidores",
            quest: quest,
            pontos: 0 ,
        },
        //cis 6
        {
            id: 6,
            nome:"Manutenção, Monitoramento e Análise de Auditoria Histórico",
            quest: quest,
            pontos: 0 ,
        },
       
    ],
    //abaixo fica o Bloco 2
    [
         //cis 7
         {
            id: 7,
            nome:"Email e Web Proteções de Navegador",
            quest: quest,
            pontos: 0 ,
        },
         //cis 8
         {
            id: 8,
            nome:"Defesas Contra Malware",
            quest: quest,
            pontos: 0 ,
        },
         //cis 9
         {
            id: 9,
            nome:"Limitação e Controle de Portas de Rede, Protocolos e Serviços",
            quest: quest,
            pontos: 0 ,
        },
         //cis 10
         {
            id: 10,
            nome:"Recuperação de Dados de Capacidades",
            quest: quest,
            pontos: 0 ,
        },
         //cis 11
         {
            id: 11,
            nome:"Configuração Segura para Dispositivos de Rede, como Firewalls, Roteadores e Switches",
            quest: quest,
            pontos: 0 ,
        },
         //cis 12
         {
            id: 12,
            nome:"Defesa de Fronteira",
            quest: quest,
            pontos: 0 ,
        },
         //cis 13
         {
            id: 13,
            nome:"Proteção de dados",
            quest: quest,
            pontos: 0 ,
        },
         //cis 14
         {
            id: 14,
            nome:"Acesso Controlado Com Base na Necessidade de Saber",
            quest: quest,
            pontos: 0 ,
        },
         //cis 15
         {
            id: 15,
            nome:"Acesso Sem Fio Ao Controle",
            quest: quest,
            pontos: 0 ,
        },
         //cis 16
         {
            id: 16,
            nome:"Monitoramento de Conta e Controle",
            quest: quest,
            pontos: 0 ,
        },
    ],
    //abaixo fica o Bloco 3
    [
         //cis 17
         {
            id: 17,
            nome:"Implementar uma Segurança Conscientização e Treinamento Programa",
            quest: quest,
            pontos: 0 ,
        },
         //cis 18
         {
            id: 18,
            nome:"Software de Aplicação Segurança",
            quest: quest,
            pontos: 0 ,
        },
         //cis 19
         {
            id: 19,
            nome:"Resposta ao Incidente e Gestão",
            quest: quest,
            pontos: 0 ,
        },
         //cis 20
         {
            id: 20,
            nome:"Testes de Penetração e Exercícios da Equipe Vermelha",
            quest: quest,
            pontos: 0 ,
        },
    ],
        
]

export default Dados