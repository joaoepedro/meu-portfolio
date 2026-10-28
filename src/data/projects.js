// Projetos exibidos na "Vitrine de landing pages" (seção Projetos).
// O primeiro da lista aparece em destaque (card grande).
//
// Imagens: print da PÁGINA INTEIRA no computador (1440px de largura),
// salvo em public/projetos/ em dois tamanhos:
//   <imagem>-pagina-720.webp e <imagem>-pagina-1200.webp
// Ao passar o mouse, a tela do card "rola" o print de cima a baixo.
//
// url vazia ('') = projeto ainda não publicado: o card mostra "Em breve no ar".
export const projects = [
    {
        id: "mimo-doceria",
        name: "Mimo Doceria",
        category: "Doceria de festas · São Paulo",
        description:
            "Do Instagram ao pedido no WhatsApp. Uma calculadora sugere quantos doces pedir pelo número de convidados e já monta a mensagem da encomenda.",
        highlights: [
            "Calculadora de doces",
            "WhatsApp com mensagem pronta",
            "Cardápio com preços",
            "SEO local",
        ],
        stack: "React · Tailwind CSS · Lovable",
        image: "mimo-doceria",
        url: "https://mimodoceria.vercel.app/",
    },
    {
        id: "raiz-odontologia",
        name: "Raiz Odontologia",
        category: "Clínica odontológica · Curitiba",
        description:
            "Agenda própria ligada ao Google Agenda da clínica: o paciente vê só os horários livres e marca a avaliação em 1 minuto. Copy dentro das regras do CFO e SEO local.",
        highlights: ["Agenda online", "Google Apps Script", "SEO local"],
        stack: "HTML · CSS · JavaScript",
        image: "raiz-odontologia",
        url: "https://raizodontologia.vercel.app/",
    },
    {
        id: "econowatt",
        name: "EconoWatt",
        category: "Energia solar · Franca/SP",
        description:
            "Simulador de economia: a pessoa informa a conta de luz e vê painéis, economia, parcela e retorno. O seletor Casa, Comércio e Indústria adapta textos e valores.",
        highlights: ["Simulador", "Google Sheets", "Pixels Meta e Google"],
        stack: "HTML · CSS · JavaScript",
        image: "econowatt",
        url: "https://econowatt.vercel.app/",
    },
    {
        id: "saude-da-mulher",
        name: "Saúde da Mulher na Prática",
        category: "Lançamento de curso online · fisioterapia",
        description:
            "Página de pré-lançamento e vendas que muda de fase sozinha pelas datas do lançamento. A lista de espera vai para o Google Sheets e o checkout da Hotmart abre já preenchido com os dados do lead.",
        highlights: ["Hotmart", "Google Sheets", "Pixels Meta e Google"],
        stack: "HTML · CSS · JavaScript",
        image: "saude-da-mulher",
        url: "https://saudedamulher.vercel.app/",
    },
    {
        id: "raiz-cafe",
        name: "Raiz Café",
        category: "E-commerce · café especial",
        description:
            "Loja de café especial com carrinho, frete grátis progressivo e eventos de anúncio liberados só depois do consentimento de cookies.",
        highlights: ["Carrinho", "Google Tag Manager", "LGPD"],
        stack: "React · Tailwind CSS",
        image: "raiz-cafe",
        url: "https://raizcafe.vercel.app/",
    },
    {
        id: "digitalpro",
        name: "DigitalPro",
        category: "Curso de tráfego pago",
        description:
            "Página de vendas com a estrutura completa de copy: dor, benefícios, módulos, depoimentos, oferta com garantia e perguntas frequentes.",
        highlights: ["Copy de vendas", "Animações de rolagem"],
        stack: "React · Framer Motion",
        image: "digitalpro",
        url: "https://lp-digitalpro.vercel.app/",
    },
];
