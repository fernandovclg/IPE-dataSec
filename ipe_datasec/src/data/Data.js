export  const quest = [
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
                        {
                            id:1.5 ,//o numero q identifica cadasub cis
                            assetType:"digitar",
                            securityFunction:"digitar",
                            titulo: "Manter Estoque de Ativos em Formação" ,
                            description:"Certifique-se de que os registros de inventário de ativos de hardware o endereço de rede, endereço de hardware, máquina nome, proprietário do ativo de dados e departamento para cada ativo e se o ativo de hardware foi aprovado para se conectar à rede.",
                            quest: quest,
                        },
                        {
                            id:1.6 ,//o numero q identifica cadasub cis
                            assetType:"digitar",
                            securityFunction:"digitar",
                            titulo: "Endereços Não Autorizados Ativos" ,
                            description:"Certifique-se de que os ativos não autorizados sejam removido da rede, colocado em quarentena ou o o inventário é atualizado em tempo hábil.",
                            quest: quest,
                        },
                        {
                            id:1.7 ,//o numero q identifica cadasub cis
                            assetType:"digitar",
                            securityFunction:"digitar",
                            titulo: "Implantar Acesso de Nível de Porta ao Controle" ,
                            description:"Utilize o controle de acesso em nível de porta, seguindo Padrões 802.1x, para controlar quais dispositivos podem autenticar na rede. A autenticação sistema deve ser ligado ao ativo de hardware dados de inventário para garantir apenas dispositivos autorizados pode se conectar à rede.",
                            quest: quest,
                        },
                        {
                            id:1.8 ,//o numero q identifica cadasub cis
                            assetType:"digitar",
                            securityFunction:"digitar",
                            titulo: "Utilize Certificados de Cliente para Autenticar Ativos de Hardware" ,
                            description:"Use certificados de cliente para autenticar o hardware ativos conectando-se ao confiável da organização rede.",
                            quest: quest,
                        },
                //etc...
            ],
        },
        //cis 2
        {
            id: 2,
            nome:"Estoque e Controle de Ativos de Software",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:2.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manter Estoque de Software Autorizado" ,
                    description:"Mantenha uma lista atualizada de todos os autorizados software que é necessário na empresa para qualquer finalidade comercial em qualquer sistema comercial.",
                    quest: quest,
                },
                {
                    id:2.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Certifique-se de que o Software seja Suportado pelo Fornecedor" ,
                    description:"Certifique-se de que apenas aplicativos de software ou sistemas operacionais atualmente suportados e receber atualizações do fornecedor são adicionadas ao inventário de software autorizado da organização. Software não compatível deve ser marcado como sem suporte no sistema de inventário.",
                    quest: quest,
                },
                {
                    id:2.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilize Software de Ferramentas do Inventário" ,
                    description:"Utilize ferramentas de inventário de software em todo o organização para automatizar a documentação de todos os softwares em sistemas de negócios.",
                    quest: quest,
                },
                {
                    id:2.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Rastrear Inventário de Software em Formação" ,
                    description:"O sistema de inventário de software deve rastrear o nome, versão, editor e data de instalação para todos software, incluindo sistemas operacionais autorizados pela organização.",
                    quest: quest,
                },
                {
                    id:2.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Integrar Software de Inventários e Ativo de Hardware" ,
                    description:"O sistema de inventário de software deve ser vinculado no inventário de ativos de hardware para que todos os dispositivos e o software associado são rastreados a partir de um único localização.",
                    quest: quest,
                },
                {
                    id:2.6 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Endereço Não Aprovado nos Programas" ,
                    description:"Certifique-se de que o software não autorizado seja removido ou o inventário é atualizado em tempo hábil maneiras.",
                    quest: quest,
                },
                {
                    id:2.7 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilize a Lista de Permissões" ,
                    description:"Utilize a tecnologia de lista de permissões de aplicativos em todos ativos para garantir que apenas software autorizado é executado e todo o software não autorizado é bloqueado de execução em ativos.",
                    quest: quest,
                },
                {
                    id:2.8 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Implementar Listas de Permissão de Bibliotecas" ,
                    description:"A lista de permissões de aplicativos da organização o software deve garantir que apenas os autorizados bibliotecas de software (como * .dll, * .ocx, * .so, etc.) são permissão para carregar em um processo do sistema.",
                    quest: quest,
                },
                {
                    id:2.9 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Implementar Lista de Permissões de Scripts" ,
                    description:"A lista de permissões de aplicativos da organização software deve garantir que apenas autorizados, scripts assinados digitalmente (como * .ps1, *. py, macros, etc.) podem ser executados em um sistema.",
                    quest: quest,
                },
                {
                    id:2.10 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Separar aplicações de alto risco fisicamente ou logicamente" ,
                    description:"Sistemas fisicamente ou logicamente segregados devem ser usado para isolar e executar software que é exigido para operações de negócios, mas incorre em mais risco para a organização.",
                    quest: quest,
                },
            ]       
        },
        //cis 3
        {
            id: 3,
            nome:"Gerenciamento contínuo de vulnerabilidade",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:3.1 ,
                    assetType:"Aplicativos",
                    securityFunction:"Detectar",
                    titulo: "Funcionamento de ferramentas automatizadas de escaneamento de vulnerabilidades" ,
                    description:"Utilize uma automação de conteúdo de segurança atualizada Verificação de vulnerabilidade compatível com protocolo (SCAP) ferramenta para verificar automaticamente todos os sistemas no rede em uma base semanal ou mais frequente para identificar todas as vulnerabilidades potenciais no sistemas da organização.",
                    quest: quest,
                },
                {
                    id:3.2 ,
                    assetType:"Aplicativos",
                    securityFunction:"Detectar",
                    titulo: "Execução de escaneamento de vulnerabilidade autenticada" ,
                    description:"Executar verificação de vulnerabilidade autenticada com agentes rodando localmente em cada sistema ou com scanners remotos que são configurados com elevada direitos no sistema que está sendo testado.",
                    quest: quest,
                },
                {
                    id:3.3 ,
                    assetType:"Usuários",
                    securityFunction:"Proteger",
                    titulo: "Proteção contas prioritárias de avaliação" ,
                    description:"Use uma conta dedicada para autenticados varreduras de vulnerabilidade, que não devem ser usadas para quaisquer outras atividades administrativas e devem ser vinculado a máquinas específicas em endereços IP específicos.",
                    quest: quest,
                },
                {
                    id:3.4 ,
                    assetType:"Aplicativos",
                    securityFunction:"Proteger",
                    titulo: "Implantação automatizada de ferramentas de gerenciamento de atualizações de sistemas operantes" ,
                    description:"Implante ferramentas de atualização de software automatizadas em ordem para garantir que os sistemas operacionais estejam funcionando as atualizações de segurança mais recentes fornecidas pelo fornecedor de software.",
                    quest: quest,
                },
                {
                    id:3.5 ,
                    assetType:"Aplicativos",
                    securityFunction:"Proteger",
                    titulo: "Implementação automatizada de ferramentas de atualização de softwares" ,
                    description:"Implante ferramentas de atualização de software automatizadas em ordem para garantir que o software de terceiros em todos os sistemas está executando as atualizações de segurança mais recentes fornecido pelo fornecedor do software.",
                    quest: quest,
                },
                {
                    id:3.6 ,
                    assetType:"Aplicativos",
                    securityFunction:"Responder",
                    titulo: "Comparação retroativa de escaneamentos de vunerabilidade" ,
                    description:"Compare regularmente os resultados de varreduras de vulnerabilidade para verificar se as vulnerabilidades foram corrigidos em tempo hábil.",
                    quest: quest,
                },
                {
                    id:3.7 ,
                    assetType:"Aplicativos",
                    securityFunction:"Responder",
                    titulo: "Utilização de processos com classificação de riscos" ,
                    description:"Utilize um processo de classificação de risco para priorizar o remediação de vulnerabilidades descobertas.",
                    quest: quest,
                },
            ]
        },
        //cis 4
        {
            id: 4,
            nome:"Uso controlado de privilégios administrativos",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:4.1 ,
                    assetType:"Usuários",
                    securityFunction:"Proteger",
                    titulo: "Manutenção de inventário de contas administrativas" ,
                    description:"Use ferramentas automatizadas para inventariar todos contas administrativas, incluindo domínio e contas locais, para garantir que apenas autorizadas indivíduos têm privilégios elevados.",
                    quest: quest,
                },
                {
                    id:4.2 ,
                    assetType:"Usuários",
                    securityFunction:"Proteger",
                    titulo: "Mudança de senhas padrão" ,
                    description:"Antes de implantar qualquer novo ativo, mude todos senhas padrão para ter valores consistentes com contas de nível administrativo.",
                    quest: quest,
                },
                {
                    id:4.3 ,
                    assetType:"Usuários",
                    securityFunction:"Proteger",
                    titulo: "Garantia de uso de contas administrativas especiais" ,
                    description:"Certifique-se de que todos os usuários com conta administrativa acesso use uma conta dedicada ou secundária para atividades elevadas. Esta conta deve ser apenas usado para atividades administrativas e não Internet navegação, e-mail ou atividades semelhantes.",
                    quest: quest,
                },
                {
                    id:4.4 ,
                    assetType:"Usuários",
                    securityFunction:"Proteger",
                    titulo: "Utilização de senhas únicas" ,
                    description:"Onde a autenticação multifator não é compatível (como administrador local, root ou contas de serviço), as contas usarão senhas que são exclusivos desse sistema.",
                    quest: quest,
                },
                {
                    id:4.5 ,
                    assetType:"Usuários",
                    securityFunction:"Proteger",
                    titulo: "Utilização de autenticação em múltiplas etapas para todas as tarefas administrativas" ,
                    description:"Use autenticação multifator e criptografada canais para todos os acessos de contas administrativas.",
                    quest: quest,
                },
                {
                    id:4.6 ,
                    assetType:"Usuários",
                    securityFunction:"Proteger",
                    titulo: "Utilização de estações de trabalho para todas as tarefas administrativas" ,
                    description:"Certifique-se de que os administradores usem uma máquina dedicada para todas as tarefas administrativas ou tarefas que requerem acesso administrativo. Esta máquina será segmentado do principal da organização rede e não ter acesso à Internet. Esta máquina não será usada para ler e-mails, redigir documentos ou navegar na Internet.",
                    quest: quest,
                },
                {
                    id:4.7 ,
                    assetType:"Usuários",
                    securityFunction:"Proteger",
                    titulo: "Acesso limitado para ferramentas de Scripting" ,
                    description:"Limite o acesso a ferramentas de script (como Microsoft® PowerShell e Python) para apenas administrativo ou usuários de desenvolvimento com a necessidade de acessá-los capacidades.",
                    quest: quest,
                },
                {
                    id:4.8 ,
                    assetType:"Usuários",
                    securityFunction:"Detectar",
                    titulo: "Relatório e alertas para mudanças nos membros do grupo administrativo" ,
                    description:"Configure os sistemas para emitir uma entrada de registro e alerta quando uma conta é adicionada ou removida de qualquer privilégios administrativos atribuídos ao grupo.",
                    quest: quest,
                },
                {
                    id:4.9 ,
                    assetType:"Usuários",
                    securityFunction:"Detectar",
                    titulo: "Relatório e alerta para tentativas mal sucedidas de login em contas administrativas" ,
                    description:"Configure os sistemas para emitir uma entrada de registro e alertar sobre logins malsucedidos em uma conta administrativa.",
                    quest: quest,
                },
            ],
        },
        //cis 5
        {
            id: 5,
            nome:"Configuração segura para hardware e software em dispositivos móveis, laptops, estações de trabalho e servidores",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:5.1 ,
                    assetType:"Aplicativos",
                    securityFunction:"Proteger",
                    titulo: "Estabelecimento de uma configuração segura" ,
                    description:"Manter a configuração de segurança documentada padrões para todos os sistemas operacionais autorizados e software.",
                    quest: quest,
                },
                {
                    id:5.2 ,
                    assetType:"Aplicativos",
                    securityFunction:"Proteger",
                    titulo: "Manutenção de imagens de segurança" ,
                    description:"Manter imagens ou modelos seguros para todos os sistemas da empresa com base no padrões de configuração aprovados pela organização. Qualquer nova implantação de sistema ou sistema existente que fica comprometido deve ser fotografado usando uma dessas imagens ou modelos.",
                    quest: quest,
                },
                {
                    id:5.3 ,
                    assetType:"Aplicativos",
                    securityFunction:"Proteger",
                    titulo: "Armazenamento seguro de imagens mestre " ,
                    description:"Armazene as imagens mestre e modelos com segurança servidores configurados, validados com integridade ferramentas de monitoramento, para garantir que apenas as autorizadas mudanças nas imagens são possíveis.",
                    quest: quest,
                },
                {
                    id:5.4 ,
                    assetType:"Aplicativos",
                    securityFunction:"Proteger",
                    titulo: "Implantação de ferramentas de gerenciamento de ferramentas" ,
                    description:"Implantar ferramentas de gerenciamento de configuração do sistema que irá aplicar e reimplantar automaticamente definições de configuração para sistemas regularmente intervalos programados.",
                    quest: quest,
                },
                {
                    id:5.5 ,
                    assetType:"Aplicativos",
                    securityFunction:"Detectar",
                    titulo: "Implementação automatizada de sistemas de monitoração de configurações" ,
                    description:"Utilize um protocolo de automação de conteúdo de segurança (SCAP) monitoramento de configuração compatível sistema para verificar todas as configurações de segurança elementos, exceções aprovadas pelo catálogo e alerta quando ocorrem alterações não autorizadas.",
                    quest: quest,
                },
            ],
        },
        //cis 6
        {
            id: 6,
            nome:"Manutenção, monitoramento e análise de registros de auditoria",
            pontos: 0 ,
            subCis:[
                {
                    id:6.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilização três fontes de tempo sincronizadas" , 
                    description:"Use pelo menos três fontes de tempo sincronizado de que todos os servidores e dispositivos de rede recuperam informações de tempo em uma base regular para que os carimbos de data / hora nos registros são consistentes.",
                    quest: quest,
                },
                {
                    id:6.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Ativar registro de auditoria" ,
                    description:"Certifique-se de que o registro local foi habilitado em todos sistemas e dispositivos de rede.",
                    quest: quest,
                },
                {
                    id:6.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Habilitar registro detalhado" ,
                    description:"Habilite o registro do sistema para incluir informações detalhadas como fonte do evento, data, usuário, carimbo de data / hora, registro de endereços, endereço de destino e outros elementos úteis.",
                    quest: quest,
                },
                {
                    id:6.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Garantir armazenamento adequado para os registros" ,
                    description:"Certifique-se de que todos os sistemas que armazenam registros tenham espaço de armazenamento adequado para os registros gerados.",
                    quest: quest,
                },
                {
                    id:6.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Gestão de central de registros" ,
                    description:"Certifique-se de que os registros apropriados estão sendo agregados a um sistema de gerenciamento da central de registros para análise e revisão.",
                    quest: quest,
                },
                {
                    id:6.6 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Implantar SIEM ou registrar ferramentas analíticas" ,
                    description:"Implantar informações de segurança e gerenciamento de eventos (SIEM) ou registrar ferramentas analíticas de correlação e análise.",
                    quest: quest,
                },
                {
                    id:6.7 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Revisar regularmente os registros" ,
                    description:"Regularmente, analise os registros para identificar anomalias ou eventos anormais.",
                    quest: quest,
                },
                {
                    id:6.8 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Ajustar regularmente o SIEM" ,
                    description:"Regularmente, ajuste seu sistema SIEM para melhor identificar eventos acionáveis ​​e diminuir ruído de evento.",
                    quest: quest,
                },
                //etc...
            ]
        },,
       
    ],
    //abaixo fica o Bloco 2
    [
         //cis 7
         {
            id: 7,
            nome:"Email e Web Proteções de Navegador",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:7.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Garanta o uso apenas de navegadores totalmente suportados e clientes de Email" ,
                    description:"Certifique-se de que apenas navegadores da web totalmente suportados e os clientes de e-mail têm permissão para executar no organização, de preferência usando apenas a versão mais recente dos navegadores e clientes de e-mail dados pelo fornecedor.",
                    quest: quest,
                },
                {
                    id:7.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Desativar navegador desnecessário ou não autorizado ou plug-ins de cliente de email" , 
                    description: "Desinstale ou desative qualquer navegador não autorizado ou plug-ins de cliente de e-mail ou aplicativos complementares.",
                    quest: quest,
                },
                {
                    id:7.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Limite o uso de linguagens de script nos navegadores da web e nos clientes de e-mail." ,
                    description:"Certifique-se de que apenas linguagens de script autorizadas podem ser executados em todos os navegadores da web e clientes de email",
                    quest: quest,
                },
                {
                    id:7.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manter e fazer cumprir URL baseado em filtros de rede" ,
                    description:"Aplicar filtros de URL baseados em rede que limitam a capacidade de um sistema de se conectar a sites que não são aprovados pela organização. Esta filtragem deve ser aplicada para cada uma dos sistemas, estejam eles fisicamente  instalações da organização ou não.",
                    quest: quest,
                },
                {
                    id:7.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Inscrever-se em serviço de categorização de URL" ,
                    description:"Inscreva-se em serviços de categorização de URL para certificar-se de que eles estão atualizados com a maioria das  definições recentes disponíveis de categorias de sites. Sites não categorizados devem ser bloqueados por padrão.",
                    quest: quest,
                },
                {
                    id:7.6 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Registrar todas as solicitações de URL" ,
                    description:"Registrar todas as solicitações de URL de cada um dos sistemas da organização, seja no local ou em um dispositivo móvel, a fim de identificar potencialmente atividade maliciosa e auxiliar os manipuladores de incidentes com identificar sistemas potencialmente comprometidos.",
                    quest: quest,
                },
                {
                    id:7.7 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Uso de serviços de filtragem de DNS" ,
                    description:"Use serviços de filtragem de DNS para ajudar a bloquear o acesso a domínios maliciosos conhecidos.",
                    quest: quest,
                },
                {
                    id:7.8 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Implementar DMARC e habilitar verificação do lado do receptor" ,
                    description:"Para diminuir a chance de falsificação ou modificação de e-mails de domínios válidos, implemente Domínio- com base em autenticação de mensagens, relatórios e Política e verificação de conformidade (DMARC), começando pela implementação da Política do Remetente  Framework (SPF) e as chaves de domnínio identificadas padrões de correio (DKIM).",
                    quest: quest,
                }, 
                {
                    id:7.9 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Bloquear tipos de arquivo desnecessários" ,
                    description:"Bloquear todos os anexos de e-mail que entram na caixa de entrada de e-mail da organização se os tipos de arquivo forem desnecessário para os negócios da organização.",
                    quest: quest,
                },
                {
                    id:7.10 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Sandbox todos os anexos de emails" ,
                    description:"Use sandbox para analisar e bloquear a entrada de anexos de e-mail com comportamento malicioso.",
                    quest: quest,
                },
                //etc...
            ]
        },
         //cis 8
         {
            id: 8,
            nome:"Defesas Contra Malware",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id: 8.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilize de forma centralizada programas gerenciadores de Anti-malware" ,
                    description:"Utilize de forma centralizada programas gerenciadores de Anti-malware para continuamente monitorar e defender cada uma das estações de trabalho e servidores da organização.",
                    quest: quest,
                },
                {
                    id:8.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Garantir que o programa anti-malware esteja atualizado" ,
                    description:"Certifique-se que o anti-malware da organização atualiza o mecanismo de varredura e registra no banco de dados em uma base regular.",
                    quest: quest,
                },
                {
                    id:8.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Habilitar operações anti-exploração de recursos do sistema/Implantar tecnologias de anti-exploração" ,
                    description:"Habilite recursos anti-exploração, como Prevenção de execução de dados (DEP) e Randomization de layout de endereço de espaço(ASLR) que estão disponíveis em um sistema operacional. Ou implante kits apropriados de ferramentas que podem ser configurados para aplicar proteção a um conjunto mais amplo de aplicativos e executáveis.",
                    quest: quest,
                },
                {
                    id: 8.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Configurar digitalização de anti-malwares de mídias removíveis" ,
                    description:"Configure os dispositivos para que eles realizem automaticamente uma verificação anti-malware de mídia removível quando inserida ou conectada.",
                    quest: quest,
                },
                {
                    id:8.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Configurar dispositivos para não executarem conteúdo automaticamente" ,
                    description:"Configurar dispositivos para não executarem automaticamente conteúdos de mídia removível.",
                    quest: quest,
                },
                {
                    id:8.6 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Centralize o registro de anti-malwares" ,
                    description:"Enviar todos os eventos de detecção de malware para a empresa de administração de ferramentas anti-malware e registrar eventos de servidores para análise e alerta.",
                    quest: quest,
                },
                {
                    id:8.7 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Habilitar o registro de consultas de DNS" ,
                    description:"Habilitar o registro de consulta do DNS para detectar pesquisas de nome de host para nomes de domínios maliciosos conhecidos.",
                    quest: quest,
                },
                {
                    id:8.8 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Habilitar registro de auditoria de linha de comando" ,
                    description:"Habilitar registro de auditoria de linha de comando para o comando shells, como Microsoft PowerShell e Bash.",
                    quest: quest,
                },
                //etc...
            ]
            
        },
         //cis 9
         {
            id: 9,
            nome:"Limitação e Controle de Portas de Rede, Protocolos e Serviços",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:9.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Associar portas ativas, Serviços e protocolos para Estoque de ativos" ,
                    description:"Associe portas, serviços e protocolos ativos aos ativos de hardware no inventário de ativos.",
                    quest: quest,
                },
                {
                    id:9.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Certificar-se de que apenas portas, protocolos e serviços aprovados estão sendo executados" ,
                    description:"Certifique-se de que apenas portas de rede, protocolos e serviços de escuta em um sistema com necessidades de validação de negócios estão em execução em cada sistema.",
                    quest: quest,
                },
                {
                    id:9.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Executar varreduras regulas de portas automatizadas" ,
                    description:"Realize varreduras de portas automatizadas regularmente contra todos os sistemas e alerte se portas não autorizadas forem detectados em um sistema.",
                    quest: quest,
                },
                {
                    id:9.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Aplicar firewalls baseados em host ou filtragem de portas" ,
                    description:"Aplicar firewalls baseados em host ou ferramentas de filtragem de portas em sistemas finais, com uma regra de negação padrão que descarta todo o tráfego, exceto esses serviços e portas que são explicitamente permitidos.",
                    quest: quest,
                },
                {
                    id:9.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Implementar a aplicação de firewalls" ,
                    description:"Coloque a aplicação dos firewalls na frente de qualquer situação crítica dos servidores para verificar e validar o tráfego que vai para o servidor. Qualquer tráfego não autorizado deve ser bloqueado e registrado.",
                    quest: quest,
                },
                //etc...
            ]
        },
        //cis 10
        {
            id: 10,
            nome:"Capacidades de Recuperação de Dados",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:10.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Garantir Regulares Backups Automatizados" ,
                    description:"Certifique-se de que todos os dados do sistema tenham backup automático regularmente.",
                    quest: quest,
                },
                {
                    id:10.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Realizar Completo Backups do Sistema" ,
                    description:"Certifique-se de que todos os sistemas-chave da organização são salvos como um sistema completo, por meio de processos como imagem, para permitir o rápido recuperação de todo um sistema.",
                    quest: quest,
                },
                {
                    id:10.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Dados de Teste no Backup Meios de Comunicação" ,
                    description:"Teste a integridade dos dados na mídia de backup regularmente com base na realização de um processo de restauração de dados para certifique-se de que o backup esteja funcionando corretamente.",
                    quest: quest,
                },
                {
                    id:10.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Proteger Backups" ,
                    description:"Certifique-se de que os backups estão devidamente protegidos via segurança física ou criptografia quando eles são armazenados, bem como quando são movidos através do rede. Isso inclui backups remotos e nuvem Serviços.",
                    quest: quest,
                },
                {
                    id:10.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Certifique-se de que todos os backups tenham pelo menos um offline Destino de backup" ,
                    description:"Certifique-se de que todos os backups tenham pelo menos um offline (ou seja, não acessível através de uma conexão de rede) destino de backup.",
                    quest: quest,
                },
            ]
        },
        //cis 11
        {
            id: 11,
            nome:"Configurações seguras para dispositivos na rede, como Firewall, roteadores e switches",
            pontos: 0 ,
            subCis:[
                {
                    id:11.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manter o padrão de configurações de segurança para dispositivos na rede" , 
                    description:"Manter o padrão documentado de configurações de segurança para todos os dispositivos autorizados na rede",
                    quest: quest,
                },
                {
                    id:11.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Regras de  configuração de documentação de tráfego" ,
                    description:"Todas as regras de configuração que permitem trafego percorrer dispositivos na rede devem ser documentados em um sistema de gerenciamento de configurações com uma razão de negócios específica para cada regra",
                    quest: quest,
                },
                {
                    id:11.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilizar ferramentas automáticas para detectar configurações padrão de dispositivos e detectar possíveis mudanças" ,
                    description:"Comparar todos as configurações de dispositivos da rede com configurações de segurança padrão estabelecidas para cada rede em uso, e alertar quando qualquer desvio ocorre",
                    quest: quest,
                },
                {
                    id:11.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Instalar a última atualização estável disponível de qualquer atualização de segurança para todos os dispositivos na rede" ,
                    description:"Instalar a última atualização estável disponível de qualquer atualização de segurança para todos os dispositivos na rede",
                    quest: quest,
                },
                {
                    id:11.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manter dispositivos na rede com autentifação de múltiplos fatores e sessões criptografadas" ,
                    description:"Manter dispositivos na rede com autentifação de múltiplos fatores e sessões criptografadas",
                    quest: quest,
                },
                {
                    id:11.6 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilizar máquinas dedicadas para todas as tarefas relacionadas a redes" ,
                    description:"Certificar-se que os engenheiros de redes utilizem uma máquina dedicada para todas as tarefas administrativas envolvendo privilégios elevados. Essa máquina deve ser segmentada da rede corporativa da empresa e não ter contato com a internet. Não deve ser usada para ler e-mails, navegar na web, nem criar documentos",
                    quest: quest,
                },
                {
                    id:11.7 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manter a infraestrutura da rede por meio de uma rede dedicada" ,
                    description:"Manter a infraestrutura da rede através da estrutura de rede que estão separadas por negócios, dependendo de VLAN's, ou preferencialmente, uma conexão física completamente diferente para manter sessões de dispositivos na rede",
                    quest: quest,
                }
                //etc...
            ]
        },
       
    ],
    //abaixo fica o Bloco 2
    [
         //cis 12
         {
            id: 12,
            nome:"Proteção das fronteiras",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:12.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manter um inventário de fronteiras de rede" ,
                    description:"Manter um inventário de informações atualizadas das fronteiras das redes da empresa",
                    quest: quest,
                },
                {
                    id:12.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Escaneie por conexões não autorizadas em todos as fronteiras de redes autorizadas" , 
                    description: "Escanear regularmente de fora de todos as fronteiras para detectar qualquer conexão indesejada",
                    quest: quest,
                },
                {
                    id:12.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Negar conexões com qualquer endereço IP malicioso" ,
                    description:"Negar conexões com qualquer endereço IP malicioso ou inutilizado e limitar o acesso a apenas os endereços IP's limitados pela rede.",
                    quest: quest,
                },
                {
                    id:12.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Negar conexões em portas não autorizadas" ,
                    description:"Negar conexões não autorizadas em portas TCP e UDP ou aplicações não autorizadas para que apenas os protocolos confiados sejam utilizados",
                    quest: quest,
                },
                {
                    id:12.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Configurar sistemas de monitoramento para guardar pacotes de dados" ,
                    description:"Configurar sistemas de monitoramento para que guardar pactotes de dados passando através das fronteiras de rede",
                    quest: quest,
                },
                {
                    id:12.6 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilizar sensores IDS baseadas em redes" ,
                    description:"Utilizar sensores de detecção de invasão(IDS), pra buscar atividades não usuais ",
                    quest: quest,
                },
                {
                    id:12.7 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilizar sistemas de detecção de invasão baseados em redes" ,
                    description:"Utilize IPS para bloquear tráfego malicioso na fronteira de rede",
                    quest: quest,
                },
                {
                    id:12.8 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilizar coleção NetFlow nas conexões de limite da rede" ,
                    description:"Habilitar a coleta de NetFlow nas fronteiras de rede",
                    quest: quest,
                }, 
                {
                    id:12.9 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilizar servior proxy para filtro na camada de aplicação" ,
                    description:"Certifique-se de que todos os dados que passam através da camada de aplicação estão sendo verificados",
                    quest: quest,
                },
                {
                    id:12.10 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Descriptografar o tráfego de rede no servidor proxy" ,
                    description:"Descriptografe o tráfego de rede no proxy. Mas, é necessário utilizar whitelists em sites permitidos",
                    quest: quest,
                },
                {
                    id:12.11 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Requisitar que todos os sistemas de login usem autenticação de dois fatores" ,
                    description:"Requisite que todo o acesso remoto tenha criptografia em campo",
                    quest: quest,
                },
                {
                    id:12.12 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manutenir todos os dispositivos logados em uma mesma rede interna" ,
                    description:"Escaneie todos os dispositivos em uma mesma rede antes de entrarem na rede interna",
                    quest: quest,
                },
                //etc...
            ]
        },
         //cis 13
         {
            id: 13,
            nome:"Proteção de dados",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id: 13.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manter um inventário de dados sensíveis" ,
                    description:"Guarde informações sensíveis em um inventário, incluindo aquelas em campo e em provedores de serviço",
                    quest: quest,
                },
                {
                    id:13.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Remover dados sensíveis ou sistemas não utilizados regularmente na organização" ,
                    description:"Remova dados sensíveis de dispositivos não autorizados",
                    quest: quest,
                },
                {
                    id:13.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Monitorar ou bloquear tráfego não autorizado na rede" ,
                    description:"Utilize ferramentas de automação que vasculham por acessos não autorizados a dados sensíveis",
                    quest: quest,
                },
                {
                    id: 13.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Apenas permitir acesso a serviços de nuvem e de e-mail autorizados" ,
                    description:"Apenas permita acesso a serviços de nuvem e de e-mail autorizados ",
                    quest: quest,
                },
                {
                    id:13.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Monitorar e detectar qualquer utilização não autorizada de criptografia" ,
                    description:"Monitorar e detectar qualquer utilização não autorizada de criptografia",
                    quest: quest,
                },
                {
                    id:13.6 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Criptografar Dados de Celular" ,
                    description:"Utilizar mecanismos de criptografia padrão em celulares da empresa",
                    quest: quest,
                },
                {
                    id:13.7 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manutenir dispositivos USB" ,
                    description:"Se são necessários dispositivos USB, os programas precisam estar configurados para apenas abrirem dispositivos reconhecidos",
                    quest: quest,
                },
                {
                    id:13.8 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Gerenciar os sitemas externos de mídia como CD e pendrive" ,
                    description:"Configurar dispositivos a não utilizarem CDs ou DVDs como output ",
                    quest: quest,
                },
                {
                    id:13.9 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Criptografar dados em USBs" ,
                    description:"Todos os dados em USBs precisam estar criptografados",
                    quest: quest,
                },
                //etc...
            ]
            
        },
         //cis 14
         {
            id: 14,
            nome:"Controle de acesso com base no que é necessário conhecer",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:14.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Segmentar a rede com base em sensibilidade de informações" ,
                    description:"Segmentar a rede em vários VLANs",
                    quest: quest,
                },
                {
                    id:14.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Habilitar filtragem Firewall entre VLAN's" ,
                    description:"Habilitar o firewall entre VLANs",
                    quest: quest,
                },
                {
                    id:14.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Desabilitar comunicação entre áreas de trabalho diferentes" ,
                    description:"Desabilitar a comunicação entre workstations para impactar a movimentação de um hacker ao tentar mover-se horizontalmente na rede",
                    quest: quest,
                },
                {
                    id:14.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Criptografar todos os dados sensíveis em tráfego" ,
                    description:"Criptografar informações sensíveis em transito",
                    quest: quest,
                },
                {
                    id:14.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Utilizar uma ferramenta de descoberta ativa para identificar dados sensíveis" ,
                    description:"Habilitar a análise de todos os dados em transito e processados pela empresa",
                    quest: quest,
                },
                {
                    id:14.6 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Proteger informação através de listas de controle de acesso" ,
                    description:"Proteger toda a informação guardada em sistemas de arquivos",
                    quest: quest,
                },
                {
                    id:14.7 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Reforçar controle de acesso aos dados através de ferramentas de automatização" ,
                    description:"Utilize uma ferramenta de automação como uma host-based Data Loss Prevention para reforçar controles de acesso a dados sensíveis",
                    quest: quest,
                },
                {
                    id:14.8 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Criptografar dados sensíveis em descanso" ,
                    description:"Criptografe todos os dados sensíveis usando uma ferramenta que requer autenticação de múltiplos fatores",
                    quest: quest,
                },
                {
                    id:14.9 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Reforçar logs detalhados de acesso a e mudanças em dados sensíveis" ,
                    description:"Reforce detalhes nos logs de acesso a dados sensíveis",
                    quest: quest,
                },
                //etc...
            ]
        },
        //cis 15
        {
            id: 15,
            nome:"Controle de Acesso Sem Fio",
            quest: quest,
            pontos: 0 ,
            subCis:[
                {
                    id:15.1 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Manter um inventário de Wireless Autorizado Pontos de Acesso" ,
                    description:"Manter um inventário de redes sem fio autorizadas pontos de acesso conectados à rede com fio.",
                    quest: quest,
                },
                {
                    id:15.2 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Detectar Acesso sem Fio Pontos Conectados a Rede com Fios" ,
                    description:"Configurar ferramentas de varredura de vulnerabilidade de rede para detectar e alertar sobre o acesso sem fio não autorizado pontos conectados à rede com fio.",
                    quest: quest,
                },
                {
                    id:15.3 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Desativar o acesso sem fio em dispositivos se não obrigatório" ,
                    description:"Use um sistema de detecção de intrusão sem fio (WIDS) para detectar e alertar sobre redes sem fio não autorizadas pontos de acesso conectados à rede.",
                    quest: quest,
                },
                {
                    id:15.4 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Use uma Intrusão sem Fio de Sistema de Detecção" ,
                    description:"Desative o acesso sem fio em dispositivos que não têm uma finalidade comercial para acesso sem fio.",
                    quest: quest,
                },
                {
                    id:15.5 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Limitar o Acesso sem Fio em Dispositivos dos Clientes" ,
                    description:"Configure o acesso sem fio em máquinas clientes que têm uma finalidade comercial sem fio essencial, para permitir acesso apenas a redes sem fio autorizadas e para restringir o acesso a outras redes sem fio.",
                    quest: quest,
                },
                {
                    id:15.6 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Desativar Ponto a Ponto a Capacidde de Rede sem fio dos Clientes" ,
                    description:"Desativar rede sem fio ponto a ponto (ad hoc) recursos em clientes sem fio.",
                    quest: quest,
                },
                {
                    id:15.7 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Aproveita o avançado Padrão de criptografia (AES) para criptografar dados sem fio " ,
                    description:"Aproveita o Advanced Encryption Standard (AES) para criptografar dados sem fio em trânsito.",
                    quest: quest,
                },
                {
                    id:15.8 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Use protocolos de atenticação sem fio que exigem autenticação mútua, multifator " ,
                    description:"Certifique-se de que as redes sem fio usam autenticação protocolos como a autenticação extensível Protocolo de Segurança da Camada de Transporte (EAP / TLS), que requer autenticação mútua de múltiplos fatores.",
                    quest: quest,
                },
                {
                    id:15.9 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Desativar sem fio o acesso periférico dos dispositivos " ,
                    description:"Desabilite o acesso periférico sem fio de dispositivos [como como Bluetooth e comunicação de campo próximo (NFC)], a menos que tal acesso seja necessário para uma empresa propósito.",
                    quest: quest,
                },
                {
                    id:15.10 ,//o numero q identifica cadasub cis
                    assetType:"digitar",
                    securityFunction:"digitar",
                    titulo: "Criar rede sem fio separada da rede para Pessoal e dispositivos não confiáveis" ,
                    description:"Crie uma rede sem fio separada para uso pessoal ou dispositivos não confiáveis. Acesso empresarial a partir deste rede deve ser tratada como não confiável e filtrados e auditados em conformidade.",
                    quest: quest,
                },
            ]
            
        },
        
    ],
        
]

var cont = 0
var bloco = 0
while(bloco===0){
    var cis=0
    while(!!Dados[bloco][cis]){
        var subCis=0
        while(!!Dados[bloco][cis].subCis[subCis]){
            cont += 1.0
            subCis += 1
        }
        cis += 1
    }
    bloco += 1
}
console.log(cont)


