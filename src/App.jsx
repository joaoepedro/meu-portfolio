import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh' }}>
      <Navbar />

      {/* Seção Sobre */}
      <Hero />

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <About />
        <Stack />
      </div>

      {/* Seção Projetos */}
      <div style={{ borderTop: '1px solid #1e2a3a' }}>
        <Projects />
      </div>

      <Footer />
    </div>
  );
}
