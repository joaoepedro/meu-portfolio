import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.9)',
        borderBottom: scrolled ? '1px solid #1e2a3a' : '1px solid transparent',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('sobre')}
          className="font-bold text-lg tracking-tight cursor-pointer"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#00f0ff' }}
        >
          &lt;JP /&gt;
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink onClick={() => scrollTo('sobre')}>Sobre</NavLink>
          <NavLink onClick={() => scrollTo('projetos')}>Projetos</NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: '#ffffff',
              transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: '#ffffff',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: '#ffffff',
              transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ borderTop: '1px solid #1e2a3a' }}
        >
          <NavLink onClick={() => scrollTo('sobre')}>Sobre</NavLink>
          <NavLink onClick={() => scrollTo('projetos')}>Projetos</NavLink>
        </div>
      )}
    </nav>
  );
}

function NavLink({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium cursor-pointer relative group"
      style={{ color: '#8892a4', fontFamily: "'Inter', sans-serif" }}
    >
      {children}
      <span
        className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: '#00f0ff' }}
      />
    </button>
  );
}
