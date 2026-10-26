import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/cart";

export default function AddToCartButton({ p, qty = 1, label = "Agregar al carrito", className = "" }) {
  const { add } = useCart();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setDone(false), 1500);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <button
      type="button"
      onClick={(e) => {
        add(p, qty, e.currentTarget.getBoundingClientRect());
        setDone(true);
      }}
      aria-label={`Agregar ${p.name} al carrito`}
      className={`btn-ghost overflow-hidden ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={done ? "ok" : "add"}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-1.5"
        >
          {done ? <Check size={16} /> : <ShoppingBag size={16} />}
          {done ? "Agregado" : label}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
