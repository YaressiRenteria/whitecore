import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { EASE } from "../common/motion";
import { wa } from "../../data/site";

// Aparece después de pasar el inicio
export default function WhatsAppFloat() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setShow(y > window.innerHeight * 0.8));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={wa("Hola White Core, quiero información.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1da851] px-4 py-3.5 font-medium text-white shadow-[0_20px_40px_-12px_rgba(29,168,81,0.6)]"
        >
          <FaWhatsapp size={26} />
          <span className="hidden md:inline">WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
