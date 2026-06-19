import { FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="py-8 mt-auto"
      style={{ borderTop: '1px solid #1e2a3a', backgroundColor: '#0a0a0f' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <SocialLink href="https://github.com/joaoepedro" label="GitHub">
            <FiGithub size={20} />
          </SocialLink>
          <SocialLink href="https://wa.me/5516994142162" label="WhatsApp">
            <FaWhatsapp size={20} />
          </SocialLink>
        </div>

        <p
          className="text-sm"
          style={{ fontFamily: "'Inter', sans-serif", color: '#8892a4' }}
        >
          Desenvolvido por João Pedro · 2026
        </p>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="transition-colors duration-200"
      style={{ color: '#8892a4' }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#8892a4')}
    >
      {children}
    </a>
  );
}
