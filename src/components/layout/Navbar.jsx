import LogoMark from "../common/LogoMark";
import { wa } from "../../data/site";

const links = [
  { href: "#destacados", label: "Destacados" },
  { href: "#productos", label: "Productos" },
  { href: "#garantia", label: "Garantía" },
  { href: "#entregas", label: "Entregas" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-porcelain/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
          <LogoMark className="h-8 w-8" />
          White Core
        </a>

        <nav className="hidden items-center gap-8 text-[13px] text-graphite md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={wa("Hola White Core, quiero información.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-cobalt px-4 py-1.5 text-sm font-medium text-white transition hover:bg-ink"
        >
          Comprar
        </a>
      </div>
    </header>
  );
}