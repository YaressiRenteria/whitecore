import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/cart";

export default function CartButton() {
  const { count, setOpen, bump } = useCart();

  return (
    <button
      id="cart-button"
      type="button"
      onClick={() => setOpen(true)}
      aria-label={count ? `Abrir carrito, ${count} ${count === 1 ? "producto" : "productos"}` : "Abrir carrito"}
      className="relative grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-current/10"
    >
      <motion.span
        key={bump}
        initial={false}
        animate={bump ? { scale: [1, 1.3, 1] } : undefined}
        transition={{ duration: 0.45 }}
      >
        <ShoppingBag size={18} strokeWidth={1.75} />
      </motion.span>

      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key="badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 26 }}
            className="absolute -right-0.5 -top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-cobalt px-1 text-[10px] font-semibold tabular-nums text-white"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
