import requests
import time
import json
import os
import sqlite3
import datetime
from fpdf import FPDF
import matplotlib.pyplot as plt
import numpy as np

_dados = json.load(open('ind.json'))

data = '27/08'
empresa = '7� GAC'
codigo = 20001

resultados = ['1 - DEFINI��O DE POL�TICA','2 - CONTROLES 1-6 IMPLEMENTADOS', '3 - IMPLEMENTA��O DOS CONTROLES', '4 - AUTOMA��O DOS CONTROLES', '5 - CONTROLES RELATADOS', 'N�VEL DE MATURIDADE']
r_resultado = [0.2,0.5,0.47,0.23,0.61,2.01]
r_resultado_ = [0.2,0.5,0.47,0.23,0.61]
g_resultado = ['1','2','3','4','5']

cis1 = ['- Diretriz de implementa��o: Utilize uma ferramenta para analisar em tempo real seu invent�rio de ativos, podendo ser f�sicos ou virtuais.\n- Empresas parceiras: SolarWind Network Performance Monitor e Paessler PRTG Network Monitor.',
        '- Diretriz de implementa��o: Fa�a a verifica��o passive de seu invent�rio, na qual n�o � necess�rio contato em tempo real com os ativos.\n- Empresas parceiras: TripWire Asset Discovery',
        '- Diretriz de implementa��o: Fa�a os logs DHCp usando uma ferramenta de automatiza��o do protocolo.\n- Empresas parceiras: NXLog',
        '- Diretriz de implementa��o: Mantenha um invent�rio de ativos organizado e, posteriormente, catalogado.\n- Empresas parceiras: TripWire Asset Discovery',
        '- Diretriz de implementa��o: Fa�a o registro detalhado de seu invent�rio com uma ferramenta organizada e bem implementada.\n- Empresas parceiras: TripWire Asset Discovery',
        '- Diretriz de implementa��o: Verifique com mais detalhes os ativos de seu invent�rio e veja se est�o catalodados corretamente\n- Empresas parceiras: TripWire Asset Discovery',
        '- Diretriz de implementa��o: Habilite o controle de portas de acesso em ativos\n- Empresas parceiras: ManageEngine'
        ]

cis2 = ['- Diretriz de implementa��o: Manter controle de acesso de software n�o autorizado.\n- Empresas parceiras: PlexTrac',
        '- Diretriz de implementa��o: Verifique com o vendedor se ele est� atualizando o pr�prio software\n- Empresas parceiras: Comunica��o do Parceiro',
        '- Diretriz de implementa��o: Utilizar ferramentas de invent�rio de software mais espec�ficos para essa tarefa\n- Empresas parceiras: PlexTrac',
        '- Diretriz de implementa��o: Mantenha um log de softwares utilizados organizado e, posteriormente, catalogado.\n- Empresas parceiras: PlexTrac',
        '- Diretriz de implementa��o: Os logs de hardware e software devem estar interligados\n- Empresas parceiras: PlexTrac',
        '- Diretriz de implementa��o: Fa�a a verifica��o de softwares n�o autorizados regularmente\n- Empresas parceiras: PlexTrac',
        '- Diretriz de implementa��o: Aplique o whitelisting de softwares autorizados regularmente\n- Empresas parceiras: PlexTrac',
        '- Diretriz de implementa��o: Aplique o whitelisting nas bibliotecas regularmente\n- Empresas parceiras: PlexTrac',
        '- Diretriz de implementa��o: Aplique o whitelisting nos scripts usados regularmente, � a �rea mais vulner�vel nesse quesito.\n- Empresas parceiras: PlexTrac',
        '- Diretriz de implementa��o: Segregue os seus ativos de hardware e software, para que n�o haja nenhum ataque eletr�nico na infraestrutura\n- Empresas parceiras: LogTech'
        ]

cis3 = ['- Diretriz de implementa��o: Aplique regularmente scanners de vulnerabilidade em sua empresa\n- Empresas parceiras: OWASP ZAP',
        '- Diretriz de implementa��o: Os escaneiamentos devem ser regulares e autenticados\n- Empresas parceiras: OWASP ZAP',
        '- Diretriz de implementa��o: Fa�a a prote�a de contas voltadas exclusivamente para o monitoramento de softwares\n- Empresas parceiras: OWASP ZAP',
        '- Diretriz de implementa��o: Manutenha o seu Sistema operacional regularmente com patches\n- Empresas parceiras: Windows Updater',
        '- Diretriz de implementa��o: Manutenha os seus softwares regularmente com patches\n- Empresas parceiras: CCleaner software updater',
        '- Diretriz de implementa��o: Fa�a a compara��o back-to-back, ou seja,  de tr�s para tr�s, de seus ativos\n- Empresas parceiras: CCleaner Checker',
        '- Diretriz de implementa��o: Fa�a uma avalia��o de riscos \n- Empresas parceiras: Dripster Risk Manager'
        ]

cis4 = ['- Diretriz de implementa��o: Fa�a um invent�rio de contas de administrador\n- Empresas parceiras: Admyn Tool',
        '- Diretriz de implementa��o: Fa�a a mudan�a rapidamente de senhas padr�o de softwares e hardwares. Em 2012, o maior ataque hacker foi feito em larga escala ao atacar senhas padr�o de c�meras de seguran�a, n�o repita esse erro.\n- Empresas parceiras: DashLane',
        '- Diretriz de implementa��o: Fa�a a mudan�a rapidamente de senhas padr�o de softwares e hardwares. Em 2012, o maior ataque hacker foi feito em larga escala ao atacar senhas padr�o de c�meras de seguran�a, n�o repita esse erro.\n- Empresas parceiras: DashLane'
        ]

cis_r = [cis1, cis2, cis3, cis4]

cis_s = [[0.0,0.0,0.7,0.0,0.0,0.0,0.0],
        [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
        [0.0,0.0,0.0,0.0,0.0,0.0,0.0],
        [0.0,0.5,0.0]]

for k in range(len(cis_s)):
    cis_s[k] = _dados[f"{cis(k+1)}"]

#print(cis_s)

ypos = np.arange(len(g_resultado))
plt.xticks(ypos,g_resultado)
plt.bar(ypos,r_resultado_)
plt.savefig('bab.png')

pdf = FPDF('P','mm','A4')
pdf.set_auto_page_break(auto=True, margin = 15)
pdf.add_page()

pdf.image('images/logo.png',90,8,18)
pdf.ln(20)

pdf.image('bab.png',100,65,100)

pdf.set_font('times','B',12)
pdf.cell(0,10,'RELAT�RIO INDIVIDUAL', border=True, align='C', ln=1)
pdf.set_font('times','',12)
pdf.cell(0,10, f'Empresa: {empresa} | C�digo: {codigo} | Data: {data} | 7� Regi�o Militar', ln=1)

pdf.ln(10)

pdf.set_font('times','B',12)
pdf.cell(0,10,'RESULTADOS', border=True, align='C', ln=1)
pdf.set_font('times','',12)

count = 0
for _resultado in resultados:
    pdf.cell(0,10, f'{_resultado}: {r_resultado[count]}', ln=1)
    count += 1
for i in range(2):
    pdf.cell(0,10,"",ln=1)

pdf.ln(10)

pdf.set_font('times','B',12)
pdf.cell(0,10,'VIS�O GERAL', border=True, align='C', ln=1)
pdf.set_font('times','',12)

textinho = "- PONTOS CR�TICOS: Automa��o do controle\n- Diretriz de implementa��o: Utilize uma ferramenta para analisar em tempo real seu invent�rio de ativos, podendo ser f�sicos ou virtuais.\n- Empresas parceiras: SolarWind Network Performance Monitor e Paessler PRTG Network Monitor."
textinho = '- A empresa n�o possui uma pol�tica formal de seguran�a da informa��o, isto �, n�o h� ainda um documento formal que formalize diretrizes e pr�ticas de defesa cibern�tica.\n - Em m�dia, os controles foram implementados apenas em alguns sistemas.Esse cen�rio n�o � seguro, pois os dados da empresa podem estar sendo expostos a a��o de hackers atrav�s dos sistemas nos quais os controles n�o foram implementados.\n - A avalia��o tamb�m mostrou que a maior parte dos controles est�o apenas parcialmente automatizados.\n - Os controles t�m sido relatados � alta administra��o na maioria dos sitemas.\n - Por fim, o n�vel de maturidade � Repet�vel.'


pdf.multi_cell(0,10,textinho, ln=1)

pdf.add_page()

# P�gina 2 kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

for i in range(len(cis_r)):
    pdf.set_font('times','B',12)
    pdf.cell(0,10,f'CIS {i+1}', border=True, align='C', ln=1)
    pdf.set_font('times','',12)
    for j in range(len(cis_r[i])):
        if cis_s[i][j] < 0.25:
            pdf.set_font('times','B',12)
            pdf.cell(0,10,f'Sub-controle {i+1}.{j+1}', ln=1)
            pdf.set_font('times','',12)
            pdf.multi_cell(0,10,f'{cis_r[i][j]}' ,ln=1)

resultados = ['1 - DEFINI��O DE POL�TICA', '2 - IMPLEMENTA��O DOS CONTROLES', '3 - AUTOMA��O DOS CONTROLES', '4 - CONTROLES RELATADOS']
r_resultado = [0.21,0.43,0.09,0.45,0.61,2.01]
r_resultado_ = [0.21,0.43,0.09,0.45]
g_resultado = ['1','2','3','4']

'''
count = 0
pdf.cell(0,10,"",ln=1)
for _resultado in resultados:
    pdf.cell(0,10, f'{_resultado}: {r_resultado[count]}', ln=1)
    count += 1
pdf.cell(0,10,"",ln=1)
'''

'''
pdf.set_font('times','B',12)
pdf.cell(0,10,'DIRETRIZ DE IMPLEMETA��O', border=True, align='C', ln=1)
pdf.set_font('times','',12)

textinho = "- PONTOS CR�TICOS: Ferramenta passiva de descoberta de ativos\n- Diretriz de implementa��o: Utilize uma ferramenta para analisar em tempo real seu invent�rio de ativos, podendo ser f�sicos ou virtuais.\n- Empresas parceiras: SolarWind Network Performance Monitor e Paessler PRTG Network Monitor."
pdf.multi_cell(0,10,textinho, ln=1)
'''
'''
plt.clf()
ypos = np.arange(len(g_resultado))
plt.xticks(ypos,g_resultado)
plt.bar(ypos,r_resultado_)
plt.savefig('bab.png')

pdf.image('bab.png',100,25,70)
'''
pdf.output('Relat�rio Individual.pdf')


