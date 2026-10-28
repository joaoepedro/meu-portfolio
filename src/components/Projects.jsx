import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { whatsappCom } from "../data/links";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

// Velocidade da rolagem automática das telas:
// segundos para descer o equivalente a uma tela do card.
// Mais alto = mais devagar.
const SEGUNDOS_POR_TELA = 1.5;

/*
 * Vitrine de landing pages
 * Cada projeto aparece numa "janela de navegador" com o print da página inteira.
 * Mouse em cima (ou foco pelo teclado): a tela rola de cima a baixo.
 * No celular, sem mouse: a tela rola sozinha quando o card está visível.
 */
export default function Projects() {
    const [destaque, ...outros] = projects;
    return (
        <section
            id="projetos"
            aria-labelledby="projetos-titulo"
            className="border-t border-linha py-24 md:py-32"
        >
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle
                    id="projetos-titulo"
                    kicker="Projetos"
                    title="Vitrine de landing pages"
                    text="Seis páginas para seis negócios diferentes, cada uma com briefing, copy, identidade visual e integrações próprias. Abra qualquer uma no celular ou no computador."
                />

                <Reveal>
                    <ProjectCard project={destaque} featured />
                </Reveal>

                <p
                    className="mt-12 mb-6 flex items-center gap-3 text-sm text-suave"
                    aria-hidden="true"
                >
                    <span className="h-px w-8 shrink-0 bg-linha" />
                    <span className="dica-mouse">
                        Passe o mouse sobre as telas para rolar a página inteira
                    </span>
                    <span className="dica-toque">
                        As telas rolam sozinhas enquanto você passa por elas
                    </span>
                </p>

                <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {outros.map((p, i) => (
                        <Reveal as="li" key={p.id} delay={(i % 3) * 0.08}>
                            <ProjectCard project={p} />
                        </Reveal>
                    ))}
                    <Reveal as="li" delay={0.16}>
                        <CtaCard />
                    </Reveal>
                </ul>
            </div>
        </section>
    );
}

function ProjectCard({ project, featured = false }) {
    const noAr = Boolean(project.url);
    const quero = whatsappCom(
        `Olá, João! Vi o projeto ${project.name} no seu portfólio e quero uma página assim para o meu negócio.`,
    );

    return (
        <article
            className={`flex h-full flex-col overflow-hidden rounded-2xl border border-linha bg-papel ${
                featured
                    ? "lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-center"
                    : ""
            }`}
        >
            <div className={featured ? "p-3 md:p-5 lg:pr-0" : "p-3"}>
                <BrowserFrame project={project} featured={featured} />
            </div>

            <div
                className={`flex flex-1 flex-col ${featured ? "p-7 pt-4 md:p-10" : "px-6 pt-3 pb-6"}`}
            >
                {featured && (
                    <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-musgo px-3 py-1 text-xs font-medium text-creme">
                        <span aria-hidden="true">★</span> Em destaque
                    </p>
                )}
                <p className="text-xs font-medium tracking-[0.12em] text-terracota-escuro uppercase">
                    {project.category}
                </p>
                <h3
                    className={`mt-2 font-display ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}
                >
                    {project.name}
                </h3>
                <p
                    className={`mt-3 leading-relaxed text-suave ${featured ? "" : "text-[0.95rem]"}`}
                >
                    {project.description}
                </p>

                <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label="Destaques"
                >
                    {project.highlights.map((h) => (
                        <li
                            key={h}
                            className="rounded-full border border-linha px-3 py-1 text-xs text-suave"
                        >
                            {h}
                        </li>
                    ))}
                </ul>

                <p className="mt-5 text-xs text-suave">{project.stack}</p>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {noAr ? (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-1.5 rounded-lg bg-tinta px-4 py-2.5 text-sm font-medium text-creme transition-colors hover:bg-musgo"
                        >
                            Ver no ar
                            <span className="sr-only">
                                : {project.name} (abre em nova aba)
                            </span>
                            <span
                                aria-hidden="true"
                                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            >
                                ↗
                            </span>
                        </a>
                    ) : (
                        <span className="inline-flex items-center rounded-lg border border-dashed border-linha px-4 py-2.5 text-sm text-suave">
                            Em breve no ar
                        </span>
                    )}
                    <a
                        href={quero}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg border-[1.5px] border-tinta px-4 py-2.5 text-sm font-medium transition-colors hover:bg-tinta hover:text-creme"
                    >
                        Quero uma assim
                        <span className="sr-only"> (abre o WhatsApp)</span>
                    </a>
                </div>
            </div>
        </article>
    );
}

/** Janela de navegador com o print da página inteira, que rola no hover. */
function BrowserFrame({ project, featured }) {
    const ref = useRef(null);
    const [duracao, setDuracao] = useState(15);
    const [rolando, setRolando] = useState(false);
    const img = `/projetos/${project.image}-pagina`;
    const dominio = project.url
        ? new URL(project.url).hostname
        : "publicação em breve";

    // Sem mouse (celular/tablet): rola sozinha enquanto a tela está bem visível
    useEffect(() => {
        const el = ref.current;
        if (!el || !window.matchMedia("(hover: none)").matches) return;
        const obs = new IntersectionObserver(
            ([e]) => setRolando(e.isIntersecting),
            { threshold: 0.7 },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // Páginas mais longas rolam por mais tempo: a velocidade fica igual em todos os cards.
    // A tela do card tem proporção 16:10, então a página tem (altura/largura) ÷ 0,625 telas.
    const aoCarregar = (e) => {
        const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
        if (!w) return;
        const telasParaDescer = h / w / 0.625 - 1;
        setDuracao(Math.max(6, telasParaDescer * SEGUNDOS_POR_TELA));
    };

    const Tela = project.url ? "a" : "div";
    const telaProps = project.url
        ? {
              href: project.url,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": `Abrir ${project.name} (nova aba)`,
          }
        : { "aria-hidden": true };

    return (
        <div className="overflow-hidden rounded-xl border border-linha bg-creme shadow-[0_18px_40px_-26px_rgba(27,26,23,0.5)]">
            {/* barra do navegador */}
            <div
                aria-hidden="true"
                className="flex items-center gap-3 border-b border-linha bg-areia/70 px-3 py-2"
            >
                <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-terracota/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-linha" />
                    <span className="h-2.5 w-2.5 rounded-full bg-linha" />
                </span>
                <span className="min-w-0 flex-1 truncate rounded-md bg-papel px-3 py-1 text-center text-[0.7rem] text-suave">
                    {dominio}
                </span>
            </div>

            <Tela
                ref={ref}
                {...telaProps}
                data-rolando={rolando || undefined}
                style={{ "--dur": `${duracao}s` }}
                className="tela relative block aspect-[16/10] overflow-hidden"
            >
                <img
                    src={`${img}-720.webp`}
                    srcSet={`${img}-720.webp 720w, ${img}-1200.webp 1200w`}
                    sizes={
                        featured
                            ? "(min-width: 1024px) 620px, 100vw"
                            : "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    }
                    loading="lazy"
                    decoding="async"
                    alt=""
                    onLoad={aoCarregar}
                    className="tela-img absolute inset-0 h-full w-full"
                />
            </Tela>
        </div>
    );
}

/** Último card da vitrine: convite para o próximo projeto. */
function CtaCard() {
    return (
        <div className="relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-2xl bg-tinta p-8 text-creme">
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full border border-terracota-claro/40"
            />
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-full border border-terracota-claro/25"
            />
            <div>
                <p className="text-xs font-medium tracking-[0.14em] text-terracota-claro uppercase">
                    Próxima da vitrine
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-balance">
                    A sua página pode ser a{" "}
                    <em className="text-terracota-claro">próxima</em>.
                </h3>
                <p className="mt-4 leading-relaxed text-creme/75">
                    Me conte sobre o seu negócio e eu mostro como ficaria uma
                    landing page feita para vender o que você vende.
                </p>
            </div>
            <a
                href={whatsappCom(
                    "Olá, João! Vi a vitrine de landing pages no seu portfólio e quero uma página para o meu negócio.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center rounded-lg bg-creme px-5 py-3 text-sm font-medium text-tinta transition-colors hover:bg-terracota-claro"
            >
                Quero uma página assim
                <span className="sr-only"> (abre o WhatsApp)</span>
            </a>
        </div>
    );
}
