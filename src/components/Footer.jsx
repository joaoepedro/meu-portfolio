import { links } from '../data/links';

/* Rodapé: fecha a moldura editorial aberta no topo do hero. */
export default function Footer() {
  const link = 'inline-flex min-h-11 items-center transition-colors hover:text-noite-texto';
  return (
    <footer className="secao mt-24 md:mt-32 lg:mt-[140px]">
      <div aria-hidden="true" className="h-px bg-noite-linha" />
      <div className="flex flex-col items-center gap-1 py-4 font-mono text-[10.5px] tracking-[0.14em] text-noite-suave uppercase md:flex-row md:justify-between md:pt-3 md:pb-4 md:text-[11px]">
        <p className="order-2 py-2 md:order-none md:py-0">João Pedro · desenvolvedor web · {new Date().getFullYear()}</p>
        <ul className="flex items-center gap-6">
          <li>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
              WhatsApp <span aria-hidden="true">&nbsp;↗</span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a href="#topo" className={link}>
              Voltar ao topo <span aria-hidden="true">&nbsp;↑</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
