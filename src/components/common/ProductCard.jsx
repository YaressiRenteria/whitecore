import { motion } from "framer-motion";
import SmartImg from "./SmartImg";
import AddToCartButton from "../cart/AddToCartButton";
import { EASE } from "./motion";
import { trackClick } from "../../data/popularity";
import { formatPrice, wa } from "../../data/site";
import { useQuickView } from "../../context/quickView";

export default function ProductCard({ p }) {
  const open = useQuickView();

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-[translate,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.22)]"
    >
      <button type="button" onClick={() => open(p)} className="block cursor-pointer text-left">
        <div className="overflow-hidden bg-porcelain">
          <SmartImg
            src={p.image}
            alt={p.name}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
          />
        </div>

        <div className="px-6 pt-6">
          <p className={`text-xs font-semibold ${p.featured ? "text-flame" : "text-graphite"}`}>
            {p.featured ? "Popular" : p.category}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">{p.name}</h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-graphite">{p.description}</p>
        </div>
      </button>

      <div className="mt-auto flex items-center justify-between gap-3 px-6 pb-6 pt-5">
        <p className="text-lg font-semibold tracking-tight">
          {formatPrice(p.price)} <span className="text-xs font-normal text-graphite">MXN</span>
        </p>
        <div className="flex items-center gap-2">
          <AddToCartButton
            p={p}
            label="Agregar"
            className="px-3.5 py-2 text-sm text-cobalt hover:bg-cobalt hover:text-white"
          />
          <a
            href={wa(`Hola White Core, me interesa: ${p.name} (${formatPrice(p.price)})`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick(p.id)}
            className="btn-primary px-4 py-2 text-sm"
          >
            Pedir
          </a>
        </div>
      </div>
    </motion.li>
  );
}
