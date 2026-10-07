import { stack } from '../data/stack';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* O título fica acima das duas colunas, para o texto e a lista de
            tecnologias começarem na mesma altura */}
        <SectionTitle id="sobre-titulo" kicker="Sobre mim" title="Experiência de empresa, atenção de freelancer" />

        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal className="space-y-5 text-lg leading-relaxed text-suave">
            <p>
              Sou João Pedro, desenvolvedor web formado em Tecnologia da Informação pela UNIVESP. Passei mais de 3 anos
              em empresas de software, criando portais web, APIs e automações para escritórios de contabilidade, do
              levantamento com o cliente até a entrada em produção.
            </p>
            <p>
              Também integrei um sistema de gestão a lojas virtuais como VTEX e Linx, sincronizando produtos, estoque e
              pedidos de cerca de 40 clientes. E escrevi tutoriais e bases de conhecimento usados no treinamento de
              equipes, por isso explico a parte técnica sem complicar.
            </p>
            <p>
              Hoje trabalho como freelancer, levando essa experiência para landing pages, sites e sistemas sob medida.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="mb-5 text-xs font-medium tracking-[0.14em] text-terracota-escuro uppercase">Tecnologias</h3>
            <ul className="grid grid-cols-2 gap-3">
              {stack.map(({ name, Icon }) => (
                <li key={name} className="flex items-center gap-3 rounded-lg border border-linha bg-papel px-4 py-3 text-sm">
                  <Icon size={18} className="shrink-0 text-musgo" aria-hidden="true" focusable="false" />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
