# Portfólio — Maria Pereira

Portfólio pessoal para cadeira de Front-End, feito com Next.js 14 (App Router), TypeScript e Tailwind CSS.

## Tecnologias

- Next.js 14 (App Router) e React 18
- TypeScript
- Tailwind CSS
- shadcn/ui (Button, Card, Badge), Radix UI (Slot) e class-variance-authority
- clsx + tailwind-merge e lucide-react
- next/font (Space Grotesk e JetBrains Mono)
- Open-Meteo API para o widget do clima em Recife

## Requisitos

- Node.js 18 ou superior
- npm

## Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run start` | Serve a build de produção |

## Rotas

- `/` — início
- `/sobre` — sobre, stacks, formação, certificados e tecnologias do site
- `/profissional` — experiência profissional
- `/projetos` — projetos
- `/contato` — formulário de contato

## Estrutura

```
app/          páginas, layout, estilos globais e ícone
components/   header, footer, widget do clima, formulário e componentes de UI
lib/          dados do portfólio, clima e utilitários
public/       imagens e currículo
```

Os dados exibidos ficam centralizados em `lib/data.ts`. O widget do clima busca a Open-Meteo em `lib/weather.ts` com cache de 30 minutos e exibe a hora atual de Recife no navegador.
