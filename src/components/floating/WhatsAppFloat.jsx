import { FaWhatsapp } from "react-icons/fa6";
import { wa } from "../../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={wa("Hola White Core, quiero información.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1da851] px-4 py-3.5 font-medium text-white shadow-xl transition hover:scale-105"
    >
      <FaWhatsapp size={26} />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}