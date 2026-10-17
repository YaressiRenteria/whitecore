import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SmartImg from "./SmartImg";
import { trackClick } from "../../data/popularity";
import { formatPrice, wa } from "../../data/site";

export default function ProductCard({ p }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col rounded-[1.75rem] bg-porcelain p-3"
    >
      <div className="overflow-hidden rounded-[1.25rem] bg-white">
        <SmartImg
          src={p.image}
          alt={p.name}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <p className="text-sm text-graphite">{p.category}</p>
        <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">{p.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-graphite">{p.description}</p>

        <p className="mt-5 font-display text-3xl font-extrabold tracking-tight">
          {formatPrice(p.price)}
          <span className="ml-1 text-sm font-medium text-graphite">MXN</span>
        </p>

        <p className="mt-2 flex items-center gap-1.5 text-xs text-graphite">
          <ShieldCheck size={14} className="shrink-0 text-cobalt" />
          {p.warranty} de garantía por falla de fábrica
        </p>

        <div className="mt-auto pt-5">
          <a
            href={wa(`Hola White Core, me interesa: ${p.name} (${formatPrice(p.price)})`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick(p.id)}
            className="block rounded-full bg-cobalt py-3 text-center text-sm font-medium text-white transition hover:bg-ink"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </motion.li>
  );
}