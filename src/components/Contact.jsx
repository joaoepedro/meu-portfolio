import { links } from '../data/links';
import Reveal from './Reveal';
import { Suave, Acento } from './SectionTitle';
import { Balao } from './Projects';

/* 04 · Contato — o mesmo ponto de luz do hero, num bloco que fecha a página. */
export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="secao pt-24 md:pt-32 lg:pt-40">
      <Reveal className="luz-canto rounded-3xl border border-noite-linha px-[22px] py-12 md:px-14 md:py-20 lg:px-20 lg:py-24">
        <p className="rotulo mb-[18px] md:mb-[22px]">— 04 · Contato</p>
        <h2
          id="contato-titulo"
          className="mx-auto max-w-[14ch] text-center text-balance font-titulo text-[clamp(2.625rem,6vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.05em] md:leading-[0.92]"
        >
          <Suave>Tem um projeto</Suave> em <Acento>mente?</Acento>
        </h2>
        <p className="mx-auto mt-5 max-w-[44ch] text-center text-base leading-[1.55] text-noite-suave md:mt-7 md:text-lg">
          Me conta o que você precisa. Eu respondo rápido, já com uma ideia de escopo, prazo e valor.
        </p>
        <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center md:mt-11">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-noite-texto px-[30px] text-[15px] font-semibold text-noite transition-opacity hover:opacity-85"
          >
            <Balao size={17} />
            Conversar no WhatsApp
            <span className="sr-only"> (abre o WhatsApp)</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
