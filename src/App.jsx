import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    // reducedMotion="user": quem ativa "reduzir movimento" no sistema
    // vê o conteúdo sem deslocamentos
    <MotionConfig reducedMotion="user">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-tinta focus:px-4 focus:py-2 focus:text-creme"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
