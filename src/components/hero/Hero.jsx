import { motion } from "framer-motion";
import SmartImg from "../common/SmartImg";
import products from "../../data/products";
import { WARRANTY_TEXT, formatPrice, wa } from "../../data/site";

const from = Math.min(...products.map((p) => p.price));
const ease = [0.16, 1, 0.3, 1];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } };
const line = { hidden: { y: "105%" }, show: { y: 0, transition: { duration: 0.9, ease } } };
const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };

export default function Hero() {
  return (
    <section id="inicio" className="px-6 pb-24 pt-14 text-center md:pt-20">
      <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-4xl">
        <h1 className="font-display text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          {["Sonido nítido.", "Carga constante."].map((t) => (
            <span key={t} className="block overflow-hidden pb-2">
              <motion.span variants={line} className="block">{t}</motion.span>
            </span>
          ))}
        </h1>

        <motion.p variants={fade} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite md:text-xl">
          AirPods, EarPods, cables y cargadores OEM de excelente calidad. Desde {formatPrice(from)} y con {WARRANTY_TEXT}.
        </motion.p>

        <motion.div variants={fade} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a href="#productos" className="rounded-full bg-cobalt px-7 py-3 font-medium text-white transition hover:bg-ink">
            Ver productos
          </a>
          <a
            href={wa("Hola White Core, quiero hacer un pedido.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cobalt hover:underline"
          >
            Pedir por WhatsApp ›
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.45, ease }}
        className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-30px_rgba(20,21,26,0.35)]"
      >
        <SmartImg
          src="/hero-productos.jpeg"
          alt="Línea de productos White Core: AirPods, EarPods, cables y cargadores"
          fetchPriority="high"
          className="aspect-[4/3] w-full object-cover"
        />
      </motion.div>
    </section>
  );
}