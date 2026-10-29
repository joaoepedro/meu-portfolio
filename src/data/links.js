// Contato do site: só o WhatsApp (no hero, na vitrine, no contato e no rodapé).
// Para trocar um link, mude só aqui.
const whatsappNumero = '5516994142162';

/** Link do WhatsApp com uma mensagem pronta. */
export const whatsappCom = (mensagem) =>
  `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`;

export const links = {
  whatsapp: whatsappCom('Olá, João! Vi seu portfólio e quero conversar sobre um projeto.'),
};
