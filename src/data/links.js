// Contatos usados no menu, no hero, na seção de contato e no rodapé.
// Para trocar um link, mude só aqui.
const whatsappNumero = '5516994142162';

/** Link do WhatsApp com uma mensagem pronta. */
export const whatsappCom = (mensagem) =>
  `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`;

export const links = {
  whatsapp: whatsappCom('Olá, João! Vi seu portfólio e quero conversar sobre um projeto.'),
  email: 'mailto:joaopdromorais@gmail.com',
  emailTexto: 'joaopdromorais@gmail.com',
};
