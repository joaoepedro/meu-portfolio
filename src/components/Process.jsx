import { useEffect, useRef, useState } from 'react';
import { etapas } from '../data/process';
import SectionTitle, { Suave, Acento } from './SectionTitle';
import useCelular from './useCelular';

/*
 * 02 · Como trabalho
 * As oito etapas acendem uma por vez (ciclo de 8s): o card sobe, ganha borda
 * laranja e um brilho suave, e o ponto ao lado do número acende.
 * Computador: grade, e as etapas acendem sozinhas em sequência.
 * Celular: telas de deslizar para o lado; a etapa em destaque e a linha
 * embaixo acompanham a rolagem (manual e progressiva).
 * A animação só roda com a seção na tela e para com "reduzir movimento".
 */

const Check = () => (
  <span aria-hidden="true" className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-[3px] bg-noite-texto">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="text-noite">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  </span>
);

const Pilula = ({ children }) => <li className="rounded-full border border-noite-linha px-[13px] py-[7px]">{children}</li>;

// O "objeto" que cada etapa entrega, na mesma ordem de data/process.js
const objetos = [
  // 01 Briefing
  <ul key="briefing" className="flex flex-col gap-3 font-mono text-[13px]">
    <li className="flex items-center gap-2.5"><Check />objetivo único</li>
    <li className="flex items-center gap-2.5"><Check />público e oferta</li>
    <li className="flex items-center gap-2.5 text-noite-suave">
      <span aria-hidden="true" className="h-3 w-3 rounded-[3px] border border-noite-suave" />
      origem do tráfego <span className="sr-only">(a definir)</span>
    </li>
  </ul>,
  // 02 Persona
  <div key="persona" className="max-w-[230px] -rotate-2 self-start bg-noite-texto px-[18px] py-4 text-noite shadow-[0_18px_30px_-18px_rgba(0,0,0,0.8)]">
    <p className="mb-1 font-mono text-[11px] tracking-[0.14em] text-[#5E5850] uppercase">Persona</p>
    <p className="mb-1.5 text-[15px] font-semibold">Camila, 37</p>
    <p className="text-sm leading-[1.4]">Resolve tudo pelo celular. Medo de ser enganada no orçamento.</p>
  </div>,
  // 03 Copy
  <p key="copy" className="font-titulo text-[34px] leading-[0.98] font-semibold tracking-[-0.04em] md:text-[clamp(28px,2.4vw,34px)]">
    Marque online em <Acento>1 minuto.</Acento>
    <span aria-hidden="true" className="cursor-piscando ml-[3px] inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-acento" />
  </p>,
  // 04 Identidade visual
  <div key="identidade" className="flex flex-col gap-[26px]">
    <div className="flex items-center gap-2.5">
      <span aria-hidden="true" className="h-10 w-10 rounded-full bg-[#1E5E66] md:h-11 md:w-11" />
      <span aria-hidden="true" className="h-10 w-10 rounded-full bg-[#B08D57] md:h-11 md:w-11" />
      <span aria-hidden="true" className="h-10 w-10 rounded-full bg-[#F3EEE4] md:h-11 md:w-11" />
      <span aria-hidden="true" className="ml-3.5 font-titulo text-[44px] leading-none font-medium tracking-[-0.04em] md:text-5xl">Aa</span>
    </div>
    <p className="font-mono text-xs text-noite-suave">paleta e tipografia do cliente</p>
  </div>,
  // 05 Código
  <pre key="codigo" className="overflow-hidden rounded-[10px] border border-noite-linha bg-noite-barra px-4 py-4 font-mono text-[12.5px] leading-[1.65] md:px-[18px] md:text-[13px]">
    <code>
      <span className="text-acento">const</span> livre = agenda{'\n'}
      {'  '}.horarios(<span className="text-noite-suave">&apos;qua&apos;</span>){'\n'}
      {'  '}.filter(h =&gt; !h.ocupado)
    </code>
  </pre>,
  // 06 Integrações
  <ul key="integracoes" className="flex flex-wrap gap-2 text-[13px]">
    <Pilula>Google Agenda</Pilula>
    <Pilula>Planilhas</Pilula>
    <Pilula>WhatsApp</Pilula>
    <Pilula>Hotmart</Pilula>
    <Pilula>Meta Pixel</Pilula>
  </ul>,
  // 07 Testes
  <div key="testes" className="flex items-center gap-[18px]">
    <svg width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="Nota 100 no Lighthouse" className="shrink-0">
      <circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="3" className="text-noite-linha" />
      <circle
        cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
        strokeDasharray="182" strokeDashoffset="0" transform="rotate(-90 32 32)"
        className="anel-lighthouse text-acento"
      />
      <text x="32" y="39" textAnchor="middle" fill="currentColor" className="fill-noite-texto font-titulo text-[20px] font-semibold">100</text>
    </svg>
    <p className="font-mono text-xs leading-[1.8] text-noite-suave">Lighthouse<br />axe · teclado<br />320 a 1920px</p>
  </div>,
  // 08 No ar
  <div key="no-ar" className="flex flex-col gap-3.5">
    <span className="inline-flex max-w-full items-center gap-2.5 self-start rounded-full border border-noite-linha px-3.5 py-[9px] [overflow-wrap:anywhere] font-mono text-[12.5px] md:px-[15px] md:text-[13px]">
      <span aria-hidden="true" className="brilho relative h-[7px] w-[7px] rounded-full bg-acento" />
      seusiteaqui.com.br
    </span>
    <p className="text-sm leading-normal text-noite-suave">Com guia de edição para você mexer nos textos sozinho.</p>
  </div>,
];

export default function Process() {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);
  const trilho = useRef(null);
  const [atual, setAtual] = useState(0);
  const celular = useCelular();

  // Celular: a etapa em destaque é a do card no início da faixa.
  // A linha embaixo progride junto (1/8, 2/8... até 8/8 no "No ar").
  const aoRolar = () => {
    const el = trilho.current;
    const card = el?.querySelector('li');
    if (!el || !card) return;
    const fim = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    const i = fim ? etapas.length - 1 : Math.round(el.scrollLeft / (card.offsetWidth + 12)); // card + gap-3
    setAtual(Math.min(etapas.length - 1, i));
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setVisivel(e.isIntersecting), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="como-trabalho"
      aria-labelledby="processo-titulo"
      data-visivel={visivel || undefined}
      className="secao processo pt-24 md:pt-32 lg:pt-[140px]"
    >
      <SectionTitle
        id="processo-titulo"
        numero="02"
        rotulo="Como trabalho"
        texto="Cada etapa gera uma entrega que você vê e aprova. Nada de “confia, vai ficar bom”."
      >
        <Suave>Oito etapas, do briefing</Suave>
        <br className="hidden md:inline" /> ao primeiro <Acento>lead.</Acento>
      </SectionTitle>

      <ol
        ref={trilho}
        onScroll={aoRolar}
        tabIndex={celular ? 0 : undefined}
        aria-label="As oito etapas"
        className="carrossel relative -mx-5 mt-9 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pt-1.5 pb-5 md:mx-0 md:mt-16 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:p-0 xl:grid-cols-4"
      >
        {etapas.map((titulo, i) => (
          <li
            key={titulo}
            style={{ '--atraso': `${i}s` }}
            data-ativo={i === atual || undefined}
            className="passo flex h-[300px] w-[300px] shrink-0 snap-start flex-col gap-[26px] rounded-[14px] border border-noite-linha bg-noite p-6 md:h-auto md:min-h-[260px] md:w-auto md:px-[26px] md:pt-6 md:pb-[26px]"
          >
            <div className="flex items-center justify-between gap-3 md:justify-start">
              <span className="order-2 inline-flex items-center gap-2 font-mono text-[11px] text-noite-suave md:order-none md:text-xs">
                <span aria-hidden="true" className="passo-ponto h-1.5 w-1.5 rounded-full bg-acento shadow-[0_0_10px_3px_rgba(228,83,47,0.55)]" />
                <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span aria-hidden="true" className="md:hidden">/ 08</span>
              </span>
              <h3 className="text-[19px] font-semibold">
                <span className="sr-only">Etapa {i + 1}: </span>
                {titulo}
              </h3>
            </div>
            {objetos[i]}
          </li>
        ))}
      </ol>

      {/* celular: linha que progride conforme você desliza pelas etapas */}
      <div aria-hidden="true" className="mt-0.5 flex items-center gap-3.5 font-mono text-[10.5px] tracking-[0.14em] text-noite-suave uppercase md:hidden">
        <span className="relative h-px flex-1 bg-noite-linha">
          <span
            className="passo-progresso absolute -top-px left-0 h-[3px] w-full origin-left bg-acento"
            style={{ transform: `scaleX(${(atual + 1) / etapas.length})` }}
          />
        </span>
        Deslize →
      </div>
    </section>
  );
}
