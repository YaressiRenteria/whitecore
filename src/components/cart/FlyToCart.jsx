import { motion } from "framer-motion";
import { useCart } from "../../context/cart";

// La foto del producto viaja en arco desde el botón hasta el carrito
function Flight({ f, onLand }) {
  const peak = Math.min(f.from.y, f.to.y) - 140;
  const midX = (f.from.x + f.to.x) / 2;

  return (
    <motion.img
      src={f.image}
      alt=""
      initial={{ x: f.from.x, y: f.from.y, scale: 1, opacity: 1 }}
      animate={{
        x: [f.from.x, midX, f.to.x],
        y: [f.from.y, peak, f.to.y],
        scale: [1, 0.85, 0.3],
        opacity: [1, 1, 0.5],
      }}
      transition={{ duration: 0.85, times: [0, 0.45, 1], ease: [0.45, 0, 0.2, 1] }}
      onAnimationComplete={() => onLand(f.key)}
      className="pointer-events-none fixed left-0 top-0 z-[90] h-14 w-14 rounded-full object-cover shadow-xl ring-2 ring-white"
    />
  );
}

export default function FlyToCart() {
  const { flights, land } = useCart();
  return flights.map((f) => <Flight key={f.key} f={f} onLand={land} />);
}
