# AGENTS.md

## Scripts

| Comando            | Descrição                      |
| ------------------ | ------------------------------ |
| `npm run dev`      | Servidor de desenvolvimento    |
| `npm run build`    | Build de produção              |
| `npm run lint`     | Verificar erros                |
| `npm run lint:fix` | Corrigir erros automaticamente |

---

## Estrutura do Projeto

```
src/
├── app/              # Next.js App Router (páginas)
├── components/        # Componentes reutilizáveis
│   ├── ui/          # Design system base
│   └── ...          # Componentes de página
├── features/         # Features (hooks, componentes, tipos)
└── lib/             # Utilitários
```

---

## Convenções

### Componentes

- Usar **named exports**
- Estender props com `ComponentPropsWithoutRef`
- Usar `tv()` para variantes
- Usar `cn()` para merge de classes

### Estilização

- Usar variáveis CSS: `bg-accent-green`, `text-text-primary`, etc.
- Evitar valores hardcoded como `bg-green-500`

### Imports

- Usar `import type` para tipos
- Usar path aliases: `@/components`, `@/lib`

---

## Arquitetura

- **Feature-based + Hooks** para organização
- Features em `src/features/[nome]/`
- Cada feature: `components/`, `hooks/`, `types.ts`

---

## Antes de Finalizar

1. Rodar `npm run lint` e `npm run build`
2. Não fazer commits sem autorização
