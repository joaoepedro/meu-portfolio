import { links } from '../data/links';

/* Rodapé: fecha a "contracapa" do contato e a moldura editorial aberta no hero. */
export default function Footer() {
  const link = 'inline-flex min-h-11 items-center transition-colors hover:text-noite-texto';
  return (
    <footer className="secao">
      <div className="flex flex-col items-center gap-1 border-y border-noite-linha py-3 font-mono text-[10.5px] tracking-[0.14em] text-noite-suave uppercase md:flex-row md:justify-between md:text-[11px]">
        {/* no celular, os botões do contato logo acima já levam ao WhatsApp e ao Instagram */}
        <ul className="hidden flex-wrap items-center justify-center gap-x-6 md:flex">
          <li>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
              WhatsApp <span aria-hidden="true">&nbsp;↗</span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className={link}>
              Instagram <span aria-hidden="true">&nbsp;↗</span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a href="#topo" className={link}>
              Voltar ao topo <span aria-hidden="true">&nbsp;↑</span>
            </a>
          </li>
        </ul>
        <p className="py-2 text-center md:order-first md:py-0 md:text-left">João Pedro · desenvolvedor web · {new Date().getFullYear()}</p>
      </div>
      <div aria-hidden="true" className="h-10 md:h-14" />
    </footer>
  );
}
