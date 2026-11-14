import { useState } from 'react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import SectionTitle, { Suave, Acento } from './SectionTitle';
import Reveal from './Reveal';
import useCelular from './useCelular';

/*
 * 02 · O que desenvolvo — cada serviço responde a um objetivo do cliente.
 * Computador: duas colunas, "Você quer…" e "Eu entrego", tudo aberto.
 * Celular: lista que abre e fecha; o primeiro serviço começa aberto.
 */

function Exemplos({ ids }) {
  if (!ids.length) return null;
  return (
    <p className="mt-3.5 font-mono text-xs text-noite-suave">
      exemplos:{' '}
      {ids.map((id, i) => {
        const p = projects.find((x) => x.id === id);
        return (
          <span key={id}>
            {i > 0 && ' · '}
            {p ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-noite-texto underline decoration-noite-linha underline-offset-4 transition-colors hover:decoration-acento"
              >
                {p.name}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            ) : (
              <span className="font-medium text-noite-texto">{id}</span>
            )}
          </span>
        );
      })}
    </p>
  );
}

const Seta = () => (
  <span aria-hidden="true" className="text-acento">
    →
  </span>
);

export default function Services() {
  const celular = useCelular();
  const [aberto, setAberto] = useState(0);

  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="secao pt-24 md:pt-32 lg:pt-40">
      <SectionTitle id="servicos-titulo" numero="02" rotulo="Serviços">
        <Suave>O que</Suave>{' '}
        <br />
        desenvolvo<Acento>.</Acento>
      </SectionTitle>

      {/* cabeçalho das colunas (computador) */}
      <div aria-hidden="true" className="rotulo mt-16 hidden grid-cols-2 gap-6 pb-3.5 md:grid">
        <span>Você quer…</span>
        <span>Eu entrego</span>
      </div>

      <ul className="mt-9 border-t border-noite-linha md:mt-0">
        {services.map((s, i) => {
          if (celular) {
            const expandido = aberto === i;
            const painel = `servico-${i}`;
            return (
              <li key={s.titulo} className="border-b border-noite-linha">
                <h3>
                  <button
                    type="button"
                    aria-expanded={expandido}
                    aria-controls={painel}
                    onClick={() => setAberto(expandido ? -1 : i)}
                    className="grid w-full grid-cols-[1fr_28px] items-center gap-x-3 py-[22px] text-left"
                  >
                    <span>
                      <span className="mb-1.5 block font-mono text-[10.5px] tracking-[0.16em] text-acento uppercase">
                        Você quer
                      </span>
                      <span
                        className={`block font-titulo text-[26px] leading-[1.02] font-medium tracking-[-0.04em] transition-colors ${
                          expandido ? 'text-noite-texto' : 'text-noite-suave'
                        }`}
                      >
                        {s.objetivo}
                      </span>
                      <span className="mt-1.5 block text-base font-semibold">
                        <Seta /> {s.titulo}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-base transition-colors ${
                        expandido ? 'border-noite-texto bg-noite-texto text-noite' : 'border-noite-linha'
                      }`}
                    >
                      {expandido ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div id={painel} hidden={!expandido} className="pb-6">
                  <p className="text-[15px] leading-[1.6] text-noite-suave">{s.texto}</p>
                  <Exemplos ids={s.exemplos} />
                </div>
              </li>
            );
          }

          return (
            <Reveal
              as="li"
              key={s.titulo}
              className="grid grid-cols-2 items-start gap-6 border-b border-noite-linha py-9 lg:py-10"
            >
              <p className="flex gap-[18px] font-titulo text-[clamp(1.75rem,2.7vw,2.375rem)] leading-none font-medium tracking-[-0.045em] text-noite-suave">
                <Seta />
                {s.objetivo}
              </p>
              <div>
                <h3 className="font-titulo text-[28px] leading-none font-semibold tracking-[-0.04em]">{s.titulo}</h3>
                <p className="mt-2.5 max-w-[52ch] text-base leading-[1.6] text-noite-suave">{s.texto}</p>
                <Exemplos ids={s.exemplos} />
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
