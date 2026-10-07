import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { links } from '../data/links';

const sociais = [
  { href: links.whatsapp, label: 'WhatsApp', Icon: FaWhatsapp, externo: true },
  { href: links.linkedin, label: 'LinkedIn', Icon: FiLinkedin, externo: true },
  { href: links.github, label: 'GitHub', Icon: FiGithub, externo: true },
  { href: links.email, label: 'E-mail', Icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-linha">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-suave">
          <span className="font-display text-base font-semibold text-tinta italic">João Pedro</span> · Desenvolvedor web ·{' '}
          {new Date().getFullYear()}
        </p>
        <ul className="flex items-center gap-2">
          {sociais.map(({ href, label, Icon, externo }) => (
            <li key={label}>
              <a
                href={href}
                {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-suave transition-colors hover:bg-areia hover:text-tinta"
              >
                <Icon size={19} aria-hidden="true" focusable="false" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
