# João Pedro · Portfólio

[![odevjp.vercel.app](https://img.shields.io/badge/site-odevjp.vercel.app-E4532F?style=flat-square&labelColor=111013)](https://odevjp.vercel.app/)

Site pessoal de desenvolvedor web freelancer: vitrine de landing pages, processo de trabalho, serviços e contato.

## Seções

- **Hero:** título que se reescreve ("Seu anúncio traz a visita. Minha página traz o *paciente / pedido / orçamento / aluno / cliente*."), um ponto de luz e o botão do WhatsApp, numa moldura editorial
- **01 · Vitrine:** cada projeto numa janela de navegador com o print da página inteira, que rola ao passar o mouse (no celular, rola sozinha). No celular, os projetos ficam num carrossel de deslizar. Botões "Ver no ar" e "Quero uma assim" (WhatsApp com mensagem pronta citando o projeto)
- **Faixa das tecnologias**, rolando entre duas réguas
- **02 · Como trabalho:** as oito etapas (briefing, persona, copy, identidade visual, código, integrações, testes, no ar), cada uma com o objeto que entrega. No computador acendem em sequência; no celular, acompanham a rolagem
- **03 · Serviços:** landing pages, sites institucionais, sistemas web, integrações e automações
- **04 · Contato:** WhatsApp

Todas as animações respeitam "reduzir movimento" do sistema.

## Tecnologias

- **React** + **Vite**
- **Tailwind CSS v4** (tokens da identidade no `@theme` de `src/index.css`)
- **Framer Motion** (entrada das seções)
- **Fontsource** (fontes hospedadas no próprio site)

## Identidade visual: "Noite de revista"

| Token | Valor | Uso |
|---|---|---|
| `noite` | `#111013` | fundo |
| `noite-linha` | `#2E2B2F` | réguas e divisórias |
| `noite-texto` | `#EFE8DC` | texto principal; fundo dos botões |
| `noite-suave` | `#A39C90` | 1ª parte dos títulos, rótulos, legendas |
| `acento` | `#E4532F` | palavra que muda, pontos, cursor, final dos títulos |
| `luz` | `rgba(228,83,47,.34)` | ponto de luz |

**Tipografia:** Familjen Grotesk (títulos), Instrument Sans (texto e botões) e IBM Plex Mono ("jotap.", rótulos, legendas, rodapé).

## Como editar o conteúdo

O texto fica em `src/data/`:

| Arquivo | Conteúdo |
|---|---|
| `projects.js` | projetos da vitrine (o primeiro aparece em destaque) |
| `process.js` | nomes das oito etapas (os objetos de cada uma ficam em `components/Process.jsx`) |
| `services.js` | serviços |
| `stack.js` | tecnologias da faixa |
| `links.js` | WhatsApp |

**Novo projeto:** tire um print da página inteira no computador (1440px de largura), salve em `public/projetos/` em dois tamanhos, `nome-pagina-720.webp` e `nome-pagina-1200.webp`, e acrescente o projeto em `projects.js`.

**Velocidade da rolagem dos prints:** constante `SEGUNDOS_POR_TELA` no topo de `src/components/Projects.jsx` (maior = mais devagar).

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`.

---

Desenvolvido por **João Pedro** · 2026
