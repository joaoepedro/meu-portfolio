# João Pedro · Portfólio

[![odevjp.vercel.app](https://img.shields.io/badge/site-odevjp.vercel.app-C2502D?style=flat-square&labelColor=1B1A17)](https://odevjp.vercel.app/)

Site pessoal de desenvolvedor web freelancer: serviços, projetos, processo de trabalho e contato.

![Prévia do portfólio](public/og-image.jpg)

## Seções

- **Hero:** proposta de valor, esboço anotado de uma landing page e números da experiência
- **Serviços:** landing pages, sites institucionais, sistemas web, integrações e automações
- **Projetos:** cards com print de cada página e link para a versão no ar
- **Como trabalho:** as seis etapas, do entendimento do negócio à entrega documentada
- **Sobre mim:** experiência e tecnologias
- **Contato:** WhatsApp, e-mail, LinkedIn e GitHub

## Tecnologias

- **React** + **Vite**
- **Tailwind CSS v4** (tokens da identidade no `@theme` de `src/index.css`)
- **Framer Motion** (animações de entrada, respeitando "reduzir movimento")
- **Fontsource** (fontes hospedadas no próprio site, sem depender do Google Fonts)
- **React Icons**

## Identidade visual: "Editorial quente"

| Token | Valor | Uso |
|---|---|---|
| `creme` | `#F4F0E8` | fundo principal |
| `papel` | `#FBF9F4` | cards e superfícies |
| `tinta` | `#1B1A17` | texto e botão primário |
| `suave` | `#55524B` | texto secundário |
| `terracota` | `#C2502D` | destaque em textos grandes |
| `terracota-escuro` | `#A8431F` | destaque em textos pequenos |
| `musgo` | `#2F4A3A` | cor de apoio |

**Tipografia:** Fraunces (títulos) e Geist (texto).

## Qualidade

| Lighthouse | Celular | Desktop |
|---|---|---|
| Desempenho | 96 | 100 |
| Acessibilidade | 100 | 100 |
| Boas práticas | 100 | 100 |
| SEO | 100 | 100 |

Zero problemas no [axe](https://www.deque.com/axe/) (WCAG 2.2 AA), testado de 320px a 1440px e com navegação por teclado.

## Como editar o conteúdo

O texto fica separado do layout, em `src/data/`:

| Arquivo | Conteúdo |
|---|---|
| `projects.js` | projetos (o primeiro aparece em destaque) |
| `services.js` | serviços |
| `process.js` | etapas do "Como trabalho" |
| `stack.js` | tecnologias |
| `links.js` | WhatsApp, e-mail, LinkedIn e GitHub |

**Novo projeto:** salve o print em `public/projetos/` em dois tamanhos, `nome-640.webp` e `nome-1200.webp` (proporção 16:10), e acrescente o projeto em `projects.js`.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`.

---

Desenvolvido por **João Pedro** · 2026
