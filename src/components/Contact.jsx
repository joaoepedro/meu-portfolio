import { links } from '../data/links';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="px-4 pb-24 md:px-6 md:pb-32">
      <Reveal className="mx-auto max-w-6xl rounded-3xl bg-musgo px-6 py-16 text-center text-creme md:px-16 md:py-24">
        <p className="mb-4 text-xs font-medium tracking-[0.14em] text-[#C9D6C4] uppercase">Contato</p>
        <h2 id="contato-titulo" className="mx-auto max-w-[18ch] font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
          Tem um projeto em mente?
        </h2>
        <p className="mx-auto mt-5 max-w-[42ch] text-lg leading-relaxed text-[#DCE4D8]">
          Me conta o que você precisa. Eu respondo rápido, já com uma ideia de escopo, prazo e valor.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-creme px-6 py-3.5 font-medium text-tinta transition-colors hover:bg-white"
          >
            Conversar no WhatsApp
          </a>
          <a
            href={links.email}
            className="rounded-lg border-[1.5px] border-creme/70 px-6 py-3.5 font-medium transition-colors hover:bg-creme hover:text-tinta"
          >
            Enviar e-mail
          </a>
        </div>
      </Reveal>
    </section>
  );
}
