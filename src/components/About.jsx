import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2
        className="text-2xl md:text-3xl font-bold mb-6"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
      >
        Sobre mim
      </h2>
      <p
        className="text-base md:text-lg leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif", color: '#8892a4' }}
      >
        Sou João Pedro, desenvolvedor web com 26 anos, graduado em Tecnologia da
        Informação pela UNIVESP. Atuei por mais de dois anos como desenvolvedor em
        empresa de software, onde trabalhei com desenvolvimento de sistemas,
        automações e integrações. Hoje atuo como freelancer, entregando soluções
        digitais com foco em resultado.
      </p>
    </motion.div>
  );
}
