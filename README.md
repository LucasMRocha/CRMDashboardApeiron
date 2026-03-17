# Commercial Dashboard (Apeiron)

Projeto de dashboard com base em dados do pipeline comercial.

## Estrutura

- `legacy/` - arquivos e versão antiga do dashboard
- `tools/` - scripts de sincronização/backup/transformações
- `.claude/` - notas do Claude
- `Pipeline Comercial Brasil - Follow-up Review.html` - dashboard principal

## Configuração inicial

```powershell
cd "C:\Users\LucasMartinsRocha\OneDrive - Apeiron Pte Ltd\CRM\Commercial Dashboard"

# ajustar git global (se não estiver):
# git config --global user.name "Lucas Martins Rocha"
# git config --global user.email "seu-email@apeironengg.com"

# atualizar local
git pull origin main
```

## Fluxo de trabalho sugerido

1. Crie branch para tarefas:
   `git checkout -b feature/<nome>`
2. Faça mudanças, teste, commit:
   `git add . && git commit -m "feat: ..."`
3. Push e PR:
   `git push -u origin feature/<nome>`
4. Solicite revisão e mescle em `main`.

## Execução de scripts

- `SYNC_FROM_ZOHO.bat` para sincronizar dados (se ainda usar Zoho)
- `tools/` contém scripts de backup e transformação

## Harmony com outro repositório

Este repositório é similar ao `ProspectingApeiron`, mas focado em Commercial Dashboard.

