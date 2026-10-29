import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Process from './components/Process';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-noite-texto focus:px-4 focus:py-2 focus:font-semibold focus:text-noite"
      >
        Pular para o conteúdo
      </a>
      {/* Sem menu de navegação: a direção "4.2a revisada" tira o menu do topo */}
      <main id="conteudo">
        <Hero />
        <Projects />
        <Stack />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
