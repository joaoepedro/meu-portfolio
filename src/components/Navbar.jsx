import { useEffect, useState } from 'react';
import { links } from '../data/links';

const items = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#como-trabalho', label: 'Como trabalho' },
  { href: '#sobre', label: 'Sobre' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Esc fecha o menu do celular
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-linha bg-creme/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#topo" className="font-display text-xl font-semibold italic" onClick={() => setOpen(false)}>
          João Pedro
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-suave transition-colors hover:text-tinta">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="rounded-full bg-tinta px-4 py-2 text-sm font-medium text-creme transition-colors hover:bg-musgo"
            >
              Contato
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-celular"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={`block h-0.5 w-6 bg-tinta transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-tinta transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-tinta transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      <div id="menu-celular" hidden={!open} className="border-t border-linha px-6 pb-6 md:hidden">
        <ul className="flex flex-col">
          {[...items, { href: '#contato', label: 'Contato' }].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-linha py-4 font-display text-2xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex justify-center rounded-lg bg-tinta px-5 py-3.5 font-medium text-creme"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
