import { MapPin, PackageCheck, ShieldCheck } from "lucide-react";
import Reveal from "../common/Reveal";

const items = [
  {
    icon: ShieldCheck,
    title: "Garantía de 3 días",
    text: "Cubrimos fallas de fábrica durante los primeros 3 días.",
  },
  {
    icon: PackageCheck,
    title: "Pedido sin vueltas",
    text: "Eliges el producto, nos escribes por WhatsApp y te lo preparamos.",
  },
  {
    icon: MapPin,
    title: "Entrega en puntos acordados",
    text: "Confirmamos contigo el punto y la hora de entrega.",
  },
];

// Mueve el brillo de la tarjeta hacia donde está el cursor
const follow = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

export default function Benefits() {
  return (
    <section
      id="garantia"
      data-nav-dark
      className="relative scroll-mt-12 overflow-hidden bg-black px-6 py-28 text-white md:py-40"
    >
      <div
        aria-hidden="true"
        className="aurora pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(47,109,246,0.28),transparent_65%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="text-lg font-semibold text-amber">Garantía</p>
          <h2 className="mx-auto mt-2 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            Compra con <span className="text-silver">total tranquilidad.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-mist">
            Si tu producto presenta una falla de fábrica, escríbenos dentro de los primeros 3 días.
          </p>
        </Reveal>

        <ul className="mt-20 grid gap-4 text-left md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.1} className="h-full">
                <div
                  onMouseMove={follow}
                  className="spotlight h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-colors duration-500 hover:border-white/20"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-[#4fb4f5] to-[#2f6df6] text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-mist">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
