import { process } from '../data/process';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section
      id="como-trabalho"
      aria-labelledby="processo-titulo"
      className="bg-tinta py-24 text-creme md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-xs font-medium tracking-[0.14em] text-terracota-claro uppercase">Como trabalho</p>
          <h2 id="processo-titulo" className="font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
            Antes do código, <em className="text-terracota-claro">o seu negócio</em>.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#B9B2A3]">
            Escopo, prazo e valor combinados antes de começar, com atualizações durante todo o desenvolvimento.
          </p>
        </Reveal>

        <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 0.08} className="border-t border-white/15 pt-6">
              <span className="font-display text-5xl text-terracota-claro italic" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-[#B9B2A3]">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
