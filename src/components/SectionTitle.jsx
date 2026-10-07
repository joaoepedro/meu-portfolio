import Reveal from './Reveal';

export default function SectionTitle({ kicker, title, text, id }) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 text-xs font-medium tracking-[0.14em] text-terracota-escuro uppercase">
        {kicker}
      </p>
      <h2 id={id} className="font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-suave">{text}</p>}
    </Reveal>
  );
}
