import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Projetos
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col p-6 rounded-xl transition-all duration-300 group"
      style={{
        backgroundColor: '#111827',
        border: '1px solid #1e2a3a',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#00f0ff';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 240, 255, 0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#1e2a3a';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h3
        className="text-lg font-bold mb-2"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
      >
        {project.name}
      </h3>

      <p
        className="text-sm leading-relaxed mb-4 flex-1 line-clamp-2"
        style={{ fontFamily: "'Inter', sans-serif", color: '#8892a4' }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(0, 240, 255, 0.08)',
              color: '#00f0ff',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold group/link inline-flex items-center gap-1 w-fit transition-all duration-200"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#00f0ff' }}
      >
        <span className="group-hover/link:underline">Ver projeto</span>
        <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
          →
        </span>
      </a>
    </motion.div>
  );
}
