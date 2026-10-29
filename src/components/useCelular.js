import { useEffect, useState } from 'react';

/**
 * true abaixo de 768px, onde a vitrine e as etapas viram carrosséis.
 * Serve para o carrossel só entrar na ordem do Tab quando ele rola de verdade.
 */
export default function useCelular() {
  const consulta = '(max-width: 47.99rem)';
  const [celular, setCelular] = useState(() => window.matchMedia(consulta).matches);

  useEffect(() => {
    const mq = window.matchMedia(consulta);
    const aoMudar = () => setCelular(mq.matches);
    mq.addEventListener('change', aoMudar);
    return () => mq.removeEventListener('change', aoMudar);
  }, []);

  return celular;
}
