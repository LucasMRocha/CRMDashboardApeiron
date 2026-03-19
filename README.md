# Opportunities (Apeiron)

Projeto de dashboard com base em dados do pipeline Opportunities.

## Estrutura

- `legacy/` - arquivos e versão antiga do dashboard
- `tools/` - scripts de sincronização/backup/transformações
- `.claude/` - notas do Claude
- `APEIRON BRASIL - Opportunities Leads Hub.html` - dashboard principal

## Configuração inicial

```powershell
cd "C:\Users\LucasMartinsRocha\OneDrive - Apeiron Pte Ltd\CRM\Opportunities"

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

Este repositório é similar ao `ProspectingApeiron`, mas focado em Opportunities.


## Modo desempenho (trabalho leve)

Na pasta `tools/`, use:

- `PERFORMANCE_STATUS.bat` -> mostra uso de RAM e processos pesados
- `PERFORMANCE_LIGHT_ON.bat` -> fecha OCR API (porta 8008), AnythingLLM e Ollama
- `PERFORMANCE_LIGHT_OFF.bat` -> reabre os servicos que estavam ativos antes do modo leve

Opcional por PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\performance-mode.ps1 -Mode status
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\performance-mode.ps1 -Mode on -Force
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\performance-mode.ps1 -Mode off
```

