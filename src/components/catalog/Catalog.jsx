import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "../common/ProductCard";
import Reveal from "../common/Reveal";
import products from "../../data/products";
import categories from "../../data/categories";
import { WARRANTY_TEXT } from "../../data/site";

export default function Catalog() {
  const [cat, setCat] = useState("Todo");
  const list = cat === "Todo" ? products : products.filter((p) => p.category === cat);

  return (
    <section id="productos" className="scroll-mt-12 bg-porcelain py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            La tienda. <span className="text-graphite">Lo que buscas, a un mensaje de distancia.</span>
          </h2>
          <p className="mt-5 text-graphite">
            Precios en pesos mexicanos. {WARRANTY_TEXT}.
          </p>
        </Reveal>

        <Reveal delay={0.1} y={20} className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div
            className="inline-flex flex-wrap gap-1 rounded-full bg-black/[0.05] p-1"
            role="group"
            aria-label="Filtrar por categoría"
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  cat === c ? "text-ink" : "text-graphite hover:text-ink"
                }`}
              >
                {cat === c && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
          <p className="text-sm text-graphite" aria-live="polite">
            {list.length} {list.length === 1 ? "producto" : "productos"}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
