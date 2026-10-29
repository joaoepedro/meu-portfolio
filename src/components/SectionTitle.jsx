import Reveal from './Reveal';

/**
 * Abertura de seção na identidade "Noite de revista":
 * rótulo em mono ("— 02 · Como trabalho"), título grotesco e, no computador,
 * um texto curto alinhado à direita.
 * O título vem como children: 1ª parte em <Suave>, final em <Acento>.
 */
export default function SectionTitle({ numero, rotulo, id, texto, children }) {
  return (
    <Reveal className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-x-6">
      <div className="lg:col-span-8">
        <p className="rotulo mb-[18px] md:mb-[22px]">
          — {numero} · {rotulo}
        </p>
        <h2
          id={id}
          className="font-titulo text-[clamp(2.625rem,5vw,4.5rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-balance md:leading-[0.92]"
        >
          {children}
        </h2>
      </div>
      {texto && (
        <p className="text-base leading-[1.55] text-noite-suave md:text-[17px] lg:col-span-4 lg:col-start-9 lg:mb-1.5">
          {texto}
        </p>
      )}
    </Reveal>
  );
}

export const Suave = ({ children }) => <span className="font-medium text-noite-suave">{children}</span>;
export const Acento = ({ children }) => <span className="text-acento">{children}</span>;
