import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import LogoMark from "../common/LogoMark";
import { SOCIALS, WARRANTY_TEXT, WHATSAPP_DISPLAY, wa } from "../../data/site";

const icons = { instagram: FaInstagram, facebook: FaFacebookF, tiktok: FaTiktok };

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 font-display text-2xl font-extrabold tracking-tight">
              <LogoMark className="h-10 w-10" />
              White Core
            </div>
            <p className="mt-4 text-graphite">
              AirPods, EarPods, cables y cargadores OEM de excelente calidad.
            </p>
            <p className="mt-2 text-sm text-graphite">{WARRANTY_TEXT}.</p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Contáctanos</h3>
            <a
              href={wa("Hola White Core, quiero información.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1da851] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink"
            >
              <FaWhatsapp size={18} />
              {WHATSAPP_DISPLAY}
            </a>

            <h3 className="mt-8 font-display text-lg font-bold">Síguenos</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {SOCIALS.map((s) => {
                const Icon = icons[s.id];
                return (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`White Core en ${s.label}`}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition hover:border-ink hover:bg-ink hover:text-white"
                    >
                      <Icon size={16} />
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-ink/10 pt-6 text-xs leading-relaxed text-graphite">
          © 2026 White Core. Apple, AirPods, EarPods, iPhone y Lightning son marcas de Apple Inc. White Core no está afiliado a Apple.
        </p>
      </div>
    </footer>
  );
}