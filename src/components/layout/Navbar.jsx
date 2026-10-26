import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import LogoMark from "../common/LogoMark";
import CartButton from "../cart/CartButton";
import { EASE } from "../common/motion";
import { wa } from "../../data/site";

const links = [
  { href: "#destacados", label: "Destacados" },
  { href: "#productos", label: "Tienda" },
  { href: "#como-comprar", label: "Cómo comprar" },
  { href: "#garantia", label: "Garantía" },
  { href: "#entregas", label: "Entregas" },
];

// ¿La barra está encima de una sección oscura?
const overDark = () =>
  [...document.querySelectorAll("[data-nav-dark]")].some((el) => {
    const r = el.getBoundingClientRect();
    return r.top <= 24 && r.bottom > 24;
  });

export default function Navbar() {
  const { scrollY } = useScroll();
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", () => setDark(overDark()));

  const tone =
    dark || open
      ? "bg-black/70 text-white/85 border-white/10"
      : "bg-white/75 text-ink/80 border-black/10";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-[1.8] transition-colors duration-500 ${tone}`}
    >
      <div className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-5">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight"
        >
          <LogoMark className="h-7 w-7" />
          White Core
        </a>

        <nav className="hidden items-center gap-8 text-xs md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 transition-opacity hover:opacity-100">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={wa("Hola White Core, quiero información.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mr-1.5 px-3.5 py-1 text-xs"
          >
            Pedir
          </a>

          <CartButton />

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="relative grid h-9 w-9 place-items-center md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="absolute h-px w-4 bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="absolute h-px w-4 bg-current"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "100dvh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="overflow-hidden md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
              className="px-10 pt-6"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, y: -8 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-[28px] font-semibold tracking-tight text-white"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
