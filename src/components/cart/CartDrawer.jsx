import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import LogoMark from "../common/LogoMark";
import SmartImg from "../common/SmartImg";
import { EASE } from "../common/motion";
import { useCart } from "../../context/cart";
import { trackClick } from "../../data/popularity";
import { WARRANTY_TEXT, formatPrice, wa } from "../../data/site";

const dateFmt = new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "short", year: "numeric" });
const timeFmt = new Intl.DateTimeFormat("es-MX", { hour: "2-digit", minute: "2-digit" });

const orderMessage = (items, total) =>
  [
    "Hola White Core, quiero hacer este pedido:",
    "",
    ...items.map((i) => `• ${i.qty} × ${i.name} — ${formatPrice(i.price * i.qty)}`),
    "",
    `Total: ${formatPrice(total)} MXN`,
    "",
    "¿Me confirman disponibilidad y punto de entrega?",
  ].join("\n");

function Stepper({ item }) {
  const { setQty, max } = useCart();
  return (
    <div className="inline-flex items-center rounded-full border border-black/10">
      <button
        type="button"
        onClick={() => setQty(item.id, item.qty - 1)}
        aria-label={`Quitar uno de ${item.name}`}
        className="grid h-7 w-7 place-items-center rounded-full text-graphite transition hover:text-ink"
      >
        <Minus size={13} />
      </button>
      <span className="w-6 text-center text-sm font-semibold tabular-nums" aria-live="polite">
        {item.qty}
      </span>
      <button
        type="button"
        onClick={() => setQty(item.id, item.qty + 1)}
        disabled={item.qty >= max}
        aria-label={`Agregar uno de ${item.name}`}
        className="grid h-7 w-7 place-items-center rounded-full text-graphite transition hover:text-ink disabled:opacity-30"
      >
        <Plus size={13} />
      </button>
    </div>
  );
}

function Line({ item }) {
  const { remove } = useCart();
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 40, transition: { duration: 0.25 } }}
      transition={{ duration: 0.4, ease: EASE }}
      className="flex gap-4"
    >
      <SmartImg src={item.image} alt="" className="h-16 w-16 shrink-0 rounded-xl bg-porcelain object-cover" />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold leading-snug">{item.name}</p>
          <p className="text-sm font-semibold tabular-nums">{formatPrice(item.price * item.qty)}</p>
        </div>
        <p className="mt-0.5 text-xs tabular-nums text-graphite">{formatPrice(item.price)} c/u</p>
        <div className="mt-2.5 flex items-center justify-between">
          <Stepper item={item} />
          <button
            type="button"
            onClick={() => remove(item.id)}
            aria-label={`Quitar ${item.name} del carrito`}
            className="inline-flex items-center gap-1 text-xs text-graphite transition hover:text-[#d70015]"
          >
            <Trash2 size={13} />
            Quitar
          </button>
        </div>
      </div>
    </motion.li>
  );
}

function Ticket() {
  const { items, count, total } = useCart();
  const [now] = useState(() => new Date());

  return (
    <div className="drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
      <div className="ticket-edge rounded-t-3xl bg-white px-6 pb-10 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9" />
            <div>
              <p className="text-sm font-semibold leading-tight">White Core</p>
              <p className="text-[11px] text-graphite">Ticket de pedido</p>
            </div>
          </div>
          <p className="text-right text-[11px] leading-snug tabular-nums text-graphite">
            {dateFmt.format(now)}
            <br />
            {timeFmt.format(now)}
          </p>
        </div>

        <div className="my-5 border-t border-dashed border-black/15" />

        <ul className="space-y-5">
          <AnimatePresence initial={false}>
            {items.map((i) => (
              <Line key={i.id} item={i} />
            ))}
          </AnimatePresence>
        </ul>

        {/* Separador con muescas, como un ticket que se puede cortar */}
        <div className="relative -mx-6 my-6 border-t border-dashed border-black/15">
          <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-porcelain" />
          <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-porcelain" />
        </div>

        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-graphite">Artículos</dt>
            <dd className="tabular-nums">{count}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-graphite">Subtotal</dt>
            <dd className="tabular-nums">{formatPrice(total)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-graphite">Entrega</dt>
            <dd>En punto acordado</dd>
          </div>
          <div className="flex items-baseline justify-between border-t border-black/10 pt-3">
            <dt className="font-semibold">Total</dt>
            <dd className="text-lg font-semibold tabular-nums">
              {formatPrice(total)} <span className="text-xs font-normal text-graphite">MXN</span>
            </dd>
          </div>
        </dl>

        <p className="mt-6 text-center text-[11px] leading-relaxed text-graphite">
          {WARRANTY_TEXT}.
          <br />
          Te confirmamos disponibilidad por WhatsApp.
        </p>
      </div>
    </div>
  );
}

function Empty({ onClose }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 pb-16 text-center">
      <span className="grid h-20 w-20 place-items-center rounded-full bg-white text-graphite">
        <ShoppingBag size={32} strokeWidth={1.5} />
      </span>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight">Tu carrito está vacío.</h3>
      <p className="mt-2 max-w-xs text-graphite">
        Agrega productos desde la tienda y pídelos todos en un solo mensaje.
      </p>
      <a href="#productos" onClick={onClose} className="btn-primary mt-8 px-6 py-3 text-[15px]">
        Ir a la tienda
      </a>
    </div>
  );
}

export default function CartDrawer() {
  const { open, setOpen, items, count, total, clear } = useCart();
  const close = useCallback(() => setOpen(false), [setOpen]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <div key="cart" className="fixed inset-0 z-[80]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-porcelain shadow-[-30px_0_60px_-20px_rgba(0,0,0,0.25)]"
          >
            <header className="flex items-center justify-between px-6 pb-4 pt-5">
              <div>
                <h2 id="cart-title" className="text-2xl font-semibold tracking-tight">
                  Tu carrito
                </h2>
                <p className="text-sm text-graphite">
                  {count} {count === 1 ? "producto" : "productos"}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                autoFocus
                aria-label="Cerrar carrito"
                className="grid h-9 w-9 place-items-center rounded-full bg-black/[0.06] transition hover:bg-black/10"
              >
                <X size={18} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6">
              {items.length ? (
                <>
                  <Ticket />
                  <button
                    type="button"
                    onClick={clear}
                    className="mx-auto mt-5 block text-xs text-graphite underline-offset-4 transition hover:text-ink hover:underline"
                  >
                    Vaciar carrito
                  </button>
                </>
              ) : (
                <Empty onClose={close} />
              )}
            </div>

            {items.length > 0 && (
              <footer className="border-t border-black/10 bg-white/80 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-graphite">Total</p>
                    <motion.p
                      key={total}
                      initial={{ opacity: 0.4, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl font-semibold tracking-tight tabular-nums"
                    >
                      {formatPrice(total)} <span className="text-xs font-normal text-graphite">MXN</span>
                    </motion.p>
                  </div>
                  <a
                    href={wa(orderMessage(items, total))}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => items.forEach((i) => trackClick(i.id))}
                    className="btn-primary px-5 py-3 text-[15px]"
                  >
                    <FaWhatsapp size={18} />
                    Comprar por WhatsApp
                  </a>
                </div>
              </footer>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
