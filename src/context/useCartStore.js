import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import products from "../data/products";

const KEY = "wc-cart";
const MAX = 20;
const PHOTO = 56;

// Lee el carrito guardado; si algo está mal, empieza vacío
const load = () => {
  try {
    const data = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(data)
      ? data.filter((l) => products.some((p) => p.id === l.id) && Number.isInteger(l.qty) && l.qty > 0)
      : [];
  } catch {
    return [];
  }
};

// Esquina superior izquierda para que la foto quede centrada en el rectángulo
const center = (r) => ({ x: r.left + r.width / 2 - PHOTO / 2, y: r.top + r.height / 2 - PHOTO / 2 });

export default function useCartStore() {
  const [lines, setLines] = useState(load);
  const [open, setOpen] = useState(false);
  const [flights, setFlights] = useState([]);
  const [bump, setBump] = useState(0);
  const flightId = useRef(0);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {
      // sin almacenamiento disponible: el carrito vive solo en esta visita
    }
  }, [lines]);

  // `from` es el rectángulo del botón que se tocó; de ahí sale volando la foto
  const add = useCallback((p, qty = 1, from) => {
    setLines((ls) =>
      ls.some((l) => l.id === p.id)
        ? ls.map((l) => (l.id === p.id ? { ...l, qty: Math.min(MAX, l.qty + qty) } : l))
        : [...ls, { id: p.id, qty: Math.min(MAX, qty) }]
    );

    const target = document.getElementById("cart-button");
    if (from && target) {
      flightId.current += 1;
      const flight = {
        key: flightId.current,
        image: p.image,
        from: center(from),
        to: center(target.getBoundingClientRect()),
      };
      setFlights((f) => [...f, flight]);
    } else {
      setBump((b) => b + 1);
    }
  }, []);

  const land = useCallback((key) => {
    setFlights((f) => f.filter((x) => x.key !== key));
    setBump((b) => b + 1);
  }, []);

  const setQty = useCallback((id, qty) => {
    setLines((ls) =>
      qty < 1 ? ls.filter((l) => l.id !== id) : ls.map((l) => (l.id === id ? { ...l, qty: Math.min(MAX, qty) } : l))
    );
  }, []);

  const remove = useCallback((id) => setLines((ls) => ls.filter((l) => l.id !== id)), []);
  const clear = useCallback(() => setLines([]), []);

  return useMemo(() => {
    const items = lines
      .map((l) => ({ ...products.find((p) => p.id === l.id), qty: l.qty }))
      .filter((i) => i.name);
    const count = items.reduce((n, i) => n + i.qty, 0);
    const total = items.reduce((n, i) => n + i.qty * i.price, 0);

    return { items, count, total, add, setQty, remove, clear, open, setOpen, flights, land, bump, max: MAX };
  }, [lines, add, setQty, remove, clear, open, flights, land, bump]);
}
