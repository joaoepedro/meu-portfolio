import { motion } from 'framer-motion';

/**
 * Esboço de landing page com anotações: mostra que cada bloco
 * da página tem uma função na venda.
 *
 * Anotações alternadas (dos dois lados) só quando há espaço:
 * de 640 a 1023px (coluna única) e a partir de 1280px.
 * No celular e entre 1024 e 1279px (coluna estreita ao lado do texto),
 * todas ficam à direita do esboço, para não serem cortadas.
 */
// Blocos do esboço: posição e altura em % da altura da página
const blocos = [
  { top: 7, h: 2.5, w: 30, cor: 'bg-linha rounded-full' },   // chamada
  { top: 12, h: 5.5, w: 85, cor: 'bg-tinta rounded' },       // título, linha 1
  { top: 20, h: 5.5, w: 55, cor: 'bg-tinta rounded' },       // título, linha 2
  { top: 29, h: 2.5, w: 70, cor: 'bg-linha rounded-full' },  // subtítulo
  { top: 36, h: 7.5, w: 48, cor: 'bg-terracota rounded-md' }, // botão
  { top: 91, h: 2.5, w: 45, cor: 'bg-linha rounded-full' },  // rodapé
];

// "centro" = meio vertical do bloco que a anotação aponta
const notas = [
  { texto: 'a dor do cliente', centro: 18.75, lado: 'esquerda' },
  { texto: 'uma ação clara', centro: 39.75, lado: 'direita' },
  { texto: 'benefícios', centro: 56.5, lado: 'esquerda' },
  { texto: 'prova social', centro: 76.5, lado: 'direita' },
];

const surgir = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function HeroSketch() {
  return (
    <figure className="relative mx-auto aspect-[46/40] w-full max-w-[460px]" aria-label="Esboço de uma landing page com a função de cada parte">
      {/* A página */}
      <motion.div
        {...surgir(0.15)}
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[56%] rounded-xl border border-linha bg-papel shadow-[0_20px_50px_-24px_rgba(27,26,23,0.4)] sm:left-[22%] lg:left-0 xl:left-[22%]"
      >
        {blocos.map((b) => (
          <span
            key={b.top}
            className={`absolute left-[9%] ${b.cor}`}
            style={{ top: `${b.top}%`, height: `${b.h}%`, width: `${b.w * 0.82}%` }}
          />
        ))}
        {/* benefícios */}
        <span className="absolute top-[49%] left-[9%] grid h-[15%] w-[82%] grid-cols-3 gap-[6%]">
          <span className="rounded-md bg-areia" />
          <span className="rounded-md bg-areia" />
          <span className="rounded-md bg-areia" />
        </span>
        {/* prova social */}
        <span className="absolute top-[70%] left-[9%] h-[13%] w-[82%] rounded-md border-[1.5px] border-dashed border-musgo/60" />
      </motion.div>

      {/* As anotações */}
      <figcaption>
        <ul>
          {notas.map((n, i) => (
            <motion.li
              key={n.texto}
              {...surgir(0.45 + i * 0.15)}
              // o Framer Motion controla o transform, então a centralização é feita no top
              style={{ top: `calc(${n.centro}% - 0.75em)` }}
              className={`absolute left-[59%] flex items-center leading-[1.5em] gap-2 font-display text-[0.95rem] whitespace-nowrap text-musgo italic sm:text-base ${
                n.lado === 'esquerda'
                  ? 'sm:right-[81%] sm:left-auto sm:flex-row-reverse lg:right-auto lg:left-[59%] lg:flex-row xl:right-[81%] xl:left-auto xl:flex-row-reverse'
                  : 'sm:left-[81%] lg:left-[59%] xl:left-[81%]'
              }`}
            >
              <span aria-hidden="true" className="h-px w-5 shrink-0 bg-musgo sm:w-7" />
              {n.texto}
            </motion.li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
