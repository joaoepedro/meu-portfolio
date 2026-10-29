import { links } from '../data/links';

/**
 * Hero — direção "4.2a revisada" (docs/refatoracao-portfolio.md, seção 2).
 * Só três coisas: título que se reescreve, um ponto de luz e o botão do WhatsApp,
 * dentro de uma moldura editorial. No celular é outra composição, não a versão encolhida.
 *
 * A animação é toda em CSS (index.css, bloco "Hero"). O <h1> aparece na hora
 * e, para buscadores e leitores de tela, diz só a frase final:
 * "Seu anúncio traz a visita. Minha página traz o cliente."
 */

// Ordem do ciclo. A última ("cliente.") é a que fica com "reduzir movimento".
const palavras = [
  { palavra: 'paciente.', legenda: 'clínica odontológica · agenda online', curta: 'clínica · agenda online' },
  { palavra: 'pedido.', legenda: 'doceria · pedido pelo WhatsApp', curta: 'doceria · pedido no WhatsApp' },
  { palavra: 'orçamento.', legenda: 'energia solar · simulador de economia', curta: 'energia solar · simulador' },
  { palavra: 'aluno.', legenda: 'curso online · lançamento na Hotmart', curta: 'curso online · Hotmart' },
  { palavra: 'cliente.', legenda: 'o seu negócio · vamos conversar', curta: 'o seu negócio' },
];
const ultima = palavras.length - 1;

const rotulo = 'font-mono leading-[normal] uppercase text-noite-suave';

/** Legenda em mono que troca junto com a palavra (decorativa). */
function Legenda({ curta = false, className = '' }) {
  return (
    <span aria-hidden="true" className={`relative block font-mono text-noite-suave ${className}`}>
      {palavras.map((p, i) => (
        <span key={p.palavra} style={{ '--i': i }} className={`hero-legenda ${i === ultima ? 'hero-final' : ''}`}>
          {curta ? p.curta : p.legenda}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-titulo"
      className="relative flex min-h-svh flex-col overflow-hidden bg-noite px-5 font-texto text-noite-texto md:px-10 lg:px-16"
    >
      {/* Topo: no celular "jotap." à esquerda e "Nº 01" à direita */}
      <div className="flex items-center justify-between pt-[22px] md:grid md:grid-cols-3 md:pt-[30px]">
        <span className={`${rotulo} text-[10.5px] tracking-[0.14em] md:text-xs`}>Nº 01 · Portfólio</span>
        <a
          href="#topo"
          className="inline-flex items-baseline font-mono text-2xl leading-none font-medium tracking-[-0.03em] transition-opacity hover:opacity-85 max-md:order-first md:justify-self-center md:text-[28px]"
        >
          jotap
          <span aria-hidden="true" className="hero-ponto" />
          {/* nome acessível: "jotap, João Pedro, voltar ao início"
              (começa pelo texto visível, como pede o WCAG 2.5.3) */}
          <span className="sr-only">, João Pedro, voltar ao início</span>
        </a>
        <span className={`${rotulo} hidden justify-self-end text-xs tracking-[0.14em] md:inline`}>Edição 2026</span>
      </div>
      <div aria-hidden="true" className="mt-[26px] h-px bg-noite-linha md:mt-[34px]" />

      <div aria-hidden="true" className="min-h-10 flex-[159] md:flex-[163]" />

      <div className="max-md:-mr-1">
        <p className={`${rotulo} mb-[18px] text-[10.5px] tracking-[0.2em] md:mb-[22px] md:text-xs md:tracking-[0.24em]`}>
          — Landing pages · integrações<span className="hidden md:inline"> · sistemas</span>
        </p>
        <h1
          id="hero-titulo"
          className="relative z-0 font-titulo text-[clamp(40px,12.8vw,50px)] leading-[0.95] font-semibold tracking-[-0.05em] md:text-[min(104px,8.6vw)] md:leading-[0.92]"
        >
          <span className="font-medium text-noite-suave">Seu anúncio traz a visita.</span>{' '}
          <br />
          Minha página traz o{' '}
          <br />
          <span aria-hidden="true" className="relative inline-block h-[1.02em] min-w-[6em] align-top">
            <span className="hero-luz" />
            {palavras.map((p, i) => (
              <span
                key={p.palavra}
                data-palavra={p.palavra}
                style={{ '--i': i }}
                className={`hero-palavra ${i === ultima ? 'hero-final' : ''}`}
              />
            ))}
          </span>
          <span className="sr-only">{palavras[ultima].palavra}</span>
        </h1>
        <Legenda curta className="mt-[26px] h-[18px] text-[11.5px] md:hidden" />
      </div>

      <div aria-hidden="true" className="min-h-10 flex-[149] md:flex-[179]" />

      {/* Legenda (computador) e botão do WhatsApp */}
      <div className="flex items-center justify-between gap-6">
        <Legenda className="hidden h-5 min-w-0 flex-1 text-[13px] md:block" />
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-noite-texto px-[30px] text-[15px] font-semibold text-noite transition-opacity hover:opacity-85 md:w-auto md:shrink-0"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
          </svg>
          Quero a minha página
          <span className="sr-only"> (abre o WhatsApp)</span>
        </a>
      </div>

      {/* Rodapé do hero */}
      <div aria-hidden="true" className="mt-8 h-px bg-noite-linha md:mt-[26px]" />
      <div
        className={`${rotulo} flex justify-center pt-[17px] pb-[26px] text-[10.5px] leading-4 tracking-[0.14em] md:justify-between md:pt-4 md:pb-6 md:text-[11px]`}
      >
        <span className="hidden md:inline">João Pedro · desenvolvedor web</span>
        <a href="#projetos" className="-my-2 inline-block py-2 transition-colors hover:text-noite-texto">
          Role para ver a vitrine <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
