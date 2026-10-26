import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ShieldCheck, Tag } from "lucide-react";
import SmartImg from "../common/SmartImg";
import Reveal from "../common/Reveal";
import { EASE } from "../common/motion";
import products from "../../data/products";
import { formatPrice, wa } from "../../data/site";

const from = Math.min(...products.map((p) => p.price));

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const line = { hidden: { y: "110%" }, show: { y: 0, transition: { duration: 1.1, ease: EASE } } };
const fade = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: EASE } },
};

const chips = [
  { icon: Tag, title: `Desde ${formatPrice(from)}`, text: "Precios justos en pesos mexicanos." },
  { icon: ShieldCheck, title: "3 días de garantía", text: "Cubrimos fallas de fábrica." },
  { icon: MessageCircle, title: "Pide por WhatsApp", text: "Sin registros ni complicaciones." },
];

export default function Hero({ ready = true }) {
  const textRef = useRef(null);
  const frameRef = useRef(null);

  // El texto sube y se desvanece al hacer scroll
  const { scrollYProgress: leave } = useScroll({ target: textRef, offset: ["start start", "end start"] });
  const textY = useTransform(leave, [0, 1], [0, -120]);
  const textOpacity = useTransform(leave, [0, 0.7], [1, 0]);

  // La foto crece mientras entra en pantalla
  const { scrollYProgress: enter } = useScroll({ target: frameRef, offset: ["start end", "end end"] });
  const scale = useTransform(enter, [0, 1], [0.8, 1]);
  const radius = useTransform(enter, [0, 1], [64, 28]);
  const imgY = useTransform(enter, [0, 1], ["-8%", "0%"]);

  return (
    <section id="inicio" data-nav-dark className="relative overflow-hidden bg-black pb-28 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="aurora absolute left-1/2 top-[-12%] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,109,246,0.42),transparent_62%)] blur-3xl" />
        <div className="aurora-slow absolute right-[-12%] top-[35%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(245,162,51,0.2),transparent_65%)] blur-3xl" />
      </div>

      <motion.div
        ref={textRef}
        style={{ y: textY, opacity: textOpacity }}
        className="relative px-6 pt-32 text-center md:pt-44"
      >
        <motion.div variants={stagger} initial="hidden" animate={ready ? "show" : "hidden"} className="mx-auto max-w-5xl">
          <motion.p variants={fade} className="text-lg font-semibold md:text-xl">
            <span className="text-gradient">White Core</span>
          </motion.p>

          <h1 className="mt-3 text-[clamp(3rem,10vw,7.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            {["Sonido nítido.", "Carga constante."].map((t, i) => (
              <span key={t} className="block overflow-hidden pb-[0.1em]">
                <motion.span variants={line} className={`block ${i ? "text-silver" : ""}`}>
                  {t}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={fade} className="mx-auto mt-6 max-w-2xl text-xl leading-snug text-mist md:text-2xl">
            AirPods, EarPods, cables y cargadores OEM de excelente calidad. Desde {formatPrice(from)}.
          </motion.p>

          <motion.div variants={fade} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#productos" className="btn-primary px-6 py-3 text-[17px]">
              Ver la tienda
            </a>
            <a
              href={wa("Hola White Core, quiero hacer un pedido.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-6 py-3 text-[17px] text-sky hover:bg-sky hover:text-white"
            >
              Pedir por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div ref={frameRef} className="relative mx-auto mt-16 max-w-6xl px-3 md:mt-24 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
        >
          <motion.div
            style={{ scale, borderRadius: radius }}
            className="relative overflow-hidden bg-neutral-900 shadow-[0_80px_160px_-60px_rgba(47,109,246,0.6)] ring-1 ring-white/10"
          >
            <motion.div style={{ y: imgY }} className="scale-[1.12]">
              <SmartImg
                src="/products/hero-productos.jpeg"
                alt="Línea de productos White Core: AirPods, EarPods, cables y cargadores"
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        <ul className="mx-auto mt-16 grid max-w-4xl gap-10 text-center sm:grid-cols-3">
          {chips.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.12} y={24}>
                <Icon size={28} strokeWidth={1.5} className="mx-auto text-sky" />
                <p className="mt-4 text-lg font-semibold">{title}</p>
                <p className="mt-1 text-sm text-mist">{text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
