import { services } from '../data/services';
import SectionTitle, { Suave, Acento } from './SectionTitle';
import Reveal from './Reveal';

/* 03 · Serviços — grade de réguas finas, como uma página de revista. */
export default function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="secao pt-24 md:pt-32 lg:pt-40">
      <SectionTitle
        id="servicos-titulo"
        numero="03"
        rotulo="Serviços"
        texto="Do primeiro contato com o seu cliente ao processo que acontece depois da venda."
      >
        <Suave>O que eu</Suave>{' '}
        <br />
        desenvolvo<Acento>.</Acento>
      </SectionTitle>

      <ul className="mt-9 grid border-t border-noite-linha md:mt-16 md:grid-cols-2 md:border-l">
        {services.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            delay={(i % 2) * 0.06}
            className="border-b border-noite-linha py-7 md:border-r md:px-8 md:py-9 lg:px-10 lg:py-11"
          >
            <span aria-hidden="true" className="font-mono text-xs text-noite-suave">
              0{i + 1}
            </span>
            <h3 className="mt-3 font-titulo text-[28px] leading-none font-semibold tracking-[-0.04em] md:text-[32px]">{s.title}</h3>
            <p className="mt-3 max-w-[46ch] text-[15px] leading-[1.6] text-noite-suave md:text-base">{s.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
