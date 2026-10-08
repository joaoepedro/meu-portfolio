import { motion } from 'framer-motion';
import { links } from '../data/links';
import HeroSketch from './HeroSketch';

const entrada = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.p {...entrada(0)} className="mb-5 text-xs font-medium tracking-[0.14em] text-terracota-escuro uppercase">
            Desenvolvedor web · landing pages e sistemas
          </motion.p>
          {/* O título é o maior elemento da primeira tela (LCP):
              entra só com deslocamento, sem esperar o fade */}
          <motion.h1
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            id="hero-titulo"
            className="font-display text-[2.75rem] leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Páginas que fazem visita virar <em className="text-terracota">cliente</em>.
          </motion.h1>
          <motion.p {...entrada(0.12)} className="mt-6 max-w-[34ch] text-lg leading-relaxed text-suave md:text-xl">
            Da pesquisa e da copy ao site no ar, com integrações e medição de anúncios. Feito para vender, não só para
            ficar bonito.
          </motion.p>
          <motion.div {...entrada(0.18)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-lg bg-tinta px-6 py-3.5 font-medium text-creme transition-colors hover:bg-musgo"
            >
              Ver projetos
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-[1.5px] border-tinta px-6 py-3.5 font-medium transition-colors hover:bg-tinta hover:text-creme"
            >
              Falar comigo
            </a>
          </motion.div>
        </div>

        {/* Projeto em destaque, em forma de janela de navegador */}
        <HeroSketch />
      </div>

    </section>
  );
}
