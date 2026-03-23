# 01 - DECISOES LOG (Apeiron CRM)

## Como usar
Registrar decisões de produto/processo que impactem operação, dados, UX, governança ou arquitetura do dashboard/DB.

Campos recomendados:
- Data
- Decisão
- Motivo
- Impacto esperado
- Status (Aprovada / Em teste / Revertida)
- Responsável

## Entradas

### 23/03/2026 - Estrutura de contexto permanente criada
- Decisão: criar `00_CONTEXTO_MESTRE.md` e `01_DECISOES_LOG.md` como base oficial de contexto e rastreabilidade.
- Motivo: preservar histórico de decisões e manter alinhamento entre sessões.
- Impacto esperado: menos retrabalho, menos ambiguidades e maior consistência nas implementações.
- Status: Em aprovação
- Responsável: Lucas + Assistente

### 23/03/2026 - Regra comercial de disciplina de pipeline
- Decisão: se `Status` for diferente de `Open`, então `Date_Next_Action` deve ser `N/A` (limpo no DB).
- Motivo: evitar pendências falsas e melhorar governança do funil.
- Impacto esperado: maior qualidade do pipeline e melhor leitura operacional.
- Status: Em teste
- Responsável: Assistente


### 23/03/2026 - Atualização do Contexto Mestre (perfil profissional e pessoal)
- Decisão: atualizar o `00_CONTEXTO_MESTRE.md` com novo perfil de Lucas (Engenheiro de Vendas), formação (Engenharia de Controle e Automação), idioma e contexto pessoal.
- Motivo: alinhar o assistente com a realidade atual para respostas mais úteis e precisas.
- Impacto esperado: maior aderência das recomendações ao contexto profissional, técnico e de comunicação.
- Status: Em aprovação
- Responsável: Lucas + Assistente
## Template para próximas decisões
### AAAA-MM-DD - [Título curto]
- Decisão:
- Motivo:
- Impacto esperado:
- Status:
- Responsável:


