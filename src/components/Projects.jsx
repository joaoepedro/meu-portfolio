import { projects } from '../data/projects';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function Projects() {
  const [destaque, ...outros] = projects;
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="border-t border-linha py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          id="projetos-titulo"
          kicker="Projetos"
          title="Páginas no ar"
          text="Projetos de portfólio com briefing, copy, identidade visual e integrações. Clique para ver cada um funcionando."
        />

        <Reveal>
          <ProjectCard project={destaque} featured />
        </Reveal>

        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {outros.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }) {
  const img = `/projetos/${project.image}`;
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-linha bg-papel transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_rgba(27,26,23,0.45)] ${
        featured ? 'lg:grid lg:grid-cols-[1.25fr_1fr]' : ''
      }`}
    >
      <div className="overflow-hidden border-b border-linha lg:border-b-0">
        <img
          src={`${img}-640.webp`}
          srcSet={`${img}-640.webp 640w, ${img}-1200.webp 1200w`}
          sizes={featured ? '(min-width: 1024px) 620px, 100vw' : '(min-width: 768px) 360px, 100vw'}
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
          alt=""
          className="aspect-[16/10] h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className={`flex flex-1 flex-col ${featured ? 'p-7 md:p-10' : 'p-6'}`}>
        <p className="text-xs font-medium tracking-[0.12em] text-terracota-escuro uppercase">{project.category}</p>
        <h3 className={`mt-2 font-display ${featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>{project.name}</h3>
        <p className="mt-3 leading-relaxed text-suave">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Destaques">
          {project.highlights.map((h) => (
            <li key={h} className="rounded-full border border-linha px-3 py-1 text-xs text-suave">
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="text-xs text-suave">{project.stack}</span>
          {/* O ::after estica o link pelo card inteiro: o card todo é clicável */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-tinta after:absolute after:inset-0 after:content-[''] hover:text-terracota-escuro"
          >
            Ver projeto<span className="sr-only">: {project.name} (abre em nova aba)</span>{' '}
            <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
