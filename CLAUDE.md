# Preferências do Lucas  Apeiron Brasil

## Regra principal: peça permissão antes de ações caras

Antes de executar qualquer ação com custo alto de tokens, SEMPRE pare e apresente:
- O que você vai fazer e por quê
- Estimativa de custo: baixo / médio / alto
- Alternativas mais baratas, se existirem

Aguarde confirmação explícita ("pode fazer", "sim", "ok") antes de prosseguir.

### Ações que sempre exigem permissão prévia
- Lançar subagentes
- Ler ou processar arquivos grandes (xlsx, csv, pdf com muitos dados)
- Escrever arquivos HTML com dados embutidos ou código longo (>100 linhas)
- Loops de iteração, evals ou benchmarks
- Qualquer sequência com mais de 3 chamadas de ferramentas encadeadas
- Trocar de workspace (ex: sair de Opportunities para Prospecting) — sempre informar qual workspace está ativo e pedir confirmação antes de mudar

### Ações baratas  pode fazer sem pedir
- Ler arquivos pequenos ou extrair sumários de dados
- Edits pontuais em arquivos existentes
- Responder perguntas diretas
- Criar arquivos curtos de texto ou código simples

---

## Eficiência com dados

Ao trabalhar com arquivos de dados (xlsx, csv, json):
1. **Explorar com sumários**  nunca imprimir o dataset completo. Usar `.describe()`, `.value_counts()`, `.head(3)`.
2. **Decidir design antes de codificar**  perguntar sobre filtros, KPIs e layout antes de escrever qualquer HTML.
3. **Desenvolver com amostra**  usar 10 linhas para construir e validar. Embutir dados completos só no passo final.
4. **Edits cirúrgicos**  ao atualizar arquivos existentes, usar Edit em vez de reescrever tudo.

---

## Identidade visual padrão  Apeiron

Usar sempre que construir dashboards, relatórios ou apresentações, salvo instrução contrária.

```
Verde principal:  #6ABF4B
Verde escuro:     #4E9934
Fundo:            #111111
Superfície:       #1e1e1e
Texto:            #f0f0f0
Texto secundário: #888888
Vermelho alerta:  #E74C3C
Laranja aviso:    #E67E22
Fonte:            Inter, Helvetica Neue, Arial, sans-serif
```

**Logo SVG (dois diamantes entrelaçados):**
```html
<svg viewBox="0 0 36 36" width="36" height="36">
  <rect x="2" y="12" width="14" height="14" rx="1" transform="rotate(45 2 12)" fill="#6ABF4B"/>
  <rect x="14" y="12" width="14" height="14" rx="1" transform="rotate(45 14 12)" fill="#4E9934"/>
</svg>
```
Wordmark: `apeiron` em font-weight 300, letter-spacing 2px.
Tagline: "Engenharia · Automação · Transformação Digital"

---

## Contexto do projeto

- **Empresa:** Apeiron Brasil  engenharia elétrica, automação industrial, transformação digital, segurança funcional (IEC 61511), OT Cybersecurity (IEC 62443)
- **Usuário:** Lucas Martins Rocha
- **Pasta de trabalho:** `C:\Users\LucasMartinsRocha\OneDrive - Apeiron Pte Ltd\CRM\Opportunities`
- **Arquivo de dados CRM:** `dashboard Opportunities.xlsx` (203 registros, pipeline Opportunities Brasil)
- **Dashboard ativo:** `APEIRON BRASIL - Opportunities Leads Hub.html`

---

## Tom e comunicação

- Respostas diretas e concisas  sem introduções longas
- Listas só quando realmente necessário
- Perguntar uma coisa por vez, nunca várias perguntas juntas
- Avisar quando uma abordagem diferente economizaria tokens sem perder qualidade

