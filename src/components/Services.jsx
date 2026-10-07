import { services } from '../data/services';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="border-t border-linha bg-papel py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          id="servicos-titulo"
          kicker="Serviços"
          title="O que eu desenvolvo"
          text="Do primeiro contato com o seu cliente ao processo que acontece depois da venda."
        />
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-linha bg-linha sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06} className="bg-papel p-8 md:p-10">
              <span className="font-display text-sm text-terracota-escuro italic" aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-suave">{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
