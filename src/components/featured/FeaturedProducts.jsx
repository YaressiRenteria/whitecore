import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmartImg from "../common/SmartImg";
import Reveal from "../common/Reveal";
import AddToCartButton from "../cart/AddToCartButton";
import { EASE } from "../common/motion";
import products from "../../data/products";
import { pickFeatured, trackClick } from "../../data/popularity";
import { formatPrice, wa } from "../../data/site";
import { useQuickView } from "../../context/quickView";

// Se calcula una vez al cargar la página, así no cambian mientras navegas
const featured = pickFeatured(products, 3);

function Tile({ p, big }) {
  const ref = useRef(null);
  const open = useQuickView();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, ease: EASE }}
      {...(big && { "data-nav-dark": true })}
      className={`flex flex-col items-center overflow-hidden rounded-[2rem] px-6 pt-14 text-center ${
        big ? "bg-black text-white md:col-span-2" : "bg-porcelain"
      }`}
    >
      <p className={`text-sm font-semibold ${big ? "text-amber" : "text-flame"}`}>{p.category}</p>
      <h3 className="mt-1 text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
        {p.name}
      </h3>
      <p className={`mx-auto mt-2 max-w-lg text-lg md:text-xl ${big ? "text-mist" : "text-graphite"}`}>
        {p.description}
      </p>
      <p className="mt-3 text-[17px]">
        {formatPrice(p.price)} <span className="text-sm opacity-60">MXN</span>
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href={wa(`Hola White Core, me interesa: ${p.name} (${formatPrice(p.price)})`)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick(p.id)}
          className="btn-primary px-5 py-2.5 text-[15px]"
        >
          Pedir
        </a>
        <AddToCartButton
          p={p}
          className={`px-5 py-2.5 text-[15px] ${
            big ? "text-sky hover:bg-sky hover:text-white" : "text-cobalt hover:bg-cobalt hover:text-white"
          }`}
        />
      </div>
      <button
        type="button"
        onClick={() => open(p)}
        className={`mt-4 text-[15px] hover:underline ${big ? "text-sky" : "text-cobalt"}`}
      >
        Ver detalles ›
      </button>

      <div className={`mt-12 w-full overflow-hidden rounded-t-[1.75rem] ${big ? "max-w-3xl" : "max-w-sm"}`}>
        <motion.div style={{ y }} className="scale-[1.16]">
          <SmartImg
            src={p.image}
            alt={p.name}
            loading="lazy"
            decoding="async"
            className={`w-full object-cover ${big ? "aspect-[16/10] object-[50%_60%]" : "aspect-[4/5]"}`}
          />
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="destacados" className="scroll-mt-12 bg-white px-3 pb-24 pt-28 md:px-6">
      <Reveal className="mx-auto mb-14 max-w-6xl px-3">
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          Destacados. <span className="text-graphite">Los favoritos del momento.</span>
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-2">
        {featured.map((p, i) => (
          <Tile key={p.id} p={p} big={i === 0} />
        ))}
      </div>
    </section>
  );
}
