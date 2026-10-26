import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text =
  "Audífonos, cables y cargadores OEM de excelente calidad. Con precios justos, tres días de garantía y entrega en persona. Así de simple.";
const words = text.split(" ");

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}

// Las palabras se iluminan una a una conforme bajas
export default function Statement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });

  return (
    <section data-nav-dark className="bg-black px-6 py-32 text-white md:py-48">
      <p
        ref={ref}
        className="mx-auto max-w-5xl text-[clamp(2rem,5.2vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
      >
        {words.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {w}
          </Word>
        ))}
      </p>
    </section>
  );
}
