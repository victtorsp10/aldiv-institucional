import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Vim através do site e gostaria de mais informações sobre os serviços da ALDIV.");
    window.open(`https://wa.me/5522992528361?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
      <span className="absolute right-16 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Fale Conosco
      </span>
    </button>
  );
};

export default WhatsAppButton;
