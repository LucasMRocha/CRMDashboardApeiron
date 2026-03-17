# Contributing

Siga estas regras para manter consistência e qualidade.

## Branches

- `main`: produção
- `dev`: integração de features
- `feature/<nome>`: desenvolvimento específico

## Commits

- Use mensagens claras e prefira convenções:
  - `feat:` nova funcionalidade
  - `fix:` correção
  - `docs:` documentação
  - `chore:` ajustes no processo

## Pull Requests

- Abra PRs apontando para `main`.
- Inclua descrição do problema e solução.
- Adicione checklist de testes realizados.

## CI

- As ações do GitHub devem ser confiáveis para este repo:
  - `pipeline` de validação de scripts
  - `build` do dashboard

## GitHub

- Proteger `main` com PR obrigatório e checks pass.
- Rotular PRs para milestones e releases.
