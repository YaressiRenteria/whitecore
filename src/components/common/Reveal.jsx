import { motion } from "framer-motion";
import { EASE } from "./motion";

// Aparece suavemente al entrar en pantalla
export default function Reveal({ delay = 0, y = 40, className = "", children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
