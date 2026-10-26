import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShieldCheck, X } from "lucide-react";
import SmartImg from "../common/SmartImg";
import AddToCartButton from "../cart/AddToCartButton";
import { trackClick } from "../../data/popularity";
import { formatPrice, wa } from "../../data/site";

function Sheet({ p, onClose }) {
  const [qty, setQty] = useState(1);
  const total = p.price * qty;
  const message =
    qty > 1
      ? `Hola White Core, quiero ${qty} × ${p.name} (${formatPrice(total)} en total)`
      : `Hola White Core, me interesa: ${p.name} (${formatPrice(p.price)})`;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center md:items-center md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="qv-title"
        initial={{ opacity: 0, y: 80, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="relative grid max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] bg-white md:grid-cols-2 md:rounded-[2rem]"
      >
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/[0.06] text-ink backdrop-blur transition hover:bg-black/10"
        >
          <X size={18} />
        </button>

        <div className="bg-porcelain">
          <SmartImg src={p.image} alt={p.name} className="aspect-[4/5] h-full w-full object-cover" />
        </div>

        <div className="flex flex-col p-8 md:p-12">
          <p className="text-sm font-semibold text-flame">{p.category}</p>
          <h2 id="qv-title" className="mt-1 text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            {p.name}
          </h2>
          <p className="mt-3 text-graphite">{p.description}</p>

          <p className="mt-8 text-3xl font-semibold tracking-tight">
            {formatPrice(p.price)} <span className="text-sm font-normal text-graphite">MXN</span>
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-graphite">
            <ShieldCheck size={16} className="shrink-0 text-cobalt" />
            {p.warranty} de garantía por falla de fábrica
          </p>

          <div className="mt-8 flex items-center justify-between rounded-2xl bg-porcelain p-2">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              disabled={qty === 1}
              aria-label="Quitar uno"
              className="grid h-10 w-10 place-items-center rounded-xl bg-white transition disabled:opacity-40"
            >
              <Minus size={16} />
            </button>
            <span className="text-lg font-semibold tabular-nums" aria-live="polite">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => Math.min(20, q + 1))}
              aria-label="Agregar uno"
              className="grid h-10 w-10 place-items-center rounded-xl bg-white transition"
            >
              <Plus size={16} />
            </button>
          </div>

          {qty > 1 && (
            <p className="mt-3 text-right text-sm text-graphite">
              Total: <span className="font-semibold text-ink">{formatPrice(total)} MXN</span>
            </p>
          )}

          <div className="mt-auto pt-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <AddToCartButton
                p={p}
                qty={qty}
                className="py-3.5 text-[15px] text-cobalt hover:bg-cobalt hover:text-white"
              />
              <a
                href={wa(message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick(p.id)}
                className="btn-primary py-3.5 text-[15px]"
              >
                Pedir por WhatsApp
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-graphite">
              Te confirmamos disponibilidad y punto de entrega por WhatsApp.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function QuickView({ product, onClose }) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  return <AnimatePresence>{product && <Sheet key={product.id} p={product} onClose={onClose} />}</AnimatePresence>;
}
