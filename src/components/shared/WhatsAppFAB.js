import { CONTACT } from "@/data/site";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFAB() {
  const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
