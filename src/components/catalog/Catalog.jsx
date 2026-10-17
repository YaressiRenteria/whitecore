import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "../common/ProductCard";
import products from "../../data/products";
import categories from "../../data/categories";
import { WARRANTY_TEXT } from "../../data/site";

export default function Catalog() {
  const [cat, setCat] = useState("Todo");
  const list = cat === "Todo" ? products : products.filter((p) => p.category === cat);

  return (
    <section id="productos" className="scroll-mt-16 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-4xl font-extrabold tracking-[-0.035em] md:text-6xl">
          Todos los productos.
        </h2>
        <p className="mt-4 text-center text-graphite">
          Precios en pesos mexicanos. {WARRANTY_TEXT}.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-porcelain p-1" role="group" aria-label="Filtrar por categoría">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition ${
                  cat === c ? "text-white" : "text-graphite hover:text-ink"
                }`}
              >
                {cat === c && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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