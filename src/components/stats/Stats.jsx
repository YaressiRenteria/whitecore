import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import Reveal from "../common/Reveal";
import { EASE } from "../common/motion";
import products from "../../data/products";
import deliveryPoints from "../../data/delivery";

const from = Math.min(...products.map((p) => p.price));

const stats = [
  { to: products.length, label: "productos en la tienda" },
  { to: 3, suffix: " días", label: "de garantía por fallas de fábrica" },
  { to: deliveryPoints.length, label: "puntos de entrega en Monterrey" },
  { to: from, prefix: "$", label: "precio desde, en pesos" },
];

// Cuenta desde 0 hasta el valor cuando entra en pantalla
function Counter({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.8, ease: EASE });
    return () => controls.stop();
  }, [inView, value, to]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

export default function Stats() {
  return (
    <section className="bg-white px-6 pb-28">
      <div className="mx-auto max-w-6xl border-t border-black/10 pt-20">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <li key={s.label}>
              <Reveal delay={i * 0.1} y={24}>
                <p className="text-gradient text-[clamp(3rem,7vw,5rem)] font-semibold leading-none tracking-[-0.04em]">
                  <Counter {...s} />
                </p>
                <p className="mt-3 max-w-[14rem] text-[15px] text-graphite">{s.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
