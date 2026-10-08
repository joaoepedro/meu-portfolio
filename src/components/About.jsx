import { stack } from '../data/stack';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle id="sobre-titulo" kicker="Sobre mim" title="Experiência de empresa, atenção de freelancer" />

        {/* Texto e foto lado a lado; no celular a foto vem antes do texto */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal className="order-2 space-y-5 text-lg leading-relaxed text-suave lg:order-1">
            <p>
              Sou o João Pedro, desenvolvedor web formado em Tecnologia da Informação. Trabalhei por mais de 4 anos
              em empresas de software, criando portais web, APIs e automações para escritórios, do
              levantamento com o cliente até a entrada em produção.
            </p>
            <p>
              Também integrei sistemas de gestão a lojas virtuais como VTEX e Linx, sincronizando produtos, estoque e
              pedidos de cerca de 40 clientes. E escrevi tutoriais e bases de conhecimento usados no treinamento de
              equipes, por isso explico a parte técnica sem complicar.
            </p>
            <p>
              Hoje trabalho como freelancer, levando essa experiência para landing pages, sites e sistemas sob medida.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="order-1 lg:order-2">
            <figure className="relative mx-auto w-full max-w-[240px] lg:max-w-[340px]">
              <div aria-hidden="true" className="absolute -inset-3 -z-10 -rotate-2 rounded-3xl bg-musgo/90" />
              <img
                src="/img/joao-pedro-480.webp"
                srcSet="/img/joao-pedro-480.webp 480w, /img/joao-pedro-960.webp 960w"
                sizes="(min-width: 1024px) 340px, 240px"
                width="960"
                height="1200"
                loading="lazy"
                decoding="async"
                alt="João Pedro, desenvolvedor web"
                className="block aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </figure>
          </Reveal>
        </div>

        {/* Tecnologias em faixa larga, abaixo das duas colunas */}
        <Reveal className="mt-16 md:mt-20">
          <h3 className="mb-5 text-xs font-medium tracking-[0.14em] text-terracota-escuro uppercase">Tecnologias</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {stack.map(({ name, Icon }) => (
              <li key={name} className="flex items-center gap-3 rounded-lg border border-linha bg-papel px-4 py-3 text-sm">
                <Icon size={18} className="shrink-0 text-musgo" aria-hidden="true" focusable="false" />
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
