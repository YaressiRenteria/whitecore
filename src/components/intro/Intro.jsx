import { useEffect } from "react";
import { motion } from "framer-motion";
import LogoMark from "../common/LogoMark";
import { EASE } from "../common/motion";

export default function Intro({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="fixed inset-0 z-[100] grid place-items-center bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, filter: "blur(14px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
        transition={{ duration: 1.1, ease: EASE }}
        className="flex flex-col items-center gap-5"
      >
        <LogoMark className="h-20 w-20" />
        <span className="text-2xl font-semibold tracking-tight text-white">White Core</span>
      </motion.div>
    </motion.div>
  );
}
