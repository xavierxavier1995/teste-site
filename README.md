# Consultório Médico - Landing Page

Landing page simples para consultório médico com 2 seções + CTA.

## Tecnologia
- **Next.js 14** - Framework React com Server Components
- **Tailwind CSS** - Estilização
- **TypeScript** - Type safety
- **Lucide Icons** - Ícones

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Deploy no Vercel

1. Faça push para o GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <seu-repo>
git push -u origin main
```

2. Acesse https://vercel.com e conecte seu repositório
3. O deploy acontece automaticamente a cada push

## Estrutura

- `src/app/page.tsx` - Landing page com 2 seções
- `src/app/layout.tsx` - Layout base
- `src/app/globals.css` - Estilos globais

## Seções

1. **Hero** - Apresentação + Formulário de agendamento
2. **Diferenciais** - 4 benefícios + CTA secundário
