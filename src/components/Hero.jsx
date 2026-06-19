import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-1 mb-4">
            <h1
              className="text-5xl md:text-7xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
            >
              João Pedro
            </h1>
            <span className="cursor-blink" aria-hidden="true" />
          </div>

          <p
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#00f0ff' }}
          >
            Desenvolvimento web que funciona — do zero ao ar.
          </p>

          <p
            className="text-base md:text-lg max-w-xl mb-10"
            style={{ fontFamily: "'Inter', sans-serif", color: '#8892a4' }}
          >
            Criação de landing pages, interfaces e soluções sob medida para o seu negócio.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('projetos')}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
              style={{
                backgroundColor: '#00f0ff',
                color: '#0a0a0f',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Ver projetos
            </button>
            <a
              href="https://wa.me/5516994142162"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-cyan-400/10 active:scale-95"
              style={{
                border: '1px solid #00f0ff',
                color: '#00f0ff',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Falar comigo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
