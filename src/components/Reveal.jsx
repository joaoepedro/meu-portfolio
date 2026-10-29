import { useEffect, useRef, useState } from 'react';

/**
 * Aparece suavemente quando entra na tela (uma vez só): sobe 24px e ganha opacidade.
 * A transição fica em index.css (.revelar); com "reduzir movimento", aparece direto.
 */
export default function Reveal({ as = 'div', delay = 0, className = '', children }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setVisivel(true);
        obs.disconnect();
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`revelar ${className}`}
      data-visivel={visivel || undefined}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
