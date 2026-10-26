import { FaWhatsapp } from "react-icons/fa6";
import Reveal from "../common/Reveal";
import { wa } from "../../data/site";

export default function FinalCta() {
  return (
    <section data-nav-dark className="relative overflow-hidden bg-black px-6 py-32 text-center text-white md:py-44">
      <div
        aria-hidden="true"
        className="aurora-slow pointer-events-none absolute bottom-[-40%] left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,162,51,0.25),rgba(47,109,246,0.2)_40%,transparent_68%)] blur-3xl"
      />

      <Reveal className="relative mx-auto max-w-4xl">
        <h2 className="text-[clamp(2.6rem,7.5vw,6rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
          Tu próximo favorito <span className="text-gradient">está a un mensaje.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-mist">
          Escríbenos y te confirmamos disponibilidad, precio y punto de entrega.
        </p>
        <a
          href={wa("Hola White Core, quiero hacer un pedido.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-10 px-7 py-3.5 text-[17px]"
        >
          <FaWhatsapp size={20} />
          Escribir por WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
