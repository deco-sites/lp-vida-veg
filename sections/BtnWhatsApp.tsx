import { h } from 'preact';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  buttonText?: string;
  /** @hide	 */
  className?: string;  // Classe CSS personalizada (opcional)
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Olá! Gostaria de mais informações sobre seus produtos. Poderia me ajudar?",
  buttonText = "Fale Conosco",
  className = "flex items-center bg-green-500 text-white px-4 py-2 rounded shadow-lg"
}: WhatsAppButtonProps) => {
  const formattedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} fixed bottom-4 right-4 z-[100]`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10 mr-2"
      />
      {buttonText}
    </a>
  );
};

export default WhatsAppButton;
