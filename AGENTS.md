# AGENTS.md - Configurações para Agentes de IA

## Visão Geral

Este documento contém instruções e informações para agentes de IA que trabalham neste projeto.

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Iniciar servidor de desenvolvimento (Next.js) |
| `npm run build` | Build de produção |
| `npm run start` | Iniciar servidor de produção |
| `npm run lint` | Verificar erros com Biome |
| `npm run format` | Formatar código automaticamente |
| `npm run lint:fix` | Corrigir erros automaticamente |

---

## Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── components/         # Página de showcase de componentes
│   │   │   └── page.tsx       # /components - visualização do design system
│   │   ├── globals.css        # Variáveis CSS + Tailwind theme
│   │   ├── layout.tsx         # Layout raiz
│   │   └── page.tsx           # Página inicial
│   ├── components/
│   │   ├── ui/                # Componentes base do design system
│   │   │   ├── Button.tsx
│   │   │   ├── Heading.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Description.tsx
│   │   │   ├── Caption.tsx
│   │   │   ├── Code.tsx
│   │   │   ├── Toggle.tsx
│   │   │   └── index.ts
│   │   └──                    # Componentes de página (a criar)
│   └── lib/
│       └── utils.ts            # Utilitários (cn(), etc.)
├── biome.json                  # Configuração do Biome (lint + format)
├── tailwind.config.ts          # Configuração do Tailwind
└── package.json
```

---

## Convenções de Código

### Props Estendidas

Todos os componentes devem estender as propriedades nativas do elemento HTML correspondente:

```tsx
import type { ComponentPropsWithoutRef } from 'react';

// ✅ Correto
export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'link';
}

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  return <button className={cn(button({ variant }), className)} {...props} />;
};

// Para elementos customizados, omitir props conflitantes
export interface ToggleProps extends Omit<ComponentPropsWithoutRef<'button'>, 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
```

### Named Exports

Todos os componentes devem usar **named exports**:

```tsx
// ✅ Correto
export const Button = ({ ... }) => { ... };
export interface ButtonProps { ... }

// ❌ Evitar
export default Button;
const Button = ({ ... }) => { ... };
```

### Tailwind CSS

- **Sempre usar variáveis CSS** ao invés de valores hardcoded:
  - ✅ `bg-accent-green`, `text-text-primary`, `border-border-primary`
  - ❌ `bg-green-500`, `text-white`, `border-gray-800`

- **Variáveis disponíveis** (definidas em `src/app/globals.css`):
  - Cores de acento: `--accent-green`, `--accent-red`, `--accent-amber`, etc.
  - Cores de texto: `--text-primary`, `--text-secondary`, `--text-tertiary`
  - Cores de fundo: `--bg-page`, `--bg-surface`, `--bg-elevated`, `--bg-input`
  - Cores de borda: `--border-primary`, `--border-secondary`, `--border-focus`
  - Semantic colors: `--color-success`, `--color-warning`, `--color-error`, `--color-info`
  - Spacing: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`
  - Radius: `--radius-none`, `--radius-m`, `--radius-pill`

### Tailwind Variants (tv)

- **Usar `tv()`** para componentes com variantes:
```tsx
import { tv } from 'tailwind-variants';
import { cn } from '@/lib/utils';

const button = tv({
  base: 'base classes',
  variants: {
    variant: {
      primary: '...',
      secondary: '...',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

// Uso:
<button className={cn(button({ variant }), className)} {...props} />
```

- **twMerge integrado**: O tv() já resolve conflitos entre base, variants e compoundVariants internamente.

### Utilitários

- **Usar `cn()`** para merge de classes (combina clsx + twMerge):
```tsx
import { cn } from '@/lib/utils';

// ✅ Correto - mescla classes do tv() com className externa
className={cn(button({ variant }), className)}

// ❌ Evitar - pode causar conflitos
className={`${button({ variant })} ${className}`}
```

### Biome (Lint + Format)

- Biome está configurado como linter e formatter padrão
- **Sempre rodar `npm run lint`** antes de fazer commit
- **Usar `npm run lint:fix`** para corrigir erros automáticos

### Imports

- Usar `import type` para tipos
- Imports organizados alfabeticamente
- Sempre usar path aliases: `@/components`, `@/lib`

### Base UI

- `@base-ui/react` está instalado para componentes interativos
- Usar quando necessário para acessibilidade nativa (Switch, Checkbox, etc.)
- Verificar compatibilidade da versão antes de usar

---

## Design System

### Cores

As cores estão definidas como variáveis CSS em `src/app/globals.css` e mapeadas no `@theme inline` do Tailwind v4.

### Tipografia

- **Fontes:**
  - `--font-primary`: JetBrains Mono (monospace)
  - `--font-secondary`: IBM Plex Mono (monospace)

### Componentes UI

Os componentes base estão em `src/components/ui/`. Cada componente deve:
- Usar **named exports** (`export const Component`)
- Estender props nativas com `ComponentPropsWithoutRef`
- Ser criado com `tv()` para variantes (quando aplicável)
- Usar `cn()` para merge de classes
- Exportar tipos de props quando necessário
- Ser exportado no `index.ts`

---

## Page de Componentes

A página de showcase está em `src/app/components/page.tsx` (rota `/components`). Esta página exibe todos os componentes do design system para visualização e testes.

---

## Regras de Commits

- Não fazer commits diretamente (usuário prefere revisar antes)
- Sempre rodar `npm run lint` e `npm run build` antes de finalizar uma tarefa
- Verificar se o servidor ainda está rodando após testes locais
