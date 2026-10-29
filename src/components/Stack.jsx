import { stack } from '../data/stack';

/**
 * Faixa das tecnologias, rolando devagar entre duas réguas finas.
 * A lista aparece duas vezes para o loop não ter emenda; a cópia fica escondida
 * do leitor de tela. Com "reduzir movimento", a faixa para e quebra em linhas.
 */
function Lista({ copia = false }) {
  return (
    <ul
      aria-hidden={copia || undefined}
      className={`flex shrink-0 items-center gap-7 px-3.5 py-5 font-mono text-[13px] whitespace-nowrap md:gap-11 md:px-[22px] md:py-[26px] md:text-sm md:tracking-[0.02em] ${
        copia ? 'esteira-copia' : ''
      }`}
    >
      {stack.map((nome) => [
        <li key={nome}>{nome}</li>,
        <li key={`${nome}-ponto`} aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-acento" />,
      ])}
    </ul>
  );
}

export default function Stack() {
  return (
    <section aria-label="Tecnologias que uso" className="mt-24 overflow-hidden border-y border-noite-linha md:mt-32 lg:mt-[140px]">
      <div className="esteira flex w-max">
        <Lista />
        <Lista copia />
      </div>
    </section>
  );
}
