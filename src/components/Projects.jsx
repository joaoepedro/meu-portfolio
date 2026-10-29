import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import { whatsappCom } from '../data/links';
import SectionTitle, { Suave, Acento } from './SectionTitle';
import Reveal from './Reveal';
import useCelular from './useCelular';

// Velocidade da rolagem das telas: segundos para descer o equivalente
// a uma tela do card. Mais alto = mais devagar. Vale para todos os cards.
const SEGUNDOS_POR_TELA = 1.5;

/*
 * 01 · Vitrine de landing pages
 * Computador e tablet: projeto em destaque + grade, com o convite no fim.
 * Celular: carrossel com rolagem horizontal dos projetos publicados e,
 * embaixo, o card "A sua página pode ser a próxima".
 * Cada projeto aparece numa janela de navegador com o print da página inteira:
 * mouse em cima (ou foco pelo teclado) rola a tela; sem mouse, rola sozinha
 * quando o card está visível.
 */
export default function Projects() {
  const publicados = projects.filter((p) => p.url);
  const trilho = useRef(null);
  const [atual, setAtual] = useState(0);
  const celular = useCelular();

  // Indicador do carrossel (só no celular): qual card está no início da faixa
  const aoRolar = () => {
    const el = trilho.current;
    const card = el?.querySelector('li');
    if (!el || !card) return;
    const passo = card.offsetWidth + 12; // largura do card + gap-3
    setAtual(Math.min(publicados.length - 1, Math.round(el.scrollLeft / passo)));
  };

  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="secao pt-24 md:pt-32">
      <SectionTitle
        id="projetos-titulo"
        numero="01"
        rotulo="Vitrine"
        texto={`${extenso(publicados.length)} páginas para ${extenso(publicados.length).toLowerCase()} negócios diferentes, cada uma com briefing, copy, identidade visual e integrações próprias.`}
      >
        <Suave>Vitrine de</Suave>{' '}
        <br />
        landing pages<Acento>.</Acento>
      </SectionTitle>

      <ul
        ref={trilho}
        onScroll={aoRolar}
        tabIndex={celular ? 0 : undefined}
        aria-label="Projetos publicados"
        className="carrossel relative -mx-5 mt-9 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-1 md:mx-0 md:mt-16 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
      >
        {publicados.map((p, i) => [
          <li
            key={p.id}
            className={`w-[85%] shrink-0 snap-start md:w-auto ${i === 0 ? 'md:col-span-2 lg:col-span-3' : ''}`}
          >
            <ProjectCard project={p} featured={i === 0} />
          </li>,
          // dica entre o destaque e a grade (só computador/tablet)
          i === 0 && (
            <li
              key="dica"
              aria-hidden="true"
              className="hidden items-center gap-3.5 pt-6 pb-0.5 font-mono text-xs text-noite-suave md:col-span-2 md:flex lg:col-span-3"
            >
              <span className="h-px w-8 shrink-0 bg-noite-linha" />
              <span className="dica-mouse">passe o mouse sobre as telas para rolar a página inteira</span>
              <span className="dica-toque">as telas rolam sozinhas enquanto você passa por elas</span>
            </li>
          ),
        ])}
        <li className="hidden md:block">
          <CtaCard />
        </li>
      </ul>

      {/* celular: posição no carrossel + convite */}
      <div className="md:hidden">
        <div aria-hidden="true" className="mt-[18px] flex items-center gap-3.5 font-mono text-[10.5px] tracking-[0.14em] text-noite-suave uppercase">
          <span>
            {String(atual + 1).padStart(2, '0')} / {String(publicados.length).padStart(2, '0')}
          </span>
          <span className="relative h-px flex-1 bg-noite-linha">
            <span
              className="absolute -top-px left-0 h-[3px] bg-acento transition-transform duration-300"
              style={{ width: `${100 / publicados.length}%`, transform: `translateX(${atual * 100}%)` }}
            />
          </span>
          <span>Deslize →</span>
        </div>
        <div className="mt-8">
          <CtaCard />
        </div>
      </div>
    </section>
  );
}

const extenso = (n) => ['Zero', 'Uma', 'Duas', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'][n] ?? String(n);

function ProjectCard({ project, featured = false }) {
  const quero = whatsappCom(
    `Olá, João! Vi o projeto ${project.name} no seu portfólio e quero uma página assim para o meu negócio.`,
  );

  return (
    <Reveal
      as="article"
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-noite-linha bg-noite-cartao ${
        featured ? 'lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-center lg:rounded-[18px]' : ''
      }`}
    >
      <div className={featured ? 'p-2.5 pb-0 md:p-3 md:pb-0 lg:p-5 lg:pr-0' : 'p-2.5 pb-0 md:p-3 md:pb-0'}>
        <BrowserFrame project={project} featured={featured} />
      </div>

      <div className={`flex flex-1 flex-col px-5 pt-5 pb-[22px] md:px-6 md:pt-[22px] md:pb-6 ${featured ? 'lg:px-11 lg:py-10' : ''}`}>
        {featured && (
          <p className="mb-3 inline-flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.14em] uppercase md:mb-[18px] md:text-[11px]">
            <span aria-hidden="true" className="brilho relative h-[7px] w-[7px] rounded-full bg-acento" />
            Em destaque
          </p>
        )}
        <p className="font-mono text-[10.5px] tracking-[0.14em] text-noite-suave uppercase md:text-[11px]">{project.category}</p>
        <h3
          className={`mt-2 font-titulo leading-none font-semibold tracking-[-0.045em] ${
            featured ? 'text-[34px] md:text-[32px] lg:mt-2.5 lg:text-5xl lg:leading-[0.95] lg:tracking-[-0.05em]' : 'text-[30px] md:text-[32px]'
          }`}
        >
          {project.name}
        </h3>
        <p className={`mt-2.5 text-[15px] leading-[1.55] text-noite-suave md:mt-3 ${featured ? 'lg:mt-4 lg:text-base lg:leading-[1.6]' : ''}`}>
          {project.description}
        </p>

        <ul aria-label="Destaques" className="mt-[18px] hidden flex-wrap gap-1.5 text-xs text-noite-suave md:flex">
          {project.highlights.map((h) => (
            <li key={h} className="rounded-full border border-noite-linha px-[11px] py-1">
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-4 hidden font-mono text-[11.5px] text-noite-suave md:block">{project.stack}</p>

        <div className="mt-auto grid grid-cols-[auto_1fr] gap-2 pt-5 md:flex md:flex-wrap md:pt-[22px]">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[46px] items-center justify-center gap-1.5 rounded-full bg-noite-texto px-3 whitespace-nowrap md:px-[18px] text-sm font-semibold text-noite transition-opacity hover:opacity-85 md:h-11"
          >
            Ver no ar
            <span className="sr-only">: {project.name} (abre em nova aba)</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={quero}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[46px] items-center justify-center rounded-full border border-noite-suave px-3 whitespace-nowrap md:px-[18px] text-sm font-semibold transition-colors hover:bg-noite-texto hover:text-noite md:h-11"
          >
            Quero uma assim
            <span className="sr-only"> (abre o WhatsApp)</span>
          </a>
        </div>
      </div>
    </Reveal>
  );
}

/** Janela de navegador com o print da página inteira, que rola no hover. */
function BrowserFrame({ project, featured }) {
  const ref = useRef(null);
  const [duracao, setDuracao] = useState(15);
  const [rolando, setRolando] = useState(false);
  const img = `/projetos/${project.image}-pagina`;
  const dominio = new URL(project.url).hostname;

  // Sem mouse (celular/tablet): rola sozinha enquanto a tela está bem visível
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: none)').matches) return;
    const obs = new IntersectionObserver(([e]) => setRolando(e.isIntersecting), { threshold: 0.7 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Páginas mais longas rolam por mais tempo: a velocidade fica igual em todos os cards.
  // A tela do card tem proporção 16:10, então a página tem (altura/largura) ÷ 0,625 telas.
  const aoCarregar = (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    if (!w) return;
    const telasParaDescer = h / w / 0.625 - 1;
    setDuracao(Math.max(6, telasParaDescer * SEGUNDOS_POR_TELA));
  };

  return (
    <div className="overflow-hidden rounded-[10px] border border-noite-linha bg-noite-funda lg:rounded-xl">
      {/* barra do navegador */}
      <div aria-hidden="true" className="flex items-center gap-2.5 border-b border-noite-linha bg-noite-barra px-[9px] py-[7px] md:px-2.5 md:py-2">
        <span className="flex gap-[5px]">
          <span className="h-[7px] w-[7px] rounded-full bg-acento md:h-2 md:w-2" />
          <span className="h-[7px] w-[7px] rounded-full bg-noite-linha md:h-2 md:w-2" />
          <span className="h-[7px] w-[7px] rounded-full bg-noite-linha md:h-2 md:w-2" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-noite px-2 py-[3px] text-center font-mono text-[10px] text-noite-suave md:px-2.5 md:text-[10.5px]">
          {dominio}
        </span>
      </div>

      <a
        ref={ref}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${project.name} (nova aba)`}
        data-rolando={rolando || undefined}
        style={{ '--dur': `${duracao}s` }}
        className="tela relative block aspect-[16/10] overflow-hidden"
      >
        <img
          src={`${img}-720.webp`}
          srcSet={`${img}-720.webp 720w, ${img}-1200.webp 1200w`}
          sizes={
            featured
              ? '(min-width: 1024px) 760px, (min-width: 768px) 90vw, 85vw'
              : '(min-width: 1024px) 420px, (min-width: 768px) 45vw, 85vw'
          }
          loading="lazy"
          decoding="async"
          alt=""
          onLoad={aoCarregar}
          className="tela-img absolute inset-0 h-full w-full"
        />
      </a>
    </div>
  );
}

/** Convite no fim da vitrine. */
function CtaCard() {
  return (
    <Reveal className="luz-canto flex h-full min-h-[22rem] flex-col justify-between gap-7 rounded-2xl border border-noite-linha px-[22px] py-7 md:min-h-[420px] md:gap-8 md:p-8">
      <div>
        <p className="inline-flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.14em] text-noite-suave uppercase md:text-[11px]">
          <span aria-hidden="true" className="brilho relative h-[7px] w-[7px] rounded-full bg-acento" />
          Próxima da vitrine
        </p>
        <h3 className="mt-4 font-titulo text-[38px] leading-[0.95] font-semibold tracking-[-0.05em] md:mt-[18px] md:text-[44px]">
          <Suave>A sua página pode ser a</Suave> <Acento>próxima.</Acento>
        </h3>
        <p className="mt-4 text-[15px] leading-[1.55] text-noite-suave md:mt-[18px]">
          Me conte sobre o seu negócio e eu mostro como ficaria uma landing page feita para vender o que você vende.
        </p>
      </div>
      <a
        href={whatsappCom(
          'Olá, João! Vi a vitrine de landing pages no seu portfólio e quero uma página para o meu negócio.',
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center justify-center gap-2.5 rounded-full bg-noite-texto px-6 text-[15px] font-semibold text-noite transition-opacity hover:opacity-85 md:h-[52px] md:self-start"
      >
        <Balao />
        Quero uma página assim
        <span className="sr-only"> (abre o WhatsApp)</span>
      </a>
    </Reveal>
  );
}

export function Balao({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
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
  );
}
