import { MapPin, PackageCheck, ShieldCheck } from "lucide-react";

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

export default function Benefits() {
  return (
    <section id="garantia" className="mx-4 scroll-mt-16 rounded-[2.5rem] bg-ink text-porcelain md:mx-6">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1] tracking-[-0.035em] md:text-6xl">
          3 días de garantía en fallas de fábrica.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-porcelain/65">
          Compras con confianza: si tu producto presenta una falla de fábrica, escríbenos dentro de los primeros 3 días.
        </p>

        <ul className="mt-16 grid gap-12 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-amber text-ink">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">{title}</h3>
              <p className="mt-2 max-w-xs text-porcelain/65">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}