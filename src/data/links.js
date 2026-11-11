// Contatos do site: WhatsApp (hero, vitrine, contato e rodapé) e Instagram (contato e rodapé).
// Para trocar um link, mude só aqui.
const whatsappNumero = '5516993005199';

/** Link do WhatsApp com uma mensagem pronta. */
export const whatsappCom = (mensagem) =>
  `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`;

export const links = {
  whatsapp: whatsappCom('Olá, João! Vi seu portfólio e quero conversar sobre um projeto.'),
  instagram: 'https://www.instagram.com/odevjp/',
  instagramArroba: '@odevjp',
};
