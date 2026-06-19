import { motion } from 'framer-motion';
import { stack } from '../data/stack';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Stack() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mt-16">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-8"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Tecnologias
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stack.map(({ name, Icon }) => (
          <motion.div
            key={name}
            variants={itemVariants}
            className="flex items-center gap-2.5 px-4 py-3 rounded-lg cursor-default group transition-all duration-200"
            style={{
              backgroundColor: '#111827',
              border: '1px solid #1e2a3a',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00f0ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1e2a3a';
            }}
          >
            <Icon
              size={18}
              style={{ color: '#00f0ff', flexShrink: 0 }}
            />
            <span
              className="text-sm font-medium"
              style={{ fontFamily: "'Inter', sans-serif", color: '#ffffff' }}
            >
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA de transição */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p
          className="text-base mb-3"
          style={{ fontFamily: "'Inter', sans-serif", color: '#8892a4' }}
        >
          Quer ver o que já construí?
        </p>
        <button
          onClick={() => scrollTo('projetos')}
          className="font-semibold text-sm transition-all duration-200 group cursor-pointer"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#00f0ff' }}
        >
          Ver projetos{' '}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </motion.div>
    </div>
  );
}
