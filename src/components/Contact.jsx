import { links } from '../data/links';
import Reveal from './Reveal';
import { Suave, Acento } from './SectionTitle';
import { Balao } from './Projects';

export function IconeInstagram({ size = 17 }) {
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
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

/*
 * 04 · Contato — a "contracapa": fecha a página com a mesma moldura do hero,
 * o "jotap." grande com o ponto aceso e os dois caminhos (WhatsApp e Instagram).
 * O rodapé (Footer.jsx) vem logo abaixo e fecha a moldura.
 */
export default function Contact() {
  const botao =
    'inline-flex h-14 w-full max-w-[18rem] items-center justify-center gap-2.5 rounded-full px-7 text-[15px] font-semibold whitespace-nowrap transition-opacity hover:opacity-85 sm:w-auto sm:max-w-none';

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="secao pt-24 md:pt-32 lg:pt-40">
      <Reveal className="relative overflow-hidden border-t border-noite-linha pt-6 pb-16 text-center md:pt-7 md:pb-24">
        {/* ponto de luz atrás do símbolo */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[38%] left-1/2 h-[440px] w-[560px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(228,83,47,0.32),transparent_58%)] md:h-[600px] md:w-[900px]"
        />

        <div className="relative flex justify-between text-left">
          <p className="rotulo">— 04 · Contato</p>
          <p aria-hidden="true" className="rotulo hidden md:block">
            Fim da edição Nº 01
          </p>
        </div>

        <p
          aria-hidden="true"
          className="relative mt-12 font-mono text-[clamp(4rem,19vw,8.75rem)] leading-none font-medium tracking-[-0.04em] md:mt-20"
        >
          jotap
          <span className="brilho relative ml-[0.04em] inline-block h-[0.24em] w-[0.24em] rounded-full bg-acento shadow-[0_0_50px_14px_rgba(228,83,47,0.5)]" />
        </p>

        <h2
          id="contato-titulo"
          className="relative mt-9 font-titulo text-[clamp(2rem,9vw,2.5rem)] leading-[0.98] font-semibold tracking-[-0.05em] md:mt-12 md:text-[64px] md:leading-[0.95]"
        >
          <Suave>Ainda pensando</Suave> <br className="md:hidden" />
          no seu <Acento>site?</Acento>
        </h2>
        <p className="relative mx-auto mt-4 max-w-[34ch] text-base leading-[1.55] text-noite-suave md:mt-5 md:max-w-[44ch] md:text-lg">
          Enquanto você pensa, o seu concorrente aparece primeiro no Google. Bora mudar isso?
        </p>

        <div className="relative mt-9 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:mt-10">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`${botao} bg-noite-texto text-noite`}
          >
            <Balao size={17} />
            Conversar no WhatsApp
            <span className="sr-only"> (abre o WhatsApp)</span>
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${botao} border border-noite-suave hover:bg-noite-texto hover:text-noite hover:opacity-100`}
          >
            <IconeInstagram />
            Seguir {links.instagramArroba}
            <span className="sr-only"> no Instagram (abre em nova aba)</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
