import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import LogoMark from "../common/LogoMark";
import { SOCIALS, WARRANTY_TEXT, WHATSAPP_DISPLAY, wa } from "../../data/site";

const icons = { instagram: FaInstagram, facebook: FaFacebookF, tiktok: FaTiktok };

const columns = [
  {
    title: "Tienda",
    links: [
      { href: "#destacados", label: "Destacados" },
      { href: "#productos", label: "Todos los productos" },
      { href: "#como-comprar", label: "Cómo comprar" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { href: "#garantia", label: "Garantía" },
      { href: "#entregas", label: "Puntos de entrega" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-porcelain text-xs text-graphite">
      <div className="mx-auto max-w-[1024px] px-5 py-12">
        <div className="flex flex-col gap-10 border-b border-black/10 pb-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-ink">
              <LogoMark className="h-8 w-8" />
              White Core
            </div>
            <p className="mt-4 leading-relaxed">
              AirPods, EarPods, cables y cargadores OEM de excelente calidad. {WARRANTY_TEXT}.
            </p>
            <a
              href={wa("Hola White Core, quiero información.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1da851] px-4 py-2 text-[13px] font-medium text-white transition hover:bg-ink"
            >
              <FaWhatsapp size={16} />
              {WHATSAPP_DISPLAY}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className="font-semibold text-ink">{c.title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="transition hover:text-ink hover:underline">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-semibold text-ink">Síguenos</h3>
              <ul className="mt-3 space-y-2.5">
                {SOCIALS.map((s) => {
                  const Icon = icons[s.id];
                  return (
                    <li key={s.id}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`White Core en ${s.label}`}
                        className="inline-flex items-center gap-2 transition hover:text-ink hover:underline"
                      >
                        <Icon size={13} />
                        {s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 leading-relaxed">
          © 2026 White Core. Apple, AirPods, EarPods, iPhone y Lightning son marcas de Apple Inc. White Core no está
          afiliado a Apple.
        </p>
      </div>
    </footer>
  );
}
